const db = require("../../../utils/database.connection");
const fetchBlogs = (req, res) => {
  let query = "SELECT * FROM blog";
  db
    .query(query)
    .then(rows => {
      if (rows[0].length) {
        res.status(500).json({
          status: "error",
          error: "Blogs are currently unavailable!"
        });
        return;
      };
      res.status(200).json({
        status: "success",
        message: "Blogs retrieved successfully ",
        data: rows[0],
      });
    })
    .catch(err => {
      res.status(500).json({
        status: "error",
        error: err.message
      });
    });
};
module.exports = fetchBlogs;
