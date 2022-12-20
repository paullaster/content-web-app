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
    db.query(query, newBlog, (err, rows) => {
        if (err) {
            res
            .status (500)
            .json ( {
                status: 'error',
                rows
            });
            return;
        };
    });
};
export default createBlog;