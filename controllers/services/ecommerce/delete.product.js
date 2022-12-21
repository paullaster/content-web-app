//FETCH ALL PRODUCTS
import db from "../../../utils/database.connection";
const deleteProduct = (req, res) =>{
    const {productid} = req.params;
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