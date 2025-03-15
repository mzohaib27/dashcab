const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { JWT_SECRET_KEY } = require("../utils/constants");

const userSchema = new mongoose.Schema({
  fullName: {
    firstName: {
      type: String,
      required: true,
      minLength: [3, "first Name must be 3 characters long"],
    },
    lastName: {
      type: String,
      minLength: [3, "first Name must be 3 characters long"],
    },
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    select: false,
  },
  socketId: {
    type: String,
  },
});

userSchema.statics.hashPassword = async function (password) {
  return await bcrypt.hash(password, 12);
};

userSchema.methods.comparePassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

userSchema.methods.generateAuthToken = async function () {
  const token = jwt.sign({ id: this._id }, JWT_SECRET_KEY, {
    expiresIn: "24h",
  });
  return token;
};

const User = mongoose.model("User", userSchema);

module.exports = User;
