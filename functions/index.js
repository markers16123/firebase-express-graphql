const functions = require('firebase-functions');
// const app = require('./app')

// exports.api = functions.https.onRequest(app);
// exports.test = functions.https.onRequest((req, res) => {
//     res.send('test')
// })

const graphqlHTTP = require('express-graphql');
const {
    buildSchema
} = require('graphql');

// Construct a schema, using GraphQL schema language
var schema = buildSchema(`
  type Query {
    hello: String
  }
`);

// The root provides a resolver function for each API endpoint
var root = {
    hello: () => {
        return 'Hello world!';
    },
};

exports.graphql = functions.https.onRequest(graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
}))