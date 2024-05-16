const jwt = require("jsonwebtoken");
require('dotenv').config();

const verifyToken = async (req, res, next) => {
    /* get token from header 
    const receivedToken = req.headers["x-access-token"];*/
    const { token } = await req.cookies;

    /* if there is no token */
    if (!token){
        return res.status(401).send({ auth: false, message: 'No token provided' });
    };

    /* in the callback function, somehow the firs argument represents the error , and 
    the second the payload of the token */
    await jwt.verify(token, process.env.JWTPRIVATEKEY, (err, validated) => {
        if (err) {
            return res.status(400).send({message:'Invalid token'})
        } else {
            // new atributes on the req
            req._id = validated._id;
            req.email = validated.email;

            // continue with the next function
            if (!!next) next();
        }
    });
}

module.exports = {verifyToken};