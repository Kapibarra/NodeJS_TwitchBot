require('dotenv').config();
const tmi = require('tmi.js');

const client = new tmi.Client({
	options: { debug: true },
	identity: {
		username: process.env.TWITCH_BOT_USERNAME,
		password: process.env.TWITCH_OAUTH_TOKEN
	},
	channels: [ 'karriganny' ]
});

client.connect();

client.on('message', (channel, tags, message, self) => {
	if(self) return;

	if(message.toLowerCase() === '!hello') {
		client.say(channel, `@${tags.username}, heya!`);
	}
	if(message.toLowerCase() === '!vk') {
		client.say(channel, `@${tags.username}, мой вк vk.com!`);
	}
});