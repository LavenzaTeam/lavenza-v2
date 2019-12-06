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
        var img = new Attachment(`./personadata/p3/logo.png`, "logo.png")
        let p3embed = new RichEmbed()
        .setColor(config.colors.blue)
        .setTitle("Persona 3")
        .setURL("https://megamitensei.fandom.com/wiki/Persona_3")
        .setDescription(`The following is a summary of the whole plot of Persona 3. Thus, this contains spoilers. \n[Report a data error!](${config.servers.discordinvite})`)
        .attachFile(img)
        .setThumbnail("attachment://logo.png")
        .addBlankField(true)
        .addField("The Journey (Begining)", "The Journey begins with you (The Protaganist) moving to a new city. You are then greeted by the `Dark Hour` while you are on your way to the dorm. The Dark Hour is a place in time between one day, and the next. A few days pass, and the dorm is attacked by a Shadow, (labled as a `Full Moon Boss`), and you awaken to the power of your Persona, `Orpheus`. However, Orpheus transforms into `Thanatos` to kill the shadow, hence awakening you to the power of the `Wild Card` which lets you hold multiple Personas in your soul. You then pass out for a few weeks.")
        .setFooter("Written by Arkane, Most info gathered from the Megami Tensei Wiki", client.users.get(config.ids.arkane).displayAvatarURL)
        .setTimestamp()

        message.channel.send(p3embed);
    }
}