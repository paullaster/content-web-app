//FETCH ALL PRODUCTS
import Product from '../../../models/product.schema';
const fetchSingleProduct = (req, res) =>{
    const {_id} = req.params._id;
    res.json(_id)
    // Product.findOne ( {

    // })
};
export default  fetchSingleProduct;