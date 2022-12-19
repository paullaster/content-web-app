import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const Attribute = new Schema ( {
    _id: {
        type: mongoose.Schema.Types.ObjectId, ref: 'Product',
    },
    color: {
        type: String,
    },
    size: {
        type: String,
    },
    quantity: {
        type: Number,
    }
});
export default Attribute;