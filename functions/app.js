const bodyParser = require('body-parser')
const express = require('express')
const app = express();
const routes = require('./routes')

// parse application/json
app.use(bodyParser.json())
app.use('/', routes);

module.exports = app;
