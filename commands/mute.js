const { muteRole } = require("../json/config.json");

module.exports = {
  name: "mute",
  title: "Mute a User",
  description: "mutes the user",
  help: "mute [@user|userId]",
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
		return message.reply("You can't mute yourself, silly!");
	} else if(member.roles.cache.get(muteRole)) {
		message.reply(member.displayName + " is already muted!");
	} else if (member.hasPermission('MANAGE_ROLES')) {
		await member.roles.add(muteRole);
		message.reply(
		"User ID " + member + " has been muted."
		);
		message.delete();
	} else {
		message.delete();
		return message.reply("I can't do this command. Likely trying to mute someone above me!");
	}
  },
};
