import { getConnection } from "../src/musicPlayer.js";
const command = {
  description: "Change playback volume, 1 is 100%",
  keys: ["volume", "v"],
  async execute(message, args) {
    const connection = getConnection(message.guild.id);
    if (!connection || !connection.dispatcher) {
      message.reply("Nothing to play");
      return;
    }
    if (args.length == 0) {
      message.reply("Add valume you want, like this: @Daiji volume 0.8");
      return;
    }
    connection.dispatcher.setVolume(args[0]);
  },
};
export default command;
