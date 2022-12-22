import multer from "multer";

//Destination
const multerStorage = multer.diskStorage( {
    destination: (req, file, cb) => {
        cb (null, 'public/images/products');
    },
    filename: (req, file, cb) => {
        const extention = file.mimetype.split('/')[1];
        cb(null, `${file.fieldname}_${Date.now()}.${extention}`);
    },
});

//Filterin file type:
const filterStorage = (req, file, cb) => {
    if (file.mimetype.split('/')[1] ===)
};
export default upload;