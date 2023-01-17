const customerOrders = (req, res, next) => {
    const [{amount}] = req.body;
    res.json(amount);
};
module.exports = customerOrders;