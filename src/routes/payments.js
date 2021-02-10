const express = require('express')
const {listPayments} = require('../controllers/listPayments')
const {createPayment} = require('../controllers/createPayment')

const router = express.Router();

router.route('/allPayments').get(listPayments)
router.route('/payments').post(createPayment)

module.exports = router