import JWT from 'jsonwebtoken';
import * as dotenv from 'dotenv';
dotenv.config ();

const verifyToken = (req, res, next) => {
    const bearerToken = req.header('Authorization');
    if (!bearerToken){
        res.status(400).json( {
            status: 'error',
            error: 'Authorization required',
        });
        return;
    };

    const token = bearerToken.split(' ')[1];
   JWT.verify( token, process.env.TOKEN_SECRET, {
    algorithms: 'HS512'
   }, (error, verified) => {
    if (error) {
        res
        .status (403)
        .json ({
            error: error.message,
        });
        return;
    };
    //setting req.user for the next middleware
    req.user =verified;
    next ();
   });
};
export default verifyToken;