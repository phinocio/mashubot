module.exports = {
  name: "ashlan",
  title: "Ashlan",
  description: "Links you to the Ashlan YouTube Channel",
  help: "ashlan",
  admin: false,
  execute(message, args, Discord, fs, commandFiles, prefix, client) {
    message.channel.send(
      "https://www.youtube.com/channel/UCU91AggRXnsZSiv1qdtvCTA"
    );
  },
};
