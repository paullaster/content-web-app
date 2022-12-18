import mongoose from 'mongoose';

const Schema = mongoose.Schema;
const BlogSchema = new Schema ( {
 Title: {
    type: STRING,
    required: true,
    maxLength: 100,
 },
 Content: {
    type: STRING,
    required: true,
 },
 Author: {
    type: [AuthorSchema]
 }
});