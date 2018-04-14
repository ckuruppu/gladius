/*
	Gladius Hiring Challenge Web Server

	Chris Kuruppu
	4/13/2018

	PURPOSE
	Serve up the webpage that allows a user to submit data to the blockchain

 */

// all the imports
var http = require("http");
var express = require("express");

//Create the express web server
expressApp = express();

//define the port (8080)
insecurePort = process.env.PORT || 8080;

//home page
expressApp.set('view engine', 'jade').get("/", function(req, res){
	console.log("homepage requested")
	//render
	res.render(__dirname + "/views/home.jade", {} );
});
//Create the HTTP server
http.createServer(expressApp).listen(insecurePort);
console.log("Gladius Web Server listening on HTTP port: " + insecurePort + ".");
