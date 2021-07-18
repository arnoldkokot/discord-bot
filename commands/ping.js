const command = {
  description: "ping -> pong test command",
  keys: ["ping", "pong"],
  execute(message, args) {
    message.channel.send("Pong.");
  },
};
export default command;
