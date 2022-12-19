//CREATING PRODUCT
import { json } from 'express';
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
    newProduct.save ()
    .then ((data) => {
        newAttribute.save ()
    .then ((data) => {
        res
        .status(200)
        .json(
            {
                code: 'success',
                message: 'product saved successfully'
            }
        );
    })
    .catch ((err) =>{
        res
        .status(500)
        .json(
            {
                code: 'error',
                error: err.message
            }
        )
    });
    })
    .catch ((err) =>{
        res
        .status(500)
        .json(
            {
                code: 'error',
                error: err.message
            }
        )
    });
    
};
export default createProduct;