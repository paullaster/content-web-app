const express = require ('express');

//Internal dependencies:
const blogs = require ('./blog.routes');
const auth = require ('./auth.routes');
const products = require ( './products.routes');
const PaymentAPIRouter = require ('./payment.apis.routes');
const orders = require ('./orders.routes');

const router = express.Router();

router.use ('/auth', auth);
router.use('/blog', blogs);
router.use('/product', products);
router.use('/payment', PaymentAPIRouter);
router.use('/orders', orders);

module.exports = router;