# firebase-express-graphql

본 프로젝트는 `graphql` 이해를 목적으로 `firebase`와 통합하는 예제를 작성하기 위한 사이드 프로젝트입니다.

## 배포

```sh
.$ firebase deploy
```

## graphql

```sh
.functions$ yarn add express express-graphql graphql
```

```js
var express = require('express');
var graphqlHTTP = require('express-graphql');
var { buildSchema } = require('graphql');

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
    }
};

var server = graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true
});

exports.graphql = functions.https.onRequest(server);
```

> nvm: command not found
>
> ```sh
> ./functions$ npm install -g firebase-tools
> ./functions$ nvm install 6.11.5
> ```
