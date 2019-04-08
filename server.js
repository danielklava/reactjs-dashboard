//Server.js file for Heroku deployment
var path = require('path');
var express = require('express');
const PORT = process.env.PORT || 5000;

var app = express();

app.use(express.static(path.join(__dirname, 'dist')));

var server = app.listen(PORT, () => console.log(`Listening on ${ PORT }`)
);