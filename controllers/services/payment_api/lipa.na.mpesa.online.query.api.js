//DEPENDENCIES:
const fetch = (...args) =>
  import("node-fetch").then(({ default: fetch }) => fetch(...args));

//INTERNAL DEPENDENCIES:
const newPassword = require ("../../../utils/generate.mpesa.password");
const timeStamp = require ("../../../utils/timestamp");
const queryLipaNaMpesaOnline = (req, res) => {

    const statusQueryURI = 
    " https://sandbox.safaricom.co.ke/mpesa/stkpushquery/v1/query";

    //SENDING REQUEST TO SAFARICOM API:
    fetch (statusQueryURI, {
      BusinessShortCode:process.env.MPESA_BUSINESS_SHORT_CODE,
      Password: newPassword(),
      Timestamp: timeStamp(),
      CheckoutRequestID: req.body.CheckoutRequestID
    })
    .then( response => {
      return response.json ();
    })
    .then ( response => {
      res.status(200).json( {
        status: "success",
        data: response,
      });
    })
    .catch (error => {
      res.status(500).json( {
        status: "error",
        error: error.message,
      });
    });
};
module.exports = queryLipaNaMpesaOnline;