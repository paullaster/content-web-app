import db from "../../../utils/database.connection";
const updateBlogs = (req, res) => {
    const {blogid} = req.params;
    const {title, body} = req.body;
    
    let query = `UPDATE blog SET title = '${title}', 
    content = '${body}' WHERE blogid = '${blogid}'`;
    db.query(query, (err, res) => {
        if (err) {
            res.status (500).json ( {
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
    });
};
export default updateBlogs;



  