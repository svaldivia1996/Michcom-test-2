const express = require('express')
const {listPayments} = require('../controllers/listPayments')

const router = express.Router();

router.route('/allPayments').get(listPayments)

module.exports = router