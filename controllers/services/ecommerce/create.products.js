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

    //saving product to db
    newAttribute.save ()
    .then ( (reps)=> {

    })
    .catch ( (err) => {
        res
        .status(500)
        .json ( {
            code: 'error',
            error: err.message,
        })
    });
    
};
export default createProduct;