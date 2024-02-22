import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB connected: ${conn.connection.host}`.bgGreen.underline);
  } catch (err) {
    console.log(`Error: ${err.message}`.red.bold.underline);
    process.exit(1);
  }
};

export default connectDB;
