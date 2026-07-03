import mongoose from "mongoose";


const connectDB = async () => {
  try {
    console.log("MONGO_URI exists:", !!process.env.MONGO_URI);
    await mongoose.connect(process.env.MONGO_URI);
    console.log("✓ MongoDB connected successfully");
    console.log("readyState:", mongoose.connection.readyState);
  } catch (error) {
    console.error("✗ MongoDB connection failed:", error.message);
    console.error(error);
    process.exit(1);
  }
};

export default connectDB;