import * as dotenv from "dotenv";
dotenv.config();

//Internal dependencies:
import timeStamp from "../../../utils/timestamp";
import newPassword from "../../../utils/generate.mpesa.password";

//LIPA NA MPESA API:
const lipaNaMpesaOnline = (req, res) => {
  const token = req.accessToken;
  const auth = "Basic " + token;
  const timestamp = timeStamp();
  const apiUrl =
    "https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest";
  const password = newPassword();

  //SEND REQUEST TO API:
  fetch(apiUrl, {
    BusinessShortCode: process.env.MPESA_BUSINESS_SHORT_CODE,
    Password:
    Timestamp: "20160216165627",
    TransactionType: "CustomerPayBillOnline",
    Amount: "1",
    PartyA: "254708374149",
    PartyB: "174379",
    PhoneNumber: "254708374149",
    CallBackURL: "https://mydomain.com/pat",
    AccountReference: "Test",
    TransactionDesc: "Test"
  });
  res.json({ token, auth, timestamp, businessShortCode, password });
};
export default lipaNaMpesaOnline;
