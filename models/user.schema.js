import mongoose from 'mongoose';
import {isEmail} from 'validator';
const Schema = mongoose.Schema;

const UserSchema = new Schema ( {
    firstname: {
        type: String,
        required: true,
    },
    lastname: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        validate: [isEmail]
    },
    phonenumber: {
        type: String,
        required: true,
        unique: true,
        //validate: [isMobilePhone (any)]
    },
    password: {
        type: String,
        minLength:8,
    },
    dateJoined: {
        type: Date,
        default: new Date (),
    },
});

const UserModel = mongoose.model("Users", UserSchema);

export default UserModel;