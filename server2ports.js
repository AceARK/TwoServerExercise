//import our http module
var http = require("http");

// define a port to listen to
var goodPort = 7000;

var badPort = 7500;

var goodPhrases = ["You are awesome!", "The world is a better place with you in it", "You are a genius", "You rock!!"];
var badPhrases = ["You are terrible!", "You're a really bad person", "You're mean", "You are horrid!"];

var randomGoodIndex = 0;
var randomBadIndex = 0;

// creating an http server
var goodServer = http.createServer(handleGoodRequest);
// creating an http server
var badServer = http.createServer(handleBadRequest);

// function to handle requests
function handleGoodRequest(request, response){
	randomGoodIndex = Math.floor(Math.random()*goodPhrases.length);
	response.end(goodPhrases[randomGoodIndex] + request.url);
}

// function to handle requests
function handleBadRequest(request, response){
	randomBadIndex = Math.floor(Math.random()*badPhrases.length);
	response.end(badPhrases[randomBadIndex] + request.url);
}

// Start server
goodServer.listen(goodPort, function() {
	// server now listening - %s is a placeholder for the variable being passed after the string
	console.log("good server is listening on :http://localhost:%s", goodPort);
});

// Start server
badServer.listen(badPort, function() {
	// server now listening - %s is a placeholder for the variable being passed after the string
	console.log("bad server is listening on :http://localhost:%s", badPort);
});
