import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error("❌ Please define MONGODB_URI in your .env.local file");
}

// Global cache (important for Next.js hot reloads)
let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

// Connect to MongoDB
async function connectDB() {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
      maxPoolSize: 10,
      serverSelectionTimeoutMS: 5000,
      socketTimeoutMS: 45000,
    };

    cached.promise = mongoose
      .connect(MONGODB_URI, opts)
      .then((mongooseInstance) => {
        console.log("✅ MongoDB Connected");
        return mongooseInstance;
      })
      .catch((err) => {
        console.error("❌ MongoDB Connection Error:", err);
        cached.promise = null;
        throw err;
      });
  }

  cached.conn = await cached.promise;
  return cached.conn;
}

// Unified DB helper (replaces mock db.query)
const db = {
  async connect() {
    return connectDB();
  },

  /**
   * Generic query helper
   * @param {mongoose.Model} model - Mongoose model
   * @param {string} action - find | findOne | create | update | delete
   * @param {object} query - filter
   * @param {object} data - payload/update
   */
  async query(model, action, query = {}, data = {}) {
    await connectDB();

    switch (action) {
      case "find":
        return model.find(query);

      case "findOne":
        return model.findOne(query);

      case "create":
        return model.create(data);

      case "update":
        return model.updateOne(query, data);

      case "delete":
        return model.deleteOne(query);

      default:
        throw new Error(`❌ Unsupported DB action: ${action}`);
    }
  },
};

export default db;
