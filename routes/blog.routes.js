import express from 'express';
const BlogRoutes = express.Router();


//Internal dependencies
import createBlog from '../controllers/services/blogs/create.blog';
import fetchBlogs from '../controllers/services/blogs/fetch.blog';
import updateBlogs from '../controllers/services/blogs/update.blogs';
import deleteBlogs from '../controllers/services/blogs/delete.blogs';

BlogRoutes.route('/new').post (createBlog);
BlogRoutes.route('/get').get(fetchBlogs);
BlogRoutes.route('/update').put (updateBlogs);
BlogRoutes.route('/delete').delete (deleteBlogs);

export default BlogRoutes;