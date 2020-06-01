"use strict";

const http = require("http");
const carsController = require('./controller/cars.controller')
const um = require('./lib/usualMethod')

http
    .createServer((req, res) => {
        // ? Si es una peticion de tipo GET
        if (req.method == 'GET') {
            // ? Se verifica a que ruta se le realiza la petición
            if (req.url == '/api') {
                carsController.getAll(req, res)
            } else {
                // si es true pasa
                let id = um.clearUrl(req.url) //Limpiar cadena que entro
                if (id) {
                    carsController.getId(req, res, id)
                }
            }
        } else if (req.method == 'POST') {
            //const data = um.getData(req)
            carsController.create(req, res)

        }
    })
    .listen(3000, (err) => {
        if (err) throw err;

        console.log("Server on port 3000");
    });
