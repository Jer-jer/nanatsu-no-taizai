/* eslint-disable */
const Joi = require('joi')

module.exports = {
    register(req, res, next) {
        const schema = {
            firstname: Joi.string(),
            lastname: Joi.string(),
            username: Joi.string(),
            email: Joi.string().email(),
            password: Joi.string(),
            address: Joi.string(), 
        }

        const {error, value} = Joi.validate(req.body, schema)

        if (error){

        }else{
            next()
        }
    }
}