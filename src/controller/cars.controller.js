'use strict'

const carModel = require('../model/cars.model')

/*
    Funcion para convertir el resultado de la consulta a un json 
    y poder enviarlo.
*/
function createJson(array) {
    let data = {}
    if(array != undefined){
        array.forEach((element) => {
            data[`row${element.Id}`] = element 
        })
    
        
    }else{
        data = {id:'undefine'}
    }

    return data
}

module.exports = {
    getAll: (req, res) => {
        res.writeHead(200, { "Content-Type": "application/json" });
        carModel.getAll((err, results, fields) => {
            if (err) throw err
           
            res.write(JSON.stringify(createJson(results[0])))
            res.end()
        })
    }

}


