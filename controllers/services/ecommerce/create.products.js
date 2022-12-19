//CREATING PRODUCT
import Product from '../../../models/product.schema';
import Attribute from '../../../models/products.attribute.model';
const createProduct = (req, res) => {
    const { variation:{color, size, quantity}, ...product} = req.body;
    let newProduct = new Product ( {
        ...product,
    });
    let newAttribute = new Attribute ({
        color: color,
        size: size, 
        quantity: quantity,
    });

    //saving product to db
    newProduct.save ();
    newAttribute.save ();
    res.json ({message: 'Product saved'})
    
};
export default createProduct;