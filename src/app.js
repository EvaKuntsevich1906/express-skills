const express = require('express');
const bodyParser = require('body-parser');
const route = require('./controller/skills.controller');

const app = express();
app.use(bodyParser.json());

app.use('/skills', route);

module.exports = app;
