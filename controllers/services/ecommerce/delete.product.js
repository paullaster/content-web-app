//FETCH ALL PRODUCTS
import db from "../../../utils/database.connection";
const deleteProduct = (req, res) =>{
    const {productid} = req.params;
    
    let query = `DELETE FROM blog WHERE blogid = '${blogid}'`;
    db.query (query, (err, rows) => {
        if (err) {
            res
            .status (500)
            .json ( {
                status: 'error',
                error: err.message,
            });
            return;
        };
        res
        .status (200)
        .json (
            {
                status: 'success',
                message: 'Blog with id ' + blogid +' deleted'
            }
        );
    });
};
export default  deleteProduct;