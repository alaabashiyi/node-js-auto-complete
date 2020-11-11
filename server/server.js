const http = require("http");
const router = require("./router");
require("dotenv").config({ path: __dirname + "/.env" });

const KEYY = process.env.API_KEY;
const PORT = process.env.PORT || 3000;
const server = http.createServer(router);

server.listen(PORT, () =>
  console.log(`we're online at http://localhost:${PORT}}`)
);
