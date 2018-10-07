var express = require('express');
var router = express.Router();
var jwt = require('express-jwt');
var auth = jwt({
  secret: 'MY_SECRET', //todo implement private key
  userProperty: 'payload'
});
// import controllers
var ctrlProfile = require('../controllers/profile');
var ctrlAuth = require('../controllers/authenticator');

// profile
router.get('/profile', auth, ctrlProfile.profileRead);

// authentication
router.post('/register', ctrlAuth.register);
router.post('/login', ctrlAuth.login);

module.exports = router;