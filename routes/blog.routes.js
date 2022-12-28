const express = require ('express');
const BlogRoutes = express.Router();


//Internal dependencies
const Blog = require ('../controllers/services/blogs/index');

BlogRoutes.route('/new').post (Blog.new);
BlogRoutes.route('/get').get(Blog.fetch);
BlogRoutes.route('/update/:blogid').put (Blog.update);
BlogRoutes.route('/delete/:blogid').delete (Blog.delete);

module.exports = BlogRoutes;