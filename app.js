//Importing dependencies
import express from 'express';

//Internal dependencies

//Creating app instance
const app = express();

//Application settings
app.use ( express.json ());
app.use ( express.urlencoded ( {extended: true} ));

//middleware

//Instanciating server
app.listen (6000, () => {
    console.log (`App listening on port:6000`);
});