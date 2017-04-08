const jwt = require('express-jwt');

module.exports = jwt({
  secret: 'MY_SECRET' // TODO external source
});