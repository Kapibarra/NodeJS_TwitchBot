require('dotenv').config();

const tmi = require('tmi.js');

const regexpCommand = new RegExp(/^!([a-zA-Z0-9]+)(?:\W+)?(.*)?/);

const client = new tmi.Client({
    connection: {reconnect: true},
	channels: [ 'karriganny' ],
    identity: {
		username: process.env.TWITCH_BOT_USERNAME,
		password: process.env.TWITCH_OAUTH_TOKEN,
	}
});

client.connect();

client.on('message', (channel, tags, message, self) => {
	const isNotBot = tags.username.toLowerCase() !== process.env.TWITCH_BOT_USERNAME;

	if ( !isNotBot ) return
		
	const [raw, command, argument] = message.match(regexpCommand)
	// "Alca: Hello, World!"
	console.log(`${tags['display-name']}: ${message}`);
});
		