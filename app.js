var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('My Express app is working!');
});

app.get('/home', function (req, res) {
  res.send('This is my home route.');
});

app.listen(process.env.PORT || 3000, function () {
  console.log('Example app listening on port 3000!');
});