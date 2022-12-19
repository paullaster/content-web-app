//CREATING PRODUCT
import Product from '../../../models/product.schema';
import Attribute from '../../../models/products.attribute.model';
const createProduct = (req, res) => {
    const { variation:[{color, size, quantity}], ...product} = req.body;
    let newProduct = new Product ( {
        ...product,
    });
    let newAttribute = new Attribute ({
        color: color,
        size: size, 
         quantity: quantity,
    });
    res.json ({newProduct, newAttribute});
};
export default createProduct;