'use strict'

const db = require('../config/dbConnection')

module.exports = {
    // TODO : aqui va la consulta
    getAll: (callback) => {
        /* 
          Los metodos db.connect(), db.end() causan error cuando hay mas
          de una query
        */
        //db.connect();
        db.query('CALL SP_GetAllCars()', callback);
        //db.end();
    },
    getId: (id,callback)=>{
        //db.connect();
        db.query(`CALL SP_GetCar(${id},@output)` , callback);
        //db.end();
    }
}
