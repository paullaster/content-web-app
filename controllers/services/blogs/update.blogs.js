import BlogModel from "../../../models/blog.schema";
const updateBlogs = (req, res) => {
    const {title, body, blogId} = req.body;
    BlogModel.find({
        _id: blogId,
    })
    .then ( (blog) => {
        res
        .json(blog)
    })
};
export default updateBlogs;