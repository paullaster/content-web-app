import mysql from "mysql2";
import db from '../../../utils/database.connection';
const createBlog = (req, res) => {
    const {title, body} = req.body;

    let newBlog = new BlogModel({
        Title: title,
        Content: body,
        date: Date.now()
    });
    let query = 'INSERT INTO blog SET?';
    db.query()
};
export default createBlog;