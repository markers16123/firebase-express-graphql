const graphqlHTTP = require('express-graphql')
const schema = require(__dirname + '/schema')

module.exports = graphqlHTTP({
    schema,
    graphiql: true,
})
