const { DataTypes } = require('sequelize');
const db = require('../database');

const Especialidade = db.define('especialidade', {
  nome: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

module.exports = { Especialidade };
