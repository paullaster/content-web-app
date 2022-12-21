//FETCH ALL PRODUCTS
import db from "../../../utils/database.connection";

//Find all products
const fetchProducts = (req, res) =>{
    let query = `SELECT products.productid AS id , products.title AS title, 
    products.description AS description, products.price AS price, products.image AS image,
     `;
};
export default  fetchProducts;