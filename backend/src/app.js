/* eslint-disable */
const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const { sequelize } = require('./models')

const config = require('./config/config')

const app = express()
app.use(morgan('combined')) //for logs
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
    res.send({ 
        message: 'hakdog hakdog hakdigilidog' 
    })
})

//Routes
const AuthenticationController = require('./controllers/AuthenticationController')
const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy')
// DEADLY SIN #5 FIXED
app.post('/register', 
AuthenticationControllerPolicy.register,
AuthenticationController.register)

app.post('/findUser', AuthenticationController.getUser)


sequelize.sync()
    .then(() => {
        app.listen(config.port)
        console.log(`Server started on port ${config.port}`)
    })
