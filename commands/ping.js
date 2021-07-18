const command = {
  description: "Test network latency",
  keys: ["ping"],
  execute(message, args) {
    const start = Date.now();
    message.channel.send("Pong. (...)").then((message) => {
      message.edit(`Pong. (${Date.now() - start}ms)`);
    });
  },
};
export default command;
