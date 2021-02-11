const Payment = require('../models/payments')

exports.getPayment = async (req, res) =>{
    try {
        //console.log(req)
        const findPayment = await Payment.find({id: req.params.id})
        //console.log(findPayment.length)
        if (findPayment.length === 1) {
            return res.status(200).send(findPayment[0])
        }

        return res.status(404).send({ error: 'not found' })
    } catch (err) {
        console.log(err)
        return res.status(400).send({ error: 'bad request' })
    }
}