//Internal dependencies
import createProduct from  './create.products';
import fetchProducts from './fetch.products';
import fetchSingleProduct from './fetch.single.product';
import deleteProduct from './delete.product';
import updateProduct from './update.product';

const Product = {
    new: createProduct,
    all_products: fetchProducts,
    single_product: fetchSingleProduct,
    delete: deleteProduct,
    update: updateProduct
};
export default Product;