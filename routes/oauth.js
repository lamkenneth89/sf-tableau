var express = require('express');
var router = express.Router();

var http = require('http');
var qs = require('querystring');
var OAuth2 = require('oauth').OAuth2;
var url = require('url');

var clientID = 'TVjzVmUSDZFVdSpUiKBsQYIAzTrvVcUb';
var clientSecret = 'TLTGHSqIPPdIQyaRRsIEZkbCCfJuOeNcLfeYGFFGejSuKqXx';
var loginBase = 'https://login.spredfast.com/v1/';
// var clientID = '39zn2zrtfehncfpemzq7ak9r';
// var clientSecret = 'heKxvEhxaC';
var oauth2 = new OAuth2(clientID,
    clientSecret,
    loginBase,
    'oauth/authorize',
    'oauth/token',
    null); /** Custom headers */

/* Do the Oauth. */
router.get('/token', function(req, res, next) {

  var redirect_url = url.format({
    protocol: req.protocol,
    host: req.get('host')
  });

  var authURL = oauth2.getAuthorizeUrl({
    redirect_uri: redirect_url+'/oauth/code',
    response_type: 'code',
    // scope: ['repo', 'user'],
    state: 'local'
  });

  res.render('oauth', { title: 'OAuth/token', authUrl: authURL });

  var body = '<a href="' + authURL + '"> Get Code </a>';

});

router.get('/code', function(req,res,next){
  // res.render('oauth', { title: 'OAuth/code' });
  "use strict";
  var redirect_url = url.format({
    protocol: req.protocol,
    host: req.get('host')
  });

  var p = req.url.split('/');
  var pLen = p.length;

  if (pLen === 2 && p[1] === '') {
    res.writeHead(200, {
      'Content-Length': body.length,
      'Content-Type': 'text/html' });
    res.end(body);
  } else if (pLen === 2 && p[1].indexOf('code') === 0) {

    /** Github sends auth code so that access_token can be obtained */
    var qsObj = {};

    /** To obtain and parse code='...' from code?code='...' */
    qsObj = qs.parse(p[1].split('?')[1]);

    console.log('access_code: ', qsObj.code);
    /** Obtaining access_token */
    oauth2.getOAuthAccessToken(
        qsObj.code,
        {'redirect_uri': redirect_url + '/oauth/code'},
        function (e, access_token, refresh_token, results){
          console.log("Results:" ,results);
          if (e) {
            res.end(e);
          } else if (results.error) {
            console.log(results);
            res.end(JSON.stringify(results));
          }
          else {
            console.log('Obtained access_token: ', results.data.accessToken);
            req.session.jwt= results.data.accessToken;
            if(req.session.redirect_uri){
              res.redirect(req.session.redirect_uri);
            } else {
              res.end(results.data.accessToken);
            }
          }
        });

  } else {
    // Unhandled url
  }
});

module.exports = router;


