//FETCH ALL PRODUCTS
import db from "../../../utils/database.connection";
const fetchSingleProduct = (req, res) => {
  const { productid } = req.params;

  let query = `
    SELECT products.productid AS id , products.title AS title, 
    products.description AS description, products.price AS price, products.image AS image,
    attributes.variationid AS variation_id, attributes.color AS color, 
    attributes.size AS size, attributes.quantity AS quantity WHERE productid = '${productid}'
    `;
  db.query(query, (err, rows) => {
    if (err) {
        res.status(500).json({
            status: 'error',
            data: rows,
        });
        return;
    };
  });
};
export default fetchSingleProduct;
