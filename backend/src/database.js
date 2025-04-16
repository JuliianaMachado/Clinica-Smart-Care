const { Sequelize } = require('sequelize');

const db = new Sequelize('smartcare_db', 'smartcare_user', 'smartcare_pass', {
  host: 'db', // Nome do serviço do container do banco
  dialect: 'postgres',
  logging: false // opcional: remove logs SQL do terminal
});

module.exports = db;
