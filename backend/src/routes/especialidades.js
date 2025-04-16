const express = require('express');
const router = express.Router();
const { Especialidade } = require('../models/especialidade');

router.get('/', async (req, res) => {
  const especialidades = await Especialidade.findAll();
  res.json(especialidades);
});

module.exports = router;
