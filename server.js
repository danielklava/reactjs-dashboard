//Server.js file for Heroku deployment
var path = require('path');
var express = require('express');

var app = express();

app.use(express.static(path.join(__dirname, 'dist')));

var server = app.listen(process.env.POST || 8080, '0.0.0.0', function() {
  console.log('listening on port ', server.address().port);
});