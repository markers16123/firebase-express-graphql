const graphqlHTTP = require('express-graphql')
const schema = require(__dirname + '/schema.js')

module.exports = graphqlHTTP({
    schema,
    graphiql: true,
})
