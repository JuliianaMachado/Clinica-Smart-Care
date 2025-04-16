const express = require('express');
const router = express.Router();
const { Profissional } = require('../models/profissional');

router.get('/', async (req, res) => {
  const { especialidadeId } = req.query;

  const where = especialidadeId ? { especialidadeId: Number(especialidadeId) } : {};

  try {
    const profissionais = await Profissional.findAll({ where });
    res.json(profissionais);
  } catch (error) {
    console.error('Erro ao buscar profissionais:', error);
    res.status(500).json({ error: 'Erro ao buscar profissionais' });
  }
});

module.exports = router;
