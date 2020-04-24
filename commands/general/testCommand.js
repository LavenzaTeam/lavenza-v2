const { MessageEmbed } = require("discord.js");

module.exports = {
    config: {
        name: "testcommand",
        aliases: "",
        description: "",
        usage: "",
        category: "general"
    },
    run: async (client, message, args) => {
        let url = client.user.displayAvatarURL;
        return message.reply(`yes ${url}`);
    }
}