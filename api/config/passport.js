let passport = require('passport');
let LocalStrategy = require('passport-local').Strategy;
let db = require('mongoose');
let User = db.model('User');

passport.use(new LocalStrategy({
    usernameField: 'email'
  },
  function(username, password, done) {
    User.findOne({ email: username }, function (err, user) {
      if (err) { return done(err); }
      
      if (!user) {
        return done(null, false, {
          message: 'User not found'
        });
      }
      
      if (!user.validPassword(password)) {
        return done(null, false, {
          message: 'Password is wrong'
        });
      }
      // If credentials are correct, return the user object
      return done(null, user);
    });
  }
));