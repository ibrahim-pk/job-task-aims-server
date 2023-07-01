import express, { Request, Response } from "express";
import userModel from "./userModel";

const userRouter = express.Router();

userRouter.get("/", async (req: Request, res: Response) => {
  try {
    const allUser = await userModel.find({});
    res.status(200).json({
      success: true,
      message: "find all data successfully",
      data: allUser,
    });
  } catch (error) {
    console.log(error);
  }
});

userRouter.post("/", async (req: Request, res: Response) => {
  try {
    const { fullName, mobile, email, password } = req.body;
    //console.log(req.body);
    const userData = new userModel({
      name: fullName,
      mobile: mobile,
      email: email,
      password: password,
    });

    const saveData = await userData.save();
    res.status(200).json({
      success: true,
      message: "save data successfully",
      data: saveData,
    });
  } catch (error) {
    console.log(error);
  }
});

userRouter.get("/:id", async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const singleUser = await userModel.find({ _id: id });
    res.status(200).json({
      success: true,
      message: "find a single data successfully",
      data: singleUser,
    });
  } catch (error) {
    console.log(error);
  }
});
userRouter.patch("/:id", async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const data = req.body;
    const updatedData = await userModel.findByIdAndUpdate({ _id: id }, data, {
      new: true,
    });
    res.status(200).json({
      success: true,
      message: "Update successfully",
      data: updatedData,
    });
  } catch (error) {
    console.log(error);
  }
});

userRouter.delete("/:id", async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const deleteData = await userModel.findByIdAndDelete({ _id: id });
    res.status(200).json({
      success: true,
      message: "delete successfully",
      data: deleteData,
    });
  } catch (error) {
    console.log(error);
  }
});

export default userRouter;
