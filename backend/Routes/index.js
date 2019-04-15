var express = require('express');
var router = express.Router();
var jwt = require('express-jwt');
require('dotenv').config();

var secret = process.env.JWT_SECRET;

var auth = jwt({
  secret: secret,
  userProperty: 'payload'
});

var ctrlProfile = require('../controllers/profile');
var ctrlAuth = require('../controllers/authentication');

// profile
router.get('/profile', auth, ctrlProfile.profileRead);

// authentication
router.post('/register', ctrlAuth.register);
router.post('/login', ctrlAuth.login);

module.exports = router;