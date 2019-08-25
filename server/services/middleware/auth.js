const jwt = require('express-jwt');
const jwksRsa = require('jwks-rsa');

module.exports = jwt({
  secret: jwksRsa.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 15,
    jwksUri: 'https://dev-jbd8z86v.auth0.com/.well-known/jwks.json'
  }),
  audience: 'L3bX4QP8L8nea503SpcAZERBjebm27PM',
  issuer: 'https://dev-jbd8z86v.auth0.com/',
  algorithms: ['RS256']
});
