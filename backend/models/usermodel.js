const mongoose = require('mongoose')


const userSchema = new mongoose.Schema({
    name: String,
    email: {
        type: String,
        unique: true
    },
    password: String,
    username: {
        type: String,
        unique: true
    }
})

module.exports = mongoose.model('userdb', userSchema)


