// Website : nodejs.com
// Command : npm i express  jsonwebtoken dotenv
// npm i --global nodemon   ( by this server update automatically)

// watching the code for update : nodemon main.js


// Method 1 : Simple (common js)

// const http = require('node:http');
// const fs = require("fs")  // import the module using require

// Method 2 : type=module (ES6 module)

import http from "http"


const hostname = '127.0.0.1';
const port = 3000;
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end('<h1>Hello World hi</h1>\n');
});
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});