var mongoose = require('mongoose');
// var isUnique = require('mongoose-unique-validator');

const Schema = mongoose.Schema;

let sessions = new Schema({
  session_id: Number,
  name: String,
  lesson: Array,
  activity: Array,
  quiz: Array

});

module.exports = mongoose.model('sessions', sessions, 'sessions');