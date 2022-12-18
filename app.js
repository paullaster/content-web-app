//Importing dependencies
import express from 'express';
import cors from 'cors';
import * as dotenv from 'dotenv';


//Internal dependencies
import Router from './routes/index';
import dbConnection from './utils/database.connection';

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




//Instanciating server
app.listen (PORT, () => {
    console.log (`App listening on port ${PORT}`);
});