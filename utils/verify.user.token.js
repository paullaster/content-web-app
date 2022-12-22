import JWT from 'jsonwebtoken';

const verifyToken = (req, res) => {
    const bearerToken = req.headers('Authorization');
};
export default verifyToken;