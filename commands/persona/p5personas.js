const config = require("../../config.json");
const { MessageEmbed, MessageAttachment } = require("discord.js");

module.exports = {
    config: {
        name: "p5personas",
        aliases: ["p5p", "persona5personas"],
        description: "Displays data for every Persona in Persona 5!",
        usage: "<persona>",
        category: "persona"
    },
    run: async (client, message, args, query) => {
        //general data parsing
        let personaName = args.join("_").toLowerCase();
        if (query) personaName = query;
        if (!personaName) return message.reply(`Please specify a Persona to search! \`To view a list of all valid Persona's, ${config.prefix}p5personas list\``);

        //checks if the user specified the list argument
        if (personaName === "list") {
            return message.reply("The list of Persona's is currently unavaliable. Check back soon!");
        }

        //the list of every persona in the game
        switch (personaName) {
            //fool arcana
            case "arsene":
                var name = personaName.charAt(0).toUpperCase() + personaName.slice(1);
                var fileName = personaName;
                //var quote = "\"I am the great thief, Arsene! You need my help once more...? Very well, use my power wisely.\"";
                var url = `https://megamitensei.fandom.com/wiki/${name}`;
                var img = new MessageAttachment(`./personadata/p5/${fileName}.png`, "persona.png")
                break;
        }

        //checks if the user specified a valid persona by checking if the name variable was defined
        if (!name) return message.reply("You have entered an invalid Persona name!");
        if (!quote) var quote = "";

        //creates the embed and sends it
        let embed = new MessageEmbed()
            .setTitle(name)
            .setURL(url)
            .setDescription(`${quote} \n[Report a data error!](${config.servers.discordinvite})`)
            .setColor(config.colors.p5red)
            .attachFiles(img)
            .setImage("attachment://persona.png")
            .setFooter("Information gathered from the Megami Tensei Wiki", client.user.displayAvatarURL)

        return message.channel.send(embed);
    }
}