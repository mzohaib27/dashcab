const http = require("http");
const app = require("./app.js");
const Port = require("./utils/constants.js");

const server = http.createServer(app);

server.listen(Port, () => {
  console.log(`Server started successfully on port ${Port}`);
});
