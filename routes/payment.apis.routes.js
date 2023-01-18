const dotenv = require("dotenv");

const express = require("express");
const PaymentAPI = require("../controllers/services/payment_api");
const utils = require("./util.routes");

const PaymentAPIRouter = express.Router();
dotenv.config();

PaymentAPIRouter.route(`/${process.env.MPESA_STK_PUSH_URI}`).post(
  utils.verifyToken,
  utils.generateToken,
  PaymentAPI.stkPush
);
PaymentAPIRouter.route(`/${process.env.MPESA_CALL_BACK_API_NAME}`).post(
  utils.verifyToken,
  utils.generateToken,
  PaymentAPI.callback
);

PaymentAPIRouter.route(`/${process.env.MPESA_QUERY_ONLINE_PAYMENT_STATUS}`)
module.exports = PaymentAPIRouter;
