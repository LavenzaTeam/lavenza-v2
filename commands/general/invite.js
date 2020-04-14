const config = require("../../config.json");
const { MessageEmbed } = require("discord.js");

module.exports = {
    config: {
        name: "invite",
        aliases: ["addme", "join"],
        description: "Sends a link to invite the bot to your server!",
        usage: "",
        category: "general"
    },
    run: async (client, message, args) => {
        return await message.channel.send("https://lavenza.tk/invite");
    }
}