'use strict'

const db = require('../config/dbConnection')

module.exports = {
    // query para traer todos los datos de la tabla Cars
    getAll: (callback) => {
        /* 
          Los metodos db.connect(), db.end() causan error cuando hay mas
          de una query
        */
        //db.connect();
        db.query('CALL SP_GetAllCars()', callback);
        //db.end();
    },
    // query para traer los datos de una fila por medio de su id
    getId: (id, callback) => {
        db.query(`CALL SP_GetCar(${id},@output)`, callback);
    },
    // query para crear un nuevo registro
    create: (data, callback) => {
        db.query(`CALL SP_CreateCar('${data.mark}','${data.model}','${data.transmission}','${data.color}','${data.image}','${data.doors}', @output)`, callback)
    },
    // query para actualizar un registro
    update: (id, data, callback) => {
        db.query(`CALL SP_UpdateCar(${id},'${data.mark}','${data.model}','${data.transmission}','${data.color}','${data.image}','${data.doors}', @output)`, callback)
    },
    // query para eliminar un registro
    delete: (id, callback) => {
        db.query(`CALL SP_DeleteCar(${id},@output)`, callback);
    }
} 
