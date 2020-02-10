const { RichEmbed } = require("discord.js");
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

        return message.reply("Command currently under construction!");
    }
}