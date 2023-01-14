//Importing dependencies
const express = require ('express');
const cors = require ('cors');
const dotenv = require ('dotenv');


//Internal dependencies
const Router = require ('./routes/index');

//Creating app instance
const app = express();

//App secrets
dotenv.config ();

//Application settings
app.use ( express.json ());
app.use ( express.urlencoded ( {extended: true} ));
app.use ( cors ());

//Application variables:
const PORT = process.env.APP_PORT || 6000

//middleware
app.use ( '/api', Router);
app.get ('/', (req, res) => {
    res.json('Welcome to goebaide services');
});
const uploadProductImage = require ( './utils/upload.image');
const multer = require('multer');
app.post ('/test', (req, res) => {
    uploadProductImage( req, res, (error) => {
        if (error instanceof multer.MulterError) {
            res.status(400).json({
                status: "error",
                error: error.message,
            });
            return;
        }else if (error){
            res.status(400).json({
                status: "error",
                error: error.message,
            });
            return;
        };
        req.files.map ( (file) => {
            
        })
        res.json('image');
    } );
});
//Instanciating server
app.listen (PORT, () => {
    console.log (`App listening on port ${PORT}`);
});