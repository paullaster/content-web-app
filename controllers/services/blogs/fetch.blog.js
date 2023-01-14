const db = require ("../../../utils/database.connection");
const fetchBlogs = (req, res) => {
    let query = 'SELECT * FROM blog';
    db.query(query)
    .then((rows) => {
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
        .json (
            {
                status: 'success',
                message: 'Blogs retrieved successfully ',
                data: rows,
            }
        );
    })
    .catch( ()); 
};
module.exports = fetchBlogs;