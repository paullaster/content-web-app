
const lipaNaMpesaOnline = require ("./lipa.na.mpesa.online");
const paymentApiCallBack = require ("./payment.api.callback");
const PaymentAPI = {
    stkPush: lipaNaMpesaOnline,
    callback: paymentApiCallBack,
};
module.exports = PaymentAPI;