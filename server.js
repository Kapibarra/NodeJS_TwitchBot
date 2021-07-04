
const tmi = require('tmi.js');

const client = new tmi.Client({
    connection: {reconnect: true},
	channels: [ 'karriganny' ],
    identity: {
		username: 'my_bot_name',
		password: 'oauth:my_bot_token'
	}
});

client.connect();

client.on('message', (channel, tags, message, self) => {
	// "Alca: Hello, World!"
	console.log(`${tags['display-name']}: ${message}`);
});
		