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
                .setThumbnail(client.user.displayAvatarURL)
                .setDescription(`Below is a list of commands for ${client.user.username}! To view more info about a specific command, type \`${config.prefix}help <command>\``)
                .setColor(config.colors.darkblue)
                .addField("> General Commands [4]", "`help`, `helpv2`, `invite`, `support`")
                .addField("> Info Commands [2]", "`ping`, `version`")
                .addField("> Fun Commands [1]", "`avatar`")
                .addField("> Moderation Commands [3]", "`kick`, `ban`, `clear`")
                .addField("> Persona Commands [1]", "`p3`")
                .setFooter("Bot created by: Arkane, QueenofPiking, and CoolStalker", client.user.displayAvatarURL)
                .setTimestamp();

            return message.channel.send(helpEmbed);
        } else {
            switch (command) {
                case "help":
                    var embed = new RichEmbed()
                        .setTitle("Help Command")
                        .setColor(config.colors.purple)
                        .setThumbnail(client.user.displayAvatarURL)
                        .setDescription("A command that tells you about other commands!")
                        .addField("Usage", `${config.prefix}help (command)`)
                        .addField("Category", "General")
                        .addField("Aliases", `${config.prefix}hv2`)
                        .setFooter("<> = required | () = optional", client.user.displayAvatarURL)
                        .setTimestamp();
                    break;
            }

            return message.channel.send(embed);
        }
    }
}