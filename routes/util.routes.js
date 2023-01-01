const uploadProductImage = require ("../utils/upload.image");
const uploadBlogImage = require ( "../utils/upload.blog.images");
const verifyToken = require ("../utils/verify.user.token");
const generateToken = require ("../utils/generate.mpesa.user.token");
const utils = {
    uploadProductImage,
    verifyToken,
    generateToken, 
};
module.exports = utils;