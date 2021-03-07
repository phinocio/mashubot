module.exports = {
  name: "twitch",
  title: "Twitch Channel",
  description: "Links you to Ring's Twitch",
  help: "twitch",
  admin: false,
  execute(message, args, Discord, fs, commandFiles, prefix, client) {
    message.channel.send("https://www.twitch.tv/ringcomics");
  },
};
