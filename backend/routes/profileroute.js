
const express = require('express')
const profile = require('../controllers/profilecontrollers/profile')
const verifytoken = require('../middleware/verifytoken')
const profileroute = express.Router()

profileroute.use(verifytoken)

profileroute.get('/', profile)


module.exports = profileroute