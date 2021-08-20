const fs = require("fs");
const Discord = require("discord.js");
const { prefix, token, adminRole } = require("./json/config.json");

const client = new Discord.Client();
client.commands = new Discord.Collection();

const commandFiles = fs
  .readdirSync("./commands")
  .filter((file) => file.endsWith(".js"));

for (const file of commandFiles) {
  const command = require(`./commands/${file}`);
  client.commands.set(command.name, command);
}

client.once("ready", () => {
  console.log("Ready!");
});

client.on("message", async (message) => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  var args = message.content.slice(prefix.length).split(/ +/);
  const commandName = args.shift().toLowerCase();
	console.log(commandName);
  try {
    adminRole = await message.guild.roles.cache.find(
      (role) => role.name == adminRole
    );
    if (
      client.commands.get(commandName).admin &&
      !message.member.roles.cache.has(adminRole.id) &&
      !message.member.hasPermission("ADMINISTRATOR")
    )
      return message.reply("You do not have permission to use that command!");
    client.commands
      .get(commandName)
      .execute(
        message,
        args,
        Discord,
        fs,
        client.commands.array(),
        prefix,
        client
      );
  } catch (error) {
    console.error(error);
    message.reply("I couldn't execute that command!");
  }
});

client.login(token);
