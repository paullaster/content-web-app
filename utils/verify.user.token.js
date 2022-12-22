import JWT from 'jsonwebtoken';

const verifyToken = (req, res) => {
    const bearerToken = req.headers('Authorization');
    if (bearerToken === ''){
        res.status().json( {
            status: 'error',
            error: 'Authorization required',
        })
        return;
    }
};
export default verifyToken;