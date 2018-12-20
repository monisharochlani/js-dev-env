var express = require('express');
var path = require('path');
var open = require('open');

var port = 3000;

// Instantiate express
var app = express();

//Configure Route
app.get('/', function (req, res) {
	res.sendFile(path.join(__dirname, '../src/index.html'));
});

// Configure listeining on port
app.listen(port, function (err) {
	if (err) {
		console.log(err);
	}
	else {
		open('http://localhost:' + port);
	}
})
