//Dependencies
import express from 'express';

//Internal dependencies
import Product from '../controllers/services/ecommerce/index';

const ProductRoutes = express.Router();

ProductRoutes.route( '/new').post (Product.new);
ProductRoutes.route( '/all_products').get (Product.all_products);

export default ProductRoutes;
