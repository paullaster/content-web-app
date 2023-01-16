const customerOrders = (req, res, next) => {
    console.log(req.body);
    res.json({q:req.body});
};
module.exports = customerOrders;