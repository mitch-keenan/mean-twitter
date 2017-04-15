const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let chirpSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: 'User' },
  body: String,
  date: Date
});

const Chirp = mongoose.model('Chirp', chirpSchema);
module.exports = Chirp;