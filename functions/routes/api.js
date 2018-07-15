const router = require('express').Router();
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

router.get('/', (req, res) => {
    res.send('1111')
})

router.get('/text', (req, res) => {
    res.send('2222')
})

router.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
}))

module.exports = router;