var express = require('express');
var app = express();

var portDecision = process.env.PORT || 3000;

var server = app.listen(portDecision, function(){
  var port = server.address().port;
  console.log('Listening on port', port);
});

app.get('/', function(request, response) {
  response.send('Hello Heroku');
})
