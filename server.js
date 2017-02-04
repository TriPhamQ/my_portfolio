// Requiring modules
var express = require("express"),
	mongoose = require("mongoose"),
	bodyParser = require("body-parser"),
	jwt = require("jsonwebtoken"),
	path = require("path");

// Assigning local port
var	port = 8000;

// Setting up app
var app = express ();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "./client/static")));
app.use(express.static(path.join(__dirname, "./bower_components")));
app.use(express.static(path.join(__dirname, "./server/config")));

// Require MongoDB
require('./server/config/mongoose.js');

// Require HTTP route
require('./server/config/routes.js')(app);

// Setup listening server
var server = app.listen(port, function () {
	console.log("Listening on port", port);
});
