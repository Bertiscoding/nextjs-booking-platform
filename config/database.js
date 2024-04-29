import mongoose from 'mongoose'

let connected = false

const connectDB = async () => {
  mongoose.set('strictQuery', true); // only fields that are specified in schema are saved in DB

  // If DB is already connected, don't reconnect
  if(connected) {
    console.log('MongoDB is already connected...');
    return;
  }

  //Connect to MongoDB
  try {
    await mongoose.connect(process.env.MONGO_DB_URI);
    connected = true
    console.log('MongoDB connected...');
  } catch (error) {
    console.error(error);
  }
}

export default connectDB;
