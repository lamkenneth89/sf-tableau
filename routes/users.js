var express = require('express');
var router = express.Router();
var Promise = require('bluebird');
var Converter = require('csvtojson').Converter;
var fs = Promise.promisifyAll(require("fs"));

var converter = new Converter({});

/* GET users listing. */
router.get('/', function(req, res, next) {
  "use strict";

  //end_parsed will be emitted once parsing finished
  converter.on("end_parsed", function (jsonArray) {
    res.json(jsonArray);
    // console.log(jsonArray); //here is your result jsonarray
  });

//read from file
  fs.createReadStream("./account_audiencesize_timeseries_unfiltered.csv").pipe(converter);

/*  converter.on('end_parsed', function(content){
    // res.json(content);
    // next();
    console.log(content);
  });
  var myJson = Promise.promisify(converter.fromFile, {context: converter});
  myJson("./account_audiencesize_timeseries_unfiltered.csv").then(function (content) {

    // console.log('done converting');
    // setTimeout(function(content){
    //   res.write(new Buffer(content));
    // }, 1000)
  });*/
});



module.exports = router;


