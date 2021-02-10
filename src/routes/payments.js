const express = require('express')
const {payments} = require('../controllers/payments')

const router = express.Router();

router.route('/payments').get(payments)

module.exports = router