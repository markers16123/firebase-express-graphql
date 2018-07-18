import ApolloClient from 'apollo-boost';

const client = new ApolloClient({
    uri: 'http://localhost:5001/fir-express-graphql/us-central1/api'
});

export default client;
