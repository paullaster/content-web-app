//Blog Index file
import createBlog from "./create.blog";
import updateBlogs from "./update.blogs";
const deleteBlogs= require ( "./delete.blogs");
const fetchBlogs = require ("./fetch.blog");

//Blog
const Blog = {
    new: createBlog,
    update: updateBlogs,
    delete: deleteBlogs,
    fetch: fetchBlogs
};
module.exports = Blog;