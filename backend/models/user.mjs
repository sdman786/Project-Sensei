var mongoose = require('mongoose');
// var isUnique = require('mongoose-unique-validator');

const Schema = mongoose.Schema;
var crypto = require('crypto');
var jwt = require('jsonwebtoken');
require('dotenv').config();

var secret = process.env.JWT_SECRET;

let User = new Schema({
  username: {
    type: String,
    unique: true,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  session: {
    type: String,
    required: true
  },
  task:  {
    type: String,
    required: true
  },
  upload:  {
    type: [Object]
  },
  results:  {
    type: [Object]
  },
  hash: String,
  salt: String

});

// User.plugin(isUnique, {
//   message: 'is already taken'
// });

// Creating a password
User.methods.setPassword = function (password) {
  this.salt = crypto.randomBytes(16).toString('hex');
  this.hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64, 'sha512').toString('hex');
};

// Validating a Password
User.methods.validPassword = function (password) {
  var hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64, 'sha512').toString('hex');
  return this.hash === hash;
};

// Generating the JWT Token
User.methods.generateJwt = function () {
  var expiry = new Date();
  expiry.setDate(expiry.getDate() + 7);

  return jwt.sign({
    _id: this._id,
    username: this.username,
    exp: parseInt(expiry.getTime() / 1000),
  }, secret);
};

User.methods.toAuthJSON = function () {
  return {
    username: this.username,
    name: this.name,
    email: this.email,
    token: this.generateJWT(),
    session: this.session,
    task: this.task,
    upload: this.upload,
    results: this.results
  };
};

mongoose.model('User', User);