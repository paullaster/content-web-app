import express from 'express';
const route = express.Router();


//Internal dependencies
import createBlog from '../controllers/services/blogs/create.blog';
import fetchBlogs from '../controllers/services/blogs/fetch.blog';
import updateBlogs from '../controllers/services/blogs/update.blogs';
import deleteBlogs from '../controllers/services/blogs/delete.blogs';

route('/new').post (createBlog);
route('/get').get(fetchBlogs);
route('update').put (updateBlogs);
route('/delete').delete (deleteBlogs);