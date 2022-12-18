import mongoose from 'mongoose';
import * as dotenv from 'dotenv';
dotenv.config ();

//Variables
const uri = process.env.DB_URI;

//Connection
const db = mongoose.connect (uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then ( (fullfilled) => {
    console.log ( 'Connection to mongoDb established ' + fullfilled.ConnectionStates);
})
.catch ( (err) => {
    console.log ( 'error connecting to mongoDb: ' +err.message );
});

// const db = connection.connect();

// db.on ('connected', (con) => {
//     console.log (' mongodb connection established!: '+ con.connection)
// })
// db.on ('error', (err) => {
//     console.log (' error establishing connection: '+ err);
// });

// db.on ( 'disconnected', (con) => {
//     console.log (' mongodb disconnected!: '+con.connection);
// });

export default db;
