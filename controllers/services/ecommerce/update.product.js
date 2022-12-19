//FETCH ALL PRODUCTS
import Product from '../../../models/product.schema';
import AttributeModel from '../../../models/products.attribute.model';

const updateProduct = (req, res) =>{
    const {_id} = req.params;
    const {title, description, image, price, variation:{color, size,quantity}} = req.body;
    Product.findOne({_id:_id})
    .then ((product) =>{
        Product.updateOne(
            {_id:product._id},
            [
             { $set: {title:title, description:description, image:image, price:price}}
            ]
            )
        .then ( () => {
            AttributeModel.updateOne( 
                {_id: product._id},
                [
                    { $set: {color:color, size:size, quantity:quantity}}
                ]
            )
            .then ( () => {
                res
                .status(200)
                .json({
                    code: 'success',
                    message: "Product updated successfully!",
                });
            });
        });
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