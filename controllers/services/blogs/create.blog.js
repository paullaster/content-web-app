const  db = require ( '../../../utils/database.connection');
const  blogId = require ( "../../../utils/create.blogid");
const createBlog = (req, res) => {
    const {title, body} = req.body;
    const blogid = blogId();
    let newBlog = {
        blogid,
        title: title,
        content: body,
        date: new Date(),
    };
    let query = 'INSERT INTO blog SET?';
    db.query(query, newBlog, (err, rows) => {
        if (err) {
            res
            .status (500)
            .json ( {
                status: 'error',
                error: err.message,
            });
            return;
        };
        res
        .status (200)
        .json(
            {
                status: 'success',
                massage: blogid + ' created successfully'
            }
        )
    });
};
module.exports = createBlog;