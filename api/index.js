import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routes/user.route.js"; // Import the router
import authRouter from "./controllers/auth.controller.js";
dotenv.config();

mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("Connected to MongoDB!");
  })
  .catch((err) => {
    console.log(err);
  });
const app = express();
app.use(express.json());

app.use("/api/users", userRouter); // /api/users/test par chalega
app.use("/api/auth", authRouter);
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
