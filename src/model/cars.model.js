'use strict'

const db = require('../config/dbConnection')

module.exports = {
    // TODO : aqui va la consulta
    getAll: (callback) => {
        db.connect();
        db.query('CALL SP_GetAllCars()', callback);
        db.end();
    }
}
