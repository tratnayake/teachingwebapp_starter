//Require the express dependancy
var express = require('express');
//The body parser is what allows you to parse info from the HTTP request body.
var bodyParser = require('body-parser');

//Set up app to be the variable which initializes express and binds to it
var app = express();

//Make sure that the app actually uses the body parser in requests
app.use(bodyParser.urlencoded(
{	extended: true
}
));

//Global Vars
//The port that the server will listen on
var  port = 8000;

//ROUTES
//-- You will probably want to move routes into a different file later
//this is just for now.

app.get('/', function(req,res){
	//Write to screen
	console.log("/ Route invoked, check with postman to see your response");
	//Send back a response
	res.json({"success":true, "message": "ayylmao"});
})

app.post('/login', function(req,res){
	//Set up a list of users that can login.
	var users = [];
	users.push({username: "test", password: "test"})
	users.push({username: "ayyy", password: "lmao"})

	//First lets see what's in the request being sent over
	console.log(req.body);
	//Get the user name and password from request.
	var username = req.body.username;
	var password = req.body.password;

	//This is where you would put in database code to query
	users.forEach(function(user){
		//console.log("Checking user" + user.username);
		if(user.username == username){
			if(user.password == password){
				console.log("Auth successful, send back a response");
				res.json({success: true});
			}
			else{
				console.log("Incorrect Password");
				res.status(401).json("Incorrect Password");
			}
		}
	
	})
})




//Once all our instructions and shit to do has been loaded, finally start
//the server and make it listen.
var server = app.listen(port, function(){
	//Write to the console once the server has started listening so that we know
	console.log("Server Started! Listening on " + port + "...");
});
