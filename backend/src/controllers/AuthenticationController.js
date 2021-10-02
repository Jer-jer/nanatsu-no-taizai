/* eslint-disable */
const {User} = require('../models/User')


module.exports = {
    async register (req, res) {
        try{
            const user = await User.create(req.body)
            res.send(user.toJSON())
        } catch (err) {
            res.status(400).send({
                error: 'This email IS TAKEN!'
            })
        }
        // res.send({ 
        //     message: `Hello ${req.body.firstname} ${req.body.lastname} You have been registered`
        // })
    },
    async getUser (req, res) {
        try {
            const { email } = req.body
            const user = await User.findOne({
                where:{
                    email: email
                }
            })
            res.send(user.toJSON())
        }catch (err) {

        }
    }
}