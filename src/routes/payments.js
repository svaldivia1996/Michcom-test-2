const express = require('express')
const {allPayments} = require('../controllers/listPayments')
const {createPayment} = require('../controllers/createPayment')
const {getPayment} = require('../controllers/getPayment')
const {deletePayment} = require('../controllers/deletePayment')
const {updatePayment} = require('../controllers/updatePayment')

const router = express.Router();

router.route('/allPayments').get(allPayments)
router.route('/payments').post(createPayment)
router.route('/payments/:id').get(getPayment)
router.route('/payments/:id').delete(deletePayment)
router.route('/payments/:id').put(updatePayment)

module.exports = router