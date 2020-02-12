const config = require("../../config.json");
const { RichEmbed } = require("discord.js");

module.exports = {
    config: {
        name: "invite",
        aliases: ["addme", "join"],
        description: "Sends a link to invite the bot to your server!",
        usage: "",
        category: "general"
    },
    run: async (client, message, args) => {
        let inviteurl = `https://discordapp.com/api/oauth2/authorize?client_id=${config.inviteurl.clientid}&permissions=${config.inviteurl.permissionsinteger}&scope=bot`;
        let placeholderurl = `https://twitter.com/ArkaneOnline`;

        let inviteEmbed = new RichEmbed()
            .setTitle(`~~Click here to invite ${client.user.username} to your server!~~ Currently Disabled!`)
            .setURL(placeholderurl)
            .setColor(config.colors.darkblue);

        return message.channel.send(inviteEmbed);
    }
}