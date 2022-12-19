//Dependencies
import express from 'express';

//Internal dependencies
import Product from '../controllers/services/ecommerce/index';

const ProductRoutes = express.Router();

ProductRoutes.route( '/new').post (Product.new);

export default ProductRoutes;
