var express = require('express');
var router = express.Router();
var jwt = require('express-jwt');
var auth = jwt({
  secret: 'DEE2A4F9D7305EE613C5D177286929B1114588FFDACCD19AA3D5DCA0FB7FB306', //todo implement private key
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
router.post('/claim', ctrlAuth.submitClaim)

module.exports = router;