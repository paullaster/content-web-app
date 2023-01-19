//DEPENDENCIES:
const fetch = (...args) =>
  import("node-fetch").then(({ default: fetch }) => fetch(...args));
require("dotenv").config();

//INTERNAL DEPENDENCIES:
const db = require ("../../../utils/database.connection");
const orderId = require("../../../utils/create.orderid");
const itemId = require("../../../utils/create.itemid");
const addressId = require("../../../utils/create.addressid");

const customerOrders = (req, res, next) => {
  const [order_details, amount, address, paymentDetail] = req.body;
  const user = req.user.email;
  const orderid  = orderId ();
  const itemid  = itemId();
  const addressid  = addressId ();
  const token = req.header("Authorization").split(" ")[1];

  //SENDING DATA TO MPESA EXPRESS API TO MAKE PAYMENTS:
  const paymentBody = JSON.stringify({
    phone: paymentDetail.paymentDetail,
    amount: amount.amount
  });

  const PAYMENT_URI = `http://localhost:3000/api/payment/${process.env
    .MPESA_STK_PUSH_URI}`;

  fetch(PAYMENT_URI, {
    method: "POST",
    body: paymentBody,
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token
    }
  })
    .then(response => {
      return response.json();
    })
    .then(resp => {
      if (resp.data.errorCode) {
          /**
   * @todo
   * Take order item processing inside the block
   * of checking if transcation payment was done successfully
   */
  const newOrderItems = order_details.map ( (item) => {
    return [
      itemid,
      item.title,
      orderid,
      item.id,
      item.image,
      item.itemSize,
      item.itemQuantityToBuy
    ];
  });

  console.log(newOrderItems);
  
        res.status(404).json({
          status: "error",
          error:
            "There was an error while processing the payment request, please try again later!"
        });
        return;
      }
      if (resp.data.ResponseCode === 0) {
        //CHECKING STATUS OF ONLINE TRANSACTION:
        const QUERYPAYMENTSTATUSURI = `https://2fb9-105-163-2-18.in.ngrok.io/api/payment/${process
          .env.MPESA_QUERY_ONLINE_PAYMENT_STATUS}`;

        fetch(QUERYPAYMENTSTATUSURI, {
          method: "POST",
          body: JSON.stringify({
            CheckoutRequestID: resp.data.CheckoutRequestID
          })
        })
          .then(response => response.json())
          .then(response => {
            if (response.data.ResultCode === 0) {

              res.status(200).json({
                status: "success",
                data: response.data.ResultDesc
              });
              return;
            }
            res.status(404).json({
              status: "error",
              error: "Your payment was not processed!"
            });
          })
          .catch(error => {
            res.status(500).json({
              status: "error",
              error: error.message
            });
          });
      }
      res.status(500).json({
        status: "error",
        error:
          "Sorry, We're experiencing error processing your payment request, Please check through your request and try again!"
      });
    })
    .catch(error => {
      res.status(500).json({
        status: error,
        error: error.message
      });
    });
};
module.exports = customerOrders;
