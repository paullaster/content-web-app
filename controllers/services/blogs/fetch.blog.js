import db from "../../../utils/database.connection";
const fetchBlogs = (req, res) => {
    let query = 'SELECT * FROM blog';
    db.query(query, (err, result) => {
        
    }); 
};
export default fetchBlogs;