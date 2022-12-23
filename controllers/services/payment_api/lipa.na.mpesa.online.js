import * as dotenv from "dotenv";
dotenv.config();

//Internal dependencies:
import timeStamp from "../../../utils/timestamp";
import newPassword from "../../../utils/generate.mpesa.password";

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
    CallBackURL: "https://mydomain.com/pat",
    AccountReference: `254${phone}`,
    TransactionDesc: "Payment for product purchase"
  },
  {
    headers: {
        Authorization: auth,
    },
  })
  .then ( (response) => {
    res.status(200).json ( {
        status: "success",
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
export default lipaNaMpesaOnline;
