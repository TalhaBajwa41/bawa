import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Please provide a name'],
      trim: true,
      minlength: [2, 'Name must be at least 2 characters'],
      maxlength: [50, 'Name cannot exceed 50 characters']
    },
    email: {
      type: String,
      required: [true, 'Please provide an email'],
      unique: true,
      lowercase: true,
      trim: true,
      match: [
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        'Please provide a valid email address'
      ]
    },
    password: {
      type: String,
      required: [true, 'Please provide a password'],
      minlength: [6, 'Password must be at least 6 characters'],
      select: false // Don't include password in queries by default
    },
    role: {
      type: String,
      enum: ['user', 'admin'],
      default: 'user'
    },
    isVerified: {
      type: Boolean,
      default: false
    },
    profileImage: {
      type: String,
      default: null
    },
    portfolio: {
      totalValue: {
        type: Number,
        default: 0
      },
      holdings: [{
        symbol: String,
        shares: Number,
        averagePrice: Number,
        currentPrice: Number
      }]
    },
    lastLogin: {
      type: Date,
      default: null
    }
  },
  { 
    timestamps: true // Adds createdAt and updatedAt fields
  }
);

// Index for faster email lookups
UserSchema.index({ email: 1 });

// Export model (check if already exists to prevent recompilation errors)
export default mongoose.models.User || mongoose.model('User', UserSchema);