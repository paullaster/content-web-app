//dependencies
import JWT from 'jsonwebtoken';
import bcrypt from 'bcrypt';

//Internal dependencies
import User from '../../models/user.schema';

const login = ( req, res) => {
    const { password, ...arg } = req.body;
    for ( let prop in arg) {

    }
    
};
export default login;