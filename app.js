var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var cookieSession = require('cookie-session');
var bodyParser = require('body-parser');
var config = require('./config.json');

var app = express();

var routes = require('./routes/index');
var users = require('./routes/users');
var oauth = require('./routes/oauth');
var spredfast = require('./routes/spredfast');


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// use session cookies so we don't have to login everytime
app.use(cookieSession({
  name: 'session',
  keys: ['spredfast','bananastand']
}));



app.use(function(req,res,next){
  if(process.env.sfJwt && process.env.sfCompany && process.env.sfEnv){
    next();
  } else if(config.sfCompany && config.sfEnv && config.sfJwt){
      process.env.sfJwt = config.sfJwt;
      process.env.sfCompany = config.sfCompany;
      process.env.sfEnv = config.sfEnv;
    next();
    } else {
      res.status(401).send("No valid configuration");
  }
/*  if(req.session.jwt) {
    console.log(req.session);
    next();
  } else {
    if (process.env.sfJwt) {
      req.session.jwt = process.env.sfJwt;
    } else if(config.jwt) {
      req.session.jwt = config.jwt;
    } else {
      console.log("No token :(");
      // var err = new Error("No Valid Token");
      // err.status = 401;
      res.status(401).send("oops");
    }
  }*/
});

//Uncomment if you'd like to use the build in OAuth endpoints to retrieve your JWT.
/*app.use(function(req,res,next){
  console.log('jwt:', req.session.jwt);
  if(!req.session.jwt && req.path.search('/oauth') != 0){
    req.session.redirect_uri = req.path;
    res.redirect('/oauth/token');
  } else {
    next();
  }
});*/

app.use('/', routes);
app.use('/users', users);
app.use('/oauth', oauth);
app.use('/reports', spredfast);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});

module.exports = app;
