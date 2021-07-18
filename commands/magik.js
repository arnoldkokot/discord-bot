import { saveConnection, deleteConnection } from "../src/musicPlayer.js";
const command = {
  description: "Trzymajcie fason panowie",
  keys: ["magik"],
  async execute(message, args) {
    if (!message.member.voice.channel)
      message.reply("You have to be in a voice channel");

    const connection = await message.member.voice.channel.join();
    connection.play("./sounds/magik.mp3", { volume: 1 });
    connection.on("disconnect", () => deleteConnection(connection));
    saveConnection(connection);
  },
};
export default command;
