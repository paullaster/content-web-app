const createBlog = (req, res) => {
    res
    .setHeader('Content-Type', 'application/json')
    .send("this is create blog");

};
export default createBlog;