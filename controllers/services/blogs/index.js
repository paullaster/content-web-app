//Blog Index file
const createBlog = require ("./create.blog");
const updateBlogs= require ( "./update.blogs");
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