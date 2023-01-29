//DEPENDENCIES:
const fetch = (...args) =>
  import("node-fetch").then(({ default: fetch }) => fetch(...args));
require("dotenv").config();

//INTERNAL DEPENDENCIES:
const db = require("../../../utils/database.connection");
const orderId = require("../../../utils/create.orderid");
const itemId = require("../../../utils/create.itemid");
const addressId = require("../../../utils/create.addressid");

const customerOrders = (req, res, next) => {
  const [order_details, amount, address, paymentDetail] = req.body;
  const user = req.user.email;
  const orderid = orderId();
  // const token = req.header("Authorization").split(" ")[1];

  //SENDING DATA TO MPESA EXPRESS API TO MAKE PAYMENTS:
  // const paymentBody = JSON.stringify({
  //   phone: paymentDetail.paymentDetail,
  //   amount: amount.amount
  // });

  // const PAYMENT_URI = `http://localhost:3000/api/payment/${process.env
  //   .MPESA_STK_PUSH_URI}`;

  // fetch(PAYMENT_URI, {
  //   method: "POST",
  //   body: paymentBody,
  //   headers: {
  //     "Content-Type": "application/json",
  //     Authorization: "Bearer " + token
  //   }
  // })
  // .then(response => {
  //   return response.json();
  // })
  // .then(resp => {
  // if (resp.data.errorCode) {
  //   res.status(404).json({
  //     status: "error",
  //     error:
  //       "There was an error while processing the payment request, please try again later!"
  //   });
  //   return;
  // }
  // if (resp.data.ResponseCode === 0) {
  //CHECKING STATUS OF ONLINE TRANSACTION:
  // const QUERYPAYMENTSTATUSURI = `https://2fb9-105-163-2-18.in.ngrok.io/api/payment/${process
  //   .env.MPESA_QUERY_ONLINE_PAYMENT_STATUS}`;

  // fetch(QUERYPAYMENTSTATUSURI, {
  //   method: "POST",
  //   body: JSON.stringify({
  //     CheckoutRequestID: resp.data.CheckoutRequestID
  //   })
  // })
  // .then(response => response.json())
  // .then(response => {
  // if (response.data.ResultCode === 0) {
  /**
   * @done
   * Take order item processing inside the block
   * of checking if transcation payment was done successfully
   * SAVING ORDER:
    */

  console.log(order_details)
  const newOrderItems = order_details.order_details.map(item => {
    return [
      itemId(),
      item.title,
      orderid,
      item.id,
      item.image,
      item.itemSize,
      item.itemQuantityToBuy
    ];
  });
  //SAVING ORDER ITEM:
  const sql = `INSERT INTO order_item (itemid, name, orderid, productid, image, size, quantity) VALUES?`;
  db
    .query(sql, [newOrderItems])
    .then(rows => {
      if (rows[0].affectedRows < 1) {
        res.status(500).json({
          status: "error",
          error: "there was an error processing this order"
        });
        return;
      }
      //SAVING CUSTOMER's ADDRESS:
      const newAddress = {
        addressid: addressId(),
        fullname: address.address.firstname + " " + address.address.lastname,
        phonenumber: address.address.phonenumber,
        delivery_address: address.address.location_address,
        customer_id: user
      };
      const sql = `INSERT INTO address SET?`;
      db
        .query(sql, newAddress)
        .then(rows => {
          if (rows[0].affectedRows < 1) {
            res.status(500).json({
              status: "error",
              error: "there was an error processing this order"
            });
            return;
          }
          const newOrder = {
            orderid: orderid,
            customer_id: user
          };
          const sql = `INSERT INTO orders SET?`;
          db
            .query(sql, newOrder)
            .then(rows => {
              if (rows[0].affectedRows < 1) {
                res.status(500).json({
                  status: "error",
                  error: "there was an error processing this order"
                });
                return;
              }
              res.status(200).json({
                status: "success",
                message:
                  "Order with order id: " +
                  orderid +
                  " was created successfully"
              });
            })
            .catch(error => {
              res.status(500).json({
                status: "error",
                error: error.message
              });
            });
        })
        .catch(error => {
          res.status(500).json({
            status: "error",
            error: error.message
          });
        });
    })
    .catch(error => {
      res.status(500).json({
        status: "error",
        error: error.message
      });
    });
  return;
  // }
  // res.status(404).json({
  //   status: "error",
  //   error: "Your payment was not processed!"
  // });
  // })
  // .catch(error => {
  //   res.status(500).json({
  //     status: "error",
  //     error: error.message
  //   });
  // });
  // }
  // res.status(500).json({
  //   status: "error",
  //   error:
  //     "Sorry, We're experiencing error processing your payment request, Please check through your request and try again!"
  // });
  // })
  // .catch(error => {
  //   res.status(500).json({
  //     status: error,
  //     error: error.message
  //   });
  // });
};
module.exports = customerOrders;
