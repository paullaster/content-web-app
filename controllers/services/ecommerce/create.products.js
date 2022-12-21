//CREATING PRODUCT
import db from "../../../utils/database.connection";
import AttributeId from "../../../utils/create.attributeid";
import productId from "../../../utils/create.productid";
const createProduct = (req, res) => {
    const { variation:{color, size, quantity}, ...product} = req.body;

    const productid = productId ();
    let newProduct = {
        ...product,
        productid: productid,
    };
    let newAttribute = {
        variation: AttributeId (),
        color: color,
        size: size, 
        quantity: quantity,
        productid: productid
    };
    const queryProd = `INSERT INTO products SET?`;
    db.query(queryProd, newProduct, (err, rows) => {
        if (err) {
            res
            .status(500)
            .json( {
                status: 'error',
                error: err.message,
            })
            return;
        };
        
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