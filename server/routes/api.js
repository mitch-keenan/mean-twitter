const express = require('express');
const router = express.Router();

const Chirp = require('../models/chirp.js');

router.get('/', (req, res) => {
    res.send('api working!');
});

router.get('/chirps', (req, res) => {
    Chirp.find({}, function(err, chirps) {
        if (err) throw err;
        res.json(chirps);
    });
});

router.post('/chirps', (req, res) => {
    let chirp = new Chirp({
        body: req.body.body,
        userName: req.body.userName,
        date: req.body.date
    });
    chirp.save((err) => {
        res.json({ error: err });
    });
});

module.exports = router;