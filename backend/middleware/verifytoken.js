var jwt = require('jsonwebtoken');


module.exports = verifyToken = (req, res, next) => {
    let authHeader = req.headers.authorization || req.headers.Authorization;
    if (!authHeader) return res.status(401).json({ message: 'No token Provided' })

        try {
            if (authHeader) {
                let token = authHeader.split(' ')[1]

                //verify token
                jwt.verify(token, process.env.ACCESS_TOKEN, function (err, decoded) {
                    if(err) return res.status(401).json({ message: 'Unauthorized token' })
                        //store userId in req
                    req.userId = decoded.id
                    next();

                });

            }

        } catch (error) {
            console.error(error)
        }

}