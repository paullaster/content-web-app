import express from 'express';
const BlogRoutes = express.Router();


//Internal dependencies
import Blog from '../controllers/services/blogs/index';

BlogRoutes.route('/new').post (Blog.new);
BlogRoutes.route('/get').get(Blog.fetch);
BlogRoutes.route('/update').put (Blog.update);
BlogRoutes.route('/delete').delete (Blog.delete);

export default BlogRoutes;