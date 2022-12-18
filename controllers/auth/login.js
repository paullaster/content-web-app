//dependencies
import JWT from 'jsonwebtoken';
import bcrypt from 'bcrypt';

//Internal dependencies
import User from '../../models/user.schema';

const login = ( req, res) => {
    const { password, input } = req.body;
    User.findOne({ email: input})
    .then(() =>{})
    .catch( (err) => {
        User.findOne( {phonenumber: input})
        .then ( (user) => {})
        .catch( (err) => {
            res
            .status(404)
            .json (
                {
                    code: 'error',
                    error: "phonenumber or email not found"
                }
            )
        })
    });
};
export default login;