const http = require("http");
const router = require("./server/router");

const PORT = process.env.PORT || 3000;
const server = http.createServer(router);

server.listen(PORT, () =>
  console.log(`we're online at http://localhost:${PORT}}`)
);
