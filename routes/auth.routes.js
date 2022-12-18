//Dependencies
import express from 'express';

//Internal dependencies
import Accounts from '../controllers/auth/index';

const Auth = express.Router();

Auth.route('/register').post ( Accounts.new);

export default Auth;
