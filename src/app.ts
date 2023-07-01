import express, { Request, Response } from "express";
import cors from "cors";
import dotenv from "dotenv";
import userRouter from "./app/modules/user/userRouter";
dotenv.config();
const app = express();
//cors
app.use(cors());

//parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//router
app.use("/api/user", userRouter);

//test
app.get("/", (req: Request, res: Response) => {
  res.json({ msg: "Hi Server" });
});

export default app;
