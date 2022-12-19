//CREATING PRODUCT
import Product from '../../../models/product.schema';

const createProduct = (req, res) => {
    const {...product} = req.body;
    let newProduct = new Product ( {
        ...product,
    })
    res.json (newProduct);
};
export default createProduct;