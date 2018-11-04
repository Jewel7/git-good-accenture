let db = require('mongoose')
let crypto = require('crypto')
let jwt = require('jsonwebtoken')

let userSchema = new db.Schema({
  email: {
    type: String,
    unique: true,
    required: true
  },
  user_name: {
    type: String,
    required: true
  },
  first_name: {
    type: String,
    required: true
  },
  last_name: {
    type: String,
    required: true
  },
  hash: String,
  salt: String

})

userSchema.methods.setPassword = function (password) {
  this.salt = crypto.randomBytes(16).toString('hex');
  this.hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64, 'sha512').toString('hex');
};

userSchema.methods.validPassword = function (password) {
  var hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64, 'sha512').toString('hex');
  return this.hash === hash;
};

userSchema.methods.generateJwt = function () {
  var expiry = new Date();
  expiry.setDate(expiry.getDate() + 7);

  return jwt.sign({
    _id: this._id,
    email: this.email,
    first_name: this.first_name,
    last_name: this.last_name,
    user_name:this.user_name,
    exp: parseInt(expiry.getTime() / 1000),
  }, "MY_SECRET"); // todo: add actual private key
};

db.model('User', userSchema);