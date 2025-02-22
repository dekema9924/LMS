const express = require('express');
const app = express();
require('dotenv').config();
const loginroute = require('./routes/loginroute');
const mongofb = require('./config/mongoose');
const profileroute = require('./routes/profileroute');




app.use('/', loginroute);
app.use('/profile', profileroute)




app.listen(process.env.PORT,(req,res)=>{
    console.log(`Server is running on port ${process.env.PORT}`)
})