//FETCH ALL PRODUCTS
import Product from '../../../models/product.schema';
const deleteProduct = (req, res) =>{
    const {_id} = req.params;
    Product.findById({_id: _id})
    .then((product) =>{
        Product.deleteOne( {_id:product._id})
        .then(() =>{
            res
            .status(200)
            .json({
                code: 'success',
                message: 'Product deleted successfully',
            })
        })
    })
    .catch((error) =>{
        res
        .status(500)
        .json( {
            code: 'error',
            error: error.message,
        });
    });
};
export default  deleteProduct;