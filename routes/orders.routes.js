const express = require('express');
const OrdersRoute = express.Router();

//INTERNAL DEPENDECIES:
const Orders = require ('../controllers/services/orders/index');

OrdersRoute.route('/orders').post(Orders.newOrders);
module.exports = OrdersRoute;