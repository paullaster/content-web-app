//FETCH ALL PRODUCTS
import Product from '../../../models/product.schema';
const fetchSingleProduct = (req, res) =>{
    const {_id} = req.params._id;
    console.log(_id)
    Product.findOne ( {
        _id: _id
    })
    .then((product) =>{
        res
        .status(200)
        .json( {
            code: 'success',
            product,
        });
    })
    .catch((err) =>{
        res
        .status(500)
        .json ({
            code: 'error',
            error: err.message,
        })
    });
};
export default  fetchSingleProduct;