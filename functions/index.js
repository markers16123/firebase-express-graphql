const functions = require('firebase-functions');
const bodyParser = require('body-parser')
const express = require('express')
const app = express();
const routes = require('./routes')

// parse application/json
app.use(bodyParser.json())
app.use('/', routes);

exports.api = functions.https.onRequest(app);