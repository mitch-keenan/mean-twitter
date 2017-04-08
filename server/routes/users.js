const express = require('express');
const passport = require('passport');
const auth = require('../middleware/auth.js');
const User = require('../models/user.js');

const UsersController = express.Router();

UsersController.route('/register')
  .post((req, res) => {
    let user = new User({
      email: req.body.email,
      name: req.body.name,
      joinedDate: new Date()
    });
    user.setPassword(req.body.password);
    user.save((err) => {
      if (err) {
        res.status(404).json(err);
        return;
      }

      token = user.generateJwt();
      res.status(200);
      res.json({
        "token" : token
      });
    });
  });

UsersController.route('/login')
  .post((req, res) => {
    passport.authenticate('local', function(err, user, info){
      var token;

      // If Passport throws/catches an error
      if (err) {
        res.status(404).json(err);
        return;
      }

      // If a user is found
      if(user){
        token = user.generateJwt();
        res.status(200);
        res.json({
          "token" : token
        });
      } else {
        // If user is not found
        res.status(401).json(info);
      }
    })(req, res);
  });

UsersController.route('/:id')
  .get((req, res) => {
    User.findById(req.params.id,
      function(err, user) {
        if (err) throw err;
        res.json(user);
      }
    );
  })
  .post(auth, (req, res) => {
    //TODO: modify the body so updates are correct.
    User.findByIdAndUpdate(req.params.id,
      req.body,
      function(err) {
        if (err) throw err;
        res.json({ ok: true });
      }
    );
  });

module.exports = UsersController;