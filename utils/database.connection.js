import mongoose from 'mongoose';
import * as dotenv from 'dotenv';
dotenv.config ();

//Variables
const uri = process.env.DB_URI;

//Connection
const connection = mongoose.connect (uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}, (err, db) => {
    if (err) {
        console.log (err);
    }
    console.log (db);
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
