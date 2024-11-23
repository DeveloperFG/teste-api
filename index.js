import express from 'express'
import cors from 'cors'

import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const app = express();
const PORT = 3000;

// Middleware
app.use(express.json())
app.use(cors());


const cursos = ['NodeJS', 'React Native', 'React JS']

// Rota inicial
app.get('/', (req, res) => {
  res.send({ message: 'API funcionando!' });
});


// Listar cursos
app.get('/cursos', (req, res) => {
  return res.json(cursos);
});


//exemplo 2 lista todos os herois
app.get(('/lista'), async (req, res)=>{

  const hero = await prisma.heros.findMany()

  res.status(200).json(hero)
})


// Inicia o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});