const { RichEmbed } = require("discord.js");
const config = require("../../config.json");

module.exports = {
    config: {
        name: "support",
        aliases: [],
        description: "Provides you with a link to the Lavenza Support server!",
        usage: "",
        category: "general"
    },
    run: async (client, message, args) => {
        let embed = new RichEmbed()
        .setTitle("Click Here to join the Support Server!")
        .setURL(config.servers.discordinvite)
        .setColor(config.colors.darkblue);

        message.channel.send(embed);
    }
}