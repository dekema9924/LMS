

const express = require('express');
const signup = require('../controllers/logincontrollers/signup');
const signin = require('../controllers/logincontrollers/signin');
const loginroute = express.Router();



loginroute.use(express.json())
loginroute.use(express.urlencoded({extended: true}))


loginroute.get('/',(req,res)=>{
    res.send('Login Route')
})

loginroute.post('/signup', signup)
loginroute.post('/signin', signin)



module.exports = loginroute