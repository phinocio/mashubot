module.exports = {
  name: "youtube",
  title: "YouTube Channel",
  description: "Links you to Ring's YouTube Channel",
  help: "youtube",
  admin: false,
  execute(message, args, Discord, fs, commandFiles, prefix, client) {
    message.channel.send(
      "https://www.youtube.com/channel/UCif_YWnOGA1HLlkH_4rvIwA"
    );
  },
};
