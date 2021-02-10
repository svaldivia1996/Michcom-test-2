const axios = require('axios')
const moment = require('moment')

const mindicadorData = async (hours = 0) =>{
    try {
        const momento = moment()
        const dateUf = momento.format('DD-MM-YYYY')
        const dateRes = momento.format('YYYY-MM-DDTHH:mm:ss.SSSZ')
        const res = await axios.get(`https://mindicador.cl/api/uf/${dateUf}`)

        return {
            date: dateRes,
            dayAmountUf: res.data.serie[0].valor,
            amountOfService: res.data.serie[0].valor * hours
        }
    } catch (error) {
        console.log(error)
        throw error
    }
}


module.exports = mindicadorData