const customerOrders = (req, res, next) => {
    const [ order_details,  amount, address, paymentDetail] = req.body;
    res.json(amount);
};
module.exports = customerOrders;