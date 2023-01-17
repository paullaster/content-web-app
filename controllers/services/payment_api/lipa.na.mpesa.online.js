const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
const dotenv = require ( "dotenv");
dotenv.config();

//Internal dependencies:
const timeStamp = require ("../../../utils/timestamp");
const newPassword = require ("../../../utils/generate.mpesa.password");

//LIPA NA MPESA API:
const lipaNaMpesaOnline = (req, res) => {
    const phone = req.body.phone.substring(1);
    const amount = req.body.amount;
  const token = req.accessToken;
  const auth = "Bearer " + token;
  const apiUrl =
    "https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest";

  //SEND REQUEST TO API:
  fetch(apiUrl, {
    BusinessShortCode: process.env.MPESA_BUSINESS_SHORT_CODE,
    Password: newPassword(),
    Timestamp: timeStamp(),
    TransactionType: "CustomerBuyGoodsOnline",
    Amount: amount,
    PartyA: `254${phone}`,
    PartyB: process.env.MPESA_BUSINESS_SHORT_CODE,
    PhoneNumber: `254${phone}`,
    CallBackURL: 
    `https://0341-105-163-156-86.in.ngrok.io/api/payment/${process.env.MPESA_CALL_BACK_API_NAME}`,
    AccountReference: `254${phone}`,
    TransactionDesc: "Payment for product purchase"
  },
  {
    headers: {
      'Content-Type': 'application/json',
      Authorization: auth,
    },
  })
  .then(response => response.json())
  .then ( (response) => {
    res.status(200).json ( {
        status: "success",
        Password: newPassword(),
        token:auth,
        Timestamp: timeStamp(),
        data: response,
    });
  })
  .catch ( (err) => {
    res.status(500).json({
        status: "error",
        error: err.message,
    });
  });
};
module.exports = lipaNaMpesaOnline;
