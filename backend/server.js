const express = require('express');
const app = express();
require('dotenv').config();
const loginroute = require('./routes/loginroute');
const mongodb = require('./config/mongoose');
const profileroute = require('./routes/profileroute');
const cors = require('cors')



app.use(
    cors({
      origin: "http://localhost:5173", // Allow requests from frontend
      credentials: true, // Enable credentials (cookies, authentication headers)
    })
);

app.use('/', loginroute);
app.use('/profile', profileroute)




app.listen(process.env.PORT,(req,res)=>{
    console.log(`Server is running on port ${process.env.PORT}`)
})