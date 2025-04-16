const { DataTypes } = require('sequelize');
const db = require('../database');
const { Especialidade } = require('./especialidade');

const Profissional = db.define('profissional', {
  nome: {
    type: DataTypes.STRING,
    allowNull: false
  },
  especialidadeId: {
    type: DataTypes.INTEGER,
    references: {
      model: Especialidade,
      key: 'id'
    }
  }
});

Profissional.belongsTo(Especialidade, { foreignKey: 'especialidadeId' });

module.exports = { Profissional };
