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

## 배포 전 테스트

`firebase serve` 명령어는 서버 배포 없이 로컬에서 직접 빠르게 확인하고자 할 떄 유용하다. 이 때 유의해야 할 점은 `Node.js` 버전이다. Google Cloud Functions 기능은 `Node.js` 버전 v6.11.5까지만 지원한다. 이보다 높은 버전이 컴퓨터에 설치된 경우 다음과 같은 오류가 화면에 출력된다. (정식 배포 시에는 서버 축에 이미 적정 버전이 준비되어 있기 때문에 고려 대상이 아니다.)

```g
Warning: You're using Node.js v8.9.4 but Google Cloud Functions only supports v6.11.5.
```

`nvm` 명령으로 특정 버전을 사용하도록 지정하여 오류를 해결할 수 있다.

## Node Version Manager

Node Version Manager(nvm)은 다양한 node.js 버전을 관리하기 위한 도구이다.

### Install NVM

먼저 이 도구가 컴퓨터에 설치되어 있는지 확인하자.

```sh
.$ nvm
```

Node Version Manager가 설치되지 않은 환경이라면 "No command 'nvm' found"와 같이 해당 명령어를 찾을 수 없다는 메시지가 출력될 것이다. Node Version Manager를 설치하는 방법은 [nvm github](https://github.com/creationix/nvm)를 참고한다.

### Node Version Switching

먼저 `Node.js` 버전을 확인한다.

```sh
.$ node -v
# or
.$ node --version
```

`nvm` 도구로도 버전을 확인할 수 있다.

```sh
# osx, linux
.$ nvm ls

# windows
.$ nvm list
```

이제 Google Cloud Functions에서 지원하는 버전인 `Node.js` `6.11.5`를 설치한다.

```sh
.$ nvm install 6.11.5

Downloading node.js version 6.11.5 (64-bit)...
Complete
Downloading npm version 3.10.10... Complete
Installing npm v3.10.10...
Installation complete. If you want to use this version, type
```

설치가 완료되면 `nvm ls` 또는 `nvm list` 명령어를 통해 설치된 버전을 확인할 수 있다.

```sh
.$ nvm list

  * 8.9.4 (Currently using 64-bit executable)
    6.11.5
```

`*` 표시는 현재 사용 중인 `Node.js` 버전이다. 방금 설치한 6.11.5를 사용하도록 설정하려면 다음 명령을 실행한다.

```sh
.$ nvm use 6.11.5

Now using nod v6.11.5 (64-bit)
```

`nvm list` 명령어로 `6.11.5` 버전이 선택되었는지 확인한다.

```sh
.$ nvm list

    8.9.4
  * 6.11.5 (Currently using 64-bit executable)
```
