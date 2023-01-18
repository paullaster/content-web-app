//DEPENDENCIES:
const fetch = (...args) =>
  import("node-fetch").then(({ default: fetch }) => fetch(...args));
const dotenv = require("dotenv").config();

//INTERNAL DEPENDENCIES:

const customerOrders = (req, res, next) => {
  const [order_details, amount, address, paymentDetail] = req.body;

  //SENDING DATA TO MPESA EXPRESS API TO MAKE PAYMENTS:
  const paymentBody = {
    phone: paymentDetail.paymentDetail,
    amount: amount.amount
  };
  const PAYMENT_URI = `http://localhost:${process.env
    .APP_PORT}/payment/${process.env.MPESA_STK_PUSH_URI}`;

  fetch (PAYMENT_URI, {
    method: 'POST',
    body: JSON.stringify(paymentBody),
    headers: {
        'Content-Type': 'application/json',
    }
  })

  //res.json({paymentDetail,amount:});
};
module.exports = customerOrders;
