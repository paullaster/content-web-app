//dependencies
import bcrypt from 'bcrypt';

// internal dependencies
import db from '../../utils/database.connection';

const register = (req, res) =>{
    const {
        password,
        ...other
    } = req.body;
    const saltRounds = 16;
    bcrypt.hash (password, saltRounds)
    .then ( (hash) => {
        let newUser = new User ( {
            ...other,
            password: hash
       })
       newUser.save ()
       .then ( (user) => {
        res
        .status(200)
        .json(
            {
                code: 'success',
                user: user
            }
        );
       })
    })
    .catch ( (err) => {
        res
        .status(500)
        .json (
            {
                code: 'error',
                error: err.message,
            }
        );
    });
};
export default register;