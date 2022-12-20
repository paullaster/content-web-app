import db from '../../../utils/database.connection';

const deleteBlogs = (req, res, next) => {
    const {blogid} = req.params;
    let query = `DELETE FROM blog WHERE blogid = '${blogid}'`;
    db.query (query, (err, rows) => {
        if (err) {
            res
            .status (500)
            .json ( {
                status: 'error',
                rows
            });
            return;
        };
        res.status (200)
    });
};
export default deleteBlogs