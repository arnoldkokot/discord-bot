export const link = {
  discord:
    "https://discord.com/api/oauth2/authorize?client_id=839303146487808050&permissions=0&scope=bot",
  github: "https://github.com/arnoldkokot/discord-bot",
  author: "https://arnoldkokot.com",
};

export const features = [
  {
    title: "Easy to Use",
    icon: "pi-check-circle",
    description:
      "Commands are easy to remember, and you can probably guess most of them without checking.",
  },
  {
    title: "Quiet",
    icon: "pi-volume-down",
    description:
      "Daiji does not ping, interrupt or post any messages unless necessary.",
  },
  {
    title: "Open Source",
    icon: "pi-github",
    description:
      "Bot is available at GitHub for you to inspect and contribute.",
  },
  {
    title: "Free",
    icon: "pi-money-bill",
    description:
      "All commands are available without any payments, there is no premium tier.",
  },
  {
    title: "Global Support",
    icon: "pi-globe",
    description: "Music bot works on every discord server in every region.",
  },
  {
    title: "Secure",
    icon: "pi-shield",
    description: "Requires only basic necessary permissions",
  },
];

export const commands = [
  {
    command: "ping",
    example: "/ping",
    description: "Test network latency",
  },
  {
    command: "help",
    example: "/help",
    description: "List all available commands",
  },
  {
    command: "leave",
    example: "/leave",
    description: "Leave the channel bot is currently in",
  },
  {
    command: "move",
    example: "/move (while in channel)",
    description: "Move to the message author's channel",
  },
  {
    command: "pause",
    example: "/pause",
    description: "Pause playback",
  },
  {
    command: "play",
    example: "/play youtu.be/dQw4w9WgXcQ",
    description: "Play a youtube link",
  },
  {
    command: "resume",
    example: "/resume",
    description: "Resume playback",
  },
  {
    command: "volume",
    example: "/volume 0.5",
    description: "Change playback volume, 1 is 100%",
  },
];

export const faq = [
  {
    question: "Do I need to assign bot any permissions?",
    answer: "No, permissions will be assigned during invitation",
  },
  {
    question: "Do i need to be the owner of the server?",
    answer:
      "No, but you need to have invite permissions. Available servers will appear during invitation process, if you don't find your desired one you probably do not have sufficient permissions.",
  },
  {
    question: "Bot does not respond to my commands",
    answer: `Only tagging bot triggers commands (e.g. !pause won't work, you should use "@Daiji pause"). @everyone and direct messages are also ignored.`,
  },
  {
    question: `"Video unavailable" error occurs when i try to play something from youtube`,
    answer:
      "Check if the song is set to public, if it is, some songs still may be unplayable duo to Youtube copyright law.",
  },
  {
    question: "Bot appears offline and does not respond",
    answer:
      "If its offline it is probably due to maintenance, kicking and re-inviting bot might help.",
  },
];
