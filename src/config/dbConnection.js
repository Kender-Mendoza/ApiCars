'use strict'

const mysql = require("mysql");

// Cadena de conexion a MySQL
module.exports = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Kender_507",
    database: "Cars",
});
