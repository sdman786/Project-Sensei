var mongoose = require('mongoose');
// var isUnique = require('mongoose-unique-validator');

const Schema = mongoose.Schema;

let upload = new Schema({
  _id: Number,
  name: String,
  data: String
});

module.exports = mongoose.model('upload', upload, 'upload');