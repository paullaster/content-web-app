//Importing dependencies
import express from 'express';

//Internal dependencies
import Router from './routes/index';
import cors from 'cors'
//Creating app instance
const app = express();

//Application settings
app.use ( express.json ());
app.use ( express.urlencoded ( {extended: true} ));
app.use ( cors ());

//middleware
app.use ( '/api', Router);
//Instanciating server
app.listen (6000, () => {
    console.log (`App listening on port:6000`);
});