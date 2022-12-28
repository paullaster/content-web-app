//FETCH ALL PRODUCTS
const db = require ("../../../utils/database.connection");
const deleteProduct = (req, res) => {
  const { productid } = req.params;

  let query = `DELETE FROM products WHERE productid = '${productid}'`;
  db.query(query, (err, rows) => {
    if (err) {
      res.status(500).json({
        status: "error",
        error: err.message
      });
      return;
    }
    res.status(200).json({
      status: "success",
      message: "Product with id " + productid + " was deleted",
    });
  });
};
module.exports = deleteProduct;
