'use strict'

const mysql = require("mysql");

module.exports = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Kender_507",
    database: "Cars",
});
