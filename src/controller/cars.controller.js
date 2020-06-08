'use strict'

const carModel = require('../model/cars.model')
const um = require('../lib/usualMethod')

module.exports = {
    // Funcionalidad que se le daran a los datos obtenidos de la bd y poder enviarlos al cliente
    getAll: (req, res) => {
        res.writeHead(200, { "Content-Type": "application/json" });
        carModel.getAll((err, results, fields) => {
            if (err) throw err

            res.write(JSON.stringify(um.createJson(results[0])))
            res.end()
        })
    },
    // Funcionalidad que se le daran a los datos obtenidos de la bd y poder enviarlos al cliente
    getId: (req, res, id) => {
        res.writeHead(200, { "Content-Type": "application/json" });
        carModel.getId(id, (err, results, fields) => {
            if (err) throw err

            res.write(JSON.stringify(um.createJson(results[0])))
            /*
                metodo createJson() para convertir el resultado de la consulta a un json 
                y poder enviarlo.
            */
            res.end()
        })
    },
    // Funcionalidad que se le dara a los datos obtenidos del cliente para poderlos insertar
    create: (req, res) => {
        um.getData(req, (data) => {
            carModel.create(data, (err) => {
                if (err) throw err

                res.writeHead(200, { 'Content-Type': 'text/plain' })
                res.write('data is save')
                res.end()
            })
        })
    },
    // Funcionalidad que se le dara a los datos obtenidos del cliente para poder actualizar uno existente
    update: (req, res, id) => {
        let allData = ''
        um.getData(req, (data) => {
            carModel.update(id, data, (err) => {
                if (err) throw err

                res.writeHead(200, { 'Content-Type': 'text/plain' })
                res.write('data is update')
                res.end()
            })
        })
    },
    // Funcionalidad para poder eliminar datos de la db
    delete: (req, res, id) => {
        carModel.delete(id, (err) => {
            if (err) throw err

            res.writeHead(200, { 'Content-Type': 'text/plain' })
            res.write('data is delete')
            res.end()
        })
    }

}


