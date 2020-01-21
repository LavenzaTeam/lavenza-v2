const { prefix } = require("../../config.json");

module.exports = async (client, message) => {
    if(message.author.bot) return;
    if(message.channel.type === 'dm') return;

    let args = message.content.slice(prefix.length).trim().split(/ +/g)
    let cmd = args.shift().toLowerCase();
    if(!args) args = null;

    if(!message.content.startsWith(prefix)) return;
    let commandfile = client.commands.get(cmd) || client.commands.get(client.aliases.get(cmd))
    if(commandfile) console.log(`Command used: ${cmd}, with Arguments: ${args}`);
    if(commandfile) commandfile.run(client, message, args);
}