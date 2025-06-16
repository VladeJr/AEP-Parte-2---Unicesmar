
const express = require('express');
const cors = require('cors');
const db = require('./db/database');
const vagasRouter = require('./routes/vagas');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/vagas', vagasRouter);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
