"use strict";

const http = require("http");
const carsController = require('./controller/cars.controller')
const um = require('./lib/usualMethod')

http
    .createServer((req, res) => {
        // ? Si es una peticion GET
        if (req.method == 'GET') {
            // ? Se verifica si la peticion es desde la Raiz
            if (req.url == '/api') {
                carsController.getAll(req, res)
            
            } else {
                let id = um.clearUrl(req.url) //Limpiar cadena que entro
                // ? Si lo enviado por la url es valido
                if (id) {
                    carsController.getId(req, res, id)
                }
            }
        
        // ? Si es una peticion POST
        } else if (req.method == 'POST') {
            //const data = um.getData(req)
            carsController.create(req, res)

        // ? Si es una peticion PUT
        } else if (req.method == 'PUT') {
            let id = um.clearUrl(req.url) //Limpiar cadena que entro
            carsController.update(req, res, id)

        // ? Si es una peticion DELETE
        } else if (req.method == 'DELETE') {
            let id = um.clearUrl(req.url) //Limpiar cadena que entro
            carsController.delete(req, res, id)
        }
    })
    .listen(3000, (err) => {
        if (err) throw err;

        console.log("Server on port 3000");
    });
