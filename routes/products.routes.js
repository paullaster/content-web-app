//Dependencies
import express from 'express';

//Internal dependencies
import Product from '../controllers/services/ecommerce/index';
import utils from './util.routes';
const ProductRoutes = express.Router();

ProductRoutes.route( '/new').post ( utils.verifyToken, utils.uploadProductImage, Product.new);
ProductRoutes.route( '/all_products').get (Product.all_products);
ProductRoutes.route( '/one_products/:_id').get (Product.single_product);
ProductRoutes.route( '/delete/:_id').delete (utils.verifyToken, Product.delete);
ProductRoutes.route( '/update/:_id').put (utils.verifyToken, utils.uploadProductImage, Product.update);
export default ProductRoutes;
