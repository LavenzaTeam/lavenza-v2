const { RichEmbed, Attachment } = require("discord.js");
const config = require("../../config.json");

module.exports = {
    config: {
        name: "p3summary",
        aliases: ["p3sum", "p3story"],
        description: "Provides a full story about Persona 3 (Story is based off of Portable even though the changes are pretty much unimportant)",
        usage: "",
        category: "persona"
    },
    run: async (client, message, args) => {
        let img = new Attachment(`./personadata/p3/logo.png`, "logo.png")
        let p3embed = new RichEmbed()
        .setColor(config.colors.blue)
        .setTitle("Persona 3")
        .setDescription("The following is a summary of the whole plot of Persona 3. Thus, this contains spoilers.")
        .setThumbnail("attachment://logo.png")
        .addField("The Journey (Begining)", "WIP")
        .setFooter("Written by Arkane", client.users.get(config.ids.arkane).displayAvatarURL)
        .setTimestamp()
    }
}