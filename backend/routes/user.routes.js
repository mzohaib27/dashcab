const express = require("express");
const {
  registerUser,
  loginUser,
  getProfile,
  logoutUser,
} = require("../controllers/user.controller");
const userRouter = express.Router();
const { body } = require("express-validator");
const { authUser } = require("../middlewares/auth.middleware");

userRouter.post(
  "/register",
  [
    body("email").isEmail().withMessage("Invalid Email"),
    body("fullName.firstName")
      .isLength({ min: 3 })
      .withMessage("First Name must be 3 characters long"),
    body("password")
      .isLength({ min: 6 })
      .withMessage("Password must be 6 characters long"),
  ],
  registerUser
);

userRouter.post(
  "/login",
  [
    body("email").isEmail().withMessage("Invalid Email"),
    body("password")
      .isLength({ min: 6 })
      .withMessage("Password must be 6 characters long"),
  ],
  loginUser
);

userRouter.get("/getprofile", authUser, getProfile);
userRouter.get("/logout", authUser, logoutUser);

module.exports = userRouter;
