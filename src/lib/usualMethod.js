'use strict'

module.exports = {
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
    clearUrl: (url) => {
        let aux = url.substr(0, 9)
        // ? si la llamada tiene la sintaxis correcta
        if ('/api/?id=' == aux) {
            return url.substr(9, 100)

        } else {
            // TODO : Not found 
            return false

        }
    }
}