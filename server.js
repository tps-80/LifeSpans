var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var port = 8000;
var path = require('path');

app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'public')));


app.get('/', function(req, res, next){
  console.log('serving index.html...');
  next();
});

app.get('/', function(req, res, next){
  res.status(200).sendFile(__dirname +'/public/index.html');
});

app.listen(process.env.PORT || port, function(){
  console.log('The server is listening on port: ', port);
});