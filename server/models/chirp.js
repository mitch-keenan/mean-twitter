const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let chirpSchema = new Schema({
  userName: { type: String, required: true },
  body: String,
  date: Date
});

const Chirp = mongoose.model('Chirp', chirpSchema);
module.exports = Chirp;