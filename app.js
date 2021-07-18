import "dotenv/config.js";
import Discord from "discord.js";
import * as commands from "./commands/index.js";

const bot = new Discord.Client();

bot.on("message", (message) => {
  if (!message.mentions.has(bot.user.id) || message.author.bot) return;

  const userInput = message.content
    .replace(`<@!${bot.user.id}>`, "")
    .trim()
    .toLowerCase();

  let executed = false;
  for (const name in commands) {
    const { keys, execute } = commands[name];
    if (keys.includes(userInput)) {
      try {
        execute(message);
      } catch (error) {
        message.channel.send(`Spaghetti code, error :( \n ${error}`);
        console.error(error);
      }
      executed = true;
      break;
    }
  }
  if (!executed) message.channel.send(`Unknown command "${userInput}" :|`);
});

bot.once("ready", () => console.info(`${bot.user.tag} logged in.`));
bot.login(process.env.TOKEN);
