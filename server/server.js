var express = require("express");
var cors = require("cors");

var app = express();


var mongoose = require ("mongoose");
mongoose.connect("mongodb://localhost/myEvents");

var connect = require("connect");
var serveStatic = require("serve-static");

// var app = connect();


app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(serveStatic("../public"));

app.listen(3000);