import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";
import { errorHandler } from "../utils/error.js";
import jwt from "jsonwebtoken";

export const signup = async (req, res, next) => {
  // information coming from browser
  //   console.log(req.body);
  const { username, email, password } = req.body;
  // password hashing
  const hashedPassword = bcryptjs.hashSync(password, 10);

  // for saving it into db
  const newUser = new User({ username, email, password: hashedPassword });
  // use try catch block for error
  try {
    await newUser.save();
    res.status(201).json("User Created Successfully");
  } catch (er) {
    // res.status(500).json(er.message);
    next(er); //  middleware for error
  }
};
export const signin = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const validUser = await User.findOne({ email });
    if (!validUser) return next(errorHandler(404, "User not found!"));
    const validPassword = bcryptjs.compareSync(password, validUser.password);
    if (!validPassword)
      return next(errorHandler(401, "Incorrect Credentials!"));
    const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRETKEY);
    // The code is separating the password from the user object and putting all
    //  the other user details into a new object called rest. taki password pta na chale
    const { password: pass, ...rest } = validUser._doc;
    res
      .cookie("access_token", token, { httpOnly: true })
      .status(200)
      .json(rest);
  } catch (error) {
    next(error);
  }
};
