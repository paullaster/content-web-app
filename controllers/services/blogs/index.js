//Blog Index file
import createBlog from "./create.blog";
import updateBlogs from "./update.blogs";
import deleteBlogs from "./delete.blogs";
import fetchBlogs from "./fetch.blog";

//Blog
const Blog = {
    new: createBlog,
    update: updateBlogs,
    delete: deleteBlogs,
    fetch: fetchBlogs
}
export default Blog;