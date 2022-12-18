import mongoose from 'mongoose';
import AuthSchema from './author.schema';
const Schema = mongoose.Schema;
const BlogSchema = new Schema ( {
 Title: {
    type: String,
    required: true,
    maxLength: 100,
 },
 Content: {
    type: String,
    required: true,
 },
//  Author: {
//     type: [AuthSchema]
//  },
 creationDate: {
    type: Date,
    default: new Date(),
 },
});

const BlogModel = mongoose.model('Blog', BlogSchema)

export default BlogModel;