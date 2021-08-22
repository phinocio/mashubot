module.exports = {
  name: "clear",
  title: "Clear X Messages",
  description: "Clears the most recent X messages",
  help: "clear [messagesToClear]",
  admin: true,
  async execute(message, args, Discord, fs, commandFiles, prefix, client) {
	const amount = args[0]

	if(!amount) {
		return message.reply('please supply a number of messages to clear');
	}

	if (message.member.hasPermission('MANAGE_MESSAGES') && amount > 0 && amount <= 100) {
		try {
			await message.delete();
			if (message.channel.type != 'dm') {
				await message.channel.bulkDelete(amount);
			}
		} catch (e) {
			await message.reply(e.message);
		}
	} else {
		await message.reply(
			'please enter an amount of messages to clear from 1-100 (inclusive)!'
		);
	}	
  },
};
