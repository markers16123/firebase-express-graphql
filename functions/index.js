const functions = require('firebase-functions')
const graphqlMiddleware = require('./graphql')
exports.api = functions.https.onRequest(graphqlMiddleware);