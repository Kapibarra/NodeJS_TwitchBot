require('dotenv').config();
const tmi = require('tmi.js');

const client = new tmi.Client({
	options: { debug: true },
	identity: {
		username: process.env.TWITCH_BOT_USERNAME,
		password: process.env.TWITCH_OAUTH_TOKEN
	},
	channels: [ 'nam_2077_' ]
});
client.connect();



client.on('message', (channel, tags, message, self) => {

function subscribe() {
	client.say(channel, `Не забудь подписаться на мой Twitch, а так же YouTube <а>https://www.youtube.com/channel/UCqtlYiceFqtsr46SY0-3azQ/featured</a>`)
}

	if(self) return;

	if(message.toLowerCase() === '!привет') {
		client.say(channel, `Привет!Рад видеть тебя на своём стриме, @${tags.username}!`);
	}
	if(message.toLowerCase() === '!vk') {
		client.say(channel, `@${tags.username}, мой вк vk.com!`);
	}
	if(message.toLowerCase() === '!youtube') {
		client.say(channel, `@${tags.username}, мой YouTube https://inlnk.ru/q6X1V`);
	}
	if(message.toLowerCase() === '!donate') {
		client.say(channel, ` https://www.donationalerts.com/r/nam_ , Большущее спасибо, @${tags.username} !`);
	}
	if(message.toLowerCase() === '!substart' && tags.username === 'nam_2077_') { 
	setInterval((() => subscribe()), 36000);
	console.log('started')
	}
	if(message.toLowerCase() === '!commands') {
		client.say(channel, 
			`@${tags.username}, команды на стриме: !vk !привет !youtube !donate `);
	}
});






