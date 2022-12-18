import BlogModel from "../../../models/blog.schema";
const createBlog = (req, res) => {
    const {title, body} = req.body;
    let newBlog = new BlogModel({
        Title: title,
        Content: body
    });
    res
    .setHeader('Content-Type', 'application/json')
    .send();

};
export default createBlog;