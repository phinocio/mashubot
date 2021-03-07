module.exports = {
  name: "patreon",
  title: "Patreon Page",
  description: "Links you to Ring's Patreon page",
  help: "patreon",
  admin: false,
  execute(message, args, Discord, fs, commandFiles, prefix, client) {
    message.channel.send("https://www.patreon.com/ringcomics");
  },
};
