#  🌐 Cadastro de Usuários - Full Stack

Um sistema completo de cadastro, edição, exclusão e listagem de usuários, desenvolvido em arquitetura Full Stack utilizando React, Node.js, Express e MySQL.
Inclui tema Dark/Light com toggle, design responsivo e API REST organizada com rotas e controllers.
---

## 🚀 Tecnologias Utilizadas

### **Frontend**
- React.js
- React Router DOM
- Bootstrap 5
- Fetch API
- CSS com variáveis de tema (Dark/Light)

### **Backend**
- Node.js
- Express.js
- CORS
- MySQL

---

## 🎨 Tema Dark/Light

O sistema possui um toggle inteligente que alterna entre:

🌙 **Dark Mode**  
☀️ **Light Mode**

O tema muda dinamicamente em toda a aplicação usando:
- Variáveis CSS (:root)
- Estados React (useState)
- Aplicação de classes no <body>

---

## 📌 Funcionalidades

✔ Cadastro de usuários
✔ Listagem dinâmica
✔ Edição e exclusão
✔ Formulários controlados
✔ Interface responsiva
✔ Tema Dark/Light com toggle

Backend

✔ APIREST completa
✔ CRUD: Create, Read, Update, Delete
✔ Respostas padronizadas em JSON
✔ Validação de dados
✔ Conexão segura com MySQL

---
## 🧩 Estrutura do Projeto
```
/CadastroCliente
│── backend/
│ ├── server.js
│ ├── routes/
│ ├── controllers/
│ ├── database/
│
│── frontend/
│ ├── src/
│ │ ├── pages/
│ │ │ ├── CadastroUsuario.js
│ │ │ ├── ListaUsuarios.js
│ │ ├── App.js
│ │ ├── App.css
│ │ └── index.js
│ └── public/
│
└── README.md
 ```

## 🚀 Como Executar

### 🔧 **1. Backend**

Entre na pasta:
```bash
cd backend
npm install
npm start
```
### 🔧 **2. Frotend**

Entre na pasta:
```bash
cd frontend
npm install
npm start
```
## 📷 Imagens da Aplicação
### Tela de Cadastro :
<img width="960" height="505" alt="Image" src="https://github.com/user-attachments/assets/4a2855eb-43be-46dd-867d-0a599c2d46b1" />
<img width="952" height="506" alt="Image" src="https://github.com/user-attachments/assets/b58282e5-3d64-4991-ac14-049dc17b9273" />

### Tela de Listar Usuários:
<img width="960" height="506" alt="Image" src="https://github.com/user-attachments/assets/a85b3e13-763a-464d-9503-79f2f8e98833" />

### Tela de Editar:
<img width="960" height="506" alt="Image" src="https://github.com/user-attachments/assets/dcad06f2-c54f-45b5-b5b9-b31ac1781cdb" />

### Tela de Excluir:
<img width="954" height="505" alt="Image" src="https://github.com/user-attachments/assets/57005d7c-c065-4d2b-a0a3-ec9ce7cb19f7" />


## 🧠 Conceitos Envolvidos
## 🎯 Frontend (React)
- Componentização
-Hooks: useState, useEffect
-React Router DOM
-Formulários controlados
-Fetch API
-Gerenciamento de tema com CSS Variables
-Bootstrap 5 responsivo


## 🎯 Backend (Node + Express)
- Criação de API REST — rotas organizadas respeitando HTTP verbs.
- Controllers e Rotas separadas — arquitetura limpa e escalável.
- CRUD Completo (Create, Read, Update, Delete)
- Uso de Middleware — tratamento de JSON, CORS e validações.
- Express Router — separar rotas por responsabilidade.

## 🎯 Banco de Dados (MySQL)
- Modelagem de tabelas (estrutura dos usuários)
- Conexão com MySQL usando Node
- Prepared Statements — evitar SQL Injection
- Operações CRUD no banco
- Pooling de conexão (boa prática para múltiplas requisições)

## 🎯Arquitetura Completa Full Stack]
- Separação total entre frontend e backend
- Comunicação via REST API
- Padrão de pastas bem definido
- Tratamento de erros no backend
- Respostas padronizadas em JSON
  
## 🔗 Contato

* 👨‍💻 Autor: Paulo Ricardo Soares Trindade
* GitHub: https://github.com/PauloR2021
* LinkedIn: https://www.linkedin.com/in/paulo-ricardo-soares/




