//Dependencies
const express = require ('express');

//Internal dependencies
const Product = require ('../controllers/services/ecommerce/index');
const utils = require ('./util.routes');
const ProductRoutes = express.Router();

ProductRoutes.route( '/new').post ( utils.verifyToken, Product.new);
ProductRoutes.route( '/all_products').get (Product.all_products);
ProductRoutes.route( '/one_products/:productid').get (Product.single_product);
ProductRoutes.route( '/delete/:productid').delete (utils.verifyToken, Product.delete);
ProductRoutes.route( '/update/:productid').put (utils.verifyToken, utils.uploadProductImage, Product.update);
module.exports = ProductRoutes;
