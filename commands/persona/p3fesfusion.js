const config = require("../../config.json");
const { RichEmbed } = require("discord.js");

module.exports = {
    config: {
        name: "p3fesfusion",
        aliases: ["p3ff", "persona3fesfusion"],
        description: "View the recipe for creating a specified Persona in Persona 3 FES",
        usage: "<persona>",
        category: "persona"
    },
    run: async (client, message, args) => {
        message.reply("Fusion is a lengthy process that will not be perfected for a while! Bear that in mind while using the fusion commands!");

        //general data parsing and error checking
        let personaName = args.join("_").toLowerCase();
        if (!personaName) return message.reply(`Please specify a Persona to search! To view a list of all Persona's, type \`${config.prefix}p3fesfusion list\``);

        //checks if the user entered the list argument
        if (personaName === "list") {
            return message.reply("The list of Persona's is currently unavaliable! Check back soon™️!");
        }

        //switch case loop checking what 
        switch (personaName) {
            //fool arcana
            case "orpheus":
                var name = "Orpheus";
                var url = "https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Orpheus";
                var note = "Orpheus is the starting Persona of the protagonist.";
                var result1 = "25,534¥ | [Legion](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Legion) (22/Fool) and [Slime](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Slime) (12/Fool)";
                var result2 = "No Result";
                var result3 = "No Result";
                var result4 = "No Result";
                var result5 = "No Result";
                break;
        }

        //checks if the user entered a valid persona name by checking if the "name" variable was defined
        if(!name) return message.reply(`You have entered an invalid Persona name! Check \`${config.prefix}p3fesfusion list\` for a full list of Persona's`);

        //creates the embed using all of the defined variables above and sends it to the current channel
        let embed = new RichEmbed()
            .setTitle(name)
            .setURL(url)
            .setColor(config.colors.darkblue)
            .addField("Combination #1", result1)
            .addField("Combination #2", result2)
            .addField("Combination #3", result3)
            .addField("Combination #4", result4)
            .addField("Combination #5", result5)
            .setFooter("Information gathered from Arantius's P3 FES Fusion Calculator", client.user.displayAvatarURL);

        //checks to see if the not variable is defined, if it is, display the variable, if it isn't, don't display it
        if(note) {
            embed.setDescription(`${note} \n[Report a data error!](${config.servers.discordinvite})`)
        } else {
            embed.setDescription(`[Report a data error!](${config.servers.discordinvite})`)
        }

        //sends the embed too the current channel
        return message.channel.send(embed);
    }
}