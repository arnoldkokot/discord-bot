const command = {
  description: "Move to the message author's channel",
  keys: ["move", "come", ""],
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
