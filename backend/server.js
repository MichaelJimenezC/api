const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('./db');

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

app.get('/cuentas', (req, res) => {
    const nombre_cliente = req.query.nombre_cliente;
  
    if (nombre_cliente) {
      const query = 'SELECT * FROM cuentas WHERE nombre_cliente = ?';
      db.query(query, [nombre_cliente], (err, result) => {
        if (err) {
          console.error('Error al obtener cuentas:', err);
          res.status(500).send('Error al obtener cuentas');
        } else {
          res.status(200).json(result);
        }
      });
    } else {
      res.status(400).send('Nombre de usuario no proporcionado en la solicitud.');
    }
  });
  
app.post('/cuentas', (req, res) => {
  const { nombre_cliente, numero_cuenta, ciudad, saldo } = req.body;

  const query = 'INSERT INTO cuentas (nombre_cliente, numero_cuenta, ciudad, saldo) VALUES (?, ?, ?, ?)';
  const values = [nombre_cliente, numero_cuenta, ciudad, saldo];

  db.query(query, values, (err, result) => {
    if (err) {
      console.error('Error al insertar cuenta:', err);
      res.status(500).send('Error al insertar cuenta');
    } else {
      res.status(201).send('Cuenta insertada exitosamente');
    }
  });
});

app.listen(port, () => {
  console.log(`Servidor API escuchando en http://localhost:${port}`);
});
