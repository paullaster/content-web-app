import mysql from "mysql2";
import db from '../../../utils/database.connection';
import blogId from "../../../utils/create.blogid";
const createBlog = (req, res) => {
    const {title, body} = req.body;

    let newBlog = new BlogModel({
        blogid: blogId(),
        title: title,
        content: body,
        date: Date.now(),
    });
    let query = 'INSERT INTO blog SET?';
    db.query()
};
export default createBlog;