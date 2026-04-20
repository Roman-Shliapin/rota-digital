import mongoose, { type Connection } from "mongoose";

const globalWithMongoose = globalThis as typeof globalThis & {
  mongoose?: { conn: Connection | null; promise: Promise<Connection> | null };
};

const cached = globalWithMongoose.mongoose ?? { conn: null, promise: null };

const uri = process.env.MONGODB_URI!;
if (!uri) throw new Error("MONGODB_URI is not defined");

export async function connectDB(): Promise<Connection> {
  if (cached.conn) return cached.conn;

  if (!cached.promise) {
    cached.promise = mongoose.connect(uri).then((m) => m.connection);
  }

  cached.conn = await cached.promise;
  globalWithMongoose.mongoose = cached;

  return cached.conn;
}
