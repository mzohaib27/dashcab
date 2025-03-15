const User = require("../models/user.model");
const BlacklistToken = require("../models/blacklistToken.model");
const jwt = require("jsonwebtoken");
const { JWT_SECRET_KEY } = require("../utils/constants");

const extractToken = (req) => {
  const authHeader = req.headers.authorization;
  if (req.cookies.token) return req.cookies.token;
  if (authHeader) return authHeader.split(" ")[1];
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

module.exports.authMiddleware = async (req, res, next) => {
  const token = extractToken(req);

  if (!token || typeof token !== "string" || token.split(".").length !== 3) {
    return res.status(401).json({ message: "Unauthorized, token is missing" });
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
