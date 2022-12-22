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
const filterExtention = (req, file, cb) => {
    if (file.mimetype.split('/')[1] === 'jpeg' ||
        file.mimetype.split('/')[1] === 'jpg'  ||
        file.mimetype.split('/')[1] === 'png'  ||
        file.mimetype.split('/')[1] === 'svg'  ||
        file.mimetype.split('/')[1] === 'gif'  ) {
            cb(null, true);
            return;
    }
    cb( new Error ( "File type not supported"), false);
};

// Intiatin multer
const upload = multer ( {
    storage: multerStorage,
    fileFilter: filterExtention,
});

const uploadProductImage = 
export default upload;