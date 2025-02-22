const Userdb = require('../../models/usermodel')

module.exports = profile= async(req, res)=>{
    const findUser = await Userdb.findById(req.userId).select("-password")
    if(!findUser) return res.status(404).json({message: 'User not found'})
    res.status(200).json({result: findUser})
}