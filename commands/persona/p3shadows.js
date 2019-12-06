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
        if (shadowName === "maya") {
            var name = "Maya";
            var fileName = shadowName;
            var url = `https://megamitensei.fandom.com/wiki/List_of_Persona_3_Shadows`;
            var img = new Attachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png");
        }
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
        if (shadowName === "merciless_maya") {
            var name = "Merciless Maya";
            var fileName = shadowName;
            var url = `https://megamitensei.fandom.com/wiki/Merciless_Maya`;
            var img = new Attachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png");
        }
        if (shadowName === "merciless_maya_/a") {
            var name = "Cowardly Maya";
            var fileName = "merciless_mayaAnswer";
            var url = `https://megamitensei.fandom.com/wiki/Merciless_Maya`;
            var img = new Attachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png");
        }
        if (shadowName === "frivolous_maya") {
            var name = "Frivolous Maya";
            var fileName = shadowName;
            var url = `https://megamitensei.fandom.com/wiki/Frivolous_Maya`;
            var img = new Attachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png");
        }
        if (shadowName === "haughty_maya") {
            var name = "Haughty Maya";
            var fileName = shadowName;
            var url = `https://megamitensei.fandom.com/wiki/Haughty_Maya`;
            var img = new Attachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png");
        }
        if (shadowName === "indolent_maya") {
            var name = "Indolent Maya";
            var fileName = shadowName;
            var url = `https://megamitensei.fandom.com/wiki/Indolent_Maya`;
            var img = new Attachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png");
        }
        if (shadowName === "insidious_maya") {
            var name = "Insidious Maya";
            var fileName = shadowName;
            var url = `https://megamitensei.fandom.com/wiki/Insidious_Maya`;
            var img = new Attachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png");
        }
        if (shadowName === "insidious_maya_/a") {
            var name = "Insidious Maya (The Answer)";
            var fileName = "insidious_mayaAnswer";
            var url = `https://megamitensei.fandom.com/wiki/Insidious_Maya`;
            var img = new Attachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png");
        }
        if (shadowName === "ill_fated_maya") {
            var name = "Ill Fated Maya";
            var fileName = shadowName;
            var url = `https://megamitensei.fandom.com/wiki/Ill-fated_Maya`;
            var img = new Attachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png");
        }
        if (shadowName === "ill_fated_maya_/a") {
            var name = "Ill Fated Maya (The Answer)";
            var fileName = "ill_fated_mayaAnswer";
            var url = `https://megamitensei.fandom.com/wiki/Ill-fated_Maya`;
            var img = new Attachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png");
        }
        if (shadowName === "bigoted_maya") {
            var name = "Bigoted Maya";
            var fileName = shadowName;
            var url = `https://megamitensei.fandom.com/wiki/Bigoted_Maya`;
            var img = new Attachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png");
        }
        if (shadowName === "bigoted_maya_/a") {
            var name = "Bigoted Maya (The Answer)";
            var fileName = "bigoted_mayaAnswer";
            var url = `https://megamitensei.fandom.com/wiki/Bigoted_Maya`;
            var img = new Attachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png");
        }


        let embed = new RichEmbed()
        .setTitle(name)
        .setURL(url)
        .setDescription(`[Report a Data Error!](${config.servers.discordinvite})`)
        .setColor(config.colors.darkblue)
        .attachFile(img)
        .setImage("attachment://shadow.png")
        .setFooter("Information gathered from the Megami Tensei Wiki", client.user.displayAvatarURL)

        return message.channel.send(embed);
    }
}