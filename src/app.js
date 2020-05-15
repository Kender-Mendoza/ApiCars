"use strict";

const http = require("http");
const db = require('./config/dbConnection')

http
    .createServer((req, res) => {
        res.writeHead(200, { "content-type": "text/html" });
        res.end("<h1>Hola mundo desde node js</h1>");
    })
    .listen(3000, (err) => {
        if (err) throw err;

        console.log("Server on port 3000");
    });
