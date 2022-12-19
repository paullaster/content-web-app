import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const Attribute = new Schema ( {
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