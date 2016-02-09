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


// app.get('/', function (req, res) {
//   res.sendfile('public/index.html')
//   // res.send('Dude!  My Express app is working!');
// });



app.listen(process.env.PORT || port, function(){
  console.log('The server is listening on port: ', port);
});

// app.listen(process.env.PORT || 3000, function () {
//   console.log('Example app listening on port 3000!');
// });

// module.exports = app;