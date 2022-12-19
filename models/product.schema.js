import mongoose from 'mongoose';

//Internal dependencies
import Attribute from './product.attribute';

const Schema = mongoose.Schema;

const productSchema = new Schema ( {
    title: {
        type:String,
        required: true
    },
    image: {
        data: Buffer,
        contentType: String,
    },
    description: {
        type:String,
        required: true
    },
    variation: {
        type: [Attribute]
    },
    price: {
        type: Number,
        required: true
    },
});

const ProductModel = mongoose.model('Product', productSchema);
export default ProductModel;