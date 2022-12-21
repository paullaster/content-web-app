//FETCH ALL PRODUCTS
import db from "../../../utils/database.connection";

const updateProduct = (req, res) => {
  const { productid } = req.params;
  const {
    title,
    description,
    image,
    price,
    variation: { color, size, quantity }
  } = req.body;

  let query = `UPDATE products SET title = '${title}', 
    description = '${description}', image = '${image}',
    price = '${price}' WHERE productid = '${productid}'`;

  db.query(query, (err, result) => {
    if (err) {
      res.status(404).json({
        status: "error",
        error: err.message
      });
      return;
    }
    let query = `UPDATE attributes SET color = '${color}', 
    size = '${size}', quantity = '${quantity}'
    WHERE productid = '${productid}'`;
    db.query(query, (err, rows) => {
        if (err) {
            res.status(404).json({
                status: "error",
                error: err.message,
            });
            return;
        };
        res.status(200).json({
            status: 'success',
            message: "Product updated successfully",
        });
    });
  });
};
export default updateProduct;
