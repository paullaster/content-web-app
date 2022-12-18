import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const Attribute = new Schema ( {
    color: {
        type: String,
    },
    size: {
        type: Number,
    },
    quantity: {
        type: Number,
    }
})