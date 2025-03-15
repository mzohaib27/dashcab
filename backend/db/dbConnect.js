const mongoose = require("mongoose");
const { DB_URL_PATH } = require("../utils/constants.js");

function connectToDB() {
  mongoose
    .connect(DB_URL_PATH)
    .then(() => {
      console.log(`Db Connected successfully`);
    })
    .catch((error) => {
      console.log(`Error while connecting DB Error is : ${error}`);
    });
}
connectToDB();
