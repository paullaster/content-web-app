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

const AuthModel = mongoose.model('Author', AuthSchema);

export default AuthModel;