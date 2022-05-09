const express = require('express');
const bodyParser = require('body-parser');
const { errors } = require ('celebrate');
const cors = require('cors');

const routes = require('./app/routes/routes');


const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(routes);
app.use(errors());

module.exports = app;
