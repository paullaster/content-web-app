const express = require ('express');
const BlogRoutes = express.Router();


//Internal dependencies
const Blog = require ('../controllers/services/blogs/index');
const Utils = require( './util.routes');

BlogRoutes.route('/new').post (Utils.verifyToken, Utils.uploadBlogImage, Blog.new);
BlogRoutes.route('/get').get(Blog.fetch);
BlogRoutes.route('/update/:blogid').put (Blog.update);
BlogRoutes.route('/delete/:blogid').delete (Blog.delete);

module.exports = BlogRoutes;