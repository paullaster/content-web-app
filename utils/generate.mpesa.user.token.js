import fetch from 'node-fetch';
import * as dotenv from 'dotenv';
dotenv.config ();

//VARIABLES:
const consumerKey = process.env.MPESA_CONSUMER_KEY;
const consumerSecret = process.env.MPESA_CONSUMER_SECRET;
 
//GENERATING TOKEN:
const generateToken = ( req, res, next) => {
    const apiUrl = `https://sandbox.safaricom.co.ke/oauth/v1/generate?
    grant_type=client_credentials`;
     const token = Buffer.from(`${consumerKey}:${consumerSecret}`).toString('base64');
};
export default generateToken;