import express from 'express';
import PaymentAPI from "../controllers/services/payment_api";

const PaymentAPIRouter = express.Router();

PaymentAPIRouter.route('/stkpush').post()