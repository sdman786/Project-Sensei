var mongoose = require('mongoose');
require('../models/sessions.mjs')
require('../models/sessions_structure.mjs')
var Sessions_Structure = mongoose.model('sessions_structure');
var Sessions = mongoose.model('sessions');

module.exports.getSessions = function (req, res) {
    console.log('Get Sessions Called');
    
  // If no user ID exists in the JWT return a 401
//   if (!req.payload._id) {
//     res.status(401).json({
//       "message": "UnauthorizedError: private profile"
//     });
//   } else {

    
    // Otherwise continue
    Sessions.find({})
    .exec(function(err, sessions){
        if (err) {
            console.log('Error Retrieving Sessions');
            
        } else {
            res.json(sessions)
        }
    })
//   }

};

module.exports.getSessionsStructure = function (req, res) {
    console.log('Get Sessions Structure Called');
    
  // If no user ID exists in the JWT return a 401
//   if (!req.payload._id) {
//     res.status(401).json({
//       "message": "UnauthorizedError: private profile"
//     });
//   } else {

    
    // Otherwise continue
    Sessions_Structure.find({})
    .exec(function(err, sessions){
        if (err) {
            console.log('Error Retrieving Sessions Structure');
            
        } else {
            res.json(sessions)
        }
    })
//   }

};
