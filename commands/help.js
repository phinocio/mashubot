module.exports = {
  name: "help",
  title: "Help Message",
  description: "Displays this message",
  help: "help",
  admin: false,
  execute(message, args, Discord, fs, commandFiles, prefix, client) {
    var helpMessage = new Discord.MessageEmbed()
      .setTitle("Help")
      .setColor("#e91e63");
    commandFiles.forEach((command) => {
      if (command.admin) {
        helpMessage.addField(
          "**__" + command.title + "(Admin only)__**",
          "__Description:__\n" +
            command.description +
            "\n__Command:__\n" +
            prefix +
            command.help,
          true
        );
      } else {
        helpMessage.addField(
          "**__" + command.title + "__**",
          "__Description:__\n" +
            command.description +
            "\n__Command:__\n" +
            prefix +
            command.help,
          true
        );
      }
    });
    message.channel.send(helpMessage);
    message.delete();
  },
};
