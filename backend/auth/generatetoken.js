var jwt = require('jsonwebtoken');

module.exports =  generateToken=(id)=>{
    var token = jwt.sign({ id: id }, process.env.ACCESS_TOKEN, {expiresIn: '1h'});
    return token

}