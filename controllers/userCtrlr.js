import asyncHandler from "../middleware copy/asyncHandler.js";
import User from "../models/userModel.js";
import colors from "colors"; 

// @desc    Auth user & get token
// @route   POST /api/users/auth
// @access  Public
const authUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;
  
    const user = await User.findOne({ email });
  
    if (user && (await user.matchPassword(password))) {
      generateToken(res, user._id);
  
      res.json({
        _id: user._id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
      });
    } else {
      res.status(401);
      throw new Error('Invalid email or password');
    }
  });
  
  // @desc    Register a new user
  // @route   POST /api/users
  // @access  Public
  const registerUser = asyncHandler(async (req, res) => {
    console.log("Registering new user".yellow)
    const email = req.body.email;
  
    const userExists = await User.findOne({ email });
  
    if (userExists) {
      res.status(400);
      throw new Error('User already exists');
    }
  
    const user = await User.create(req.body);
  
    if (user) {
        console.log("New user successfully created...".blue)
        res.status(201).json({
            success: true,
            msg: `User with email ${email} successfully created`,
            data: user
      });
    } else {
        console.log(`User creation failed, user with email ${email} already exists`.red)
        res.status(400).json({
            msg: "User Already Exists"
      });
      throw new Error('Invalid user data');
    }
  });

  export {
    authUser,
    registerUser
  }