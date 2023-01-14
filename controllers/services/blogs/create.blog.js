const db = require("../../../utils/database.connection");
const blogId = require("../../../utils/create.blogid");
const createBlog = (req, res) => {
  const { title, body } = req.body;
  const blogid = blogId();
  let newBlog = {
    blogid,
    title: title,
    content: body,
    image: req.file.path,
    date: new Date()
  };
  let query = "INSERT INTO blog SET?";
  db
    .query(query, newBlog)
    .then(rows => {
      res.status(200).json({
        status: "success",
        massage: blogid + " created successfully"
      });
    })
    .catch(err => {
      res.status(500).json({
        status: "error",
        error: err.message
      });
    });
};
module.exports = createBlog;
