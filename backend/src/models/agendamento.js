const { DataTypes } = require('sequelize');
const db = require('../database');
const { Profissional } = require('./profissional');

const Agendamento = db.define('agendamento', {
  paciente_nome: {
    type: DataTypes.STRING,
    allowNull: false
  },
  paciente_cpf: {
    type: DataTypes.STRING,
    allowNull: false
  },
  profissionalId: {
    type: DataTypes.INTEGER,
    references: {
      model: Profissional,
      key: 'id'
    }
  },
  data_consulta: {
    type: DataTypes.DATEONLY,
    allowNull: false
  },
  hora_consulta: {
    type: DataTypes.TIME,
    allowNull: false
  },
  status: {
    type: DataTypes.STRING,
    defaultValue: 'Ativo'
  }
});

Agendamento.belongsTo(Profissional, { foreignKey: 'profissionalId' });

module.exports = { Agendamento };
