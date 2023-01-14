const  db = require ('../../../utils/database.connection');

const deleteBlogs = (req, res, next) => {
    const {blogid} = req.params;
    let query = `DELETE FROM blog WHERE blogid = '${blogid}'`;
    db.query (query)
    .then((rows) => {
        res
        .status (200)
        .json (
            {
                status: 'success',
                message: 'Blog with id ' + blogid +' deleted'
            }
        );
    })
    .catch ( (err) =>{

    });
};
module.exports= deleteBlogs