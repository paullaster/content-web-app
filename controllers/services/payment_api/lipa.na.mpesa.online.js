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
  const auth = "Basic " + token;
  const apiUrl =
    "https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest";

  //SEND REQUEST TO API:
//   fetch(apiUrl, {
//     BusinessShortCode: process.env.MPESA_BUSINESS_SHORT_CODE,
//     Password: newPassword(),
//     Timestamp: timeStamp(),
//     TransactionType: "CustomerBuyGoodsOnline",
//     Amount: "1",
//     PartyA: "254700258098",
//     PartyB: process.env.MPESA_BUSINESS_SHORT_CODE,
//     PhoneNumber: "254700258098",
//     CallBackURL: "https://mydomain.com/pat",
//     AccountReference: "Test",
//     TransactionDesc: "Test"
//   });
  res.json({ phone, amount });
};
export default lipaNaMpesaOnline;
