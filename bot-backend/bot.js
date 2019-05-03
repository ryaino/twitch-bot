const auth = require('./authentication')
const twitchJs = require('twitch-js');
var parser = require('./messageParser')


// Define configuration options
const opts = {
  identity: {
    username: "Rya_N_Bot",
    password: auth
  },
  channels: [
    "Rya_N_"
  ]
};

// Create a client with our options
const client = new twitchJs.client(opts);

// Register our event handlers (defined below)
client.on('message', onMessageHandler);
client.on('connected', onConnectedHandler);

// Connect to Twitch:
client.connect();

// Called every time a message comes in
function onMessageHandler (target, context, msg, self) {
 var msgParser = new parser(target,context,msg,self);
 
 client.say(target,msgParser.parseMessage());
}



// Called every time the bot connects to Twitch chat
function onConnectedHandler (addr, port) {
  console.log(`* Connected to ${addr}:${port}`);
}