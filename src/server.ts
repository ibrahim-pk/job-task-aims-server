import dotenv from "dotenv";
import app from "./app";
import mongoose from "mongoose";
dotenv.config();
const PORT = process.env.PORT;

const Main = async () => {
  await mongoose.connect(process.env.BD_URL as string);
  try {
    console.log("DB is connected!");
    app.listen(PORT, () => {
      console.log("server is running!");
    });
  } catch (err) {
    console.log(err);
  }
};

Main();
