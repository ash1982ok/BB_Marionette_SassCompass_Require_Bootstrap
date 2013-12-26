var express = require('express');

var app = express();

app.use(express.static(__dirname + '/'));

app.get('/', function(req, res) {
	// Simulating some loading time...
	res.render('index', {
    	title: 'Home'
  	});
});

app.listen(3000, function() {
	console.log("Server listening onport 3000");
});