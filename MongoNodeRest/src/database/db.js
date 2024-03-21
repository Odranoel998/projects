import { mongoose } from "mongoose";

export const connectMongoose = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017");
    console.log("DB is connected");
  } catch (error) {
    console.log("Este es el error: ", error);
  }
};
