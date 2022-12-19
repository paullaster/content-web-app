//Dependencies
import express from 'express';

//Internal dependencies
import Accounts from '../controllers/auth/index';

const Auth = express.Router();

Auth.route('/register').post ( Accounts.new);
Auth.route('/login').post (Accounts.login);

export default Auth;