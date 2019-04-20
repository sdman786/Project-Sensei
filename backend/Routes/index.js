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
var ctrlSessions = require('../controllers/sessions');

// profile
router.get('/profile', auth, ctrlProfile.profileRead);
router.post('/update', ctrlProfile.update);

// authentication
router.post('/register', ctrlAuth.register);
router.post('/login', ctrlAuth.login);

// Sessions
router.get('/sessions', ctrlSessions.getSessions);
router.get('/sessions_structure', ctrlSessions.getSessionsStructure);

module.exports = router;