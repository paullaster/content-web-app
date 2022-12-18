import BlogModel from "../../../models/blog.schema";
const createBlog = (req, res) => {
    const {title, body} = req.body;
    let newBlog = new BlogModel({
        Title: title,
        Content: body
    });
    newBlog.save ()
    .then ( (data) => {
        res
        .status (200)
        .json({
            code: 'success',
            data: data
        });
    })
    .catch ( (err) => {
        res
        .status (500)
        .json( {
            code:'error',
            error: err.message,
        } );
    });
};
export default createBlog;