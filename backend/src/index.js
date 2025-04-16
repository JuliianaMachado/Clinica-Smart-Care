const express = require('express');
const cors = require('cors');
const app = express();
const db = require('./database');

// Importando rotas
const agendamentos = require('./routes/agendamentos');
const profissionais = require('./routes/profissionais');
const especialidades = require('./routes/especialidades');

app.use(cors());
app.use(express.json());

// Rotas da API
app.use('/api/agendamentos', agendamentos);
app.use('/api/profissionais', profissionais);
app.use('/api/especialidades', especialidades);

// Sincronizar banco e iniciar servidor
db.sync().then(() => {
  console.log('📦 Banco de dados sincronizado!');
  app.listen(3001, () => console.log('🚀 Servidor rodando na porta 3001'));
}).catch((err) => {
  console.error('❌ Erro ao conectar no banco de dados:', err);
});
