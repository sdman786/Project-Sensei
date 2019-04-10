var mongoose = require('mongoose');

const Schema = mongoose.Schema;
var crypto = require('crypto');
var jwt = require('jsonwebtoken');

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
      hash: String,
      salt: String
});

// Creating a password
User.methods.setPassword = function(password){
    this.salt = crypto.randomBytes(16).toString('hex');
    this.hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64, 'sha512').toString('hex');
  };

// Validating a Password
User.methods.validPassword = function(password) {
    var hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64, 'sha512').toString('hex');
    return this.hash === hash;
};

// Generating the JWT Token
User.methods.generateJwt = function() {
    var expiry = new Date();
    expiry.setDate(expiry.getDate() + 7);
  
    return jwt.sign({
      _id: this._id,
      username: this.username,
      name: this.name,
      exp: parseInt(expiry.getTime() / 1000),
    }, "ANISA"); // TODO DO NOT KEEP YOUR SECRET IN THE CODE!
  };

  mongoose.model('User', User);