const express = require("express");
const {
  registerCaptain,
  loginCaptain,
  getCaptainProfile,
  logoutCaptain,
} = require("../controllers/captain.controller");
const { authCaptain } = require("../middlewares/auth.middleware");
const { body } = require("express-validator");

const captainRouter = express.Router();

captainRouter.post(
  "/register",
  [
    body("fullName.firstName")
      .isLength({ min: 3 })
      .withMessage("First Name must be 3 characters long"),
    body("email").isEmail().withMessage("Invalid Email"),
    body("password")
      .isLength({ min: 6 })
      .withMessage("Password must be 6 characters long"),
    body("vehicle.color")
      .isLength({ min: 3 })
      .withMessage("Color must be 3 characters long"),
    body("vehicle.plate")
      .isLength({ min: 3 })
      .withMessage("Plate Number must be 3 characters long"),
    body("vehicle.capacity")
      .isInt({ min: 1 })
      .withMessage("Minimum capacity should be 1"),
    body("vehicle.vehicleType")
      .isLength({ min: 3 })
      .withMessage("vehicleType must be 3 characters long"),
  ],
  registerCaptain
);
captainRouter.post(
  "/login",
  [
    body("email").isEmail().withMessage("Invalid Email"),
    body("password")
      .isLength({ min: 6 })
      .withMessage("Password must be 6 characters long"),
  ],
  loginCaptain
);

captainRouter.get("/getcaptainprofile", authCaptain, getCaptainProfile);
captainRouter.get("/logout", authCaptain, logoutCaptain);

module.exports = captainRouter;
