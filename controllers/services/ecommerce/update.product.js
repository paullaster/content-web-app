//FETCH ALL PRODUCTS
import Product from '../../../models/product.schema';
const updateProduct = (req, res) =>{
    const {_id} = req.params;
    const {title, description, image, price, variation} = req.body;
    Product.findOne({_id:_id})
    .then ((product) =>{
        Product.updateOne(
            {_id:product._id},

            )
    })
    .catch((err) =>{
        res
        .status (500)
        .json ({
            code: 'error',
            error: err.message,
        })
    });
};
export default  updateProduct;