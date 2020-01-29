const config = require("../../config.json");
const { RichEmbed } = require("discord.js");

module.exports = {
    config: {
        name: "p3pfusion",
        aliases: ["p3pf", "persona3portablefusion", "p3portablefusion"],
        description: "Sends the recipe for fusing a specified Persona in Persona 3 Portable",
        usage: "<persona>",
        category: "persona"
    },
    run: async (client, message, args, query) => {
        message.reply("Fusion is a lengthy process that will not be perfected for a while! Bear that in mind while using the fusion commands!");

        //data parsing
        let personaName = args.join("_").toLowerCase();
        if (query) personaName = query;
        if (!personaName) return message.reply(`You must specify a Persona to search. To view a list of Persona's, type \`${config.prefix}p3pfusion list\`!`)

        //checks if the user provided the "list" argument
        if (personaName === "list") {
            return message.reply("The Persona list is currently unavaliable! Check back later!");
        }

        switch (personaName) {
            case "":

                break;
            case "":

                break;
        }

        //checks if the "name" variable was declared and assigned to a value, if it was then it skips this, if it wasnt, it stops the code and displays this message
        if (!name) return message.reply(`You have entered an invalid Persona name! Type \`${config.prefix}p3pfusion list\` for a list of all valid Persona names!`);

        //creates and sends the embed using the data from above
        let embed = new RichEmbed()
            .setTitle(name)
            .setURL(url)
            .setColor(config.colors.darkblue)
            .addField("Combination #1", result1)
            .addField("Combination #2", result2)
            .addField("Combination #3", result3)
            .addField("Combination #4", result4)
            .addField("Combination #5", result5)
            .setFooter("Information gathered from Arantius's P3P Fusion Calculator", client.user.displayAvatarURL);

        //checks to see if the "note" variable is defined, if it is, display it, if not, display another thing
        if (note) {
            embed.setDescription(`${note} \n[Report a data error!](${config.servers.discordinvite})`);
        } else {
            embed.setDescription(`[Report a data error!](${config.servers.discordinvite})`);
        }

        //sends the embed to the current channel
        return message.channel.send(embed);
    }
}