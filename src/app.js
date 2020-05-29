"use strict";

const http = require("http");
const carsController = require('./controller/cars.controller')

//Limpiar cadena que entro
function clearUrl(url){
    let aux = url.substr(0,9)
    // ? si la llamada tiene la sintaxis correcta
    if('/api/?id=' == aux){
        return url.substr(9,100)
    }else{
        // TODO : Not found 
        return false
    }
}

http
    .createServer((req, res) => {
        // ? Si es una peticion de tipo GET
        if(req.method == 'GET'){
            // ? Se verifica a que ruta se le realiza la petición
            if(req.url == '/api'){
                carsController.getAll(req,res)
            }else{
                // si es true pasa
                let id = clearUrl(req.url)
                if(id){
                    carsController.getId(req,res,id)
                } 
            }
        } 
    })
    .listen(3000, (err) => {
        if (err) throw err;

        console.log("Server on port 3000");
    });
