const { MessageAttachment, MessageEmbed } = require("discord.js")
const config = require("../../config.json");

module.exports = {
    config: {
        name: "p4personas",
        aliases: ["p4p"],
        description: "A command containing all of the data for the Persona's from Persona 4 and Persona 4 The Golden",
        usage: "<persona>",
        category: "persona"
    },
    run: async (client, message, args, query) => {
        //general data parsing
        let personaName = args.join("_").toLowerCase();
        if (query) personaName = query;

        //checks if the user specified an argument
        if(!personaName) return message.reply(`You have entered an invalid Persona name! Check \`${config.prefix}p4personas list\` for a list of every valid Persona.`);

        //checks if the user specified "list" as a variable
        if(personaName === "list") {
            return message.reply("Sorry, the list of Persona 4 Persona's is currently unavaliable!");
        }

        //switch case loop containing all the data about the personas
        switch (personaName) {
            //fool arcana
            case "izanagi":
                var name = personaName.charAt(0).toUpperCase() + personaName.slice(1);
                var fileName = personaName;
                var quote = "\"I am thou, thou art I. The time has come. Open thy eyes and call forth what is within.\""
                var url = `https://megamitensei.fandom.com/wiki/${name}`;
                var img = new MessageAttachment(`./personadata/p4/${fileName}.png`, "persona.png")
                break;
        }

        //checks if the name variable was specified in the switch case statement loop
        if (!name) return message.reply(`You have entered an invalid Persona name! Check \`${config.prefix}p4personas list\` for a list of all valid Persona's!`);
        if (!quote) var quote = "";

        //creates the embed with all the values specified in the switch case statement loop
        let embed = new MessageEmbed()
            .setTitle(name)
            .setURL(url)
            .setDescription(`${quote} \n[Report a data error!](${config.servers.discordinvite})`)
            .setColor(config.colors.p4gold)
            .attachFiles(img)
            .setImage("attachment://persona.png")
            .setFooter("Information gathered from the Megami Tensei Wiki", client.user.displayAvatarURL);

        return message.channel.send(embed);
    }
}