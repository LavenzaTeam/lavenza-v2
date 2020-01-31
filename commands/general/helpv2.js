const config = require("../../config.json");
const { RichEmbed } = require("discord.js");

module.exports = {
    config: {
        name: "helpv2",
        aliases: ["hv2"],
        description: "The command the tells you about other comamnds",
        usage: "(command)",
        category: "general"
    },
    run: async (client, message, args) => {
        //stores the arguments in a variable
        let command = args.join(" ").toLowerCase();

        //checks if the user specified a command
        if (!command) {
            let helpEmbed = new RichEmbed()
                .setTitle("List of Commands")
                .setDescription(`Below is a list of commands for ${client.user.username}! To view more info about a specific command, type \`${config.prefix}help <command>\``)
                .setColor(config.colors.darkblue)
                .addField("> General Commands", "`help`, `helpv2`, `invite`, `support`")
                .addField("> Info Commands", "`ping`, `version`")
                .addField("> Fun Commands", "`avatar`")
                .addField("> Moderation Commands", "`kick`, `ban`, `clear`")
                .addField("> Persona Commands", "`p3`, `p3fesfusion`, `p3personas`, `p3pfusion`, `p3shadows`")
                .addField("> Beta Commands", "`music`")
                .setFooter("Bot created by: Arkane, QueenofPiking, and CoolStalker", client.user.displayAvatarURL)
                .setTimestamp();

            return message.channel.send(helpEmbed);
        } else {
            switch (command) {
                case "":

                    break;
            }
        }
    }
}