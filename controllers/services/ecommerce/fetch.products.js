//FETCH ALL PRODUCTS
const db = require("../../../utils/database.connection");

//Find all products
const fetchProducts = (req, res) => {
  let query = `SELECT products.productid AS id , products.title AS title, 
    products.description AS description, products.price AS price, 
    GROUP_CONCAT(images.path SEPARATOR ',') AS image, attributes.variationid AS variation_id, 
    attributes.color AS color, attributes.size AS size, attributes.quantity AS quantity 
    FROM products 
    JOIN attributes ON attributes.productid = products.productid
    JOIN images ON images.product = products.productid`;
  db
    .query(query)
    .then(rows => {
      if (rows[0].length < 1) {
        res.status(400).json({
          status: "error",
          error: "Products are not available"
        });
        return;
      }
      res.status(200).header({
        'Access-Control-Allow-Origin': "*"
      }).json({
        status: "success",
        data: rows[0]
      });
    })
    .catch(err => {
      res.status(500).json({
        status: "error",
        error: err.message
      });
    });
};
module.exports = fetchProducts;
