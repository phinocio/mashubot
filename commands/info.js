module.exports = {
  name: "info",
  title: "Bot Info",
  description: "Displays bot info",
  help: "info",
  admin: false,
  execute(message, args, Discord, fs, rp, cheerio) {
    var infoMessage = new Discord.MessageEmbed()
      .setTitle("MashuBot")
      .setURL("https://github.com/RingComics/mashubot")
      .setAuthor("RingComics", "", "https://github.com/RingComics")
      .setDescription(
        "Henlo! I will do all the bot stuff in return for treatos and chimken"
      )
      .addField("Version", "1.0")
      .addField("Written using", "JavaScript, Node.JS, Discord.JS")
      .setColor("#e91e63")
      .setTimestamp();
    message.channel.send(infoMessage);
    message.delete();
  },
};
