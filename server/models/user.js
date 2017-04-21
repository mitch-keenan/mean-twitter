const mongoose = require('mongoose');
const crypto = require('crypto');
const jwt = require('jsonwebtoken');
const Schema = mongoose.Schema;

let userSchema = new Schema({
  email: { type: String, unique: true, required: true },
  name: { type: String, required: true },
  joinDate: Date,
  hash: String,
  salt: String
});

userSchema.methods.setPassword = function(password){
  this.salt = crypto.randomBytes(16).toString('hex');
  this.hash = crypto.pbkdf2Sync(password, this.salt, 1000, 16 * 4, 'sha1').toString('hex');
};

userSchema.methods.validPassword = function(password) {
  let hash = crypto.pbkdf2Sync(password, this.salt, 1000, 16 * 4, 'sha1').toString('hex');
  return this.hash === hash;
};

userSchema.methods.generateJwt = function() {
  let expiry = new Date();
  expiry.setDate(expiry.getDate() + 7);

  return jwt.sign({
    _id: this._id,
    email: this.email,
    name: this.name,
    exp: parseInt(expiry.getTime() / 1000),
  }, process.env.MEAN_SECRET); //TODO: DO NOT KEEP YOUR SECRET IN THE CODE!
};

let User = mongoose.model('User', userSchema);
module.exports = User;