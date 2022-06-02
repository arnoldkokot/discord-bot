import { getConnection } from "../src/musicPlayer.js";
const command = {
  description: "Pause playback",
  keys: ["pause", "p"],
  async execute(message, args) {
    const connection = getConnection(message.guild.id);
    if (!connection || !connection.dispatcher) {
      message.reply("I'm not playing anything");
      return;
    }
    connection.dispatcher.pause();
  },
};
export default command;
