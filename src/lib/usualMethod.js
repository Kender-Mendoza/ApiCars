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
    },
    getData: (req) => {
        let allData = ''

        req
            .on('data', (data) => { allData += data })
            .on('end', () => {     
                allData = JSON.parse(allData)
                console.log(allData) 

/*                 dataObject.mark = allData.mark
                dataObject.model = allData.model
                dataObject.transmission = allData.transmission
                dataObject.color = allData.color
                dataObject.image = allData.image
                dataObject.doors = allData.doors */
        
                return allData
            })
            .on('error', (err) => { console.log(err) })

    }
}