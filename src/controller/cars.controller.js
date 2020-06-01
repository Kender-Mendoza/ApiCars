'use strict'

const carModel = require('../model/cars.model')
const um = require('../lib/usualMethod')

module.exports = {
    getAll: (req, res) => {
        res.writeHead(200, { "Content-Type": "application/json" });
        carModel.getAll((err, results, fields) => {
            if (err) throw err

            res.write(JSON.stringify(um.createJson(results[0])))
            res.end()
        })
    },
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
    create: (req, res) => {
        // Los datos tienen que revisarse
        let allData = ''
        req
            .on('data', (data) => { allData += data })
            .on('end', () => {
                allData = JSON.parse(allData)
                console.log(allData)

                carModel.create(allData, (err) => {
                    if (err) throw err

                    res.writeHead(200, { 'Content-Type': 'text/text' })
                    res.write('data is save')
                    res.end()
                })

            })
            .on('error', (err) => { console.log(err) })
    }
}


