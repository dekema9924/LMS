
const Userdb = require('../../models/usermodel')
const bcrypt = require('bcryptjs')
const generateToken = require('../../auth/generatetoken')

module.exports = signin = async(req,res)=>{
    
    let { username, password } = req.body

    const findUser = await Userdb.findOne({username});
    console.log(findUser)
    
    if(!findUser) return res.status(401).json({message: 'invalid credentials'})
      try{
        bcrypt.compare(password, findUser.password,function(err, result) {
            if(!result) res.status(401).json({message: 'Invalid credentials'})
                //generate a token
                let access_token = generateToken(findUser._id)
                //pass token in a cookie
                res.cookie('token', access_token, { maxAge: '1h'});
                res.status(200).json({message: `logging in ${findUser.name}`})
        });
    }catch(error){
        console.error(error)
    }

  
}


