//Set up requirements
var express = require("express");
var Request = require('request');
var bodyParser = require('body-parser');
var _ = require('underscore');

//Create an 'express' object
var app = express();

//Set up the views directory
app.set("views", __dirname + '/views');
//Set EJS as templating language WITH html as an extension
app.engine('.html', require('ejs').__express);
app.set('view engine', 'html');
//Add connection to the public folder for css & js files
app.use(express.static(__dirname + '/public'));

// Enable json body parsing of application/json
app.use(bodyParser.json());


/*-------------
DATABASE CONFIG
-------------*/

//username

var cloudant_USER = 'wit221';

//Users info database config

var USERS_cloudant_DB = 'dot_dot_connect_users';
var USERS_cloudant_KEY = 'beheryingedilantiouthers';
var USERS_cloudant_PASSWORD = 'l6J0sokWh3RsMDbXRhi3bNOM';
var USERS_cloudant_URL = "https://" + cloudant_USER + ".cloudant.com/" + USERS_cloudant_DB;

//Scores info database config

var SCORES_cloudant_DB = 'dot_dot_connect_scores';
var SCORES_cloudant_KEY = 'neyoublaterdepecterequil';
var SCORES_cloudant_PASSWORD = 'Rerk0bVkMOdtsalpDnlwKSjB';
var SCORES_cloudant_URL = "https://" + cloudant_USER + ".cloudant.com/" + SCORES_cloudant_DB;

/*-------------
DATABASE CONFIG
-------------*/


/*-----
USER INFO
------*/

var user_name;
var user_password;
var user_country;

/*-----
USER INFO
------*/



/*-----
ROUTES
-----*/

//Main Page Route - Show ALL data via Clientside Request
app.get("/", function(req, res){
	res.render('game');
});

app.get("/name/:word", function(req, res){
	var name = req.params.word;
	console.log(name)
	res.render('game', {page: name});
});

//Main Page Route - Show SINGLE word via Clientside Request
app.get("/:word", function(req, res){
	var currentWord = req.params.word;
	res.render('index', {page: currentWord});
});

//Save the data to the db
app.post("/registeruser", function(req,res){
 console.log("An attempt to register");
 //Get the data from the body
 var data = req.body;
 console.log(data);
 //Send the data to the db
 Request.post({
	url: USERS_cloudant_URL,
	auth: {
		user: USERS_cloudant_KEY,
		pass: USERS_cloudant_PASSWORD
	},
	headers: {
		"Content-Type": "application/json"
	},
	body: JSON.stringify(data)
 },
 function (error, response, body){
	if (response.statusCode == 201){
		console.log("Saved!");
		var msg = JSON.parse(body);
		res.json(msg);
	}
	else{
		console.log("Uh oh...");
		console.log("Error: " + res.statusCode);
		res.send("Something went wrong...");
	}
 });
});

// app.post("/login", function(req,res){
//  console.log("An attempt to login");
//  //Get the data from the body
//  var logindata = req.body;
//  console.log(logindata);
//  //Send the data to the db
//  Request.post({
// 	url: USERS_cloudant_URL,
// 	auth: {
// 		user: USERS_cloudant_KEY,
// 		pass: USERS_cloudant_PASSWORD
// 	},
// 	headers: {
// 		"Content-Type": "application/json"
// 	},
// 	body: JSON.stringify(data)
//  },
//  function (error, response, body){
// 	if (response.statusCode == 201){
// 		console.log("Saved!");
// 		// var msg = JSON.parse(body);
// 		// res.json(msg);

