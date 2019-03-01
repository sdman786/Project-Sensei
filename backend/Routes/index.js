var jwt = require('express-jwt');
var auth = jwt({
  secret: 'ANISA',
  userProperty: 'payload'
});
