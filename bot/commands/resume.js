import { getConnection } from "../src/musicPlayer.js";
const command = {
  description: "Resume playback",
  keys: ["resume", "r"],
  async execute(message, args) {
    const connection = getConnection(message.guild.id);
    if (!connection || !connection.dispatcher) {
      message.reply("Nothing to play");
      return;
    }
    connection.dispatcher.resume();
  },
};
export default command;
