
const updateBlogs = (req, res) => {
    const {blogid} = req.params;
    const {title, body} = req.body;
    
    let query = `UPDATE blog SET `
};
export default updateBlogs;



  