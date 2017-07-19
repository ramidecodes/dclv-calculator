var express = require('express');
var path = require('path');
var open = require('open');
var compression = require('compression');
var bodyParser = require('body-parser');
/* eslint-disable no-console, no-unused-vars */

process.env.NODE_ENV = 'production'

var port = 3000;
var app = express();

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

app.use(compression());
app.use(express.static('dist'));
app.get('/', function(req, res){
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

app.listen(port, function(err){
  if (err) {
    console.log(err);
  } else {
    open('http://localhost:' + port);
  }
});
