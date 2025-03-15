const http = require("http");
const app = require("./app.js");
const { PORT } = require("./utils/constants.js");
require("./db/dbConnect.js");

const server = http.createServer(app);

server.listen(PORT, () => {
  console.log(`Server started successfully on port ${PORT}`);
});
