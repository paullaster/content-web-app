//Dependencies
const express = require ('express');

//Internal dependencies
const Accounts = require ('../controllers/auth/index');

const Auth = express.Router();

Auth.route('/register').post ( Accounts.new);
Auth.route('/login').post (Accounts.login);

module.exports = Auth;
