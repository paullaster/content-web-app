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
  });
  Product.findOne({ _id: _id })
    .then(product => {
      Product.updateOne({ _id: product._id }, [
        {
          $set: {
            title: title,
            description: description,
            image: image,
            price: price
          }
        }
      ]).then(() => {
        AttributeModel.updateOne({ _id: product._id }, [
          { $set: { color: color, size: size, quantity: quantity } }
        ]).then(() => {
          res.status(200).json({
            code: "success",
            message: "Product updated successfully!"
          });
        });
      });
    })
    .catch(err => {
      res.status(500).json({
        code: "error",
        error: err.message
      });
    });
};
export default updateProduct;
