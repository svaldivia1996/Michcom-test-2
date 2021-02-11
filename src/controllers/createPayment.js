const Payment = require('../models/payments')
const mindicadorData = require('../utils/mindicador')
const { v4: uuidv4 } = require('uuid')
const { paymentValidation } = require('../utils/validator')

exports.createPayment = async (req, res) =>{
    try {
        let payload = req.body
        // validar payload
        paymentValidation.validate(payload)
        const reqEconomicData = await mindicadorData(payload.serviceHour)
        payload ={ id: uuidv4(), ...payload,  ...reqEconomicData }

        const newPayment = new Payment(payload)
        await newPayment.save(payload)

        return res.status(201).send({ message: 'Payment created' })
    } catch (err) {
        // console.log(err)
        return res.status(400).send({ error: 'Bad request' })
    }
}