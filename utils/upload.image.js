import multer from "multer";

const upload = multer( {
    dest: 'public/images/products',
});

export default upload;