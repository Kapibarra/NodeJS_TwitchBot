require('dotenv').config();

const tmi = require('tmi.js');

const regexpCommand = new RegExp(/^!([a-zA-Z0-9]+)(?:\W+)?(.*)?/);

const commands = {
	website: {
		response: 'https://vk.com'
	}
}

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

	// if (isNotBot) {
	// 	client.say(channel, `Message ${message} was send by ${tags.username}`)
	// }
	if ( !isNotBot ) return
		
	const [raw, command, argument] = message.match(regexpCommand)
	if (command) {
		client.say(channel, `Command ${command} found with argument ${argument}`)
		console.log(channel, `Command ${command} found with argument ${argument}`)
	}
	
	// "Alca: Hello, World!"
	console.log(`${tags['display-name']}: ${message}`);
	
});
		