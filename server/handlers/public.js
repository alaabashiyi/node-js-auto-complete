const fs = require("fs");
const path = require("path");
const missingHandler = require("./missing");

function publicHandler(request, response) {
  const url = request.url;
  const types = {
    css: "text/css",
    js: "application/json",
    jpg: "image/jpg",
  };
  const urlArray = url.split(".");
  const extension = urlArray[1];
  const type = types[extension];

  let newPath = `${urlArray[0]}.${urlArray[1]}`;

  const filePath = path.join(__dirname, "..", newPath);
  fs.readFile(filePath, (error, file) => {
    if (error) {
      missingHandler(request, response);
    } else {
      response.writeHead(200, { "content-type": type });
      response.end(file);
    }
  });
}

module.exports = publicHandler;
