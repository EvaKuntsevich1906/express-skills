const express = require('express');
const { getAllSkills, getSkillsById, createSkills,updateSkillsById, deleteSkillsById } = require('../service/skills.service.js');
const { log } = require('console');

const route = express.Router();

route.get('/', (req, res) => {
  const data = getAllSkills();
  res.status(200).send(data);
});

route.get('/:id', (req, res) => {
    try{
        const { id } = req.params;
        const data = getSkillsById(id);
        res.send(data);
     } catch(err) {
        res.status(404).send(err.message);
     }

});

route.post('/', (req, res) => {
    try{
        const { title } = req.body;
        const data = createSkills(title);
        res.send(data);
    } catch {
        res.status(404).send(err.message);
    }
});

route.put('/:id', (req, res) => {
    try {
        const { id } = req.params;
        const { title } = req.body;
        const data = updateSkillsById(title);
        res.status(200).send(data);
    } catch (err) {
        res.status(404).send(err.message);
    }
}); 


route.delete('/:id', (req, res) => {
    try {
        const { id } = req.params;
        const data = deleteSkillsById(id);
        res.send(data);
    } catch(err) {
        res.status(404).send(err.message);    
    }
});

module.exports = route;
