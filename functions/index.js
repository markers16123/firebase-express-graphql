const functions = require('firebase-functions')
const app = require(__dirname + '/app')
exports.api = functions.https.onRequest(app);