import mongoose, { model } from "mongoose";
import { IUser } from "./userInterface";

const userSchema = new mongoose.Schema<IUser>(
  {
    fullName: {
      type: String,
      require: true,
    },
    mobile: {
      type: Number,
      require: true,
      unique: true,
    },
    email: {
      type: String,
      require: true,
      unique: true,
    },
    password: {
      type: String,
      require: true,
    },
  },
  {
    timestamps: true,
  }
);

const userModel = model<IUser>("Users", userSchema);

export default userModel;
