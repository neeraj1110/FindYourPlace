import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";
const signup = async (req, res, next) => {
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
  } catch (error) {
    // res.status(500).json(error.message);
    next(error); //  middleware for error
  }
};

export default signup;
