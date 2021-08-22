module.exports = {
  name: "ban",
  title: "Ban User",
  description: "Summons the almighty banhammer!",
  help: "ban [@username|id] [reason]",
  admin: true,
  async execute(message, args, Discord, fs, commandFiles, prefix, client) {
    let member = undefined;
    if (message.mentions.members && message.mentions.members.size != 0) {
      member = message.mentions.members.first();
    } else {
      member = await message.guild.members.fetch(args[0]);
    }
    if (member.id == message.member.id) {
      message.delete();
      return message.reply("You can't ban yourself, silly!");
    } else if (await !member.bannable) {
      message.delete();
      return message.reply(args[0] + " cannot be banned!");
    } else {
      try {
        await member.send(
          "You have been banned from RingComics' Discord Server for: " +
            args.slice(1).join(" ")
        );
      } catch (e) {}
      await member.ban({ reason: args.slice(1).join(" ") });
      message.reply(
        "User ID " + member + " has been banned for: " + args.slice(1).join(" ")
      );
      message.delete();
    }
  },
};
