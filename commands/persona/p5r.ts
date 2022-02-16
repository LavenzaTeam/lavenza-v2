import { MessageAttachment, MessageEmbed } from "discord.js";
import { ApplicationCommandOptionTypes } from "discord.js/typings/enums";
import { ICommand } from "wokcommands";
import p5r from "../../personaData/p5r.json";

export default {
    category: "Persona",
    description: "Provides information about fusions, shadows, and personas relating to Persona 5 Royal.",

    slash: "both",
    testOnly: true,

    options: [
        {
            name: "type",
            description: "The type of information you are attempting to search for.",
            required: true,
            type: ApplicationCommandOptionTypes.STRING,

            choices: [
                {
                    name: "persona",
                    value: "persona"
                },
                {
                    name: "shadow",
                    value: "shadow"
                },
                {
                    name: "fusion",
                    value: "fusion"
                }
            ],
        },
        {
            name: "name",
            description: "The name of the Persona/Shadow you are searching for",
            required: true,
            type: ApplicationCommandOptionTypes.STRING,
        }
    ],
    callback: ({ message, interaction, args }) => {
        if (message) {
            let type = args[0].toLowerCase();
            let itemname = args.join("_").slice(type.length + 1).toLowerCase();

            if (!p5r[type]) {
                message.reply("Please enter a valid search type to preform: `persona`, `shadow`, or `fusion`");
                return false;
            }

            if (!p5r[type][itemname]) {
                message.reply(`Search: \`${itemname}\` provided no results. \nPlease enter a valid Persona or Shadow name. A list of valid names can be found here: **https://megamitensei.fandom.com/wiki/Megami_Tensei_Wiki**`);
                return false;
            }

            let attachment = new MessageAttachment(p5r[type][itemname].img, "img.png");

            let P5REmbed = new MessageEmbed()
                .setTitle(`${p5r[type][itemname].name} (${type.charAt(0).toUpperCase() + type.slice(1)})`)
                .setURL(p5r[type][itemname].url)
                .setDescription("[Report an error!](https://lavenza.tk/discord)")
                .setImage("attachment://img.png");

            if (type === "fusion") P5REmbed.setDescription("This calculation assumes that you have every DLC persona. If you don't own all DLC personas, please click the link to configure the DLCs you own correctly. \n[Report an error!](https://lavenza.tk/discord)")

            message.reply({
                embeds: [P5REmbed],
                files: [attachment]
            });
        } else if (interaction) {
            let type = args[0].toLowerCase();
            let itemname = args[1].replace(/ /g, "_").toLowerCase();

            if (!p5r[type]) {
                interaction.reply("Please enter a valid search type to preform: `persona`, `shadow`, or `fusion`");
                return false;
            }
            if (!p5r[type][itemname]) {
                interaction.reply(`Search: \`${itemname}\` provided no results. \nPlease enter a valid Persona or Shadow name. A list of valid names can be found here: **https://megamitensei.fandom.com/wiki/Megami_Tensei_Wiki**`);
                return false;
            }
            let attachment = new MessageAttachment(p5r[type][itemname].img, "img.png");

            let P5REmbed = new MessageEmbed()
                .setTitle(`${p5r[type][itemname].name} (${type.charAt(0).toUpperCase() + type.slice(1)})`)
                .setURL(p5r[type][itemname].url)
                .setDescription("[Report an error!](https://lavenza.tk/discord)")
                .setImage("attachment://img.png");

            if (type === "fusion") P5REmbed.setDescription("This calculation assumes that you have every DLC persona. If you don't own all DLC personas, please click the link to configure the DLCs you own correctly. \n[Report an error!](https://lavenza.tk/discord)");
            if (type === "shadow") P5REmbed.addField("Shadow Name", p5r[type][itemname].altname);

            interaction.reply({
                embeds: [P5REmbed],
                files: [attachment]
            });
        }
        return;
    }
} as ICommand