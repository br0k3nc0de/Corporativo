
//import services from './../data/services'

var services = require('./../data/services')
var express = require("express");
var router = express.Router();

router.get("/", function(req, res, next) {
    res.send("API is working properly");
});

router.get("/all", function(req, res, next) {
    res.send(JSON.stringify(services));
});

module.exports = router;