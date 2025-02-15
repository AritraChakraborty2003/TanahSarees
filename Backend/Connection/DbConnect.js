import mongoose from "mongoose";

const connectDB = async (MongoDB_URI) => {
  try {
    const conn = await mongoose.connect(MongoDB_URI);

    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1); // Exit process with failure
  }
};

export default connectDB;
