const config = require("../../config.json");
const { MessageAttachment, MessageEmbed } = require("discord.js");

module.exports = {
    config: {
        name: "p5shadows",
        aliases: ["persona5shadows", "p5s"],
        description: "Displays data for every shadow in Persona 5",
        usage: "<shadow>",
        category: "persona"
    },
    run: async (client, message, args, query) => {
        //general data parsing
        let shadowName = args.join("_").toLowerCase();
        if(query) shadowName = query;
        if(!shadowName) return message.reply(`You have entered an invalid Shadow name! To view a list of all valid Persona's, type \`${config.prefix}p5shadows list\`!`);

        //checks if the user specified the list variable
        if(shadowName === "list") {
            return message.reply("The list of Persona 5 Shadows is currently unavaliable. Check back soon.");
        }

        //the list of every shadow in the game and the variables that are defined
        switch (shadowName) {
            //kamoshida's palace
            case "crypt-dwelling_pyromaniac":
                var name = "Crypt-Dwelling Pyromaniac";
                var realName = "Jack O'Lantern";
                var fileName = shadowName;
                var url = "https://megamitensei.fandom.com/wiki/Pyro_Jack";
                var img = new MessageAttachment(`./personadata/p5shadows/${fileName}.png`, "shadow.png");
                break;
        }

        //checks if the name variable was specified, if not, let the user know they entered an invalid shadow
        if (!name) return message.reply("You have entered an invalid Shadow name! Please check your spelling and try again!");

        //creates the embed and sends it
        let embed = new MessageEmbed()
            .setTitle(name)
            .setURL(url)
            .setDescription(`Real Name: ${realName} \n[Report a Data Error!](${config.servers.discordinvite})`)
            .setColor(config.colors.p5red)
            .attachFiles(img)
            .setImage("attachment://shadow.png")
            .setFooter("Information gathered from the Megami Tensei Wiki", client.user.displayAvatarURL);

        return message.channel.send(embed);
    }
}