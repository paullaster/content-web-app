import mysql from 'mysql2';

//DB connection:
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

//TEST connection
db.connect(err => {
  if (err) {
    throw err;
  }
  console.log("database connection established");
});

export default db;