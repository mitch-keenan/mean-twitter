const express = require('express');
const auth = require('../middleware/auth.js');
const Chirp = require('../models/chirp.js');
const ChirpsController = express.Router();

console.log(auth);

ChirpsController.route('/')
  .get((req, res) => {
    Chirp.find({}, function(err, chirps) {
        if (err) throw err;
        res.json(chirps);
    });
  })
  .post(auth, (req, res) => {
    let chirp = new Chirp({
        body: req.body.body,
        userName: req.body.userName,
        date: req.body.date
    });
    chirp.save((err) => {
        res.json({ ok: true });
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