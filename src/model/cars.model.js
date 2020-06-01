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
    getId: (id, callback) => {
        //db.connect();
        db.query(`CALL SP_GetCar(${id},@output)`, callback);
        //db.end();
    },
    create: (data, callback) => {
        db.query(`CALL SP_CreateCar('${data.mark}','${data.model}','${data.transmission}','${data.color}','${data.image}','${data.doors}', @output)`, callback)
    },
    update: (id, data, callback) => {
        db.query(`CALL SP_UpdateCar(${id},'${data.mark}','${data.model}','${data.transmission}','${data.color}','${data.image}','${data.doors}', @output)`, callback)
    },
    delete: (id, callback) => {
        db.query(`CALL SP_DeleteCar(${id},@output)`, callback);
    }
} 
