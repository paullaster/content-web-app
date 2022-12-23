import * as dotenv from 'dotenv';
dotenv.config ();

//Internal dependencies:
import timeStamp from "../../../utils/timestamp";
import 
const lipaNaMpesaOnline = ( req, res) => {
    const token = req.accessToken;
    const auth = 'Basic ' + token;
    const timestamp = timeStamp ();
    const apiUrl = 'https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest';
    const businessShortCode = process.env.MPESA_BUSINESS_SHORT_CODE;

    res.json ({token, auth, timestamp});
};
export default lipaNaMpesaOnline;