// 		function(req,res){
// 			console.log('Checking users database for login attempt');
// 			// Use the Request lib to GET the data in the CouchDB on Cloudant
// 			Request.get({
// 				url: SCORES_cloudant_URL+"/_all_docs?include_docs=true",
// 				auth: {
// 					user: USERS_cloudant_KEY,
// 					pass: USERS_cloudant_PASSWORD
// 				},
// 				 "Content-Type": "application/json"
// 			}, function (error, response, body){
// 				// Need to parse the body string
// 				var theBody = JSON.parse(body);
// 				var theRows = theBody.rows;
// 				var match = false;
// 				for (var i=0;i<theRows.length;i++){
// 					if theRows.doc.type==register{
// 						if logindata.user_password == theRows.doc.user_password && logindata.user_name == theRows.doc.user_name){
// 							match=true;
// 							break;
// 						}
// 					}
// 				}
// 				//Send the data
// 				res.json(match);
// 				});
// 		}
// 	}
// 	else{
// 		console.log("Uh oh...");
// 		console.log("Error: " + res.statusCode);
// 		res.send("Something went wrong...");
// 	}
//  });
// });


//Save score to scores database
app.post("/savetoscores", function(req,res){
 console.log("A score save");
 //Get the data from the body
 var data = req.body;
 console.log(data);
 //Send the data to the db
 Request.post({
	url: SCORES_cloudant_URL,
	auth: {
		user: SCORES_cloudant_KEY,
		pass: SCORES_cloudant_PASSWORD
	},
	headers: {
		"Content-Type": "application/json"
	},
	body: JSON.stringify(data)
 },
 function (error, response, body){
	if (response.statusCode == 201){
		console.log("Saved!");
		var msg = JSON.parse(body);
		res.json(msg);
	}
	else{
		console.log("Uh oh...");
		console.log("Error: " + res.statusCode);
		res.send("Something went wrong...");
	}
 });
});

//JSON Serving route from Scores datbase - ALL Data
app.get("/api/allscores", function(req,res){
	console.log('Making a scores db request for all entries');
	// Use the Request lib to GET the data in the CouchDB on Cloudant
	Request.get({
		url: SCORES_cloudant_URL+"/_all_docs?include_docs=true",
		auth: {
			user: SCORES_cloudant_KEY,
			pass: SCORES_cloudant_PASSWORD
		},
		 "Content-Type": "application/json"
	}, function (error, response, body){
		// Need to parse the body string
		var theBody = JSON.parse(body);
		var theRows = theBody.rows;
		var partialdata = [];
		for (var i=0;i<theRows.length;i++){
			var tempObj = {
				user_country: theRows[i].doc.user_country,
				user_name: theRows[i].doc.user_name,
				score: theRows[i].doc.score,
				time: theRows[i].doc.time
			}
			partialdata.push(tempObj);

		}
		//Send the data
		res.json(partialdata);
	});
});

//JSON Serving route from Users database - ALL Data
app.get("/api/allusers", function(req,res){
	console.log('Making a users db request for all entries');
	// Use the Request lib to GET the data in the CouchDB on Cloudant
	Request.get({
		url: USERS_cloudant_URL+"/_all_docs?include_docs=true",
		auth: {
			user: USERS_cloudant_KEY,
			pass: USERS_cloudant_PASSWORD
		},
		 "Content-Type": "application/json"
	}, function (error, response, body){
		// Need to parse the body string
		var theBody = JSON.parse(body);
		var theRows = theBody.rows;
		//Send the data
		res.json(theRows);
	});
});


//JSON Serving route - Single Word
app.get("/api/player/:word", function(req, res){
	var currentWord = req.params.word;
	console.log('Making a db request for: ' + currentWord);
	// Use the Request lib to GET the data in the CouchDB on Cloudant
	Request.get({
		url: cloudant_URL+"/_all_docs?include_docs=true",
		auth: {
			user: cloudant_KEY,
			pass: cloudant_PASSWORD
		}
	}, function (error, response, body){
		//Need to parse the body string
		var theBody = JSON.parse(body);
		var theRows = theBody.rows;

		// Then filter the results to match the current word
		var filteredRows = theRows.filter(function (d) {
			return d.doc.player == currentWord;
		});
		res.json(filteredRows);
	});
});

//Catch All Route
app.get("*", function(req, res){
	res.render('game');
});

/*-----
ROUTES
-----*/


var port=process.env.PORT || 3000;

app.listen(port);
console.log('Express started on port: ' + port);