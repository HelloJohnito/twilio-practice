var http = require('http');
var express = require('express');
var twilio = require('twilio');
var accountSid = ;
var authToken =;

var client = require('twilio')(accountSid, authToken);
var app = express();

app.post('/voice', function(req, res){
  var twiml = new twilio.twiml.VoiceResponse();

  // retreive call logs
  // client.calls.each((call) => console.log(call));
  twiml.say('Hello from your pals');
  res.writeHead(200, {'Content-Type': 'text/xml'});
  res.end(twiml.toString());
});

http.createServer(app).listen(1337, function(){
  console.log('express is listening');
});
