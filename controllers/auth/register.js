//dependencies
const bcrypt = require("bcrypt");

// internal dependencies
const db = require("../../utils/database.connection");

const register = (req, res) => {
  const { phonenumber, password, ...other } = req.body;

  if (phonenumber.length < 10) {
    res.status(500).json({
      status: "error",
      error: "phonenumber is too short"
    });
    return;
  }
  if (password.length < 8) {
    res.status(500).json({
      status: "error",
      error: "password is too short"
    });
    return;
  }

  const saltRounds = 16;
  bcrypt
    .hash(password, saltRounds)
    .then(hash => {
      let newUser = {
        ...other,
        phonenumber,
        password: hash,
        date: new Date()
      };
      const query = "INSERT INTO users SET?";
      db
        .query(query, newUser)
        .then(rows => {
          res.status(200).json({
            status: "success",
            message: "User created successfully"
          });
        })
        .catch(error => {
          res.status(500).json({
            status: "error",
            error: error.message
          });
        });
    })
    .catch(err => {
      res.status(500).json({
        code: "error",
        error: err.message
      });
    });
};
module.exports = register;
