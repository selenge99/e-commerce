import mongoose from "mongoose";

export const connectDB = async (uri: string) => {
  try {
    const con = await mongoose.connect(uri);
    console.log("Database is connected", con.connection.host);
  } catch (error) {
    console.log("Database is not connected");
  }
};
