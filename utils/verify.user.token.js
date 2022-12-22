import JWT from 'jsonwebtoken';
import * as dotenv from 'dotenv';
dotenv.config ();

const verifyToken = (req, res, next) => {
    const bearerToken = req.header('Authorization');
    if (!bearerToken){
        res.status(400).json( {
            status: 'error',
            error: 'Authorization required',
        })
        return;
    };

    const token = bearerToken.split(' ')[1];
   JWT.verify( token, process.env.TOKEN_SECRET, {
    algorithms: 'HS512'
   })
};
export default verifyToken;