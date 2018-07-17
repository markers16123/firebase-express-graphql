const functions = require('firebase-functions')
const graphqlHTTP = require('express-graphql')
// JavaScript가 아닌 graphql 파일을 가져오기 위한 모듈
const {
    importSchema
} = require('graphql-import')
const {
    buildSchema,
} = require('graphql');

const typeDefs = importSchema('graphql/schema.graphql')
const schema = buildSchema(typeDefs)
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

exports.api = functions.https.onRequest(server);