const Joi = require('joi');

const paymentValidation = Joi.object({
    name: Joi.string().required(),
    lastName: Joi.string().required(),
    description: Joi.string().required(),
    serviceHour: Joi.number().required()
})

module.exports = {
    paymentValidation
}