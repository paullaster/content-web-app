//FETCH ALL PRODUCTS
import Product from '../../../models/product.schema';

//Find all products
const fetchProducts = (req, res) =>{
    Product.find( {})
    .then((products) =>{
        res
        .status(200)
        .json({
            code: 'success',
            products: products,
        });
    })
    .catch((err) =>{
        res
        .status(500)
        .json({
            code: 'error',
            error: err.message,
        });
    });
};
export default  fetchProducts;