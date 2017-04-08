var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var chirpSchema = new Schema({
  userName: { type: String, required: true },
  body: String,
  date: Date
});

var Chirp = mongoose.model('Chirp', chirpSchema);
module.exports = Chirp;