const { MessageEmbed } = require("discord.js");
const config = require("../../config.json");

module.exports = {
    config: {
        name: "p4fusion",
        aliases: ["p4f"],
        description: "A command that sends data for every fusion in Persona 4",
        usage: "<persona>",
        category: "persona"
    },
    run: async (client, message, args, query) => {
        //general data parsing
        let personaName = args.join("_").toLowerCase();
        if (query) personaName = query;
        if (personaName.endsWith("/f")) personaName = personaName.slice(0, -3);

        //checks if a persona was specified by the user
        if (!personaName) return message.reply(`You have not specified a Persona! Check \`${config.prefix}p4fusion list\` for a list of valid Persona's!`);

        //checks if the user specified the "list" argument
        if (personaName === "list") {
            return message.reply("The list of Persona 4 Persona's is currently unavaliable! Check back soon!");
        }

        //the list of every fusion in a switch case loop
        switch (personaName) {
            //fool arcana
            case "izanagi":
                var name = "Izanagi";
                var url = "https://arantius.github.io/persona-fusion-calculator/4.html#/persona/Izanagi";
                var result1 = "12,700¥ | [Obariyon](https://arantius.github.io/persona-fusion-calculator/4.html#/persona/Obariyon) (13/Fool), [Yomotsu-Shikome](https://arantius.github.io/persona-fusion-calculator/4.html#/persona/Yomotsu-Shikome) (7/Fool)";
                var result2 = "No Result";
                var result3 = "No Result";
                var result4 = "No Result";
                var result5 = "No Result";
                break;
        }

        //checks if the name variable was specified, if not, return an error
        if(!name) return message.reply(`You have entered an invalid Persona name! Check \`${config.prefix}p4fusion list\` for a list of valid Persona's`);
        //checks if the note was defined above, if not, set the note to null
        if (!note) var note = "";

        //creates the embed with all the variables above
        let embed = new MessageEmbed()
            .setTitle(name)
            .setURL(url)
            .setColor(config.colors.p4gold)
            .setDescription(`${note} \n[Report a data error!](${config.servers.discordinvite})`)
            .addField("Combination #1", result1)
            .addField("Combination #2", result2)
            .addField("Combination #3", result3)
            .addField("Combination #4", result4)
            .addField("Combination #5", result5)
            .setFooter("Information gathered from the Megami Tensei Wiki", client.user.displayAvatarURL);

        //sends the embed to the current channel
        return message.channel.send(embed);
    }
}