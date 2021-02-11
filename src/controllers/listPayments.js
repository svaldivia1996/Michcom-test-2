const Payment = require('../models/payments')

exports.allPayments = async (req, res) =>{
    try {
        const findPayment = await Payment.find({})
        return res.status(200).send(findPayment)
    } catch (err) {
        console.log(err)
        return res.status(404).send({ error: 'not found' })
    }
}