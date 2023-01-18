//DEPENDENCIES:
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
const dotenv = require('dotenv').config();

//INTERNAL DEPENDENCIES:


const customerOrders = (req, res, next) => {
    const [ order_details,  amount, address, paymentDetail] = req.body;
    const paymentBody = {

    };
    res.json({paymentDetail,amount:amount.amount});

};
module.exports = customerOrders;