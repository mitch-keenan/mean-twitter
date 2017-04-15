const express = require('express');
const auth = require('../middleware/auth.js');
const User = require('../models/user.js');
const Chirp = require('../models/chirp.js');
const ChirpsController = express.Router();

ChirpsController.route('/')
  .get((req, res) => {
    Chirp.find({})
      .populate('user', ['name', 'email'])
      .exec(function(err, chirps) {
        if (err) throw err;
        res.json(chirps);
      });
  })
  .post(auth, (req, res) => {
    User.findOne({ 'email': req.body.user }, ['name', 'email'])
      .exec(function(err, user) {
        if(err) throw err;
        let chirp = new Chirp({
          body: req.body.body,
          user: user._id,
          date: new Date()
        });
        chirp.save(err => {
          chirp.user = user;
          res.json({ ok: true, data: chirp });
        });
      });
  });

ChirpsController.route('/:id')
  .get((req, res) => {
    Chirp.findById(req.params.id,
      function(err, chirp) {
        if (err) throw err;
        res.json(chirp);
      }
    );
  })
  .post(auth, (req, res) => {
    //TODO: modify the body so updates are correct.
    Chirp.findByIdAndUpdate(req.params.id,
      req.body,
      function(err) {
        if (err) throw err;
        res.json({ ok: true });
      }
    );
  })
  .delete(auth, (req, res) => {
    Chirp.findByIdAndRemove(req.params.id,
      function(err) {
        if (err) throw err;
        res.json({ ok: true });
      }
    );
  });

module.exports = ChirpsController;