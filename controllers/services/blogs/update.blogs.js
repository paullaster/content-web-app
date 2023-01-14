const db = require ("../../../utils/database.connection");
const updateBlogs = (req, res) => {
    const {blogid} = req.params;
    const {title, body} = req.body;
    
    let query = `UPDATE blog SET title = '${title}', 
    content = '${body}' WHERE blogid = '${blogid}'`;
    db.query(query)
    .then((err, rows) => {
        if (err) {
            res.status(500).json ( {
                status: 'error',
                error: err.message,
            });
            return;
        };
        res
        .status (200)
        .json (
            {
                status: 'success',
                message: 'Blog with blog id ' + blogid + ' updated successfully',
            }
        );
    })
    .catch( ());
};
module.exports = updateBlogs;



  