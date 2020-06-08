'use strict'

module.exports = {
    /* 
     * MySQL - no me retorna el json en el orden esperado
     * por esta razon cree este metodo. 
    */

    // Le da un orden adecuado al archivo Json retornado por MySQL
    createJson: (array) => {
        let data = {}
        if (array != undefined) {
            array.forEach((element) => {
                data[`row${element.Id}`] = element
            })

        } else {
            data = { id: 'undefine' }

        }

        return data
    },
    // Limpia la URL, eliminando los caracteres innecesarios
    clearUrl: (url) => {
        let aux = url.substr(0, 9)
        // ? si la llamada tiene la sintaxis correcta
        if ('/api/?id=' == aux) {
            return url.substr(9, 100)

        } else {
            // TODO : Not found 
            return false

        }
    },
    // Obtiene los datos enviados por el cliente (hace un trabajo similar a BodyParse)
    getData: (req, callback) => {
        let allData = ''

        req
            .on('data', (data) => { allData += data })
            .on('end', () => {
                allData = JSON.parse(allData)

                callback(allData)
            })
            .on('error', (err) => { console.log(err) })

    }
}