const { RichEmbed } = require("discord.js");
const config = require("../../config.json");
const { readdirSync } = require("fs")
const { stripIndents } = require("common-tags");

module.exports = {
    config: {
        name: "help",
        aliases: ["h", "commands"],
        description: "The help command",
        usage: "(command)",
        category: "misc"
    },
    run: async (client, message, args) => {
        //im not gonna explain this, you don't need to fuck with this anyways
        const embed = new RichEmbed()
            .setColor(config.colors.purple)
            .setAuthor(`${message.guild.me.displayName} Help`, message.guild.iconURL)
            .setThumbnail(client.user.displayAvatarURL)

        if(!args[0]) {
            const categories = readdirSync("./commands/")

            embed.setDescription(`These are the available commands for ${message.guild.me.displayName}\nMy prefix is: **${config.prefix}**\nYou can view more details about a specific command with \`${config.prefix}help <command>\``)
            embed.setFooter(`© ${message.guild.me.displayName} | Total Commands: ${client.commands.size}`, client.user.displayAvatarURL);

            categories.forEach(category => {
                const dir = client.commands.filter(c => c.config.category === category)
                const capitalise = category.slice(0, 1).toUpperCase() + category.slice(1)
                try {
                    embed.addField(`> ❯ ${capitalise} [${dir.size}]:`, dir.map(c => `\`${c.config.name}\``).join(" "))
                } catch(e) {
                    console.log(e)
                }
            })

            return message.channel.send(embed)
        } else {
            let command = client.commands.get(client.aliases.get(args[0].toLowerCase()) || args[0].toLowerCase())
            if(!command) return message.channel.send(embed.setTitle("Invalid Command.").setDescription(`Do \`${config.prefix}help\` for the list of the commands.`))
            command = command.config

            embed.setDescription(stripIndents`My prefix is: \`${config.prefix}\`\n
            **Command:** ${command.name.slice(0, 1).toUpperCase() + command.name.slice(1)}
            **Description:** ${command.description || "No Description provided."}
            **Usage:** ${command.usage ? `\`${config.prefix}${command.name} ${command.usage}\`` : "No Usage"}
            **Aliases:** ${command.aliases ? command.aliases.join(", ") : "None."}`).setFooter("<command> = required, (command) = optional", client.user.displayAvatarURL)

            return message.channel.send(embed)
        }
    }
}