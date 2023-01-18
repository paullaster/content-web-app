//DEPENDENCIES:
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

const customerOrders = (req, res, next) => {
    const [ order_details,  amount, address, paymentDetail] = req.body;
    const
    res.json({paymentDetail,amount:amount.amount});

};
module.exports = customerOrders;