const dotenv = require("dotenv");

dotenv.config();

const PORT = process.env.PORT;
const DB_URL_PATH = process.env.DB_URL;
const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY;

module.exports = { PORT, DB_URL_PATH, JWT_SECRET_KEY };
