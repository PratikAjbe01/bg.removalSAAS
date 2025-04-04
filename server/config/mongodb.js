import mongoose from "mongoose"

const connectDB = async () => {
  try {

    await mongoose.connect(`${process.env.MONGO_URI}/bg-removal`);

 
    console.log('Database Connected');


    mongoose.connection.on('error', (err) => {
      console.error('MongoDB connection error:', err);
      process.exit(1); // Exit process with failure
    });

  } catch (error) {

    console.error('Error connecting to MongoDB:', error);
    process.exit(1); 
  }
};

export default connectDB;