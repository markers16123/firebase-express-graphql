const cors = require('cors')
const express = require('express')
const app = express();
const functions = require('firebase-functions');
const apolloServerExpress = require('apollo-server-express');
const schemaPrinter = require('graphql/utilities/schemaPrinter');
const schema = require('./graphql/schema');

// BODYPARSER IS ALREADY IMPLEMENTED BY FIREBASE
app.use(cors());
app.options('*', cors());
app.use((req, res, next) => {
    res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
    return next();
});
app.use('/test', (req, res) => res.send('test!!') )
app.use(
    '/graphql',
    apolloServerExpress.graphqlExpress({
        schema
    })
);
app.use(
    '/graphiql',
    apolloServerExpress.graphiqlExpress({
        endpointURL: '/api/graphql'
    })
);
app.use('/schema', (req, res) => {
    res.set('Content-Type', 'text/plain');
    res.send(schemaPrinter.printSchema(schema));
});


exports.api = functions.https.onRequest(app);