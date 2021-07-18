const command = {
  description: "Leave the channel bot is currently in",
  keys: ["leave", "go"],
  execute(message, args) {
    message.member.voice.channel.leave();
  },
};
export default command;
