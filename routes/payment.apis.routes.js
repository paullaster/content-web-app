import express from 'express';
import PaymentAPI from "../controllers/services/payment_api";
import utils from './util.routes';

const PaymentAPIRouter = express.Router();

PaymentAPIRouter.route('/stkpush').post()