const customerOrders = (req, res, next) => {
    const [] = req.body;
    res.json({q:req.body});
};
module.exports = customerOrders;