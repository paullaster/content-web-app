const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
import * as dotenv from 'dotenv';
dotenv.config ();

//VARIABLES:
const consumerKey = process.env.MPESA_CONSUMER_KEY;
const consumerSecret = process.env.MPESA_CONSUMER_SECRET;
 
//GENERATING TOKEN:
const generateToken = ( req, res, next) => {
    const apiUrl = `https://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials`;
    const token = new Buffer.from(consumerKey+':'+consumerSecret).toString('base64');
    console.log(token);
    const auth = 'Basic '+token;

    const headers = {
        Authorization: auth,
    };
    fetch (
        apiUrl, {
            method: 'GET',
            headers: headers,
        },
    )
    .then ( (response) =>{
        return response.json();
    })
    .then ( (dataObject) => {
        //let accessToken = dataObject.access_token;
        //req.accessToken = accessToken;
        res.json(dataObject);
        //next();
    })
    .catch ( (err) => {
        res.status(400).json( {
            status: 'error',
            error: err.message,
        });
    });
};
export default generateToken;