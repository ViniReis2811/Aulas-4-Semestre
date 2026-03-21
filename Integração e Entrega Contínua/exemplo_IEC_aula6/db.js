const mysql = require("mysql2");
require("dotenv").config();

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

connection.connect((err) => {
  if (err) {
    console.error("Erro ao conectar ao MySQL:", err);
  } else {
    console.log("Conectado ao MySQL!!");
    console.log("Criar Database");
    connection.query(`CREATE DATABASE IF NOT EXISTS ${process.env.DB_NAME}`, (err) => {
      if (err) throw err;
      console.log("Banco de dados garantido.");
      connection.changeUser({ database: process.env.DB_NAME }, (err) => {
        if (err) throw err;
        connection.query(`
          CREATE TABLE IF NOT EXISTS usuarios (
            id INT AUTO_INCREMENT PRIMARY KEY,
            nome VARCHAR(255),
            email VARCHAR(255)
          )
        `, (err) => {
          if (err) throw err;
          console.log("Tabela garantida.");
        });
      });
    });
  }
});

module.exports = connection;
