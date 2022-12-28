import express from 'express';

//Internal dependencies:
const blogs = require ('./blog.routes');
const auth = require ('./auth.routes');
const products = require ( './products.routes');
const PaymentAPIRouter = require ('./payment.apis.routes');

const router = express.Router();

router.use ('/auth', auth);
router.use('/blog', blogs);
router.use('/product', products);
router.use('/payment', PaymentAPIRouter);

module.exports = router;