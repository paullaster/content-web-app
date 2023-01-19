const fetch = (...args) =>
  import("node-fetch").then(({ default: fetch }) => fetch(...args));
const dotenv = require("dotenv");
dotenv.config();

//Internal dependencies:
const timeStamp = require("../../../utils/timestamp");
const newPassword = require("../../../utils/generate.mpesa.password");

//LIPA NA MPESA API:
const lipaNaMpesaOnline = (req, res) => {
  const phone = req.body.phone;
  const amount = req.body.amount;
  const token = req.accessToken;
  const apiUrl =
    "https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest";
  //SEND REQUEST TO API:
  fetch(
    apiUrl,
    {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      }
    },
  )
    .then(response => response.json())
    .then(response => {
      res.status(200).json({
        status: "success",
        data: response
      });
    })
    .catch(err => {
      res.status(500).json({
        status: "error",
        error: err.message
      });
    });
};
module.exports = lipaNaMpesaOnline;
