import express from 'express';
const BlogRoutes = express.Router();


//Internal dependencies
import Blog from '../controllers/services/blogs/index';

BlogRoutes.route('/new').post (Blog.new);
BlogRoutes.route('/get').get(Blog.fetch);
BlogRoutes.route('/update/:blogid').put (Blog.update);
BlogRoutes.route('/delete/:blogid').delete (Blog.delete);

export default BlogRoutes;