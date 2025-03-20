const User = require("../models/user.model");
const userService = require("../services/user.service");
const { validationResult } = require("express-validator");
const BlacklistToken = require("../models/blacklistToken.model");

module.exports.registerUser = async function (req, res, next) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  console.log(`Received data from user : ${JSON.stringify(req.body)}`);
  const { fullName, email, password } = req.body;

  const isUserAlreadyExist = await User.findOne({ email });
  if (isUserAlreadyExist) {
    return res
      .status(403)
      .json({ message: "User already exist with this email" });
  }

  const hashedPassword = await User.hashPassword(password);
  const newUser = await userService.createUser({
    firstName: fullName.firstName,
    lastName: fullName.lastName,
    email,
    password: hashedPassword,
  });

  const token = await newUser.generateAuthToken();
  res.cookie("token", token, {
    httpOnly: true,
  });

  const { password: _, ...user } = newUser._doc;

  res.status(201).json({
    user,
    token,
  });
};

module.exports.loginUser = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { email, password } = req.body;

  const user = await User.findOne({ email: email }).select("+password");

  if (!user) {
    return res.status(401).json({
      message: "Invalid Email or Password",
    });
  }

  const isMatch = await user.comparePassword(password);

  if (!isMatch) {
    return res.status(401).json({ message: "Invalid Email or password" });
  }

  const token = await user.generateAuthToken();
  // res.cookie("token", token);

  const { password: _, ...userInfo } = user._doc;

  res.status(200).json({
    userInfo,
    token,
  });
};

module.exports.getProfile = async (req, res) => {
  return res.status(200).json(req.user);
};

module.exports.logoutUser = async (req, res) => {
  res.clearCookie("token");

  const token = req.cookies.token || req.headers?.authorization?.split(" ")[1];

  await BlacklistToken.create({ token });

  res.status(201).json({ message: "Logged out." });
};
