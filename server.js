//Server.js file for Heroku deployment
var path = require('path');
var express = require('express');
var port = process.env.PORT || 8080;

var app = express();

// set the view engine to ejs
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'dist')));

// set the home page route
app.get('/', function(req, res) {

  // ejs render automatically looks in the views folder
  res.render('index');
});

var server = app.listen(port, 
  () => console.log(`Listening on ${ PORT }`)
);