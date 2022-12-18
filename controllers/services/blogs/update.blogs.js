import BlogModel from "../../../models/blog.schema";
const updateBlogs = (req, res) => {
    const {blogId} = req.query;
    const {title, body} = req.body;
    BlogModel.find({
        _id: blogId,
    })
    .then ( (blog) => {
        if (blog.length !== 1) {
            res
            .status(404)
            .json ( {
                code: 'error',
                error: 'Blog not found!'
            })
        };
    })
    .catch ( (err) => {
        res
        .status(500)
        .json ( {
            code: 'error',
            error: err.message,
        });
    });
};
export default updateBlogs;