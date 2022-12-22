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
let jpeg = file.mimetype.split('/')[1] === 'jpeg';
let jpg = file.mimetype.split('/')[1] === 'jpg';
let png = file.mimetype.split('/')[1] === 'png'
const filterStorage = (req, file, cb) => {
    if () {}
};
export default upload;