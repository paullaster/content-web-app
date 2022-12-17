//Importing dependencies
import express from 'express';

//Creating app instance
const app = express();

//Application settings
app.use ( express.json ());
app.use ( express.urlencoded ( {extended: true} ));

//Instanciating server
app.listen (6000, () => {
    console.log (`App listening on port:6000`);
});