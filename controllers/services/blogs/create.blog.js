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
        .setHeader ("Content-Type", "application/json")
        .status (200)
        .json(data);
    })
    .catch ( (err) => {
        
    });
    res
    .setHeader('Content-Type', 'application/json')
    .send(newBlog);

};
export default createBlog;