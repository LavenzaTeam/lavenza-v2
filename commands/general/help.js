const config = require("../../config.json");
const { MessageEmbed } = require("discord.js");

module.exports = {
    config: {
        name: "help",
        aliases: ["h", "commands"],
        description: "The command the tells you about other comamnds",
        usage: "(command)",
        category: "general"
    },
    run: async (client, message, args) => {
        //stores the arguments in a variable
        let command = args.join(" ").toLowerCase();

        //checks if the user specified a command
        if (!command) {
            let helpEmbed = new MessageEmbed()
                .setTitle("List of Commands")
                .setThumbnail(client.user.displayAvatarURL)
                .setDescription(`Below is a list of commands for ${client.user.username}! To view more info about a specific command, type \`${config.prefix}help <command>\``)
                .setColor(config.colors.darkblue)
                .addField("> General Commands [4]", "`help`, `invite`, `support`, `patreon`, `avatar`")
                .addField("> Persona Commands [1]", "`p3`")
                .setFooter("Bot created by: Arkane and QueenofPiking", client.user.displayAvatarURL())
                .setTimestamp();

            return message.channel.send(helpEmbed);
        } else {
            switch (command) {
                case "help":
                    var embed = new MessageEmbed()
                        .setTitle("Help Command")
                        .setColor(config.colors.purple)
                        .setThumbnail(client.user.displayAvatarURL)
                        .setDescription("A command that tells you about other commands!")
                        .addField("Usage", `\`${config.prefix}help (command)\``)
                        .addField("Category", "General")
                        .addField("Aliases", `\`${config.prefix}h\`, \`${config.prefix}commands\``)
                        .setFooter("<> = required | () = optional", client.user.avatarURL())
                        .setTimestamp();
                    break;
                case "invite":
                    var embed = new MessageEmbed()
                        .setTitle("Invite Command")
                        .setColor(config.colors.purple)
                        .setThumbnail(client.user.displayAvatarURL)
                        .setDescription("Sends a link to invite the bot to your server!")
                        .addField("Usage", `\`${config.prefix}invite\``)
                        .addField("Category", "General")
                        .addField("Aliases", `\`${config.prefix}addme\`, \`${config.prefix}join\``)
                        .setFooter("<> = required | () = optional", client.user.avatarURL())
                        .setTimestamp();
                    break;
                case "support":
                    var embed = new MessageEmbed()
                        .setTitle("Support Command")
                        .setColor(config.colors.purple)
                        .setThumbnail(client.user.displayAvatarURL)
                        .setDescription("Provides you with a link to the Lavenza Support server!")
                        .addField("Usage", `\`${config.prefix}support\``)
                        .addField("Category", "General")
                        .addField("Aliases", `None!`)
                        .setFooter("<> = required | () = optional", client.user.avatarURL())
                        .setTimestamp();
                    break;
                case "patreon":
                    var embed = new MessageEmbed()
                        .setTitle("Patreon Command")
                        .setColor(config.colors.purple)
                        .setThumbnail(client.user.displayAvatarURL)
                        .setDescription("Sends a link to the Patreon page")
                        .addField("Usage", `\`${config.prefix}patreon\``)
                        .addField("Category", "General")
                        .addField("Aliases", `None!`)
                        .setFooter("<> = required | () = optional", client.user.avatarURL())
                        .setTimestamp();
                    break;
                case "p3":
                    var embed = new MessageEmbed()
                        .setTitle("P3 Command")
                        .setColor(config.colors.purple)
                        .setThumbnail(client.user.displayAvatarURL)
                        .setDescription("A command that tries to condense all of the other Persona 3 commands into one command. `/a` will give you the answer variant, `/f` will get you the FES Fusion of a Persona, and `/p` will give you the Portable Fusion of a Persona. Note that you may only append one switch at a time.")
                        .addField("Usage", `\`${config.prefix}p3 <persona/shadow> (/a) (/f) (/p)\``)
                        .addField("Category", "Persona")
                        .addField("Aliases", `None!`)
                        .setFooter("<> = required | () = optional", client.user.avatarURL())
                        .setTimestamp();
                    break;
            }

            return message.channel.send(embed);
        }
    }
}