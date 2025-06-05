import express from "express"
// import { PrismaClient } from "@prisma/client"
// import cors from 'cors'

// const prisma = new PrismaClient()
const app = express()

app.listen(3000); // Iniciando o servidor na porta 3000
console.log("Servidor rodando: http://localhost:3000/"); // Mensagem de confirmação