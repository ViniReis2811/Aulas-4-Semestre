require("dotenv").config();
const express = require("express");
const mysql = require("mysql2");
const swaggerUi = require("swagger-ui-express");
const swaggerJSDoc = require("swagger-jsdoc");
const logger = require('./logs/logger-winston');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

const db = mysql.createConnection({
  host: process.env.DB_HOST || "localhost",
  user: process.env.DB_USER || "root",
  password: process.env.DB_PASSWORD || "root",
  database: process.env.DB_NAME || "usuarios",
  port: process.env.DB_PORT || 3306
});

db.connect((err) => {
  if (err) {
    logger.error("Erro ao conectar ao MySQL:", err);
  } else {
    logger.info("Conectado ao MySQL!!");
    logger.info("Criar Database");
    db.query(`CREATE DATABASE IF NOT EXISTS ${process.env.DB_NAME}`, (err) => {
      if (err) throw err;
      logger.info("Banco de dados garantido.");
      db.changeUser({ database: process.env.DB_NAME }, (err) => {
        if (err) throw err;
        db.query(`
          CREATE TABLE IF NOT EXISTS usuarios (
            id INT AUTO_INCREMENT PRIMARY KEY,
            nome VARCHAR(255),
            email VARCHAR(255)
          )
        `, (err) => {
          if (err) throw err;
          logger.info("Tabela garantida.");
        });
      });
    });
  }
});

const swaggerDefinition = {
  openapi: "3.0.0",
  info: {
    title: "API de Usuários",
    version: "1.0.0",
    description: "CRUD de usuários com Node.js, Express e MySQL",
  },
  servers: [
    {
      url: "http://localhost:3000",
      description: "Servidor local",
    },
  ],
};

const swaggerOptions = {
  swaggerDefinition,
  apis: ["./index.js"],
};

const swaggerSpec = swaggerJSDoc(swaggerOptions);
app.use("/swagger", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

/**
 * @swagger
 * /healthcheck:
 *   get:
 *     summary: Healthcheck
 *     responses:
 *       200:
 *         description: Healthy
 *       500:
 *         description: Unhealthy
 */
app.get('/healthcheck', (req, res) => {
  const health = "Healthy";
  console.log(health);
  logger.alert(health);
  logger.debug(health);
  logger.error(health);
  logger.info(health);
  logger.warn(health);
  res.json(health);
});

/**
 * @swagger
 * /usuarios:
 *   get:
 *     summary: Lista todos os usuários
 *     responses:
 *       200:
 *         description: Lista de usuários
 */
app.get("/usuarios", async (req, res) => {
  try {
    logger.info('Mensagem de info', { rota: '/rota', user: 'admin' });
    db.query("SELECT * FROM usuarios", (err, results) => {
      if (err) throw err;
      logger.info("GET /usuarios - Lista de usuários retornada");
      res.json(results);
    });
  } catch (err) {
    logger.error("Erro ao buscar usuários:", err);
    res.status(500).json({ erro: "Erro ao buscar usuários" });
  }
});

/**
 * @swagger
 * /usuarios:
 *   post:
 *     summary: Cria um novo usuário
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nome:
 *                 type: string
 *               email:
 *                 type: string
 *     responses:
 *       201:
 *         description: Usuário criado com sucesso
 */
app.post("/usuarios", async (req, res) => {
  try {
    logger.error('Erro crítico', { erro: new Error('Falha') });
    const { nome, email } = req.body;
    db.query(
      "INSERT INTO usuarios (nome, email) VALUES (?, ?)",
      [nome, email],
      (err, result) => {
        if (err) throw err;
        logger.info(`POST /usuarios - Usuário criado: ${nome}`);
        res.status(201).json({ id: result.insertId });
      }
    );
  } catch (err) {
    logger.error("Erro ao criar usuário:", err);
    res.status(500).json({ erro: "Erro ao criar usuário" });
  }
});

/**
 * @swagger
 * /usuarios/{id}:
 *   get:
 *     summary: Retorna um usuário pelo ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Usuário encontrado
 */
app.get("/usuarios/:id", async (req, res) => {
  try {
    const { id } = req.params;
    db.query(
      "SELECT * FROM usuarios WHERE id = ?",
      [id],
      (err, results) => {
        if (err) throw err;
        var user = results[0];
        if(!user)
            res.status(404).json({ erro: "Usuário não encontrado pelo ID" });
        logger.info(`GET /usuarios/${id} - Usuário retornado`);
        res.json(results[0]);
      }
    );
  } catch (err) {
    logger.error(`Erro ao buscar usuário ${req.params.id}:`, err);
    res.status(500).json({ erro: "Erro ao buscar usuário" });
  }
});

/**
 * @swagger
 * /usuarios/{id}:
 *   put:
 *     summary: Atualiza um usuário existente
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nome:
 *                 type: string
 *               email:
 *                 type: string
 *     responses:
 *       200:
 *         description: Usuário atualizado com sucesso
 */
app.put("/usuarios/:id", async (req, res) => {
  try {
    const { nome, email } = req.body;
    const { id } = req.params;
    db.query(
      "UPDATE usuarios SET nome = ?, email = ? WHERE id = ?",
      [nome, email, id],
      (err) => {
        if (err) throw err;
        logger.info(`PUT /usuarios/${id} - Usuário atualizado`);
        res.json({ mensagem: "Usuário atualizado com sucesso" });
      }
    );
  } catch (err) {
    logger.error(`Erro ao atualizar usuário ${req.params.id}:`, err);
    res.status(500).json({ erro: "Erro ao atualizar usuário" });
  }
});

/**
 * @swagger
 * /usuarios/{id}:
 *   delete:
 *     summary: Deleta um usuário pelo ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Usuário deletado com sucesso
 */
app.delete("/usuarios/:id", async (req, res) => {
  try {
    const { id } = req.params;
    db.query("DELETE FROM usuarios WHERE id = ?", [id], (err) => {
      if (err) throw err;
      logger.info(`DELETE /usuarios/${id} - Usuário deletado`);
      res.json({ mensagem: "Usuário deletado com sucesso" });
    });
  } catch (err) {
    logger.error(`Erro ao deletar usuário ${req.params.id}:`, err);
    res.status(500).json({ erro: "Erro ao deletar usuário" });
  }
});

app.get('/mensagem', (req, res) => {
if(process.env.NODE_ENV === 'development') {
  console.log(`Segredo de dev: ${process.env.JWT_SECRET}`)
}

  res.send(process.env.APP_MESSAGE || 'Mensagem padrão');
});

app.listen(port, () => {
  logger.info(`Servidor rodando na porta ${port}`);
});
