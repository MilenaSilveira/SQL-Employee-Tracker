const mysql = require('mysql2');

// Create a connection object
const connection = mysql.createConnection(
  {
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'employees_db'
  }
);

connection.connect(function (err){
    if (err) throw err;
   
});

module.exports = connection;