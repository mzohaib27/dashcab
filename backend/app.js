const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const userRoutes = require("./routes/user.routes");
const captainRoutes = require("./routes/captain.routes");

const app = express();

app.use(cors({ origin: "http://localhost:3000", credentials: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.get("/api", (req, res) => {
  res.send("Hello from testing");
});

app.use("/api/users", userRoutes);
app.use("/api/captains", captainRoutes);

module.exports = app;
