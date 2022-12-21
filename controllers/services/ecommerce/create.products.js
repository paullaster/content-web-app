//CREATING PRODUCT
import db from "../../../utils/database.connection";
const createProduct = (req, res) => {
    const { variation:{color, size, quantity}, ...product} = req.body;
    let newProduct ={
        ...product,
    };
    let newAttribute ={
        color: color,
        size: size, 
        quantity: quantity,
    };

    const query = `INSERT INTO products SET?`;
    db.query(query, newAttribute, (error, rows) => {
        if (error) {
            res
            .status(500)
            .json ( {
                status: 'error',
                error: error.message,
            })
            return;
        };
        res
        .status(200)
        .json( {
            status: 'success',
            message: 'Attributes added successfully '
        })
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