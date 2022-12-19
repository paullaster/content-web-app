//Internal dependencies
import createProduct from  './create.products';
import fetchProducts from './fetch.products';
import fetchSingleProduct from './fetch.single.product';

const Product = {
    new: createProduct,
    all_products: fetchProducts,
    single_product: fetchSingleProduct
};
export default Product;