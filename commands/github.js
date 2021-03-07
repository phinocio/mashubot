module.exports = {
  name: "github",
  title: "GitHub Profile",
  description: "Links you to Ring's Patreon page",
  help: "github",
  admin: false,
  execute(message, args, Discord, fs, commandFiles, prefix, client) {
    message.channel.send("https://github.com/RingComics");
  },
};
