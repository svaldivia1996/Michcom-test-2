const Payment = require('../models/payments')
const mindicadorData = require('../utils/mindicador')
const { paymentValidation } = require('../utils/validator')

exports.updatePayment = async (req, res) => {
    try {
        const payload = req.body
        //validar payload
        paymentValidation.validate(payload)
        console.log('hola')
        const findPayment = await Payment.find({id: req.params.id})


        if (findPayment.length === 1) {
            const mindicador = await mindicadorData(payload.serviceHour)
            findPayment[0].name = payload.name
            findPayment[0].lastName = payload.lastName
            findPayment[0].description = payload.description
            findPayment[0].serviceHour = payload.serviceHour
            findPayment[0].amountOfService = mindicador.amountOfService
            findPayment[0].date = mindicador.date
            findPayment[0].dayAmountUf = mindicador.dayAmountUf
            //console.log(findPayment[0].id)
            await Payment.findOneAndUpdate({id: findPayment[0].id},findPayment[0])

            return res.status(200).send({ message: 'Payment updated successfully'})
        }
        // return res.status(200).send({ message: 'Payment updated successfully'})
        return res.status(404).send({error: 'not found'})
    }
    catch (err){
        console.log(err)
        return res.status(400).send({error: 'bad request'})
    }

}