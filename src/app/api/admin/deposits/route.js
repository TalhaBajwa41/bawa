import { NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';
import { connectDB } from '@/lib/db';
import Deposit from '@/models/Deposit';
import User from '@/models/User';

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key-change-in-production';

// Get All Deposits (Admin Only)
export async function GET(req) {
  try {
    await connectDB();

    // Get token from cookie
    const token = req.cookies.get('token')?.value;

    if (!token) {
      return NextResponse.json(
        { 
          success: false,
          message: 'Not authenticated' 
        },
        { status: 401 }
      );
    }

    // Verify token
    const decoded = jwt.verify(token, JWT_SECRET);

    // Check if user is admin
    const user = await User.findById(decoded.userId);
    if (!user || user.role !== 'admin') {
      return NextResponse.json(
        { 
          success: false,
          message: 'Access denied. Admin only.' 
        },
        { status: 403 }
      );
    }

    // Get query parameters
    const { searchParams } = new URL(req.url);
    const status = searchParams.get('status');

    // Build query
    const query = {};
    if (status && ['pending', 'approved', 'rejected'].includes(status)) {
      query.status = status;
    }

    // Get deposits with user info
    const deposits = await Deposit.find(query)
      .populate('userId', 'name email')
      .populate('approvedBy', 'name')
      .sort({ createdAt: -1 });

    return NextResponse.json(
      {
        success: true,
        deposits
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Get All Deposits Error:', error);
    
    if (error.name === 'JsonWebTokenError') {
      return NextResponse.json(
        { 
          success: false,
          message: 'Invalid token' 
        },
        { status: 401 }
      );
    }

    return NextResponse.json(
      { 
        success: false,
        message: 'Server error'
      },
      { status: 500 }
    );
  }
}

// Update Deposit Status (Admin Only)
export async function PUT(req) {
  try {
    await connectDB();

    // Get token from cookie
    const token = req.cookies.get('token')?.value;

    if (!token) {
      return NextResponse.json(
        { 
          success: false,
          message: 'Not authenticated' 
        },
        { status: 401 }
      );
    }

    // Verify token
    const decoded = jwt.verify(token, JWT_SECRET);

    // Check if user is admin
    const admin = await User.findById(decoded.userId);
    if (!admin || admin.role !== 'admin') {
      return NextResponse.json(
        { 
          success: false,
          message: 'Access denied. Admin only.' 
        },
        { status: 403 }
      );
    }

    // Get request body
    const { depositId, status, adminNote } = await req.json();

    if (!depositId || !status) {
      return NextResponse.json(
        { 
          success: false,
          message: 'Deposit ID and status are required' 
        },
        { status: 400 }
      );
    }

    if (!['approved', 'rejected'].includes(status)) {
      return NextResponse.json(
        { 
          success: false,
          message: 'Invalid status. Must be approved or rejected' 
        },
        { status: 400 }
      );
    }

    // Get deposit
    const deposit = await Deposit.findById(depositId);

    if (!deposit) {
      return NextResponse.json(
        { 
          success: false,
          message: 'Deposit not found' 
        },
        { status: 404 }
      );
    }

    if (deposit.status !== 'pending') {
      return NextResponse.json(
        { 
          success: false,
          message: 'Deposit has already been processed' 
        },
        { status: 400 }
      );
    }

    // Update deposit
    deposit.status = status;
    deposit.adminNote = adminNote || null;
    deposit.approvedBy = decoded.userId;

    if (status === 'approved') {
      deposit.approvedAt = new Date();
      
      // Update user's portfolio balance
      const user = await User.findById(deposit.userId);
      if (user) {
        user.portfolio.totalValue += deposit.amount;
        await user.save();
      }
    } else if (status === 'rejected') {
      deposit.rejectedAt = new Date();
    }

    await deposit.save();

    return NextResponse.json(
      {
        success: true,
        message: `Deposit ${status} successfully`,
        deposit
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Update Deposit Error:', error);
    
    if (error.name === 'JsonWebTokenError') {
      return NextResponse.json(
        { 
          success: false,
          message: 'Invalid token' 
        },
        { status: 401 }
      );
    }

    return NextResponse.json(
      { 
        success: false,
        message: 'Server error'
      },
      { status: 500 }
    );
  }
}