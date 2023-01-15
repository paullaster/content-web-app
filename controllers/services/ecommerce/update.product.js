//UPDATE SINGLE PRODUCT ALL PRODUCTS
const multer = require("multer");

//INTERNAL DEPENDENCIES:
const db = require("../../../utils/database.connection");
const uploadProductImage = require("../../../utils/upload.image");

const updateProduct = (req, res) => {
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
    const { productid } = req.params;
    const { title, description, price, color, size, quantity } = req.body;

    let query = `UPDATE products SET title = '${title}', 
    description = '${description}',
    price = '${price}' WHERE productid = '${productid}'`;

    db
      .query(query)
      .then(rows => {
        if (rows[0].affectedRows < 1) {
          res.status(404).json({
            status: "error",
            error: "There was an error updating product",
            st:3
          });
          return;
        }
        let query = `UPDATE attributes SET color = '${color}', 
    size = '${size}', quantity = '${quantity}'
    WHERE productid = '${productid}'`;
        db
          .query(query)
          .then(rows => {
            if (rows[0].affectedRows < 1) {
              res.status(404).json({
                status: "error",
                error: "There was an error updating the product",
                rows: rows,
                st: 1
              });
              return;
            }
            const imageUpdate = req.files.map(file => {
              return [file.filename, file.path];
            });
            const sql = 
            `UPDATE images SET imageid=?, path=? WHERE product = '${productid}'
            UPDATE images SET imageid=?, path=? WHERE product = '${productid}'
            UPDATE images SET imageid=?, path=? WHERE product = '${productid}'
            UPDATE images SET imageid=?, path=? WHERE product = '${productid}'`;
            db
              .query(sql, [imageUpdate])
              .then(rows => {
                if (rows[0].changedRows < 1) {
                  res.status(400).json({
                    status: "error",
                    error: "There was an error updating the product",
                    st: 2
                  });
                  return;
                }
                res.status(200).json({
                  status: "success",
                  message:
                    "Product  with id " + productid + " updated successfully",
                });
              })
              .catch(err => {
                res.status(400).json({
                  status: "error",
                  error: err.message,
                });
              });
          })
          .catch(err => {
            res.status(500).json({
              status: "error",
              error: err.message
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
module.exports = updateProduct;
