import { NextResponse } from 'next/server';
import { connectDB } from '@/lib/db'; 
import Employee from 'src/app/models/Employee';

export async function GET() {
  await connectDB();
  const employees = await Employee.find();
  return NextResponse.json(employees);
}

export async function POST(req) {
  await connectDB();
  const data = await req.json();
  const employee = await Employee.create(data);
  return NextResponse.json(employee, { status: 201 });
}
