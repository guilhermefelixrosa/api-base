# 🧩 Node + MongoDB API Base

Este projeto é uma base para construção de APIs REST utilizando **Node.js** com **Express** e banco de dados **MongoDB**.  
Ele foi criado com o objetivo de servir como ponto de partida para novos projetos backend.

---

## 🚀 Tecnologias utilizadas

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)
- [Mongoose](https://mongoosejs.com/)
- [Dotenv](https://www.npmjs.com/package/dotenv)

---

## 📁 Estrutura do projeto

project/
│
├── src/
│ ├── config/ # Configurações de conexão e variáveis
│ ├── controllers/ # Controladores das rotas
│ ├── models/ # Modelos do MongoDB
│ ├── routes/ # Definição de rotas da API
│ ├── services/ # Lógica de negócio
│ ├── middlewares/ # Middlewares de autenticação, erro, etc.
│ └── index.js # Ponto de entrada da aplicação
│
├── .env # Variáveis de ambiente
├── .gitignore # Ignora arquivos/pastas no Git
├── package.json # Dependências e scripts
└── README.md # Documentação do projeto