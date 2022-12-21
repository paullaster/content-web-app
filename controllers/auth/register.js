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
        let newUser ={
            ...other,
            password: hash,
            date: Date.now(),
       };
       const query = 'INSERT INTO users SET?';
       db.query (query, newUser, (error, rows) =>{
        if (error) {
            res
            .status(500)
            .json ( {
                status: 'error',
                error: error.message,
            });
            return;
        };
        res
        .status (200)
        .json ( {
            status: 'success',
            message: 'User created successfully',
        })
       });
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