import BlogModel from "../../../models/blog.schema";
const deleteBlogs = (req, res, next) => {
    const {blodId} = req.query;
    BlogModel.deleteOne( {blodId})
    .then ( (blog) => {
        res
        .status(200)
        .json ( {
            code: 'success',
            message: 'Blog deleted successfully',
        });
    }
    )
    .catch ( (err) => {
        res
        .status(500)
        .json ( 
            {
                code: 'error',
                error:err.message,
            }
        );
    });
};
export default deleteBlogs