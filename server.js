require('dotenv').config();

const tmi = require('tmi.js');

const client = new tmi.Client({
    connection: {reconnect: true},
	channels: [ 'karriganny' ],
    identity: {
		username: process.env.TWITCH_BOT_USERNAME,
		password: 'oauth:my_bot_token'
	}
});

client.connect();

client.on('message', (channel, tags, message, self) => {
	// "Alca: Hello, World!"
	console.log(`${tags['display-name']}: ${message}`);
});
		