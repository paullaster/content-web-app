
import lipaNaMpesaOnline from "./lipa.na.mpesa.online"
import paymentApiCallBack from "./payment.api.callback";
const PaymentAPI = {
    stkPush: lipaNaMpesaOnline,
    callback: paymentApiCallBack,
};
export default PaymentAPI;