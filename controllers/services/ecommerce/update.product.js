//FETCH ALL PRODUCTS
import Product from '../../../models/product.schema';
const updateProduct = (req, res) =>{
    const {_id} = req.params;
    Product.findOne({_id:_id})
    .then
};
export default  updateProduct;