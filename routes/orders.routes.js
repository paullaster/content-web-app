const express = require('express');
const OrdersRoute = express.Router();

//INTERNAL DEPENDECIES:
const Orders = require ('../controllers/services/orders/index');
const Utils = require('./util.routes');

OrdersRoute.route('/new-order').post(Orders.newOrders);
module.exports = OrdersRoute;