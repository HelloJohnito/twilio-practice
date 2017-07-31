var http = require('http');
var express = require('express');
var twilio = require('twilio');

var app = express();

app.post('/sms', function(req, res){
  var twiml = new twilio.twiml.MessagingResponse();
  twiml.message('Good, because you really are awesome!');
  res.writeHead(200, {'Content-Type': 'text/xml'});
  res.end(twiml.toString());
});

http.createServer(app).listen(1337, function(){
  console.log('Express is listening');
});
