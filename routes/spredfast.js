"use strict";
var express = require("express");
var router = express.Router();
var Promise = require("bluebird");
var Converter = require("csvtojson").Converter;
var request = Promise.promisifyAll(require("request"),{multiArgs: true});
var config = require("../config.json");

//Defaults for requests to the API.
var options = {
    baseUrl: "https://api.spredfast.com/" + process.env.sfEnv + "/v1/company/" + process.env.sfCompany,
    headers: {
        "Authorization": "Bearer " + process.env.sfJwt
    }
};
function prepReport(endpoint) {
    var options = {
        baseUrl: "https://api.spredfast.com/" + process.env.sfEnv + "/v1/company/" + process.env.sfCompany,
        headers: {
            "Authorization": "Bearer " + process.env.sfJwt
        }
    };
    options.uri = endpoint;
    return request.getAsync(options);
}
var reports, report_status, report_body;

//To get a list of all reports available for importing
router.get("/list", function (req, res, next) {
    //Get a list of available reports
    options.uri = "/analytics/report";
    request.getAsync(options)
        .then(function (a) {
            if (!a.error) {
                reports = JSON.parse(a.body);
                // res.status(a.statusCode).json(reports.data.reports);
                res.render('report_list', {reports: reports.data.reports});
            } else {
                res.send(a);
            }
        });
});

//This route loads the Tableau JS as well as spredfast.js and initiates the callbacks.
//Templating is jade.
router.get("/download/:report_name", function(req,res,next){
    res.render("download.jade", {title: "Spredfast Tableau Importer"});
});

/**
 * This route does two things
 * 1) Prepare reports for download and get unique report id.
 * 2) Download csv and convert it to JSON.
 */
router.get("/retrieve/:report_name", function (req, res, next) {
    var converter = new Converter({});
    //end_parsed will be emitted once parsing finished
    converter.on("end_parsed", function (jsonArray) {
        res.json(jsonArray);
    });
    //What did you do??
    converter.on("error", function (errMsg, errData) {
        res.status(500).send(errMsg);
    });
    if (req.params) {
        options.uri = "/analytics/report/" + req.params.report_name;
        request.getAsync(options).spread(function (response, body) {
            if (response.statusCode === 200)
                return body;
        })
            .then(function (results) {
                report_status = JSON.parse(results);
                if (report_status.status.succeeded) {
                    var report_id = report_status.data.id;
                    options.uri = "/analytics/report/" + req.params.report_name + "/instance/" + report_id;
                }
            })
            .then(function (results) {
                request.getAsync(options)
                    .spread(function (response, body) {
                        if (response.statusCode === 200)
                            return body;
                    })
                    .then(function (report) {
                    if (req.query.format && req.query.format === "csv") {
                        res.send(report).end();
                    } else {
                        converter.fromString(report);
                    }
                });
            })
            .catch(function (err) {
                console.log("request failed: ", err);
            });
    } else {
        res.status(400).end();
    }
});

module.exports = router;


