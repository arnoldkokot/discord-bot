import 'dotenv/config.js';
import Discord from 'discord.js';
import { commands } from './commands.js';

const bot = new Discord.Client();

bot.on('message', async message => {

	//Messages to ignore (selfpings, @everyone etc.)
	if(!message.guild) return false;
	if(message.author.bot) return false;
	if(message.content.includes("@here") || message.content.includes("@everyone")) return false;

	if(message.mentions.has(bot.user.id)) {

		const userInput = message.content.replace(`<@!${bot.user.id}>`,'').trim().toLowerCase();
		let executed = false;
		commands.forEach(command => {
			if(command.name == userInput || command.keyWords.includes(userInput)) {
				executed = true;
				command.execute(message);
			}
		});
		if(!executed) message.reply('co?');
	}

});

bot.on('ready', () => console.info(`Logged in as ${bot.user.tag}!`));
bot.login(process.env.TOKEN);