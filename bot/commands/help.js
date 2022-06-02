import * as commands from "./index.js";
const command = {
  description: "List all available commands",
  keys: ["help"],
  execute(message, args) {
    const fields = [];

    for (const name in commands) {
      const { description, keys } = commands[name];
      fields.push({
        name: keys.join(" | "),
        value: description,
        inline: false,
      });
    }

    const embed = {
      title: "Daiji Warden",
      color: 0x574486,
      thumbnail: {
        url: "attachment://jaketree_small.jpg",
      },
      fields,
      footer: {
        text: "v1.0.0",
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
