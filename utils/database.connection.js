import mongoose from 'mongoose';
import * as dotenv from 'dotenv';
dotenv.config ();

//Variables
const uri = process.env.DB_URI;

//Connection
mongoose.connect (uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then ( (fullfilled) => {
    console.log ( 'Connection to mongoDb established ' + fullfilled.ConnectionStates);
})
.catch ( (err) => {
    console.log ( 'error connecting to mongoDb: ' +err.message );
});

mongoose.connection.on ("connected", () => {
    return  'Connection to mongodb  was successful!';
 });
 
 mongoose.connection.on ( 'error', (error) => {
     return ( {
         error: error.message
     });
 });
 
 mongoose.connection.on ('disconnected', () => {
     return 'Connection to mongodb was disconnected';
 });
 
 process.on ( 'SIGINT', async() => {
     await mongoose.connection.close ();
     process.exit ( 0 );
 });

