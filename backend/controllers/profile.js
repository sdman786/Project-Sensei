var mongoose = require('mongoose');
var User = mongoose.model('User');

module.exports.profileRead = function (req, res) {

  // If no user ID exists in the JWT return a 401
  if (!req.payload._id) {
    res.status(401).json({
      "message": "UnauthorizedError: private profile"
    });
  } else {
    // Otherwise continue
    User
      .findById(req.payload._id)
      .exec(function (err, user) {
        res.status(200).json(user);
      });
  }

};

module.exports.update = function(req, res, next) {

  if (!req.body._id) {
    res.status(401).json({
      "message": "UnauthorizedError: private profile"
    });
  } else {

    User.findById(req.body._id, (err, user) => {
      if (!user)
        return next(new Error('Could not load Document'));
      else {
        user.session = req.body.session;
        user.task = req.body.task;
        if (req.body.results[0]) {
          user.results = req.body.results;
        }
        if (req.body.upload[0]) {
          user.upload = req.body.upload;
        }
        
        user.save().then(() => {
          res.json({result: true, message: 'Update done'});
        }).catch(err => {
          res.status(400).send('Update failed');
        });
      }
    });
  }

};
