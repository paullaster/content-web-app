import BlogModel from "../../../models/blog.schema";
const fetchBlogs = (req, res) => {
    BlogModel.find( {})
    .then ( (blogs) => {
        res
        .status(200)
        .json(
            {
                code:'success',
                blogs:blogs
            }
        );
    })
    .catch ( (err) => {
        res
        .status(500)
        json ( {
            code:'error',
            error:err.message,
        });
    });
};
export default fetchBlogs;