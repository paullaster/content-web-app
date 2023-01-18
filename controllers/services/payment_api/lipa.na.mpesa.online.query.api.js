//DEPENDENCIES:


//INTERNAL DEPENDENCIES:
const newPassword = require ("../../../utils/generate.mpesa.password");
const timeStamp = require ("../../../utils/timestamp");
const queryLipaNaMpesaOnline = (req, res) => {

    const statusQueryURI = 
    " https://sandbox.safaricom.co.ke/mpesa/stkpushquery/v1/query";
    console.log ("req.body");
};
module.exports = queryLipaNaMpesaOnline;