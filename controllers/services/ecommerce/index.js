//Internal dependencies
import createProduct from  './create.products';
import fetchProducts from './fetch.products';
import

const Product = {
    new: createProduct,
    all_products: fetchProducts
};
export default Product;