const express = require('express');
const router = express.Router();

// Armazenamento em memória (simulando um banco de dados)
let user = [];

// Rota para cadastro de usuários
router.post('/cadastro', (req, res) => {
    const { nome, email, senha } = req.body;
    console.log('Nome', nome);
    console.log('Email', email);
    console.log('Senha', senha);

    // Validando os dados
    if (!nome || !email || !senha) {
        return res.status(400).json({ message: 'Nome, email e senha são obrigatórios'});
    }

    // Criar novo usuário e adicionar ao array
    const newUser = { nome, email, senha };
    user.push(newUser);

    res.status(201).json({ message: 'Usuário cadastrado com sucesso!', user: newUser });
})

router.get('/consulta', (req, res) => {
    if (user.length === 0) {
        return res.status(400).json({ message: 'Nenhum usuário encontrado.' });
    }

    res.status(200).json(users); // Retornando o array de usuários
});

module.exports = router