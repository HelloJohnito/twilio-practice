var accountSid;
var authToken ;

var client = require('twilio')(accountSid, authToken);

client.messages.create({
  to: '+13103658696',
  from: '+14157121405',
  body: 'Hi John, you are awesome!'
}, function(err, message){
  if(err){
    console.log(err);
  }
  else {
    console.log(message.sid);
  }
});
