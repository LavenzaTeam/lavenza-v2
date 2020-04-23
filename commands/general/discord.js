const { MessageEmbed } = require("discord.js");
const config = require("../../config.json");

module.exports = {
    config: {
        name: "discord",
        aliases: [],
        description: "Provides you with a link to the Lavenza Support server!",
        usage: "",
        category: "general"
    },
    run: async (client, message, args) => {
        return await message.channel.send("https://lavenza.tk/discord");
    }
}