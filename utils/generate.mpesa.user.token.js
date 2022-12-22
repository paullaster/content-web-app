import fetch from 'node-fetch';
import * as dotenv from 'dotenv';
dotenv.config ();

//VARIABLES:
const consumerKey = process.env.;
const consumerSecret = process.env.;
 
//GENERATING TOKEN:
const generateToken = ( req, res, next) => {
    const apiUrl = `https://sandbox.safaricom.co.ke/oauth/v1/generate?
    grant_type=client_credentials`;
     const token = Buffer.from( 
};
export default generateToken;