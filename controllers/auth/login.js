//dependencies
import JWT from "jsonwebtoken";
import bcrypt from "bcrypt";
import * as dotenv from "dotenv";
dotenv.config ();
//Internal dependencies
import User from "../../models/user.schema";

const login = (req, res) => {
  const { password, email } = req.body;
    User.findOne({ email: email })
      .then(user => {
        bcrypt.compare (password, user.password)
        .then((resp) =>{
            if (!resp) {
                res
                .status(404)
                .json (
                    {
                        code: 'success',
                        error: 'Invalid password',
                    }
                );
                return;
            };
            let payload = {_id: user._id}
            JWT.sign (payload, process.env.TOKEN_SECRET, {
                algorithm: 'HS512',
                expiresIn: 5400,
            }, (err, token) => {
                if (err) {
                    res
                    .status(500)
                    .json ( {
                        code: 'error',
                        error: 'Error creating token',
                    });
                    return;
                };
                res.json(token);
            })
        })
        .catch((err) => {
            res
            .status(500)
            .json(
                {
                    code: 'error',
                    error: err.message,
                }
            );
        });
      })
      .catch(err => {
        res
        .status (404)
        .json ( {
            code: 'error',
            error: err.message,
        })
      });
};
export default login;
