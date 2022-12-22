import JWT from 'jsonwebtoken';

const verifyToken = (req, res) => {
    const bearerToken = req.header('Authorization');
    if (!bearerToken){
        res.status(400).json( {
            status: 'error',
            error: 'Authorization required',
        })
        return;
    };

    const token = bearerToken.split(' ')[1];
    res.json(token)
};
export default verifyToken;