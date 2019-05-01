var mongoose = require('mongoose');
// var isUnique = require('mongoose-unique-validator');

const Schema = mongoose.Schema;

let sessions_structure = new Schema({

  session_id: Number,
  name: String,
  tasks: Array

});

module.exports = mongoose.model('sessions_structure', sessions_structure, 'session-structure');