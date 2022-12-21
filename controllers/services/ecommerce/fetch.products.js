//FETCH ALL PRODUCTS
import db from "../../../utils/database.connection";

//Find all products
const fetchProducts = (req, res) =>{
    let query = `SELECT products.productid AS id , products.title AS title, 
    products.description AS description, products.price AS price, products.image AS image,
    attributes.variationid AS variation_id, attributes.color AS color, 
    attributes.size AS size, attributes.quantity AS quantity`;
    db.query(query, (err, rows) =>{
        if(err) {
            
        }
    });
};
export default  fetchProducts;