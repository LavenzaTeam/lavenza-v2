const { prefix, colors } = require("../../config.json");
const { MessageEmbed } = require("discord.js");

module.exports = async (client, message) => {
    let messageEmbed = new MessageEmbed()
        .setDescription(`Hello! I unfortunately cannot be used in DMs. \nYou can however [invite me](https://lavenza.tk/invite) to your own server. \nYou can also take a look at [our server](https://lavenza.tk/discord) if you don't feel like adding it to your own server!`)
        .setColor(colors.darkblue);

    if(message.author.bot) return;
    if(message.channel.type === 'dm') return message.channel.send(messageEmbed);

    let args = message.content.slice(prefix.length).trim().split(/ +/g)
    let cmd = args.shift().toLowerCase();
    if(!args) args = null;

    if(!message.content.startsWith(prefix)) return;
    let commandfile = client.commands.get(cmd) || client.commands.get(client.aliases.get(cmd))
    if(commandfile) console.log(`Command used: ${cmd}, with Arguments: ${args}`);
    if(commandfile) commandfile.run(client, message, args);
}