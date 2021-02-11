const express = require('express')
const {listPayments} = require('../controllers/listPayments')
const {createPayment} = require('../controllers/createPayment')
const {getPayment} = require('../controllers/getPayment')

const router = express.Router();

router.route('/allPayments').get(listPayments)
router.route('/payments').post(createPayment)
router.route('/payments/:id').get(getPayment)

module.exports = router