//CREATING PRODUCT
//DEPENDECIES
const multer = require('multer');

//INTERNAL DEPENDENCIES:
const db = require("../../../utils/database.connection");
const AttributeId = require("../../../utils/create.attributeid");
const productId = require("../../../utils/create.productid");
const uploadProductImage = require ( './utils/upload.image');

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
    product: productid
  };
  const queryProd = `INSERT INTO products SET?`;
  db
    .query(queryProd, newProduct)
    .then(rows => {
      if (rows[0].affectedRows < 1) {
        res.status(500).json({
          status: "error",
          error: "there was an error processing the product"
        });
        return;
      }
      const queryAttr = `INSERT INTO attributes SET?`;
      db
        .query(queryAttr, newAttribute)
        .then(rows => {
          if (rows[0].affectedRows < 1) {
            res.status(500).json({
              status: "error",
              error: "there was an error processing the product"
            });
            return;
          }
          uploadProductImage ( req, res, (error) => {

          });
          const sql = `INSERT INTO images SET?`;
          db
            .query(sql, newImage)
            .then(rows => {
              if (rows[0].affectedRows < 1) {
                res.status(500).json({
                  status: "error",
                  error: "there was an error processing the product"
                });
                return;
              }
              res.status(200).json({
                status: "success",
                message:
                  "Product  with id '" + productid + "' inserted successfully",
              });
            })
            .catch(err => {
              res.status(500).json({
                status: "error",
                error: err.message
              });
            });
        })
        .catch(error => {
          res.status(500).json({
            status: "error",
            error: error.message
          });
        });
    })
    .catch(err => {
      res.status(500).json({
        status: "error",
        error: err.message
      });
    });
};
module.exports = createProduct;
