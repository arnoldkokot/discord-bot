import "dotenv/config.js";
import Discord from "discord.js";
import * as commands from "./commands/index.js";

const bot = new Discord.Client();

bot.on("message", async (message) => {
  if (!message.mentions.has(bot.user.id) || message.author.bot) return;

  const userInput = message.content
    .replace(`<@!${bot.user.id}>`, "")
    .trim()
    .toLowerCase();

  const [userCommand, ...args] = userInput.split(" ");

  let executed = false;
  for (const name in commands) {
    const { keys, execute } = commands[name];
    if (keys.includes(userCommand)) {
      try {
        await execute(message, args);
      } catch (error) {
        message.channel.send(`Spaghetti code, error :( \n ${error}`);
        console.error(error);
      }
      executed = true;
      break;
    }
  }
  if (!executed) message.channel.send(`Unknown command "${userCommand}" :|`);
});

bot.once("ready", () => console.info(`${bot.user.tag} logged in.`));
bot.login(process.env.TOKEN);
