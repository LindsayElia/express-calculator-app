// Express.js calculator app //

// bring in the express module
var express = require("express");

// call the express function, return an object
var app = express();

// tell the app to use EJS as our view engine
app.set("view engine", "ejs");

app.get("/", function(request, response){
   // response.send("My Calculator App");
   response.render("index");
});


// add numbers
app.get("/add/:num1/:num2", function(request, response){
	var n1 = parseFloat(request.params.num1); // parseFloat can parse a string with a decimal into a number
	var n2 = parseFloat(request.params.num2); // using here instead of parseInt which is only for whole numbers
	var sum = n1 + n2;
	response.render("add", {number:sum});
});

// subtract numbers
app.get("/sub/:num1/:num2", function(request, response){
	var n1 = parseFloat(request.params.num1); // parseFloat can parse a string with a decimal into a number
	var n2 = parseFloat(request.params.num2); // using here instead of parseInt which is only for whole numbers
	var sum = n1 - n2;
	response.render("sub", {number:sum});
});

// multiply numbers
app.get("/mult/:num1/:num2", function(request, response){
	var n1 = parseFloat(request.params.num1); // parseFloat can parse a string with a decimal into a number
	var n2 = parseFloat(request.params.num2); // using here instead of parseInt which is only for whole numbers
	var sum = n1 * n2;
	response.render("mult", {number:sum});
});

// divide numbers
app.get("/div/:num1/:num2", function(request, response){
	var n1 = parseFloat(request.params.num1); // parseFloat can parse a string with a decimal into a number
	var n2 = parseFloat(request.params.num2); // using here instead of parseInt which is only for whole numbers
	var sum = (n1 / n2);
	response.render("div", {number:sum});
});


// localhost:3000/
app.listen(3000, function(){
    console.log("server starting on port 3000");
});

