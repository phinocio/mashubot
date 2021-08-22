module.exports = {
	name: "kick",
	title: "Kick User",
	description: "Summons the almighty kickhammer!",
	help: "kick [@username] [reason]",
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
		return message.reply("You can't kick yourself, silly!");

	} else if (await !member.kickable) {
		message.delete();
		return message.reply(args[0] + " cannot be kicked!");
		
	} else {
		try {
		await member.send(
			"You have been kicked from RingComics' Discord Server for: " +
			args.slice(1).join(" ")
		);
		} catch (e) {}
		await member.kick();
		message.reply(
		"User ID " + member + " has been kicked for: " + args.slice(1).join(" ")
		);
		message.delete();
	}
	},
};
