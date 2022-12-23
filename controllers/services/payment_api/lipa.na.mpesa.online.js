import * as dotenv from 'dotenv';
dotenv.config ();

//Internal dependencies:
import timeStamp from "../../../utils/timestamp";
import newPassword from '../../../utils/generate.mpesa.password';

//LIPA NA MPESA API:
const lipaNaMpesaOnline = ( req, res) => {
    const token = req.accessToken;
    const auth = 'Basic ' + token;
    const timestamp = timeStamp ();
    const apiUrl = 'https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest';
    const businessShortCode = process.env.MPESA_BUSINESS_SHORT_CODE;
    const password = newPassword ();

    res.json ({token, auth, timestamp});
};
export default lipaNaMpesaOnline;