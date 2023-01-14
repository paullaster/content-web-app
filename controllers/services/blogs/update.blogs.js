const db = require("../../../utils/database.connection");
const updateBlogs = (req, res) => {
  const { blogid } = req.params;
  const { title, body } = req.body;

  let query = `UPDATE blog SET title = '${title}', 
    content = '${body}' WHERE blogid = '${blogid}'`;
  db
    .query(query)
    .then((rows) => {
      if (rows[0].changedRows < 1) {
        res.status(500).json({
          status: "error",
          error: err.message
        });
        return;
      };
      res.status(200).json({
        status: "success",
        message: "Blog with blog id " + blogid + " updated successfully",
        rows: rows[0].changedRows,
      });
    })
    .catch(err => {
      res.status(500).json({
        status: "error",
        error: err.message
      });
    });
};
module.exports = updateBlogs;
