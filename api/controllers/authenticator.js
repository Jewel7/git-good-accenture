let passport = require('passport')
let db = require('mongoose')
let User = db.model('User')
let Claim = db.model('Claim')


module.exports.register = function (req, res) {

    //todo: error handling for bad user
    var user = new User();
    
    user.first_name = req.body.first_name
    user.last_name = req.body.last_name
    user.user_name = req.body.user_name
    user.email = req.body.email

    user.setPassword(req.body.password);

    user.save(function (err) {
        var token;
        token = user.generateJwt();
        res.status(200);
        res.json({
            "token": token
        });
    });

};

module.exports.login = function (req, res) {

   
    passport.authenticate('local', function (err, user, info) {
        var token;

        // If Passport throws/catches an error
        if (err) {
            res.status(404).json(err);
            return;
        }

        // If a user is found
        if (user) {
            token = user.generateJwt();
            res.status(200);
            res.json({
                "token": token
            });
        } else {
            // If user is not found
            res.status(401).json(info);
        }
    })(req, res);

};
module.exports.submitClaim = function (req, res) {

    
    var claim = new Claim();
    claim.name = req.body.name
    claim.email= req.body.email
    claim.ssn = req.body.ssn
    claim.dob= req.body.dob
    claim.married= req.body.married
    claim.children= req.body.children
    claim.date_of_condition= req.body.date_of_condition
    claim.condition_description= req.body.condition_description
    
    

    claim.save(function (err) {
        res.status(200).json(info);
    });

};
