//Internal dependencies
const createProduct = require ( './create.products');
const fetchProducts = require ('./fetch.products');
const fetchSingleProduct = require ('./fetch.single.product');
const deleteProduct = require ('./delete.product');
const updateProduct = require ('./update.product');

const Product = {
    new: createProduct,
    all_products: fetchProducts,
    single_product: fetchSingleProduct,
    delete: deleteProduct,
    update: updateProduct
};
module.exports = Product;