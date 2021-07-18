const command = {
  description: "move to channel",
  keys: ["", "move"],
  execute(message, args) {
    const voiceChannel = message.member.voice.channel;
    if (voiceChannel) {
      voiceChannel.join();
    } else {
      message.reply("I dont know where to join");
    }
  },
};
export default command;
