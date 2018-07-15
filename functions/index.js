const functions = require('firebase-functions');
const app = require('./app')

exports.api = functions.https.onRequest(app);
exports.test = functions.https.onRequest((req, res) => {
    res.send('test')
})
