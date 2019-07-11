'use strict';

var express = require('express');
var mongo = require('mongodb');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var cors = require('cors');

var app = express();

// Basic Configuration 
var port = process.env.PORT || 3000;

/** this project needs a db !! **/ 
// mongoose.connect(process.env.MONGOLAB_URI);

//use body-parser
app.use(bodyParser.json());

//app use cors
app.use(cors());

/** this project needs to parse POST bodies **/
// you should mount the body-parser here

app.use('/public', express.static(process.cwd() + '/public'));

app.get('/', function(req, res){
  res.sendFile(process.cwd() + '/views/index.html');
});


//Start API endpoint...
app.get("/api/shorturl/new", function(req, res) {
  res.json({shorturl: 'This is your shorturl'});
});

//Creates the database entry
app.get("/api/new/:urlToShorten(*)", function(req, res, next){
  var { urlToShorten } = req.params;
  console.log(urlToShorten);
  res.json({urlToShorten: urlToShorten});
});
app.listen(port, function () {
  console.log('Node.js listening ...');
});
