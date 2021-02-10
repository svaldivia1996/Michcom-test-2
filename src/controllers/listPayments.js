const Payment = require('../models/payments')

exports.listPayments = async (req, res) =>{
    try {
        const findPayments = await Payment.find({})
        return res.status(200).send(findPayments)
    } catch (err) {
        console.log(err)
        return res.status(404).send({ error: 'not found' })
    }
}