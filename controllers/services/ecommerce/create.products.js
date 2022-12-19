//CREATING PRODUCT
import Product from '../../../models/product.schema';
import Attribute from '../../../models/products.attribute.model';
const createProduct = (req, res) => {
    const { variation, ...product} = req.body;
    let newProduct = new Product ( {
        ...product,
    });
    for (let item of variation) {};
    let newAttribute = new Attribute ( {
        ...variation,
    })
    console.log([...variation])
    res.json ({newProduct, newAttribute});
};
export default createProduct;