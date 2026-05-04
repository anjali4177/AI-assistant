import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI as string;

// 👇 use globalThis instead of global (better in Next.js)
const globalForMongoose = globalThis as unknown as {
  mongoose: {
    conn: typeof mongoose | null;
    promise: Promise<typeof mongoose> | null;
  };
};

export async function connectDB() {
  if (globalForMongoose.mongoose?.conn) {
    return globalForMongoose.mongoose.conn;
  }

  if (!globalForMongoose.mongoose) {
    globalForMongoose.mongoose = {
      conn: null,
      promise: null,
    };
  }

  try {
    if (!globalForMongoose.mongoose.promise) {
      globalForMongoose.mongoose.promise = mongoose.connect(MONGODB_URI, {
        dbName: "ai-assistant",
      });
    }

    globalForMongoose.mongoose.conn =
      await globalForMongoose.mongoose.promise;

    console.log("✅ MongoDB Connected");

    return globalForMongoose.mongoose.conn;
  } catch (error) {
    console.error("❌ MongoDB Error:", error);
    throw error;
  }
}