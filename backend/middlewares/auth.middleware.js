const User = require("../models/user.model");
const BlacklistToken = require("../models/blacklistToken.model");
const jwt = require("jsonwebtoken");
const { JWT_SECRET_KEY } = require("../utils/constants");
const Captain = require("../models/captain.model");

const extractToken = (req) => {
  const authHeader = req.headers?.authorization;
  if (req.cookies.token) return req.cookies.token;
  if (authHeader) return authHeader?.split(" ")[1];
  return null;
};

const handleAuthError = (error, res) => {
  const errorMessages = {
    TokenExpiredError: "Token Expired, please login again",
    JsonWebTokenError: "Invalid Token, Unauthorized",
    SyntaxError: "Malformed Token, Unauthorized",
  };

  const message = errorMessages[error.name] || "Unauthorized";
  return res.status(401).json({ message });
};

module.exports.authUser = async (req, res, next) => {
  const token = extractToken(req);

  if (!token || typeof token !== "string") {
    return res
      .status(401)
      .json({ message: "Unauthorized, token is missing or malformed" });
  }

  try {
    const isBlackListed = await BlacklistToken.findOne({ token });
    if (isBlackListed) {
      return res.status(401).json({ message: "Token expired, Unauthorized" });
    }

    const decoded = jwt.verify(token, JWT_SECRET_KEY);
    const user = await User.findById(decoded.id).select("-password");

    if (!user) {
      return res.status(401).json({ message: "User not found, Unauthorized" });
    }

    req.user = user;
    return next();
  } catch (error) {
    return handleAuthError(error, res);
  }
};

module.exports.authCaptain = async (req, res, next) => {
  const token = extractToken(req);

  if (!token) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  try {
    const isBlackListed = await BlacklistToken.findOne({ token });
    if (isBlackListed) {
      return res
        .status(401)
        .json({ message: "Token expired, Please log in again" });
    }

    const decoded = jwt.verify(token, JWT_SECRET_KEY);
    const captain = await Captain.findById(decoded.id);

    if (!captain) {
      return res
        .status(401)
        .json({ message: "Captain not found, Unauthorized" });
    }

    req.captain = captain;
    return next();
  } catch (error) {
    return handleAuthError(error, res);
  }
};
