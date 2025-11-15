//Arquivo responsável por iniciar o servidor backend
require('dotenv').config();//Trazendo os dados do .env

const express = require('express');//Importando o Framework Express
const cors = require('cors');  //Importando o Pacote CORS
const mysql = require('mysql2'); //Importando o Pacote MySQL2


const app = express();
app.use(cors());
app.use(express.json()); //Metodo para ler JSON no corpo das requisições


//Criando a Conexão com o banco de dados
const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});
const PORT = process.env.PORT || 5000;

//Teste de Conexao
db.connect((err) => {
    if (err) {
        console.error('Erro ao conectar ao banco de dados:', err);
    } else {
        console.log('Conectado ao banco de dados MySQL');
    }
});

//Rota para Cadastrar Usuario
app.post('/usuarios', (req, res) => {
    const { nome, email, idade, senha } = req.body;
    const query = 'INSERT INTO usuarios (nome, email, idade, senha) VALUES (?, ?, ?, ?)';
    db.query(query, [nome, email, idade, senha], (err, result) => {
        if (err) {
            console.error('Erro ao cadastrar usuário:', err);
            res.status(500).send('Erro ao cadastrar usuário');
        } else {
            res.status(201).send('Usuário cadastrado com sucesso');
        }
    });
});

//Rota para Listar Usuarios
app.get('/usuarios', (req, res) => {
    const query = 'SELECT * FROM usuarios';
    db.query(query, (err, results) => {
        if (err) {
            console.error('Erro ao listar usuários:', err);
            res.status(500).send('Erro ao listar usuários');
        } else {
            res.status(200).json(results);
        }
    });
});


//Rota para Excluir Usuario
app.delete("/usuarios/:id", (req, res) => {
    const { id } = req.params;
    db.query("DELETE FROM usuarios WHERE id = ?", [id], (err) => {
        if (err) return res.status(500).send(err);
        res.send({ mensagem: "Usuário removido" });
    });
});

//Rota para Atualizar Usuario
app.put("/usuarios/:id", (req, res) => {
    const { id } = req.params;
    const { nome, email, idade } = req.body;

    db.query(
        "UPDATE usuarios SET nome = ?, email = ?, idade = ? WHERE id = ?",
        [nome, email, idade, id],
        (err) => {
            if (err) return res.status(500).send(err);
            res.send({ mensagem: "Usuário atualizado" });
        }
    );
});

//Iniciando o Servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});