var accountSid = ;
var authToken =;

var client = require('twilio')(accountSid, authToken);

client.calls.create({
  url: 'http://demo.twilio.com/docs/voice.xml',
  to: '+13103658696',
  from: '+14157121405'
}, function(err, call){
  if(err){
    console.log(err);
  }
  else{
    console.log(call.sid);
  }
});
