const { RichEmbed, Attachment } = require("discord.js");
const config = require("../../config.json");

module.exports = {
    config: {
        name: "p3shadows",
        aliases: ["p3s", "persona3shadows", "p3enemies", "p3e"],
        description: "Sends data about a specified shadow from Persona 3",
        usage: "<shadow> (/a)",
        category: "persona"
    },
    run: async (client, message, args) => {
        let shadowName = args.join("_").toLowerCase();
        if(!shadowName) return message.reply(`Please specify a shadow to search for! \nTo view all the shadows in the game, type \`${config.prefix}p3shadows list\``)


        //maya shadows
        if (shadowName === "cowardly_maya") {
            var name = "Cowardly Maya";
            var fileName = shadowName;
            var url = `https://megamitensei.fandom.com/wiki/Cowardly_Maya`;
            var img = new Attachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png");
        }
        if (shadowName === "cowardly_maya_/a") {
            var name = "Cowardly Maya (The Answer)";
            var fileName = "cowardly_mayaAnswer";
            var url = `https://megamitensei.fandom.com/wiki/Cowardly_Maya`;
            var img = new Attachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png");
        }


        let embed = new RichEmbed()
        .setTitle(name)
        .setURL(url)
        .setDescription(`[Report a Data Error!](${config.servers.discordinvite})`)
        .setColor(config.colors.darkblue)
        .attachFile(img)
        .setImage("attachment://shadow.png")
        .setFooter("Information gathered from Arantius's Fusion Calculator", client.user.displayAvatarURL)

        return message.channel.send(embed);
    }
}