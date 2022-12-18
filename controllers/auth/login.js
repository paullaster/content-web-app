//dependencies
import JWT from "jsonwebtoken";
import bcrypt from "bcrypt";

//Internal dependencies
import User from "../../models/user.schema";

const login = (req, res) => {
  const { password, email } = req.body;
    User.findOne({ email: email })
      .then(user => {
        res.json(user);
      })
      .catch(err => {
        res
        .status (404)
        .json ( {
            code: 'error'
        })
      });
};
export default login;
