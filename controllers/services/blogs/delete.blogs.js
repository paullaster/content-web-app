const db = require("../../../utils/database.connection");

const deleteBlogs = (req, res, next) => {
  const { blogid } = req.params;
  let query = `DELETE FROM blog WHERE blogid = '${blogid}'`;
  db
    .query(query)
    .then(rows => {
      if (rows[0].affectedRows < 1) {
        res.status(400).json({
          status: "error",
          error: err.message
        });
        return;
      }
      res.status(200).json({
        status: "success",
        message: "Blog with id " + blogid + " deleted"
      });
    })
    .catch(err => {
      res.status(500).json({
        status: "error",
        error: err.message
      });
    });
};
module.exports = deleteBlogs;
