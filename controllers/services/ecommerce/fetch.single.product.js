//FETCH ALL PRODUCTS
const db = require ("../../../utils/database.connection");
const fetchSingleProduct = (req, res) => {
  const { productid } = req.params;
 console.log(productid);
  let query = `
    SELECT products.productid AS id , products.title AS title, 
    products.description AS description, products.price AS price, images.path AS image,
    attributes.variationid AS variation_id, attributes.color AS color, 
    attributes.size AS size, attributes.quantity AS quantity 
    FROM products
    JOIN attributes ON attributes.productid = products.productid
    JOIN images ON images.product = products.productid
    WHERE products.productid = '${productid}'
    `;
  db.query(query)
  .then((rows) => {
    if (rows[0].length < 1) {
        res.status(500).json({
            status: 'error',
            error: "Product with id '" + productid + "' was not found",
        });
        return;
    };
    res.status(200).json({
        status: 'success',
        data: rows[0],
    });
  })
  .catch ( (err) => {
    res.status(500).json({
      status: 'error',
      error: err.message
  });
  });
};
module.exports = fetchSingleProduct;
