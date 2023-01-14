//CREATING PRODUCT
//DEPENDECIES
const multer = require("multer");

//INTERNAL DEPENDENCIES:
const db = require("../../../utils/database.connection");
const AttributeId = require("../../../utils/create.attributeid");
const productId = require("../../../utils/create.productid");
const uploadProductImage = require("../../../utils/upload.image");

const createProduct = (req, res) => {
  uploadProductImage(req, res, error => {
    if (error instanceof multer.MulterError) {
      res.status(400).json({
        status: "error",
        error: error.message
      });
      return;
    } else if (error) {
      res.status(400).json({
        status: "error",
        error: error.message
      });
      return;
    }
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

    const queryProd = `INSERT INTO products SET?`;
    db.query(queryProd, newProduct).then(rows => {
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
          const newImages = req.files.map(file => {
            return {
              imageid: file.filename,
              path: file.path,
              product: productid
            };
          });
          newImages
            .map(image => {
              const sql = `INSERT INTO images SET?`;
              db
                .query(sql, image)
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
                      "Product  with id '" +
                      productid +
                      "' inserted successfully"
                  });
                })
                .catch(err => {
                  res.status(500).json({
                    status: "error",
                    error: err.message
                  });
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
  });
};
module.exports = createProduct;
