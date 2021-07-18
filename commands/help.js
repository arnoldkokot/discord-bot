import * as commands from "./index.js";
const command = {
  description: "display this embed",
  keys: ["help"],
  execute(message, args) {
    const fields = [];

    for (const name in commands) {
      const { description } = commands[name];
      fields.push({
        name,
        value: description,
        inline: false,
      });
    }

    const embed = {
      title: "Daiji Warden",
      color: 0x43b581,
      thumbnail: {
        url: "attachment://jaketree_small.jpg",
      },
      fields,
      footer: {
        text: "v0.0.4",
      },
    };

    message.reply({
      embed,
      files: [
        {
          attachment: "img/jaketree_small.jpg",
          name: "jaketree_small.jpg",
        },
      ],
    });
  },
};
export default command;
