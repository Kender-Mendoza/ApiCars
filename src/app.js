"use strict";

const http = require("http");
const carsController = require('./controller/cars.controller')

http
    .createServer((req, res) => {
        // ? Si es una peticion de tipo GET
        if(req.method == 'GET'){
            // ? Se verifica a que ruta se le realiza la petición
            if(req.url == '/api'){
                carsController.getAll(req,res)
            }
        } 
    })
    .listen(3000, (err) => {
        if (err) throw err;

        console.log("Server on port 3000");
    });
