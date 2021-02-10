const Payment = require('../models/payments')
const mindicadorData = require('../utils/mindicador')
const { v4: uuidv4 } = require('uuid')

exports.createPayment = async (req, res) =>{
    try {
        let payload = req.body
        // validar payload
        const reqEconomicData = await mindicadorData(payload.serviceHour)
        payload ={ id: uuidv4(), ...payload,  ...reqEconomicData }

        const newPayment = new Payment(payload)
        await newPayment.save(payload)

        return res.status(201).send({ message: 'Payment created' })
    } catch (err) {
        console.log(err)
        return res.status(404).send({ error: 'not found' })
    }
}