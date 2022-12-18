import mongoose from 'mongoose';

const Schema = mongoose.Schema;
const AuthSchema = new Schema ( {
    name: {
        type:String,
    },
    designation: {
        type: String
    }
});

export default AuthSchema;