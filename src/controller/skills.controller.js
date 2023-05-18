const express = require('express');
const { getAllSkills, getSkillsById, createSkills, deleteSkillsById } = require('../service/skills.service.js');

const route = express.Router();

route.get('/', (req, res) => {
  const data = getAllSkills();
  res.send(data);
});

route.get('/:id', (req, res) => {
  const { id } = req.params;
  const data = getSkillsById(id);
  res.send(data);
});

route.post('/', (req, res) => {
  const { title } = req.body;
  const data = createSkills(title);
  res.send(data);
});

route.delete('/:id', (req, res) => {
  const { id } = req.params;
  const data = deleteSkillsById(id);
  res.send(data);
});

module.exports = route;
