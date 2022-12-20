import db from "../../../utils/database.connection";
const fetchBlogs = (req, res) => {
    let query = 'SELECT * FROM blog';
    db.query(query, (err, rows) => {
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
    }); 
};
export default fetchBlogs;