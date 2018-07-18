const graphqlMiddleware = require('./graphql')
const cors = require('cors')
const express = require('express')
const app = express();

// CORS Express middleware to enable CORS Requests
// Failed to load http://localhost:5001/fir-express-graphql/us-central1/api: Response to preflight request doesn't pass access control check: No 'Access-Control-Allow-Origin' header is present on the requested resource. Origin 'http://localhost:3000' is therefore not allowed access. The response had HTTP status code 405. If an opaque response serves your needs, set the request's mode to 'no-cors' to fetch the resource with CORS disabled.
app.use(cors());
app.options('*', cors())
app.use((req, res, next) => {
  res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
  return next();
});
app.use('/', graphqlMiddleware)

module.exports = app;