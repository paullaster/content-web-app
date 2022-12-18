import mongoose from 'mongoose';
import * as dotenv from 'dotenv';
dotenv.config ();

//Variables
const uri = process.env.DB_URI;

//Connection
const db = mongoose.connect (uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

db.on ('connected', (con) => {
    console.log (' mongodb connection established!: '+ con.connection)
})
db.on ('error', (err) => {
    console.log (' error establishing connection: '+ err);
});

db.on ( 'disconnected', (con) => {
    console.log (' mongodb disconnected!: '+con.connection);
});

export default db;
