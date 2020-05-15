"use strict";

const mysql = require("mysql");

module.exports = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "kender123",
    database: "Cars",
});
