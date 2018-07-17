const { makeExecutableSchema } = require('graphql-tools')
// JavaScript가 아닌 graphql 파일을 가져오기 위한 모듈
const { importSchema } = require('graphql-import')
const typeDefs = importSchema(__dirname + '/schema.graphql')
const resolvers = require(__dirname + '/resolvers.js')

module.exports = makeExecutableSchema({
    typeDefs,
    resolvers
})