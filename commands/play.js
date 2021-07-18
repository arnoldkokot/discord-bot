import { saveConnection, deleteConnection } from "../src/musicPlayer.js";
import ytdl from "ytdl-core";
const command = {
  description: "Play a youtube link",
  keys: ["play", "song"],
  async execute(message, args) {
    if (!message.member.voice.channel)
      message.reply("You have to be in a voice channel");

    if (args.length == 0)
      message.reply(
        "Give me a link or key words, like this: @Daiji play https://youtu.be/dQw4w9WgXcQ"
      );

    const audioLink = args[0];
    if (!/^http/.test(audioLink)) message.reply("Not a valid link");

    const connection = await message.member.voice.channel.join();
    if (ytdl.validateURL(audioLink)) {
      const stream = ytdl(audioLink, { filter: "audioonly" });
      connection
        .play(stream, {
          volume: 0.5,
        })
        .on("error", (error) => {
          console.log(error);
          message.reply(`Spaghetti code, error :( \n ${error}`);
        });
    } else {
      console.log("Link does not seem to be from youtube.");
    }
    connection.on("disconnect", () => deleteConnection(connection));
    saveConnection(connection);
  },
};
export default command;
