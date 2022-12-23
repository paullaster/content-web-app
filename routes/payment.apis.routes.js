import * as dotenv from 'dotenv';

import express from 'express';
import PaymentAPI from "../controllers/services/payment_api";
import utils from './util.routes';

const PaymentAPIRouter = express.Router();
dotenv.config ();

PaymentAPIRouter.route('/stkpush').post(utils.verifyToken, utils.generateToken, PaymentAPI.stkPush);
PaymentAPIRouter.route()
export default PaymentAPIRouter;