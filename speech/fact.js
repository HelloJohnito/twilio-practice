

// fact
exports.handler = function(context, event, callback) {
	let twiml = new Twilio.twiml.VoiceResponse();

  	twiml.gather({
      input: 'speech',
      timeout: 3,
      hints: 'john, chris, cat',
      action: '/fact-command',
    }).say("Welcome to this voice automation. Who do you want to know about? John, Chris or a cat?")

  	callback(null, twiml);
};

// fact-command
exports.handler = function(context, event, callback) {
	let twiml = new Twilio.twiml.VoiceResponse();

  	const command = event.SpeechResult.toLowerCase();

  	switch(command){
      case 'john':
        twiml.say('John is awesome');
        break;
      case 'chris':
        twiml.say('hmmm.... He is alright');
        break;
      case 'cat':
        twiml.say('Fetching your cat fact.')
        twiml.redirect('fact-cat');
        break;
      default:
        twiml.say("sorry I did not get that. Goodbye");
        break;
    }

	callback(null, twiml);
};

// cat-fact

exports.handler = function(context, event, callback) {
	let twiml = new Twilio.twiml.VoiceResponse();
	let got = require('got');

  	if(event.SpeechResult === 'menu'){
      twiml.redirect('/facts');
      callback(null, twiml);
      return;
    }

  	got('https://catfact.ninja/fact').then(response => {
      const catFact = JSON.parse(response.body);
      twiml.gather({
        input: 'speech',
        hints: 'menu',
        timeout: 3
      }).say(`Here is your cat fact: ${catFact.fact}`);
      callback(null, twiml);
    }).catch(err => {
      twiml.say('There was an error. Going back to the menu.');
      twiml.redirect('/facts');
      callback(null, twiml);
    });
};
