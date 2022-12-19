//CREATING PRODUCT
import Product from '../../../models/product.schema';

const createProduct = (req, res) => {
    const {...product} = req.body;
    res.json (product);
};
export default createProduct;