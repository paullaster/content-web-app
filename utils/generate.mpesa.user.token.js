import fetch from 'node-fetch';
import * as dotenv from 'dotenv';
dotenv.config ();

//VARIABLES:
const passKey = process.env.MPESA_PASSKEY;
const shortCode = process.env.MPESA_SHORT_CODE;
 
//GENERATING TOKEN:
const generateToken = ( req, res, next) => {};
export default generateToken;