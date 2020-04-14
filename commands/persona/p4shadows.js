const { MessageAttachment, MessageEmbed } = require("discord.js");
const config = require("../../config.json");

module.exports = {
    config: {
        name: "p4shadows",
        aliases: ["p4s"],
        description: "A command that obtains all the data for the Persona 4 and Persona 4 The Golden Shadows",
        usage: "<shadow>",
        category: "persona"
    },
    run: async (client, message, args, query) => {
        //general data parsing
        let shadowName = args.join("_").toLowerCase();
        if(query) shadowName = query;
        if(!shadowName) return message.reply(`You have entered an invalid Shadow name! To view a list of all valid Persona's, type \`${config.prefix}p4shadows list\`!`);

        //checks if the user specified the list variable
        if(shadowName === "list") {
            return message.reply("The list of Persona 4 Shadows is currently unavaliable. Check back soon.");
        }

        //the list of every shadow in the game and the variables that are defined
        switch (shadowName) {
            //basalt shadows
            case "selfish_basalt":
                var name = "Selfish Basalt";
                var fileName = shadowName;
                var url = "https://megamitensei.fandom.com/wiki/Selfish_Basalt";
                var img = new MessageAttachment(`./personadata/p4shadows/${fileName}.png`, "shadow.png");
                break;
        }

        //checks if the name variable was specified, if not, let the user know they entered an invalid shadow
        if (!name) return message.reply("You have entered an invalid Shadow name! Please check your spelling and try again!");

        //creates the embed and sends it
        let embed = new MessageEmbed()
            .setTitle(name)
            .setURL(url)
            .setDescription(`[Report a Data Error!](${config.servers.discordinvite})`)
            .setColor(config.colors.p4gold)
            .attachFiles(img)
            .setImage("attachment://shadow.png")
            .setFooter("Information gathered from the Megami Tensei Wiki", client.user.displayAvatarURL);

        return message.channel.send(embed);
    }
}