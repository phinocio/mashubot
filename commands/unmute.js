const { muteRole } = require("../json/config.json");

module.exports = {
  name: "unmute",
  title: "Unmute a User",
  description: "Unmutes the user",
  help: "Unmute [@user|userId]",
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

	} else if(!member.roles.cache.get(muteRole)) {
		return message.reply(member.displayName + " isn't muted!");

	} else if (message.member.hasPermission('MANAGE_ROLES')) {
		await member.roles.remove(muteRole);
		message.delete();
		return message.reply(member.displayName + " has been unmuted.");

	} else {
		message.delete();
		return message.reply("I can't do this command. Likely trying to unmute someone above me!");
	}
  },
};
