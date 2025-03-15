const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { JWT_SECRET_KEY } = require("../utils/constants");

const captainSchema = new mongoose.Schema({
  fullName: {
    firstName: {
      type: String,
      required: true,
      minLength: [3, "firstName must be 3 characters long"],
    },
    lastName: {
      type: String,
      minLength: [3, "lastName must be 3 characters long"],
    },
  },
  email: {
    type: String,
    required: true,
    unique: true,
    minLength: [3, "Email must be 3 characters long"],
  },
  password: {
    type: String,
    required: true,
    minLength: [6, "Password must be 6 characters long"],
    select: false,
  },
  socketId: {
    type: String,
  },
  status: {
    type: String,
    enum: ["active", "Inactive"],
    default: "Inactive",
  },
  vehicle: {
    color: {
      type: String,
      required: true,
      minLength: [3, "Color must be 3 characters long"],
    },
    plate: {
      type: String,
      required: true,
      minLength: [3, "Plate Number must be 3 characters long"],
    },
    capacity: {
      type: Number,
      required: true,
      minLength: [1, "Minimum capacity should be 1"],
    },
    vehicleType: {
      type: String,
      enum: ["Car", "Motorcycle"],
      required: true,
    },
  },
  location: {
    lat: {
      type: String,
    },
    long: {
      type: String,
    },
  },
});

captainSchema.statics.hashPassword = async (password) => {
  return await bcrypt.hash(password, 12);
};

captainSchema.methods.comparePassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

captainSchema.methods.generateAuthToken = async function () {
  const token = jwt.sign({ id: this._id }, JWT_SECRET_KEY);
  return token;
};

const Captain = mongoose.model("Captain", captainSchema);
module.exports = Captain;
