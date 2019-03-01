import mongoose from 'mongoose';

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
      hash: String,
      salt: String
});

// Creating a password
userSchema.methods.setPassword = function(password){
    this.salt = crypto.randomBytes(16).toString('hex');
    this.hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64, 'sha512').toString('hex');
  };

// Validating a Password
userSchema.methods.validPassword = function(password) {
    var hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64, 'sha512').toString('hex');
    return this.hash === hash;
};

// Generating the JWT Token
userSchema.methods.generateJwt = function() {
    var expiry = new Date();
    expiry.setDate(expiry.getDate() + 7);
  
    return jwt.sign({
      _id: this._id,
      username: this.username,
      name: this.name,
      exp: parseInt(expiry.getTime() / 1000),
    }, "ANISA"); // TODO DO NOT KEEP YOUR SECRET IN THE CODE!
  };

export default mongoose.model('User', User);