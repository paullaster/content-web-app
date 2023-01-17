//DEPENDENCIES:
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

const customerOrders = (req, res, next) => {
    const [ order_details,  amount, address, paymentDetail] = req.body;


    res.json(paymentDetail);
};
module.exports = customerOrders;