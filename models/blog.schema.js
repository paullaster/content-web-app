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
 Author: {
    type: [AuthSchema]
 }
});

export default BlogSchema;