const BlacklistToken = require("../models/blacklistToken.model");
const Captain = require("../models/captain.model");
const captainService = require("../services/captain.service");
const { validationResult } = require("express-validator");

module.exports.registerCaptain = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { fullName, email, password, vehicle } = req.body;

  const isCaptainExist = await Captain.findOne({ email });
  if (isCaptainExist) {
    return res
      .status(403)
      .json({ message: "Captain already exist with this email" });
  }

  const hashedPassword = await Captain.hashPassword(password);

  const newCaptain = await captainService.createCaptain({
    firstName: fullName.firstName,
    lastName: fullName.lastName,
    email,
    password: hashedPassword,
    color: vehicle.color,
    plate: vehicle.plate,
    capacity: vehicle.capacity,
    vehicleType: vehicle.vehicleType,
  });

  const token = await newCaptain.generateAuthToken();

  const { password: _, ...captain } = newCaptain._doc;

  res.status(201).json({ captain, token });
};

module.exports.loginCaptain = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(401).json({ message: "Invalid email or password" });
  }

  const captain = await Captain.findOne({ email }).select("+password");
  if (!captain) {
    return res.status(401).json({ message: "Captain not found" });
  }

  const isMatch = await captain.comparePassword(password);
  if (!isMatch) {
    return res.status(403).json({ message: "Invalid Password" });
  }

  const token = await captain.generateAuthToken();
  res.cookie("token", token);

  const { password: _, ...captainInfo } = captain._doc;
  res.status(200).json({ captainInfo, token });
};

module.exports.getCaptainProfile = async (req, res) => {
  return res.status(200).json({ captain: req.captain });
};

module.exports.logoutCaptain = async (req, res) => {
  const token = req.cookies.token || req.headers?.authorization?.split(" ")[1];

  await BlacklistToken.create({ token });

  res.clearCookie("token");

  res.status(200).json({ message: "Logged out." });
};
