var express = require('express');
let app = express()
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var passport = require('passport');
var cors = require('cors')

//import data model
require('./api/models/db');
//configure passport
require('./api/config/passport');

//import routes for api
let routesAPI = require('./api/routes/private-profile')
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());
app.use(passport.initialize())
//tell app to use the api routes instead of the default routes when interactinc with api
app.use('/api', routesAPI)

app.use(function(err, req, res, next) {
    if (err.name === 'UnauthorizedError'){
        res.status(401)
        res.json({"message" : err.name + ": " + err.message})
    }
})

app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});
app.get("/",function(req, res){
    res.sendFile(path.join(__dirname, "index.html"))

})

app.listen(3000)

