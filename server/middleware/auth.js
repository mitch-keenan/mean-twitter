const jwt = require('express-jwt');

module.exports = jwt({
  secret: process.env.MEAN_SECRET // TODO external source
});