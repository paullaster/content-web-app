//DEPENDENCIES:
const fetch = (...args) =>
  import("node-fetch").then(({ default: fetch }) => fetch(...args));
const dotenv = require("dotenv").config();

//INTERNAL DEPENDENCIES:

const customerOrders = (req, res, next) => {
  const [order_details, amount, address, paymentDetail] = req.body;

  const token = req.header('Authorization').split(' ')[1];
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
        'Authorization': 'Bearer ' +token,
    }
  })
  .then ( (response)=> {
    return response.json();
  })
  .then ( (resp)=> {
    res
    .status(200)
    .json( {
        status: "success",
        data: resp,
        paymentBody
    });
  })
  .catch ( (error) => {
    res
    .status(500)
    .json({
        status: error,
        error: error.message,
        paymentBody
    });
  });
};
module.exports = customerOrders;
