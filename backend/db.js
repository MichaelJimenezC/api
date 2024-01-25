const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'prueba',
  password: 'prueba',
  database: 'prueba', 
});

connection.connect((err) => {
  if (err) {
    console.error('Error al conectar a MySQL:', err);
  } else {
    console.log('Conexión exitosa a MySQL');
  }
});

module.exports = connection;
