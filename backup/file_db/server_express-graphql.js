const functions = require('firebase-functions');
const graphqlHTTP = require('express-graphql');
const {
    buildSchema,
} = require('graphql');

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

const server = graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
})

exports.graphql = functions.https.onRequest(server);