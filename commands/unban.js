module.exports = {
  name: "unban",
  title: "Unban User",
  description: "Invokes the mercy of the almighty banhammer!",
  help: "unban [@username]",
  admin: true,
  execute(message, args, Discord, fs, commandFiles, prefix, client) {
    message.guild.members.unban(args[0]);
    message.reply("User ID " + args[0] + " has been unbanned");
    message.delete();
  },
};
