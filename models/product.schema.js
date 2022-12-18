import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const productSchema = new Schema ( {
    title: {
        type:String,
        required: true
    },
    image: {
        type:'',
        required: true
    },
    description: {
        type:String,
        required: true
    },
    variation: {
        type: [Attribute]
    },
    price: {
        type: Float,
        required: true
    },
})