import mysql from "mysql2";
import db from '../../../utils/database.connection';
const createBlog = (req, res) => {
    const {title, body} = req.body;
    let newBlog = new BlogModel({
        Title: title,
        Content: body
    });
    let query = 'INSERT INTO blog';
    db.query()
};
export default createBlog;