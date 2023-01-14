//CREATING PRODUCT
const db = require ("../../../utils/database.connection");
const AttributeId = require ("../../../utils/create.attributeid");
const productId = require ("../../../utils/create.productid");
const createProduct = (req, res) => {
  const { color, size, quantity, ...product } = req.body;
  
  const productid = productId();
  let newProduct = {
    ...product,
    productid: productid
  };
  let newAttribute = {
    variationid: AttributeId(),
    color: color,
    size: size,
    quantity: quantity,
    productid: productid
  };
  let newImage = {
    imageid: req.file.filename,
    path: req.file.path,
    product: productid,
  };
  const queryProd = `INSERT INTO products SET?`;
  db.query(queryProd, newProduct)
  .then((rows) => {
    if (err) {
      res.status(500).json({
        status: "error",
        error: err.message
      });
      return;
    }

    const queryAttr = `INSERT INTO attributes SET?`;
    db.query(queryAttr, newAttribute, (error, rows) => {
      if (error) {
        res.status(500).json({
          status: "error",
          error: error.message
        });
        return;
      };
      const sql = `INSERT INTO images SET?`;
      db.query(sql, newImage, (err, rows) => {
        if (err) {
            res.status(500).json({
                status: "error",
                error: err.message
            });
            return;
        };
        res.status(200).json({
            status: "success",
            message: "Product  with id " +productid + " inserted successfully"
        });
      });
    });
  });
};
module.exports = createProduct;
