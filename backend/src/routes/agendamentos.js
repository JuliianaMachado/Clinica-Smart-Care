const express = require('express');
const router = express.Router();
const { Agendamento } = require('../models/agendamento');

// Criar agendamento
router.post('/', async (req, res) => {
  const novo = await Agendamento.create(req.body);
  res.json(novo);
});

// Consultar por CPF
router.get('/', async (req, res) => {
  const { cpf } = req.query;
  const agendamentos = await Agendamento.findAll({ where: { paciente_cpf: cpf } });
  res.json(agendamentos);
});

// Cancelar agendamento
router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  await Agendamento.destroy({ where: { id } });
  res.sendStatus(204);
});

module.exports = router;
