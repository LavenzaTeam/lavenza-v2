const { MessageEmbed, MessageAttachment, ReactionCollector } = require("discord.js");
const config = require("../../config.json");

module.exports = {
    config: {
        name: "p3shadows",
        aliases: [],
        description: "Sends data about a specified shadow from Persona 3",
        usage: "<shadow> (/a)",
        category: "persona"
    },
    run: async (client, message, args, query) => {
        let shadowName = args.join("_").toLowerCase();
        if (query) shadowName = query;
        if (!shadowName) return message.reply(`Please specify a shadow to search for! \nTo view all the shadows in the game, type \`${config.prefix}p3shadows list\``)
        if (shadowName === "nyx") shadowName = "nyx_avatar";


        //maya shadows
        switch (shadowName) {
            case "list":
                let shadows = new MessageEmbed()
                    .setTitle("List of Persona 3 FES/Portable Shadows")
                    .setURL("https://megamitensei.fandom.com/wiki/List_of_Persona_3_Shadows")
                    .setDescription(`[Report a Data Error!](${config.servers.discordinvite})`)
                    .setColor(config.colors.p3blue)
                    .setThumbnail(client.user.displayAvatarURL)
                    .addField("Normal Shadow Types", "`Maya`, `Hand`, `Table`, `Magus`, `Tiara`, `Book`, `Idol`, `Eagle`, `Relic`, `Mother`, `Beetle`, `Knight`, `Castle`, `Twins`, `Tower`, `Sigil`, `Cupid`, `Dancer`, `Snake`, `Wheel`, `Drive`, `Turret`, `Balance`, `Sword`, `Giant`, `Raven`, `Phantom`, `Seeker`, `Dice`, `Sand`, `Beast`, `Gigas`, `Musha`, `Minotaur`, `Cyclops`, `Jotun`")
                    .addField("Golden Shadows", "`Wealth Hand`, `Treasure Hand`, `Supreme Hand`, `Opulent Hand`, `Luxury Hand`, `Glorious Hand`")
                    .addField("Full Moon Bosses", "`Arcana Priestess`, `Arcana Empress`, `Arcana Emperor`, `Arcana Hierophant`, `Arcana Lovers`, `Arcana Chariot`, `Arcana Justice`, `Arcana Justice`, `Arcana Hermit`, `Arcana Fortune`, `Arcana Strength`, `Arcana Hanged Man`, `Nyx`, `Erebus`")
                    .addField("Optional Bosses", "`Elizabeth`, `The Reaper`")
                    .setFooter("Information gathered from the Megami Tensei Wiki", client.user.displayAvatarURL);

                await message.channel.send(shadows);
                return;
                break;
            case "maya":
                var name = "Maya Shadows";
                var fileName = shadowName;
                var url = `https://megamitensei.fandom.com/wiki/List_of_Persona_3_Shadows`;
                var img = new MessageAttachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png");
                break;

            case "cowardly_maya":
                var name = "Cowardly Maya";
                var fileName = shadowName;
                var url = `https://megamitensei.fandom.com/wiki/Cowardly_Maya`;
                var img = new MessageAttachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png");
                break;
            case "cowardly_maya_/a":
                var name = "Cowardly Maya (The Answer)";
                var fileName = "cowardly_mayaAnswer";
                var url = `https://megamitensei.fandom.com/wiki/Cowardly_Maya`;
                var img = new MessageAttachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png");
                break;
            case "merciless_maya":
                var name = "Merciless Maya";
                var fileName = shadowName;
                var url = `https://megamitensei.fandom.com/wiki/Merciless_Maya`;
                var img = new MessageAttachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png");
                break;
            case "merciless_maya_/a":
                var name = "Cowardly Maya";
                var fileName = "merciless_mayaAnswer";
                var url = `https://megamitensei.fandom.com/wiki/Merciless_Maya`;
                var img = new MessageAttachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png");
                break;
            case "frivolous_maya":
                var name = "Frivolous Maya";
                var fileName = shadowName;
                var url = `https://megamitensei.fandom.com/wiki/Frivolous_Maya`;
                var img = new MessageAttachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png");
                break;
            case "haughty_maya":
                var name = "Haughty Maya";
                var fileName = shadowName;
                var url = `https://megamitensei.fandom.com/wiki/Haughty_Maya`;
                var img = new MessageAttachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png");
                break;
            case "indolent_maya":
                var name = "Indolent Maya";
                var fileName = shadowName;
                var url = `https://megamitensei.fandom.com/wiki/Indolent_Maya`;
                var img = new MessageAttachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png");
                break;
            case "insidious_maya":
                var name = "Insidious Maya";
                var fileName = shadowName;
                var url = `https://megamitensei.fandom.com/wiki/Insidious_Maya`;
                var img = new MessageAttachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png");
                break;
            case "insidious_maya_/a":
                var name = "Insidious Maya (The Answer)";
                var fileName = "insidious_mayaAnswer";
                var url = `https://megamitensei.fandom.com/wiki/Insidious_Maya`;
                var img = new MessageAttachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png");
                break;
            case "ill_fated_maya":
                var name = "Ill Fated Maya";
                var fileName = shadowName;
                var url = `https://megamitensei.fandom.com/wiki/Ill-fated_Maya`;
                var img = new MessageAttachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png");
                break;
            case "ill_fated_maya_/a":
                var name = "Ill Fated Maya (The Answer)";
                var fileName = "ill_fated_mayaAnswer";
                var url = `https://megamitensei.fandom.com/wiki/Ill-fated_Maya`;
                var img = new MessageAttachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png");
                break;
            case "bigoted_maya":
                var name = "Bigoted Maya";
                var fileName = shadowName;
                var url = `https://megamitensei.fandom.com/wiki/Bigoted_Maya`;
                var img = new MessageAttachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png");
                break;
            case "bigoted_maya_/a":
                var name = "Bigoted Maya (The Answer)";
                var fileName = "bigoted_mayaAnswer";
                var url = `https://megamitensei.fandom.com/wiki/Bigoted_Maya`;
                var img = new MessageAttachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png");
                break;
            case "desirous_maya":
                var name = "Desirous Maya";
                var fileName = shadowName;
                var url = `https://megamitensei.fandom.com/wiki/Desirous_Maya`;
                var img = new MessageAttachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png");
                break;
            case "desirous_maya_/a":
                var name = "Desirous Maya (The Answer)";
                var fileName = "desirous_mayaAnswer";
                var url = `https://megamitensei.fandom.com/wiki/Desirous_Maya`;
                var img = new MessageAttachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png");
                break;
            case "imprudent_maya":
                var name = "Imprudent Maya";
                var fileName = shadowName;
                var url = `https://megamitensei.fandom.com/wiki/Imprudent_Maya`;
                var img = new MessageAttachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png");
                break;
            case "imprudent_maya_/a":
                var name = "Imprudent Maya";
                var fileName = "imprudent_mayaAnswer";
                var url = `https://megamitensei.fandom.com/wiki/Imprudent_Maya`;
                var img = new MessageAttachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png");
                break;
            case "visceral_maya":
                var name = "Visceral Maya";
                var fileName = shadowName;
                var url = `https://megamitensei.fandom.com/wiki/Visceral_Maya`;
                var img = new MessageAttachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png");
                break;
            case "visceral_maya_/a":
                var name = "Visceral Maya";
                var fileName = "visceral_mayaAnswer";
                var url = `https://megamitensei.fandom.com/wiki/Visceral_Maya`;
                var img = new MessageAttachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png");
                break;
            case "devious_maya":
                let devious = new MessageEmbed()
                    .setTitle("Devious Maya")
                    .setURL("https://megamitensei.fandom.com/wiki/Devious_Maya#The%20Journey")
                    .setDescription(`[Report a Data Error!](${config.servers.discordinvite})`)
                    .setColor(config.colors.p3blue)
                    .attachFiles(new MessageAttachment(`./personadata/p3shadows/devious_maya.png`, "shadow.png"))
                    .setImage("attachment://shadow.png")
                    .setFooter("Information gathered from the Megami Tensei Wiki", client.user.displayAvatarURL);

                let deviousHanged = new MessageEmbed()
                    .setTitle("Devious Maya (Hanged Man)")
                    .setURL("https://megamitensei.fandom.com/wiki/Devious_Maya#The%20Journey")
                    .setDescription(`[Report a Data Error!](${config.servers.discordinvite})`)
                    .setColor(config.colors.p3blue)
                    .attachFiles(new MessageAttachment(`./personadata/p3shadows/devious_mayaHanged.png`, "shadow.png"))
                    .setImage("attachment://shadow.png")
                    .setFooter("Information gathered from the Megami Tensei Wiki", client.user.displayAvatarURL);

                let deviousVision = new MessageEmbed()
                    .setTitle("Devious Maya (Vision Quest)")
                    .setURL("https://megamitensei.fandom.com/wiki/Devious_Maya#Vision%20Quest")
                    .setDescription(`[Report a Data Error!](${config.servers.discordinvite})`)
                    .setColor(config.colors.p3blue)
                    .attachFiles(new MessageAttachment(`./personadata/p3shadows/devious_mayaVision.png`, "shadow.png"))
                    .setImage("attachment://shadow.png")
                    .setFooter("Information gathered from the Megami Tensei Wiki", client.user.displayAvatarURL);

                await message.channel.send(devious);
                await message.channel.send(deviousHanged);
                await message.channel.send(deviousVision);
                return;
                break;
            case "devious_maya_/a":
                var name = "Devious Maya";
                var fileName = "devious_mayaAnswer";
                var url = `https://megamitensei.fandom.com/wiki/Devious_Maya`;
                var img = new MessageAttachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png");
                break;
            case "conceited_maya_/a":
                var name = "Conceited Maya";
                var fileName = "conceited_mayaAnswer";
                var url = `https://megamitensei.fandom.com/wiki/Conceited_Maya`;
                var img = new MessageAttachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png");
                break;


            //hand shadows
            case "hand":
                var name = "Hand Shadows";
                var fileName = shadowName;
                var url = `https://megamitensei.fandom.com/wiki/List_of_Persona_3_Shadows`;
                var img = new MessageAttachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png");
                break;
            case "magic_hand":
                var name = "Magic Hand";
                var fileName = shadowName;
                var url = `https://megamitensei.fandom.com/wiki/Magic_Hand`;
                var img = new MessageAttachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png");
                break;
            case "magic_hand_/a":
                var name = "Magic Hand (The Answer)";
                var fileName = "magic_handAnswer";
                var url = `https://megamitensei.fandom.com/wiki/Magic_Hand`;
                var img = new MessageAttachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png");
                break;
            case "dancing_hand":
                let hand = new MessageEmbed()
                    .setTitle("Dancing Hand")
                    .setURL("https://megamitensei.fandom.com/wiki/Dancing_Hand#The%20Journey")
                    .setDescription(`[Report a Data Error!](${config.servers.discordinvite})`)
                    .setColor(config.colors.p3blue)
                    .attachFiles(new MessageAttachment(`./personadata/p3shadows/dancing_hand.png`, "shadow.png"))
                    .setImage("attachment://shadow.png")
                    .setFooter("Information gathered from the Megami Tensei Wiki", client.user.displayAvatarURL);

                let handBoss = new MessageEmbed()
                    .setTitle("Dancing Hand (Sub Boss)")
                    .setURL("https://megamitensei.fandom.com/wiki/Dancing_Hand#Sub-Boss")
                    .setDescription(`[Report a Data Error!](${config.servers.discordinvite})`)
                    .setColor(config.colors.p3blue)
                    .attachFiles(new MessageAttachment(`./personadata/p3shadows/dancing_handBoss.png`, "shadow.png"))
                    .setImage("attachment://shadow.png")
                    .setFooter("Information gathered from the Megami Tensei Wiki", client.user.displayAvatarURL);


                await message.channel.send(hand);
                await message.channel.send(handBoss);
                return;
                break;
            case "dancing_hand_/a":
                var name = "Dancing Hand (The Answer)";
                var fileName = "dancing_handAnswer";
                var url = `https://megamitensei.fandom.com/wiki/Dancing_Hand`;
                var img = new MessageAttachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png");
                break;
            case "killing_hand":
                var name = "Killing Hand";
                var fileName = shadowName;
                var url = `https://megamitensei.fandom.com/wiki/Killing_Hand`;
                var img = new MessageAttachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png");
                break;
            case "killing_hand_/a":
                var name = "Killing Hand (The Answer)";
                var fileName = "killing_handAnswer";
                var url = `https://megamitensei.fandom.com/wiki/Killing_Hand`;
                var img = new MessageAttachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png");
                break;
            case "almighty_hand":
                var name = "Almighty Hand";
                var fileName = shadowName;
                var url = `https://megamitensei.fandom.com/wiki/Almighty_Hand`;
                var img = new MessageAttachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png");
                break;


            //table shadows
            case "table":
                var name = "Table Shadows";
                var fileName = shadowName;
                var url = `https://megamitensei.fandom.com/wiki/List_of_Persona_3_Shadows`;
                var img = new MessageAttachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png");
                break;
            case "laughing_table":
                var name = "Laughing Table";
                var fileName = shadowName;
                var url = `https://megamitensei.fandom.com/wiki/Laughing_Table`;
                var img = new MessageAttachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png");
                break;
            case "laughing_table_/a":
                var name = "Laughing Table (The Answer)";
                var fileName = "laughing_tableAnswer";
                var url = `https://megamitensei.fandom.com/wiki/Laughing_Table`;
                var img = new MessageAttachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png");
                break;
            case "crying_table":
                let cry = new MessageEmbed()
                    .setTitle("Crying Table")
                    .setURL("https://megamitensei.fandom.com/wiki/Crying_Table")
                    .setDescription(`[Report a Data Error!](${config.servers.discordinvite})`)
                    .setColor(config.colors.p3blue)
                    .attachFiles(new MessageAttachment(`./personadata/p3shadows/crying_table.png`, "shadow.png"))
                    .setImage("attachment://shadow.png")
                    .setFooter("Information gathered from the Megami Tensei Wiki", client.user.displayAvatarURL);

                let cryBoss = new MessageEmbed()
                    .setTitle("Crying Table (Sub Boss)")
                    .setURL("https://megamitensei.fandom.com/wiki/Crying_Table")
                    .setDescription(`[Report a Data Error!](${config.servers.discordinvite})`)
                    .setColor(config.colors.p3blue)
                    .attachFiles(new MessageAttachment(`./personadata/p3shadows/crying_tableBoss.png`, "shadow.png"))
                    .setImage("attachment://shadow.png")
                    .setFooter("Information gathered from the Megami Tensei Wiki", client.user.displayAvatarURL);

                await message.channel.send(cry);
                await message.channel.send(cryBoss);
                return;
                break;
            case "crying_table_/a":
                var name = "Crying Table (The Answer)";
                var fileName = "crying_tableAnswer";
                var url = `https://megamitensei.fandom.com/wiki/Crying_Table`;
                var img = new MessageAttachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png");
                break;
            case "sleeping_table":
                var name = "Sleeping Table";
                var fileName = shadowName;
                var url = `https://megamitensei.fandom.com/wiki/Sleeping_Table`;
                var img = new MessageAttachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png");
                break;
            case "sleeping_table_/a":
                var name = "Sleeping Table (The Answer)";
                var fileName = "sleeping_tableAnswer";
                var url = `https://megamitensei.fandom.com/wiki/Sleeping_Table`;
                var img = new MessageAttachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png");
                break;
            case "angry_table":
                var name = "Angry Table";
                var fileName = shadowName;
                var url = `https://megamitensei.fandom.com/wiki/Angry_Table`;
                var img = new MessageAttachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png");
                break;


            //magus shadows
            case "magus":
                var name = "Magus Shadows";
                var fileName = shadowName;
                var url = `https://megamitensei.fandom.com/wiki/List_of_Persona_3_Shadows`;
                var img = new MessageAttachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png");
                break;
            case "magical_magus":
                let magus = new MessageEmbed()
                    .setTitle("Magical Magus")
                    .setURL("https://megamitensei.fandom.com/wiki/Magical_Magus")
                    .setDescription(`[Report a Data Error!](${config.servers.discordinvite})`)
                    .setColor(config.colors.p3blue)
                    .attachFiles(new MessageAttachment(`./personadata/p3shadows/magical_magus.png`, "shadow.png"))
                    .setImage("attachment://shadow.png")
                    .setFooter("Information gathered from the Megami Tensei Wiki", client.user.displayAvatarURL);

                let magusBoss = new MessageEmbed()
                    .setTitle("Magical Magus (Sub Boss)")
                    .setURL("https://megamitensei.fandom.com/wiki/Magical_Magus")
                    .setDescription(`[Report a Data Error!](${config.servers.discordinvite})`)
                    .setColor(config.colors.p3blue)
                    .attachFiles(new MessageAttachment(`./personadata/p3shadows/magical_magusBoss.png`, "shadow.png"))
                    .setImage("attachment://shadow.png")
                    .setFooter("Information gathered from the Megami Tensei Wiki", client.user.displayAvatarURL);

                await message.channel.send(magus);
                await message.channel.send(magusBoss);
                return;
                break;
            case "wondrous_magus":
                var name = "Wondrous Magus";
                var fileName = shadowName;
                var url = `https://megamitensei.fandom.com/wiki/Wondrous_Magus`;
                var img = new MessageAttachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png");
                break;
            case "wondrous_magus_/a":
                var name = "Wondrous Magus (The Answer)";
                var fileName = "wondrous_magusAnswer";
                var url = `https://megamitensei.fandom.com/wiki/Wondrous_Magus`;
                var img = new MessageAttachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png");
                break;
            case "prime_magus":
                var name = "Prime Magus";
                var fileName = shadowName;
                var url = `https://megamitensei.fandom.com/wiki/Prime_Magus`;
                var img = new MessageAttachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png");
                break;
            case "prime_magus_/a":
                var name = "Prime Magus (The Answer)";
                var fileName = "prime_magusAnswer";
                var url = `https://megamitensei.fandom.com/wiki/Prime_Magus`;
                var img = new MessageAttachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png");
                break;
            case "grand_magus":
                var name = "Grand Magus";
                var fileName = shadowName;
                var url = `https://megamitensei.fandom.com/wiki/Grand_Magus`;
                var img = new MessageAttachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png");
                break;


            //tiara shadows
            case "tiara":
                var name = "Tiara Shadows";
                var fileName = shadowName;
                var url = `https://megamitensei.fandom.com/wiki/List_of_Persona_3_Shadows`;
                var img = new MessageAttachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png")
                break;
            case "muttering_tiara":
                let mutter = new MessageEmbed()
                    .setTitle("Muttering Tiara")
                    .setURL("https://megamitensei.fandom.com/wiki/Muttering_Tiara")
                    .setDescription(`[Report a Data Error!](${config.servers.discordinvite})`)
                    .setColor(config.colors.p3blue)
                    .attachFiles(new MessageAttachment(`./personadata/p3shadows/muttering_tiara.png`, "shadow.png"))
                    .setImage("attachment://shadow.png")
                    .setFooter("Information gathered from the Megami Tensei Wiki", client.user.displayAvatarURL);

                let mutterBoss1 = new MessageEmbed()
                    .setTitle("Muttering Tiara (Sub Boss #1)")
                    .setURL("https://megamitensei.fandom.com/wiki/Muttering_Tiara")
                    .setDescription(`[Report a Data Error!](${config.servers.discordinvite})`)
                    .setColor(config.colors.p3blue)
                    .attachFiles(new MessageAttachment(`./personadata/p3shadows/muttering_tiaraBoss1.png`, "shadow.png"))
                    .setImage("attachment://shadow.png")
                    .setFooter("Information gathered from the Megami Tensei Wiki", client.user.displayAvatarURL);

                let mutterBoss2 = new MessageEmbed()
                    .setTitle("Muttering Tiara (Sub Boss #2)")
                    .setURL("https://megamitensei.fandom.com/wiki/Muttering_Tiara")
                    .setDescription(`[Report a Data Error!](${config.servers.discordinvite})`)
                    .setColor(config.colors.p3blue)
                    .attachFiles(new MessageAttachment(`./personadata/p3shadows/muttering_handBoss2.png`, "shadow.png"))
                    .setImage("attachment://shadow.png")
                    .setFooter("Information gathered from the Megami Tensei Wiki", client.user.displayAvatarURL);

                let mutterVision1 = new MessageEmbed()
                    .setTitle("Muttering Tiara (Vision Quest #1)")
                    .setURL("https://megamitensei.fandom.com/wiki/Muttering_Tiara")
                    .setDescription(`[Report a Data Error!](${config.servers.discordinvite})`)
                    .setColor(config.colors.p3blue)
                    .attachFiles(new MessageAttachment(`./personadata/p3shadows/muttering_tiaraVision1.png`, "shadow.png"))
                    .setImage("attachment://shadow.png")
                    .setFooter("Information gathered from the Megami Tensei Wiki", client.user.displayAvatarURL);

                let mutterVision2 = new MessageEmbed()
                    .setTitle("Muttering Tiara (Vision Quest #2)")
                    .setURL("https://megamitensei.fandom.com/wiki/Muttering_Tiara")
                    .setDescription(`[Report a Data Error!](${config.servers.discordinvite})`)
                    .setColor(config.colors.p3blue)
                    .attachFiles(new MessageAttachment(`./personadata/p3shadows/muttering_tiaraVision2.png`, "shadow.png"))
                    .setImage("attachment://shadow.png")
                    .setFooter("Information gathered from the Megami Tensei Wiki", client.user.displayAvatarURL);

                await message.channel.send(mutter);
                await message.channel.send(mutterBoss1);
                await message.channel.send(mutterBoss2);
                await message.channel.send(mutterVision1);
                await message.channel.send(mutterVision2);
                return;
                break;
            case "muttering_tiara_/a":
                var name = "Muttering Tiara (The Answer)";
                var fileName = "muttering_tiaraAnswer";
                var url = `https://megamitensei.fandom.com/wiki/Muttering_Tiara`;
                var img = new MessageAttachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png")
                break;
            case "grieving_tiara":
                var name = "Grieving Tiara";
                var fileName = shadowName;
                var url = `https://megamitensei.fandom.com/wiki/Grieving_Tiara`;
                var img = new MessageAttachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png")
                break;
            case "grieving_tiara_/a":
                var name = "Grieving Tiara (The Answer)";
                var fileName = "grieving_tiaraAnswer";
                var url = `https://megamitensei.fandom.com/wiki/Grieving_Tiara`;
                var img = new MessageAttachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png")
                break;
            case "writhing_tiara":
                var name = "Writhing Tiara";
                var fileName = shadowName;
                var url = `https://megamitensei.fandom.com/wiki/Writhing_Tiara`;
                var img = new MessageAttachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png")
                break;
            case "shouting_tiara":
                var name = "Shouting Tiara";
                var fileName = shadowName;
                var url = `https://megamitensei.fandom.com/wiki/Shouting_Tiara`;
                var img = new MessageAttachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png")
                break;
            case "shouting_tiara_/a":
                var name = "Shouting Tiara (The Answer)";
                var fileName = "shouting_tiaraAnswer";
                var url = `https://megamitensei.fandom.com/wiki/Shouting_Tiara`;
                var img = new MessageAttachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png")
                break;


            //book shadows
            case "book":
                var name = "Book Shadows";
                var fileName = shadowName;
                var url = `https://megamitensei.fandom.com/wiki/List_of_Persona_3_Shadows`;
                var img = new MessageAttachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png")
                break;
            case "spurious_book":
                var name = "Spurious Book";
                var fileName = shadowName;
                var url = `https://megamitensei.fandom.com/wiki/Spurious_Book`;
                var img = new MessageAttachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png")
                break;
            case "spurious_book_/a":
                var name = "Spurious Book (The Answer)";
                var fileName = "spurious_bookAnswer";
                var url = `https://megamitensei.fandom.com/wiki/Spurious_Book`;
                var img = new MessageAttachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png")
                break;
            case "maniacal_book":
                var name = "Maniacal Book";
                var fileName = shadowName;
                var url = `https://megamitensei.fandom.com/wiki/Maniacal_Book`;
                var img = new MessageAttachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png")
                break;
            case "maniacal_book_/a":
                var name = "Maniacal Book (The Answer)";
                var fileName = "maniacal_bookAnswer";
                var url = `https://megamitensei.fandom.com/wiki/Maniacal_Book`;
                var img = new MessageAttachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png")
                break;
            case "silent_book":
                var name = "Silent Book";
                var fileName = shadowName;
                var url = `https://megamitensei.fandom.com/wiki/Silent_Book`;
                var img = new MessageAttachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png")
                break;
            case "wrathful_book":
                var name = "Wrathful Book";
                var fileName = shadowName;
                var url = `https://megamitensei.fandom.com/wiki/Wrathful_Book`;
                var img = new MessageAttachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png")
                break;
            case "wrathful_book_/a":
                var name = "Wrathful Book";
                var fileName = "wrathful_bookAnswer";
                var url = `https://megamitensei.fandom.com/wiki/Wrathful_Book`;
                var img = new MessageAttachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png")
                break;


            //idol shadows
            case "idol":
                var name = "Idol Shadows";
                var fileName = shadowName;
                var url = `https://megamitensei.fandom.com/wiki/List_of_Persona_3_Shadows`
                var img = new MessageAttachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png")
                break;
            case "tranquil_idol":
                var name = "Tranquil Idol";
                var fileName = shadowName;
                var url = `https://megamitensei.fandom.com/wiki/Tranquil_Idol`;
                var img = new MessageAttachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png")
                break;
            case "tranquil_idol_/a":
                var name = "Tranquil Idol (The Answer)";
                var fileName = "tranquil_idolAnswer";
                var url = `https://megamitensei.fandom.com/wiki/Tranquil_Idol`;
                var img = new MessageAttachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png")
                break;
            case "liberating_idol":
                var name = "Liberating Idol";
                var fileName = shadowName;
                var url = `https://megamitensei.fandom.com/wiki/Liberating_Idol`;
                var img = new MessageAttachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png")
                break;
            case "liberating_idol_/a":
                var name = "Liberating Idol (The Answer)";
                var fileName = "liberating_idolAnswer";
                var url = `https://megamitensei.fandom.com/wiki/Liberating_Idol`;
                var img = new MessageAttachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png")
                break;
            case "ruinous_idol":
                var name = "Ruinous Idol";
                var fileName = shadowName;
                var url = `https://megamitensei.fandom.com/wiki/Ruinous_Idol`;
                var img = new MessageAttachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png")
                break;
            case "ruinous_idol_/a":
                var name = "Ruinous Idol (The Answer)";
                var fileName = "ruinous_idolAnswer";
                var url = `https://megamitensei.fandom.com/wiki/Ruinous_Idol`;
                var img = new MessageAttachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png")
                break;
            case "vehement_idol":
                var name = "Vehement Idol";
                var fileName = shadowName;
                var url = `https://megamitensei.fandom.com/wiki/Vehement_Idol`;
                var img = new MessageAttachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png")
                break;
            case "primitive_idol_/a":
                var name = "Primitive Idol (The Answer)";
                var fileName = "primitive_idolAnswer";
                var url = `https://megamitensei.fandom.com/wiki/Primitive_Idol`;
                var img = new MessageAttachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png")
                break;


            //eagle shadows
            case "eagle":
                var name = "Eagle Shadows";
                var fileName = "eagle";
                var url = `https://megamitensei.fandom.com/wiki/List_of_Persona_3_Shadows`;
                var img = new MessageAttachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png")
                break;
            case "venus_eagle":
                let venus = new MessageEmbed()
                    .setTitle("Venus Eagle")
                    .setURL("https://megamitensei.fandom.com/wiki/Venus_Eagle")
                    .setDescription(`[Report a Data Error!](${config.servers.discordinvite})`)
                    .setColor(config.colors.p3blue)
                    .attachFiles(new MessageAttachment(`./personadata/p3shadows/venus_eagle.png`, "shadow.png"))
                    .setImage("attachment://shadow.png")
                    .setFooter("Information gathered from the Megami Tensei Wiki", client.user.displayAvatarURL);

                let venusBoss = new MessageEmbed()
                    .setTitle("Venus Eagle (Sub Boss)")
                    .setURL("https://megamitensei.fandom.com/wiki/Venus_Eagle")
                    .setDescription(`[Report a Data Error!](${config.servers.discordinvite})`)
                    .setColor(config.colors.p3blue)
                    .attachFiles(new MessageAttachment(`./personadata/p3shadows/venus_eagleBoss.png`, "shadow.png"))
                    .setImage("attachment://shadow.png")
                    .setFooter("Information gathered from the Megami Tensei Wiki", client.user.displayAvatarURL);

                await message.channel.send(venus);
                await message.channel.send(venusBoss);
                return;
                break;
            case "venus_eagle_/a":
                var name = "Venus Eagle (The Answer)";
                var fileName = "venus_eagleAnswer";
                var url = `https://megamitensei.fandom.com/wiki/Venus_Eagle`;
                var img = new MessageAttachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png")
                break;
            case "dark_eagle":
                var name = "Dark Eagle";
                var fileName = shadowName;
                var url = `https://megamitensei.fandom.com/wiki/Dark_Eagle`;
                var img = new MessageAttachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png")
                break;
            case "dark_eagle_/a":
                var name = "Dark Eagle (The Answer)";
                var fileName = "dark_eagleAnswer";
                var url = `https://megamitensei.fandom.com/wiki/Dark_Eagle`;
                var img = new MessageAttachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png")
                break;
            case "jupiter_eagle":
                var name = "Jupiter Eagle";
                var fileName = shadowName;
                var url = `https://megamitensei.fandom.com/wiki/Jupiter_Eagle`;
                var img = new MessageAttachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png")
                break;
            case "eternal_eagle":
                var name = "Eternal Eagle";
                var fileName = shadowName;
                var url = `https://megamitensei.fandom.com/wiki/Eternal_Eagle`;
                var img = new MessageAttachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png")
                break;


            //relic shadows
            case "relic":
                var name = "Relic Shadows";
                var fileName = shadowName;
                var url = `https://megamitensei.fandom.com/wiki/List_of_Persona_3_Shadows`;
                var img = new MessageAttachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png")
                break;
            case "change_relic":
                var name = "Change Relic";
                var fileName = shadowName;
                var url = `https://megamitensei.fandom.com/wiki/Change_Relic`;
                var img = new MessageAttachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png")
                break;
            case "change_relic_/a":
                var name = "Change Relic (The Answer)";
                var fileName = "change_relicAnswer";
                var url = `https://megamitensei.fandom.com/wiki/Change_Relic`;
                var img = new MessageAttachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png")
                break;
            case "constancy_relic":
                var name = "Constancy Relic";
                var fileName = shadowName;
                var url = `https://megamitensei.fandom.com/wiki/Constancy_Relic`;
                var img = new MessageAttachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png")
                break;
            case "constancy_relic_/a":
                var name = "Constancy Relic (The Answer)";
                var fileName = "constancy_relicAnswer";
                var url = `https://megamitensei.fandom.com/wiki/Constancy_Relic`;
                var img = new MessageAttachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png")
                break;
            case "creation_relic":
                var name = "Creation Relic";
                var fileName = shadowName;
                var url = `https://megamitensei.fandom.com/wiki/Creation_Relic`;
                var img = new MessageAttachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png")
                break;
            case "creation_relic_/a":
                var name = "Creation Relic (The Answer)";
                var fileName = "creation_relicAnswer";
                var url = `https://megamitensei.fandom.com/wiki/Creation_Relic`;
                var img = new MessageAttachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png")
                break;
            case "growth_relic":
                var name = "Growth Relic";
                var fileName = shadowName;
                var url = `https://megamitensei.fandom.com/wiki/Growth_Relic`;
                var img = new MessageAttachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png")
                break;
            case "affection_relic":
                var name = "Affection Relic";
                var fileName = shadowName;
                var url = `https://megamitensei.fandom.com/wiki/Affection_Relic`;
                var img = new MessageAttachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png")
                break;


            //mother shadows
            case "mother":
                var name = "Mother Shadows";
                var fileName = shadowName;
                var url = `https://megamitensei.fandom.com/wiki/List_of_Persona_3_Shadows`;
                var img = new MessageAttachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png")
                break;
            case "elegant_mother":
                var name = "Elegant Mother";
                var fileName = shadowName;
                var url = `https://megamitensei.fandom.com/wiki/Elegant_Mother`;
                var img = new MessageAttachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png")
                break;
            case "elegant_mother_/a":
                var name = "Elegant Mother (The Answer)";
                var fileName = "elegant_motherAnswer";
                var url = `https://megamitensei.fandom.com/wiki/Elegant_Mother`;
                var img = new MessageAttachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png")
                break;
            case "regal_mother":
                var name = "Regal Mother";
                var fileName = shadowName;
                var url = `https://megamitensei.fandom.com/wiki/Regal_Mother`;
                var img = new MessageAttachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png")
                break;
            case "regal_mother_/a":
                var name = "Regal Mother (The Answer)";
                var fileName = "regal_motherAnswer";
                var url = `https://megamitensei.fandom.com/wiki/Regal_Mother`;
                var img = new MessageAttachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png")
                break;
            case "pistil_mother":
                var name = "Pistil Mother";
                var fileName = shadowName;
                var url = `https://megamitensei.fandom.com/wiki/Pistil_Mother`;
                var img = new MessageAttachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png")
                break;
            case "divine_mother":
                var name = "Divine Mother";
                var fileName = shadowName;
                var url = `https://megamitensei.fandom.com/wiki/Divine_Mother`;
                var img = new MessageAttachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png")
                break;


            //beetle shadows
            case "beetle":
                var name = "Beetle Shadows";
                var fileName = shadowName;
                var url = `https://megamitensei.fandom.com/wiki/List_of_Persona_3_Shadows`;
                var img = new MessageAttachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png")
                break;
            case "grave_beetle":
                var name = "Grave Beetle";
                var fileName = shadowName;
                var url = `https://megamitensei.fandom.com/wiki/Grave_Beetle`;
                var img = new MessageAttachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png")
                break;
            case "grave_beetle_/a":
                var name = "Grave Beetle (The Answer)";
                var fileName = "grave_beetleAnswer";
                var url = `https://megamitensei.fandom.com/wiki/Grave_Beetle`;
                var img = new MessageAttachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png")
                break;
            case "adamant_beetle":
                var name = "Adamant Beetle";
                var fileName = shadowName;
                var url = `https://megamitensei.fandom.com/wiki/Adamant_Beetle`;
                var img = new MessageAttachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png")
                break;
            case "golden_beetle":
                let gold = new MessageEmbed()
                    .setTitle("Golden Beetle")
                    .setURL("https://megamitensei.fandom.com/wiki/Golden_Beetle")
                    .setDescription(`[Report a Data Error!](${config.servers.discordinvite})`)
                    .setColor(config.colors.p3blue)
                    .attachFiles(new MessageAttachment(`./personadata/p3shadows/golden_beetle.png`, "shadow.png"))
                    .setImage("attachment://shadow.png")
                    .setFooter("Information gathered from the Megami Tensei Wiki", client.user.displayAvatarURL);

                let goldBoss = new MessageEmbed()
                    .setTitle("Golden Beetle (Sub Boss)")
                    .setURL("https://megamitensei.fandom.com/wiki/Golden_Beetle")
                    .setDescription(`[Report a Data Error!](${config.servers.discordinvite})`)
                    .setColor(config.colors.p3blue)
                    .attachFiles(new MessageAttachment(`./personadata/p3shadows/golden_beetleBoss.png`, "shadow.png"))
                    .setImage("attachment://shadow.png")
                    .setFooter("Information gathered from the Megami Tensei Wiki", client.user.displayAvatarURL);

                await message.channel.send(gold);
                await message.channel.send(goldBoss);
                return;
                break;
            case "golden_beetle_/a":
                var name = "Golden Beetle (The Answer)";
                var fileName = "golden_beetleAnswer";
                var url = `https://megamitensei.fandom.com/wiki/Golden_Beetle`;
                var img = new MessageAttachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png")
                break;
            case "emperor_beetle":
                var name = "Emperor Beetle";
                var fileName = shadowName;
                var url = `https://megamitensei.fandom.com/wiki/Emperor_Beetle`;
                var img = new MessageAttachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png")
                break;
            case "burning_beetle":
                var name = "Burning Beetle";
                var fileName = shadowName;
                var url = `https://megamitensei.fandom.com/wiki/Burning_Beetle`;
                var img = new MessageAttachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png")
                break;


            //knight shadows
            case "knight":
                var name = "Knight Shadows";
                var fileName = shadowName;
                var url = `https://megamitensei.fandom.com/wiki/List_of_Persona_3_Shadows`;
                var img = new MessageAttachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png")
                break;
            case "intrepid_knight":
                var name = "Intrepid Knight";
                var fileName = shadowName;
                var url = `https://megamitensei.fandom.com/wiki/Intrepid_Knight`;
                var img = new MessageAttachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png")
                break;
            case "intrepid_knight_/a":
                var name = "Intrepid Knight (The Answer)";
                var fileName = "intrepid_knightAnswer";
                var url = `https://megamitensei.fandom.com/wiki/Intrepid_Knight`;
                var img = new MessageAttachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png")
                break;
            case "avenger_knight":
                var name = "Avenger Knight";
                var fileName = shadowName;
                var url = `https://megamitensei.fandom.com/wiki/Avenger_Knight`;
                var img = new MessageAttachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png")
                break;
            case "avenger_knight_/a":
                var name = "Avenger Knight (The Answer)";
                var fileName = "avenger_knightAnswer";
                var url = `https://megamitensei.fandom.com/wiki/Avenger_Knight`;
                var img = new MessageAttachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png")
                break;
            case "champion_knight":
                var name = "Champion Knight";
                var fileName = shadowName;
                var url = `https://megamitensei.fandom.com/wiki/Champion_Knight`;
                var img = new MessageAttachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png")
                break;
            case "champion_knight_/a":
                var name = "Champion Knight (The Answer)";
                var fileName = "champion_knightAnswer";
                var url = `https://megamitensei.fandom.com/wiki/Champion_Knight`;
                var img = new MessageAttachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png")
                break;
            case "hell_knight":
                let hell = new MessageEmbed()
                    .setTitle("Hell Knight")
                    .setURL("https://megamitensei.fandom.com/wiki/Hell_Knight")
                    .setDescription(`[Report a Data Error!](${config.servers.discordinvite})`)
                    .setColor(config.colors.p3blue)
                    .attachFiles(new MessageAttachment(`./personadata/p3shadows/hell_knight.png`, "shadow.png"))
                    .setImage("attachment://shadow.png")
                    .setFooter("Information gathered from the Megami Tensei Wiki", client.user.displayAvatarURL);

                let hellBoss = new MessageEmbed()
                    .setTitle("Hell Knight (Sub Boss)")
                    .setURL("https://megamitensei.fandom.com/wiki/Hell_Knight")
                    .setDescription(`[Report a Data Error!](${config.servers.discordinvite})`)
                    .setColor(config.colors.p3blue)
                    .attachFiles(new MessageAttachment(`./personadata/p3shadows/hell_knightBoss.png`, "shadow.png"))
                    .setImage("attachment://shadow.png")
                    .setFooter("Information gathered from the Megami Tensei Wiki", client.user.displayAvatarURL);

                await message.channel.send(hell);
                await message.channel.send(hellBoss);
                return;
                break;
            case "hell_knight_/a":
                var name = "Hell Knight (The Answer)";
                var fileName = "hell_knightAnswer";
                var url = `https://megamitensei.fandom.com/wiki/Hell_Knight`;
                var img = new MessageAttachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png")
                break;


            //castle shadows
            case "castle":
                var name = "Castle Shadows";
                var fileName = shadowName;
                var url = `https://megamitensei.fandom.com/wiki/List_of_Persona_3_Shadows`;
                var img = new MessageAttachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png")
                break;
            case "death_castle":
                var name = "Death Castle";
                var fileName = shadowName;
                var url = `https://megamitensei.fandom.com/wiki/Death_Castle`;
                var img = new MessageAttachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png")
                break;
            case "death_castle_/a":
                var name = "Death Castle (The Answer)";
                var fileName = "death_castleAnswer";
                var url = `https://megamitensei.fandom.com/wiki/Death_Castle`;
                var img = new MessageAttachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png")
                break;
            case "solid_castle":
                var name = "Solid Castle";
                var fileName = shadowName;
                var url = `https://megamitensei.fandom.com/wiki/Solid_Castle`;
                var img = new MessageAttachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png")
                break;
            case "solid_castle_/a":
                var name = "Solid Castle (The Answer)";
                var fileName = "solid_castleAnswer";
                var url = `https://megamitensei.fandom.com/wiki/Solid_Castle`;
                var img = new MessageAttachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png")
                break;
            case "power_castle":
                var name = "Power Castle";
                var fileName = shadowName;
                var url = `https://megamitensei.fandom.com/wiki/Power_Castle`;
                var img = new MessageAttachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png")
                break;
            case "power_castle_/a":
                var name = "Power Castle";
                var fileName = "power_castleAnswer";
                var url = `https://megamitensei.fandom.com/wiki/Power_Castle`;
                var img = new MessageAttachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png")
                break;
            case "king_castle":
                var name = "King Castle";
                var fileName = shadowName;
                var url = `https://megamitensei.fandom.com/wiki/King_Castle`;
                var img = new MessageAttachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png")
                break;


            //twin shadows
            case "twins":
                var name = "Twins-type Shadows";
                var fileName = shadowName;
                var url = `https://megamitensei.fandom.com/wiki/List_of_Persona_3_Shadows`;
                var img = new MessageAttachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png")
                break;
            case "trance_twins":
                var name = "Trance Twins";
                var fileName = shadowName;
                var url = `https://megamitensei.fandom.com/wiki/Trance_Twins`;
                var img = new MessageAttachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png")
                break;
            case "trance_twins_/a":
                var name = "Trance Twins (The Answer)";
                var fileName = "trance_twinsAnswer";
                var url = `https://megamitensei.fandom.com/wiki/Trance_Twins`;
                var img = new MessageAttachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png")
                break;
            case "killer_twins":
                var name = "Killer Twins";
                var fileName = shadowName;
                var url = `https://megamitensei.fandom.com/wiki/Killer_Twins`;
                var img = new MessageAttachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png")
                break;
            case "killer_twins_/a":
                var name = "Killer Twins (The Answer)";
                var fileName = "killer_twinsAnswer";
                var url = `https://megamitensei.fandom.com/wiki/Killer_Twins`;
                var img = new MessageAttachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png")
                break;
            case "death_twins":
                var name = "Death Twins";
                var fileName = shadowName;
                var url = `https://megamitensei.fandom.com/wiki/Death_Twins`;
                var img = new MessageAttachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png")
                break;
            case "crazy_twins":
                var name = "Crazy Twins";
                var fileName = shadowName;
                var url = `https://megamitensei.fandom.com/wiki/Crazy_Twins`;
                var img = new MessageAttachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png")
                break;


            //tower shadows
            case "tower":
                var name = "Tower Shadows";
                var fileName = shadowName;
                var url = `https://megamitensei.fandom.com/wiki/List_of_Persona_3_Personas`;
                var img = new MessageAttachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png")
                break;
            case "dogmatic_tower":
                var name = "Dogmatic Tower";
                var fileName = shadowName;
                var url = `https://megamitensei.fandom.com/wiki/Dogmatic_Tower`;
                var img = new MessageAttachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png")
                break;
            case "dogmatic_tower_/a":
                var name = "Dogmatic Tower (The Answer)";
                var fileName = "dogmatic_towerAnswer";
                var url = `https://megamitensei.fandom.com/wiki/Dogmatic_Tower`;
                var img = new MessageAttachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png")
                break;
            case "fanatic_tower":
                var name = "Fanatic Tower";
                var fileName = shadowName;
                var url = `https://megamitensei.fandom.com/wiki/Fanatic_Tower`;
                var img = new MessageAttachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png")
                break;
            case "fanatic_tower_/a":
                var name = "Fanatic Tower (The Answer)";
                var fileName = "fanatic_towerAnswer";
                var url = `https://megamitensei.fandom.com/wiki/Fanatic_Tower`;
                var img = new MessageAttachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png")
                break;
            case "apostate_tower":
                var name = "Apostate Tower";
                var fileName = shadowName;
                var url = `https://megamitensei.fandom.com/wiki/Apostate_Tower`;
                var img = new MessageAttachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png")
                break;
            case "corrupt_tower_/a":
                var name = "Corrupt Tower (The Answer)";
                var fileName = "corrupt_towerAnswer";
                var url = `https://megamitensei.fandom.com/wiki/Corrupt_Tower`;
                var img = new MessageAttachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png")
                break;
            case "grudge_tower_/a":
                var name = "Grudge Tower (The Answer)";
                var fileName = "grudge_towerAnswer";
                var url = `https://megamitensei.fandom.com/wiki/Grudge_Tower`;
                var img = new MessageAttachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png")
                break;


            //sigil shadows
            case "sigil":
                var name = "Sigil Shadows";
                var fileName = shadowName;
                var url = `https://megamitensei.fandom.com/wiki/List_of_Persona_3_Shadows`;
                var img = new MessageAttachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png")
                break;
            case "blue_sigil":
                var name = "Blue Sigil";
                var fileName = shadowName;
                var url = `https://megamitensei.fandom.com/wiki/Blue_Sigil`;
                var img = new MessageAttachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png")
                break;
            case "blue_sigil_/a":
                var name = "Blue Sigil (The Answer)";
                var fileName = "blue_sigilAnswer";
                var url = `https://megamitensei.fandom.com/wiki/Blue_Sigil`;
                var img = new MessageAttachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png")
                break;
            case "red_sigil":
                var name = "Red Sigil";
                var fileName = shadowName;
                var url = `https://megamitensei.fandom.com/wiki/Red_Sigil`;
                var img = new MessageAttachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png")
                break;
            case "red_sigil_/a":
                var name = "Red Sigil (The Answer)";
                var fileName = "red_sigilAnswer";
                var url = `https://megamitensei.fandom.com/wiki/Red_Sigil`;
                var img = new MessageAttachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png")
                break;
            case "green_sigil":
                let green = new MessageEmbed()
                    .setTitle("Green Sigil")
                    .setURL("https://megamitensei.fandom.com/wiki/Green_Sigil")
                    .setDescription(`[Report a Data Error!](${config.servers.discordinvite})`)
                    .setColor(config.colors.p3blue)
                    .attachFiles(new MessageAttachment(`./personadata/p3shadows/green_sigil.png`, "shadow.png"))
                    .setImage("attachment://shadow.png")
                    .setFooter("Information gathered from the Megami Tensei Wiki", client.user.displayAvatarURL);

                let greenPortable = new MessageEmbed()
                    .setTitle("Green Sigil (Portable)")
                    .setURL("https://megamitensei.fandom.com/wiki/Green_Sigil")
                    .setDescription(`[Report a Data Error!](${config.servers.discordinvite})`)
                    .setColor(config.colors.p3blue)
                    .attachFiles(new MessageAttachment(`./personadata/p3shadows/green_sigilPortable`, "shadow.png"))
                    .setImage("attachment://shadow.png")
                    .setFooter("Information gathered from the Megami Tensei Wiki", client.user.displayAvatarURL);

                await message.channel.send(green);
                await message.channel.send(greenPortable);
                return;
                break;
            case "green_sigil_/a":
                var name = "Green Sigil (The Answer)";
                var fileName = "green_sigilAnswer";
                var url = `https://megamitensei.fandom.com/wiki/Green_Sigil`;
                var img = new MessageAttachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png")
                break;
            case "white_sigil":
                var name = "White Sigil";
                var fileName = shadowName;
                var url = `https://megamitensei.fandom.com/wiki/White_Sigil`;
                var img = new MessageAttachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png")
                break;


            //cupid shadows
            case "cupid":
                var name = "Cupid Shadows";
                var fileName = shadowName;
                var url = `https://megamitensei.fandom.com/wiki/List_of_Persona_3_Shadows`;
                var img = new MessageAttachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png")
                break;
            case "obsessed_cupid":
                var name = "Obsessed Cupid";
                var fileName = shadowName;
                var url = `https://megamitensei.fandom.com/wiki/Obsessed_Cupid`;
                var img = new MessageAttachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png")
                break;
            case "obsessed_cupid_/a":
                var name = "Obsessed Cupid (The Answer)";
                var fileName = "obsessed_cupidAnswer";
                var url = `https://megamitensei.fandom.com/wiki/Obsessed_Cupid`;
                var img = new MessageAttachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png")
                break;
            case "jealous_cupid":
                var name = "Jealous Cupid";
                var fileName = shadowName;
                var url = `https://megamitensei.fandom.com/wiki/Jealous_Cupid`;
                var img = new MessageAttachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png")
                break;
            case "jealous_cupid_/a":
                var name = "Jealous Cupid (The Answer)";
                var fileName = "jealous_cupidAnswer";
                var url = `https://megamitensei.fandom.com/wiki/Jealous_Cupid`;
                var img = new MessageAttachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png")
                break;
            case "devoted_cupid":
                var name = "Devoted Cupid";
                var fileName = shadowName;
                var url = `https://megamitensei.fandom.com/wiki/Devoted_Cupid`;
                var img = new MessageAttachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png")
                break;
            case "gracious_cupid":
                var name = "Gracious Cupid";
                var fileName = shadowName;
                var url = `https://megamitensei.fandom.com/wiki/Gracious_Cupid`;
                var img = new MessageAttachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png")
                break;


            //dancer shaodws
            case "dancer":
                var name = "Dancer Shadows";
                var fileName = shadowName;
                var url = `https://megamitensei.fandom.com/wiki/List_of_Persona_3_Shadows`;
                var img = new MessageAttachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png")
                break;
            case "soul_dancer":
                var name = "Soul Dancer";
                var fileName = shadowName;
                var url = `https://megamitensei.fandom.com/wiki/Soul_Dancer`;
                var img = new MessageAttachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png")
                break;
            case "soul_dancer_/a":
                let soul = new MessageEmbed()
                    .setTitle("Soul Dancer (The Answer)")
                    .setURL("https://megamitensei.fandom.com/wiki/Soul_Dancer")
                    .setDescription(`[Report a Data Error!](${config.servers.discordinvite})`)
                    .setColor(config.colors.p3blue)
                    .attachFiles(new MessageAttachment(`./personadata/p3shadows/soul_dancerAnswer.png`, "shadow.png"))
                    .setImage("attachment://shadow.png")
                    .setFooter("Information gathered from the Megami Tensei Wiki", client.user.displayAvatarURL);

                let soulBoss = new MessageEmbed()
                    .setTitle("Soul Dancer (The Answer, Sub Boss)")
                    .setURL("https://megamitensei.fandom.com/wiki/Soul_Dancer")
                    .setDescription(`[Report a Data Error!](${config.servers.discordinvite})`)
                    .setColor(config.colors.p3blue)
                    .attachFiles(new MessageAttachment(`./personadata/p3shadows/soul_dancerBoss.png`, "shadow.png"))
                    .setImage("attachment://shadow.png")
                    .setFooter("Information gathered from the Megami Tensei Wiki", client.user.displayAvatarURL);

                await message.channel.send(soul);
                await message.channel.send(soulBoss);
                return;
                break;
            case "ardent_dancer":
                var name = "Ardent Dancer";
                var fileName = shadowName;
                var url = `https://megamitensei.fandom.com/wiki/Ardent_Dancer`;
                var img = new MessageAttachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png")
                break;
            case "natural_dancer":
                var name = "Natural Dancer";
                var fileName = shadowName;
                var url = `https://megamitensei.fandom.com/wiki/Natural_Dancer`;
                var img = new MessageAttachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png")
                break;
            case "natural_dancer_/a":
                var name = "Natural Dancer (The Answer)";
                var fileName = "natural_dancerAnswer";
                var url = `https://megamitensei.fandom.com/wiki/Natural_Dancer`;
                var img = new MessageAttachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png")
                break;
            case "royal_dancer":
                let royal = new MessageEmbed()
                    .setTitle("Royal Dancer")
                    .setURL("https://megamitensei.fandom.com/wiki/Royal_Dancer")
                    .setDescription(`[Report a Data Error!](${config.servers.discordinvite})`)
                    .setColor(config.colors.p3blue)
                    .attachFiles(new MessageAttachment(`./personadata/p3shadows/royal_dancer.png`, "shadow.png"))
                    .setImage("attachment://shadow.png")
                    .setFooter("Information gathered from the Megami Tensei Wiki", client.user.displayAvatarURL);

                let royalBoss = new MessageEmbed()
                    .setTitle("Royal Dancer (Sub Boss)")
                    .setURL("https://megamitensei.fandom.com/wiki/Royal_Dancer")
                    .setDescription(`[Report a Data Error!](${config.servers.discordinvite})`)
                    .setColor(config.colors.p3blue)
                    .attachFiles(new MessageAttachment(`./personadata/p3shadows/royal_dancerBoss.png`, "shadow.png"))
                    .setImage("attachment://shadow.png")
                    .setFooter("Information gathered from the Megami Tensei Wiki", client.user.displayAvatarURL);

                await message.channel.send(royal);
                await message.channel.send(royalBoss);
                return;
                break;
            case "royal_dancer_/a":
                var name = "Royal Dancer (The Answer)";
                var fileName = "royal_dancerAnswer";
                var url = `https://megamitensei.fandom.com/wiki/Royal_Dancer`;
                var img = new MessageAttachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png")
                break;
            case "harem_dancer_/a":
                var name = "Harem Dancer (The Answer)";
                var fileName = "harem_dancerAnswer";
                var url = `https://megamitensei.fandom.com/wiki/Harem_Dancer`;
                var img = new MessageAttachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png")
                break;


            //snake shadows
            case "snake":
                var name = "Snake Shadows";
                var fileName = shadowName;
                var url = `https://megamitensei.fandom.com/wiki/List_of_Persona_3_Shadows`;
                var img = new MessageAttachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png")
                break;
            case "lustful_snake":
                var name = "Lustful Snake";
                var fileName = shadowName;
                var url = `https://megamitensei.fandom.com/wiki/Ardent_Dancer`;
                var img = new MessageAttachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png")
                break;
            case "immoral_snake":
                var name = "Immoral Snake";
                var fileName = shadowName;
                var url = `https://megamitensei.fandom.com/wiki/Immoral_Snake`;
                var img = new MessageAttachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png")
                break;
            case "carnal_snake":
                let carnal = new MessageEmbed()
                    .setTitle("Carnal Snake")
                    .setURL("https://megamitensei.fandom.com/wiki/Carnal_Snake")
                    .setDescription(`[Report a Data Error!](${config.servers.discordinvite})`)
                    .setColor(config.colors.p3blue)
                    .attachFiles(new MessageAttachment(`./personadata/p3shadows/carnal_snake.png`, "shadow.png"))
                    .setImage("attachment://shadow.png")
                    .setFooter("Information gathered from the Megami Tensei Wiki", client.user.displayAvatarURL);

                let carnalBoss = new MessageEmbed()
                    .setTitle("Carnal Snake (Sub Boss)")
                    .setURL("https://megamitensei.fandom.com/wiki/Carnal_Snake")
                    .setDescription(`[Report a Data Error!](${config.servers.discordinvite})`)
                    .setColor(config.colors.p3blue)
                    .attachFiles(new MessageAttachment(`./personadata/p3shadows/carnal_snakeBoss.png`, "shadow.png"))
                    .setImage("attachment://shadow.png")
                    .setFooter("Information gathered from the Megami Tensei Wiki", client.user.displayAvatarURL);

                await message.channel.send(carnal);
                await message.channel.send(carnalBoss);
                return;
                break;
            case "amorous_snake":
                var name = "Amorous Snake";
                var fileName = shadowName;
                var url = `https://megamitensei.fandom.com/wiki/Amorous_Snake`;
                var img = new MessageAttachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png")
                break;
            case "stoic_snake_/a":
                var name = "Stoic Snake (The Answer)";
                var fileName = "stoic_snakeAnswer";
                var url = `https://megamitensei.fandom.com/wiki/Stoic_Snake`;
                var img = new MessageAttachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png")
                break;


            //wheel shadows
            case "wheel":
                var name = "Wheel Shadows";
                var fileName = shadowName;
                var url = `https://megamitensei.fandom.com/wiki/List_of_Persona_3_Shadows`;
                var img = new MessageAttachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png")
                break;
            case "bestial_wheel":
                var name = "Bestial Wheel";
                var fileName = shadowName;
                var url = `https://megamitensei.fandom.com/wiki/Bestial_Wheel`;
                var img = new MessageAttachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png")
                break;
            case "mach_wheel":
                var name = "Mach Wheel";
                var fileName = shadowName;
                var url = `https://megamitensei.fandom.com/wiki/Mach_Wheel`;
                var img = new MessageAttachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png")
                break;
            case "mach_wheel_/a":
                var name = "Mach Wheel (The Answer)";
                var fileName = "mach_wheelAnswer";
                var url = `https://megamitensei.fandom.com/wiki/Mach_Wheel`;
                var img = new MessageAttachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png")
                break;
            case "brave_wheel":
                var name = "Brave Wheel";
                var fileName = shadowName;
                var url = `https://megamitensei.fandom.com/wiki/Brave_Wheel`;
                var img = new MessageAttachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png")
                break;
            case "brave_wheel_/a":
                var name = "Brave Wheel (The Answer)";
                var fileName = "brave_wheelAnswer";
                var url = `https://megamitensei.fandom.com/wiki/Brave_Wheel`;
                var img = new MessageAttachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png")
                break;
            case "battle_wheel":
                var name = "Battle Wheel";
                var fileName = shadowName;
                var url = `https://megamitensei.fandom.com/wiki/Battle_Wheel`;
                var img = new MessageAttachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png")
                break;


            //drive shadows
            case "drive":
                var name = "Drive Shadows";
                var fileName = shadowName;
                var url = `https://megamitensei.fandom.com/wiki/List_of_Persona_3_Shadows`;
                var img = new MessageAttachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png")
                break;
            case "rampage_drive":
                var name = "Rampage Drive";
                var fileName = shadowName;
                var url = `https://megamitensei.fandom.com/wiki/Rampage_Drive`;
                var img = new MessageAttachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png")
                break;
            case "wild_drive":
                var name = "Wild Drive";
                var fileName = shadowName;
                var url = `https://megamitensei.fandom.com/wiki/Wild_Drive`;
                var img = new MessageAttachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png")
                break;
            case "wild_drive_/a":
                var name = "Wild Drive (The Answer)";
                var fileName = "wild_driveAnswer";
                var url = `https://megamitensei.fandom.com/wiki/Wild_Drive`;
                var img = new MessageAttachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png")
                break;
            case "killer_drive":
                var name = "Killer Drive";
                var fileName = shadowName;
                var url = `https://megamitensei.fandom.com/wiki/Killer_Drive`;
                var img = new MessageAttachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png")
                break;
            case "killer_drive_/a":
                var name = "Killer Drive (The Answer)";
                var fileName = "killer_driveAnswer";
                var url = `https://megamitensei.fandom.com/wiki/Killer_Drive`;
                var img = new MessageAttachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png")
                break;
            case "slaughter_drive":
                var name = "Slaughter Drive";
                var fileName = shadowName;
                var url = `https://megamitensei.fandom.com/wiki/Slaughter_Drive`;
                var img = new MessageAttachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png")
                break;
            case "slaughter_drive_/a":
                var name = "Slaughter Drive (The Answer)";
                var fileName = "slughter_driveAnswer";
                var url = `https://megamitensei.fandom.com/wiki/Slaughter_Drive`;
                var img = new MessageAttachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png")
                break;


            //turret shadows
            case "turret":
                var name = "Turret Shadows";
                var fileName = shadowName;
                var url = `https://megamitensei.fandom.com/wiki/List_of_Persona_3_Shadows`;
                var img = new MessageAttachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png")
                break;
            case "arcane_turret":
                let arcane = new MessageEmbed()
                    .setTitle("Arcane Turret")
                    .setURL("https://megamitensei.fandom.com/wiki/Arcane_Turret")
                    .setDescription(`[Report a Data Error!](${config.servers.discordinvite})`)
                    .setColor(config.colors.p3blue)
                    .attachFiles(new MessageAttachment(`./personadata/p3shadows/arcane_turret.png`, "shadow.png"))
                    .setImage("attachment://shadow.png")
                    .setFooter("Information gathered from the Megami Tensei Wiki", client.user.displayAvatarURL);

                let arcaneBoss = new MessageEmbed()
                    .setTitle("Arcane Turret (Sub Boss)")
                    .setURL("https://megamitensei.fandom.com/wiki/Arcane_Turret")
                    .setDescription(`[Report a Data Error!](${config.servers.discordinvite})`)
                    .setColor(config.colors.p3blue)
                    .attachFiles(new MessageAttachment(`./personadata/p3shadows/arcane_turretBoss.png`, "shadow.png"))
                    .setImage("attachment://shadow.png")
                    .setFooter("Information gathered from the Megami Tensei Wiki", client.user.displayAvatarURL);

                await message.channel.send(arcane);
                await message.channel.send(arcaneBoss);
                return;
                break;
            case "arcane_turret_/a":
                var name = "Arcane Turret (The Answer)";
                var fileName = "arcane_turretAnswer";
                var url = `https://megamitensei.fandom.com/wiki/Arcane_Turret`;
                var img = new MessageAttachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png")
                break;
            case "scarlet_turret":
                var name = "Scarlet Turret";
                var fileName = shadowName;
                var url = `https://megamitensei.fandom.com/wiki/Scarlet_Turret`;
                var img = new MessageAttachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png")
                break;
            case "wicked_turret":
                var name = "Wicked Turret";
                var fileName = shadowName;
                var url = `https://megamitensei.fandom.com/wiki/Wicked_Turret`;
                var img = new MessageAttachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png")
                break;
            case "wicked_turret_/a":
                var name = "Wicked Turret (The Answer)";
                var fileName = "wicked_turretAnswer";
                var url = `https://megamitensei.fandom.com/wiki/Wicked_Turret`;
                var img = new MessageAttachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png")
                break;
            case "hallowed_turret":
                var name = "Hallowed Turret";
                var fileName = shadowName;
                var url = `https://megamitensei.fandom.com/wiki/Hallowed_Turret`;
                var img = new MessageAttachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png")
                break;
            case "berserk_turret_/a":
                var name = "Berserk Turret (The Answer)";
                var fileName = "berserk_turretAnswer";
                var url = `https://megamitensei.fandom.com/wiki/Barserk_Turret`;
                var img = new MessageAttachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png")
                break;
            case "spastic_turret_/a":
                var name = "Spastic Turret (The Answer)";
                var fileName = "spastic_turretAnswer";
                var url = `https://megamitensei.fandom.com/wiki/Spastic_Turret`;
                var img = new MessageAttachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png")
                break;


            //balance shadows
            case "balance":
                var name = "Balance Shadows";
                var fileName = shadowName;
                var url = `https://megamitensei.fandom.com/wiki/List_of_Persona_3_Shadows`;
                var img = new MessageAttachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png")
                break;
            case "heat_balance":
                var name = "Heat Balance";
                var fileName = shadowName;
                var url = `https://megamitensei.fandom.com/wiki/Heat_Balance`;
                var img = new MessageAttachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png")
                break;
            case "heat_balance_/a":
                var name = "Heat Balance (The Answer)";
                var fileName = "heat_balanceAnswer";
                var url = `https://megamitensei.fandom.com/wiki/Heat_Balance`;
                var img = new MessageAttachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png")
                break;
            case "sky_balance":
                var name = "Sky Balance";
                var fileName = shadowName;
                var url = `https://megamitensei.fandom.com/wiki/Sky_Balance`;
                var img = new MessageAttachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png")
                break;
            case "sky_balance_/a":
                var name = "Sky Balance (The Answer)";
                var fileName = "sky_balanceAnswer";
                var url = `https://megamitensei.fandom.com/wiki/Sky_Balance`;
                var img = new MessageAttachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png")
                break;
            case "light_balance":
                var name = "Light Balance";
                var fileName = shadowName;
                var url = `https://megamitensei.fandom.com/wiki/Light_Balance`;
                var img = new MessageAttachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png")
                break;
            case "light_balance_/a":
                var name = "Light Balance (The Answer)";
                var fileName = "light_balanceAnswer";
                var url = `https://megamitensei.fandom.com/wiki/Light_Balance`;
                var img = new MessageAttachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png")
                break;
            case "world_balance":
                var name = "World Balance";
                var fileName = shadowName;
                var url = `https://megamitensei.fandom.com/wiki/World_Balance`;
                var img = new MessageAttachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png")
                break;
            case "world_balance_/a":
                var name = "World Balance (The Answer)";
                var fileName = "world_balanceAnswer";
                var url = `https://megamitensei.fandom.com/wiki/World_Balance`;
                var img = new MessageAttachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png")
                break;


            //sword shadows
            case "sword":
                var name = "Sword Shadows";
                var fileName = shadowName;
                var url = `https://megamitensei.fandom.com/wiki/List_of_Persona_3_Shadows`;
                var img = new MessageAttachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png")
                break;
            case "justice_sword":
                var name = "Justice Sword";
                var fileName = shadowName;
                var url = `https://megamitensei.fandom.com/wiki/Justice_Sword`;
                var img = new MessageAttachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png")
                break;
            case "justice_sword_/a":
                var name = "Justice Sword (The Answer)";
                var fileName = "justice_swordAnswer";
                var url = `https://megamitensei.fandom.com/wiki/Justice_Sword`;
                var img = new MessageAttachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png")
                break;
            case "conviction_sword":
                var name = "Conviction Sword";
                var fileName = shadowName;
                var url = `https://megamitensei.fandom.com/wiki/Conviction_Sword`;
                var img = new MessageAttachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png")
                break;
            case "conviction_sword_/a":
                var name = "Conviction Sword (The Answer)";
                var fileName = "conviction_swordAnswer";
                var url = `https://megamitensei.fandom.com/wiki/Conviction_Sword`;
                var img = new MessageAttachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png")
                break;
            case "judgement_sword":
                let judgement = new MessageEmbed()
                    .setTitle("Judgement Sword")
                    .setURL("https://megamitensei.fandom.com/wiki/Judgement_Sword")
                    .setDescription(`[Report a Data Error!](${config.servers.discordinvite})`)
                    .setColor(config.colors.p3blue)
                    .attachFiles(new MessageAttachment(`./personadata/p3shadows/judgement_sword.png`, "shadow.png"))
                    .setImage("attachment://shadow.png")
                    .setFooter("Information gathered from the Megami Tensei Wiki", client.user.displayAvatarURL);

                let judgementBoss = new MessageEmbed()
                    .setTitle("Judgement Sword (Sub Boss)")
                    .setURL("https://megamitensei.fandom.com/wiki/Judgement_Sword")
                    .setDescription(`[Report a Data Error!](${config.servers.discordinvite})`)
                    .setColor(config.colors.p3blue)
                    .attachFiles(new MessageAttachment(`./personadata/p3shadows/judgement_swordBoss.png`, "shadow.png"))
                    .setImage("attachment://shadow.png")
                    .setFooter("Information gathered from the Megami Tensei Wiki", client.user.displayAvatarURL);

                await message.channel.send(judgement);
                await message.channel.send(judgementBoss);
                return;
                break;
            case "judgement_sword_/a":
                var name = "Judgement Sword (The Answer)";
                var fileName = "judgement_swordAnswer";
                var url = `https://megamitensei.fandom.com/wiki/Judgement_Sword`;
                var img = new MessageAttachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png")
                break;
            case "doom_sword":
                var name = "Doom Sword";
                var fileName = shadowName;
                var url = `https://megamitensei.fandom.com/wiki/Doom_Sword`;
                var img = new MessageAttachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png")
                break;


            //giant shadows
            case "giant":
                var name = "Giant Shadows";
                var fileName = shadowName;
                var url = `https://megamitensei.fandom.com/wiki/List_of_Persona_3_Shadows`;
                var img = new MessageAttachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png")
                break;
            case "order_giant":
                var name = "Order Giant";
                var fileName = shadowName;
                var url = `https://megamitensei.fandom.com/wiki/Order_Giant`;
                var img = new MessageAttachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png")
                break;
            case "order_giant_/a":
                var name = "Order Giant (The Answer)";
                var fileName = "order_giantAnswer";
                var url = `https://megamitensei.fandom.com/wiki/Order_Giant`;
                var img = new MessageAttachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png")
                break;
            case "stasis_giant":
                let stasis = new MessageEmbed()
                    .setTitle("Stasis Giant")
                    .setURL("https://megamitensei.fandom.com/wiki/Stasis_Giant")
                    .setDescription(`[Report a Data Error!](${config.servers.discordinvite})`)
                    .setColor(config.colors.p3blue)
                    .attachFiles(new MessageAttachment(`./personadata/p3shadows/stasis_giant.png`, "shadow.png"))
                    .setImage("attachment://shadow.png")
                    .setFooter("Information gathered from the Megami Tensi Wiki", client.user.displayAvatarURL);

                let stasisBoss = new MessageEmbed()
                    .setTitle("Stasis Giant (Sub Boss)")
                    .setURL("https://megamitensei.fandom.com/wiki/Stasis_Giant")
                    .setDescription(`[Report a Data Error!](${config.servers.discordinvite})`)
                    .setColor(config.colors.p3blue)
                    .attachFiles(new MessageAttachment(`./personadata/p3shadows/stasis_giantBoss.png`, "shadow.png"))
                    .setImage("attachment://shadow.png")
                    .setFooter("Information gathered from the Megami Tensi Wiki", client.user.displayAvatarURL);
                await message.channel.send(stasis);
                await message.channel.send(stasisBoss);
                return;
                break;
            case "stasis_giant_/a":
                var name = "Stasis Giant (The Answer)";
                var fileName = "stasis_giantAnswer";
                var url = `https://megamitensei.fandom.com/wiki/Stasis_Giant`;
                var img = new MessageAttachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png")
                break;
            case "harmony_giant":
                var name = "Harmony Giant";
                var fileName = shadowName;
                var url = `https://megamitensei.fandom.com/wiki/Harmony_Giant`;
                var img = new MessageAttachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png")
                break;
            case "void_giant":
                var name = "Void Giant";
                var fileName = shadowName;
                var url = `https://megamitensei.fandom.com/wiki/Void_Giant`;
                var img = new MessageAttachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png")
                break;
            case "void_giant_/a":
                var name = "Void Giant (The Answer)";
                var fileName = "void_giantAnswer";
                var url = `https://megamitensei.fandom.com/wiki/Void_Giant`;
                var img = new MessageAttachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png")
                break;
            case "loss_giant_/a":
                var name = "Loss Giant (The Answer)";
                var fileName = "loss_giantAnswer";
                var url = `https://megamitensei.fandom.com/wiki/Loss_Giant`;
                var img = new MessageAttachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png")
                break;


            //raven shadows
            case "raven":
                var name = "Raven Shadows";
                var fileName = shadowName;
                var url = `https://megamitensei.fandom.com/wiki/List_of_Persona_3_Shadows`;
                var img = new MessageAttachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png")
                break;
            case "black_raven":
                var name = "Black Raven";
                var fileName = shadowName;
                var url = `https://megamitensei.fandom.com/wiki/Black_Raven`;
                var img = new MessageAttachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png")
                break;
            case "black_raven_/a":
                var name = "Black Raven (The Answer)";
                var fileName = "black_ravenAnswer";
                var url = `https://megamitensei.fandom.com/wiki/Black_Raven`;
                var img = new MessageAttachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png")
                break;
            case "vicious_raven":
                var name = "Vicious Raven";
                var fileName = shadowName;
                var url = `https://megamitensei.fandom.com/wiki/Vicious_Raven`;
                var img = new MessageAttachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png")
                break;
            case "vicious_raven_/a":
                var name = "Vicious Raven (The Answer)";
                var fileName = "vicious_ravenAnswer";
                var url = `https://megamitensei.fandom.com/wiki/Vicious_Raven`;
                var img = new MessageAttachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png")
                break;
            case "amenti_raven":
                var name = "Amenti Raven";
                var fileName = shadowName;
                var url = `https://megamitensei.fandom.com/wiki/Amenti_Raven`;
                var img = new MessageAttachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png")
                break;
            case "ice_raven":
                var name = "Ice Raven";
                var fileName = shadowName;
                var url = `https://megamitensei.fandom.com/wiki/Ice_Raven`;
                var img = new MessageAttachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png")
                break;
            case "ice_raven_/a":
                var name = "Ice Raven (The Answer)";
                var fileName = "ice_ravenAnswer";
                var url = `https://megamitensei.fandom.com/wiki/Ice_Raven`;
                var img = new MessageAttachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png")
                break;


            //phantom shadows
            case "phantom":
                var name = "Phantom Shadows";
                var fileName = shadowName;
                var url = `https://megamitensei.fandom.com/wiki/List_of_Persona_3_Shadows`;
                var img = new MessageAttachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png")
                break;
            case "phantom_mage":
                var name = "Phantom Mage";
                var fileName = shadowName;
                var url = `https://megamitensei.fandom.com/wiki/Phantom_Mage`;
                var img = new MessageAttachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png")
                break;
            case "phantom_master":
                var name = "Phantom Master";
                var fileName = shadowName;
                var url = `https://megamitensei.fandom.com/wiki/Phantom_Master`;
                var img = new MessageAttachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png")
                break;
            case "phantom_master_/a":
                var name = "Phantom Master (The Answer)";
                var fileName = "phantom_masterAnswer";
                var url = `https://megamitensei.fandom.com/wiki/Phantom_Master`;
                var img = new MessageAttachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png")
                break;
            case "phantom_lord":
                var name = "Phantom Lord";
                var fileName = shadowName;
                var url = `https://megamitensei.fandom.com/wiki/Phantom_Lord`;
                var img = new MessageAttachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png")
                break;
            case "phantom_king":
                var name = "Phantom King";
                var fileName = shadowName;
                var url = `https://megamitensei.fandom.com/wiki/Phantom_King`;
                var img = new MessageAttachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png")
                break;
            case "phantom_hero_/a":
                var name = "Phantom Hero (The Answer)";
                var fileName = "phantom_heroAnswer";
                var url = `https://megamitensei.fandom.com/wiki/Phantom_Hero`;
                var img = new MessageAttachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png")
                break;


            //seeker shadows
            case "seeker":
                var name = "Seeker Shadows";
                var fileName = shadowName;
                var url = `https://megamitensei.fandom.com/wiki/List_of_Persona_3_Shadows`;
                var img = new MessageAttachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png")
                break;
            case "death_seeker":
                var name = "Death Seeker";
                var fileName = shadowName;
                var url = `https://megamitensei.fandom.com/wiki/Death_Seeker`;
                var img = new MessageAttachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png")
                break;
            case "death_seeker_/a":
                var name = "Death Seeker (The Answer)";
                var fileName = "death_seekerAnswer";
                var url = `https://megamitensei.fandom.com/wiki/Death_Seeker`;
                var img = new MessageAttachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png")
                break;
            case "fate_seeker":
                var name = "Fate Seeker";
                var fileName = shadowName;
                var url = `https://megamitensei.fandom.com/wiki/Fate_Seeker`;
                var img = new MessageAttachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png")
                break;
            case "noble_seeker":
                let noble = new MessageEmbed()
                    .setTitle("Noble Seeker")
                    .setURL("https://megamitensei.fandom.com/wiki/Noble_Seeker")
                    .setDescription(`[Report a Data Error!](${config.servers.discordinvite})`)
                    .setColor(config.colors.p3blue)
                    .attachFiles(new MessageAttachment(`./personadata/p3shadows/noble_seeker.png`, "shadow.png"))
                    .setImage("attachment://shadow.png")
                    .setFooter("Information gathered from the Megami Tensei Wiki", client.user.displayAvatarURL);

                let nobleBoss = new MessageEmbed()
                    .setTitle("Noble Seeker (Sub Boss)")
                    .setURL("https://megamitensei.fandom.com/wiki/Noble_Seeker")
                    .setDescription(`[Report a Data Error!](${config.servers.discordinvite})`)
                    .setColor(config.colors.p3blue)
                    .attachFiles(new MessageAttachment(`./personadata/p3shadows/noble_seekerBoss.png`, "shadow.png"))
                    .setImage("attachment://shadow.png")
                    .setFooter("Information gathered from the Megami Tensei Wiki", client.user.displayAvatarURL);

                await message.channel.send(noble);
                await message.channel.send(nobleBoss);
                return;
                break;
            case "acheron_seeker":
                var name = "Acheron Seeker";
                var fileName = shadowName;
                var url = `https://megamitensei.fandom.com/wiki/Acheron_Seeker`;
                var img = new MessageAttachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png")
                break;
            case "acheron_seeker_/a":
                var name = "Acheron Seeker (The Answer)";
                var fileName = "acheron_seekerAnswer";
                var url = `https://megamitensei.fandom.com/wiki/Acheron_Seeker`;
                var img = new MessageAttachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png")
                break;


            //dice shadows
            case "dice":
                var name = "Dice Shadows";
                var fileName = shadowName;
                var url = `https://megamitensei.fandom.com/wiki/List_of_Persona_3_Shadows`;
                var img = new MessageAttachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png")
                break;
            case "bronze_dice":
                var name = "Bronze Dice";
                var fileName = shadowName;
                var url = `https://megamitensei.fandom.com/wiki/Bronze_Dice`;
                var img = new MessageAttachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png")
                break;
            case "bronze_dice_/a":
                var name = "Bronze Dice (The Answer)";
                var fileName = "bronze_diceAnswer";
                var url = `https://megamitensei.fandom.com/wiki/Bronze_Dice`;
                var img = new MessageAttachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png")
                break;
            case "mind_dice":
                var name = "Mind Dice";
                var fileName = shadowName;
                var url = `https://megamitensei.fandom.com/wiki/Mind_Dice`;
                var img = new MessageAttachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png")
                break;
            case "curse_dice":
                var name = "Curse Dice";
                var fileName = shadowName;
                var url = `https://megamitensei.fandom.com/wiki/Curse_Dice`;
                var img = new MessageAttachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png")
                break;
            case "curse_dice_/a":
                var name = "Curse Dice (The Answer)";
                var fileName = "curse_diceAnswer";
                var url = `https://megamitensei.fandom.com/wiki/Curse_Dice`;
                var img = new MessageAttachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png")
                break;
            case "reckoning_dice":
                var name = "Reckoning Dice";
                var fileName = shadowName;
                var url = `https://megamitensei.fandom.com/wiki/Reckoning_Dice`;
                var img = new MessageAttachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png")
                break;
            case "iron_dice":
                var name = "Iron Dice";
                var fileName = shadowName;
                var url = `https://megamitensei.fandom.com/wiki/Iron_Dice`;
                var img = new MessageAttachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png")
                break;
            case "death_dice":
                var name = "Death Dice";
                var fileName = shadowName;
                var url = `https://megamitensei.fandom.com/wiki/Death_Dice`;
                var img = new MessageAttachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png")
                break;
            case "death_dice_/a":
                var name = "Death Dice (The Answer)";
                var fileName = "death_diceAnswer";
                var url = `https://megamitensei.fandom.com/wiki/Death_Dice`;
                var img = new MessageAttachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png")
                break;
            case "silver_dice":
                var name = "Silver Dice";
                var fileName = shadowName;
                var url = `https://megamitensei.fandom.com/wiki/Silver_Dice`;
                var img = new MessageAttachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png")
                break;
            case "silver_dice_/a":
                var name = "Silver Dice (The Answer)";
                var fileName = "silver_diceAnswer";
                var url = `https://megamitensei.fandom.com/wiki/Silver_Dice`;
                var img = new MessageAttachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png")
                break;
            case "platinum_dice":
                var name = "Platinum Dice";
                var fileName = shadowName;
                var url = `https://megamitensei.fandom.com/wiki/Platinum_Dice`;
                var img = new MessageAttachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png")
                break;


            //sand shadows
            case "sand":
                var name = "Sand Shadows";
                var fileName = shadowName;
                var url = `https://megamitensei.fandom.com/wiki/List_of_Persona_3_Shadows`;
                var img = new MessageAttachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png")
                break;
            case "flowing_sand":
                var name = "Flowing Sand";
                var fileName = shadowName;
                var url = `https://megamitensei.fandom.com/wiki/Flowing_Sand`;
                var img = new MessageAttachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png")
                break;
            case "flowing_sand_/a":
                var name = "Flowing Sand (The Answer)";
                var fileName = "flowing_sandAnswer";
                var url = `https://megamitensei.fandom.com/wiki/Flowing_Sand`;
                var img = new MessageAttachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png")
                break;
            case "perpetual_sand":
                var name = "Perpetual Sand";
                var fileName = shadowName;
                var url = `https://megamitensei.fandom.com/wiki/Flowing_Sand`;
                var img = new MessageAttachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png")
                break;
            case "infinite_sand":
                var name = "Infinite Sand";
                var fileName = shadowName;
                var url = `https://megamitensei.fandom.com/wiki/Infinite_Sand`;
                var img = new MessageAttachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png")
                break;
            case "eternal_sand":
                var name = "Eternal Sand";
                var fileName = shadowName;
                var url = `https://megamitensei.fandom.com/wiki/Eternal_Sand`;
                var img = new MessageAttachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png")
                break;


            //beast shadows
            case "beast":
                var name = "Beast Shadows";
                var fileName = shadowName;
                var url = `https://megamitensei.fandom.com/wiki/List_of_Persona_3_Shadows`;
                var img = new MessageAttachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png")
                break;
            case "wild_beast":
                var name = "Wild Beast";
                var fileName = shadowName;
                var url = `https://megamitensei.fandom.com/wiki/Wild_Beast`;
                var img = new MessageAttachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png")
                break;
            case "wild_beast_/a":
                var name = "Wild Beast (The Answer)";
                var fileName = "wild_beastAnswer";
                var url = `https://megamitensei.fandom.com/wiki/Wild_Beast`;
                var img = new MessageAttachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png")
                break;
            case "enslaved_beast":
                var name = "Enslaved Beast";
                var fileName = shadowName;
                var url = `https://megamitensei.fandom.com/wiki/Enslaved_Beast`;
                var img = new MessageAttachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png")
                break;
            case "enslaved_beast_/a":
                var name = "Enslaved Beast (The Answer)";
                var fileName = "enslaved_beastAnswer";
                var url = `https://megamitensei.fandom.com/wiki/Enslaved_Beast`;
                var img = new MessageAttachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png")
                break;
            case "mighty_beast":
                var name = "Mighty Beast";
                var fileName = shadowName;
                var url = `https://megamitensei.fandom.com/wiki/Mighty_Beast`;
                var img = new MessageAttachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png")
                break;
            case "nemean_beast":
                var name = "Nemean Beast";
                var fileName = shadowName;
                var url = `https://megamitensei.fandom.com/wiki/Nemean_Beast`;
                var img = new MessageAttachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png")
                break;
            case "el_dorado_beast_/a":
                var name = "El Dorado Beast (The Answer)";
                var fileName = "el_dorado_beastAnswer";
                var url = `https://megamitensei.fandom.com/wiki/El_Dorado_Beast`;
                var img = new MessageAttachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png")
                break;


            //gigas shadows
            case "gigas":
                var name = "Gigas Shadows";
                var fileName = shadowName;
                var url = `https://megamitensei.fandom.com/wiki/List_of_Persona_3_Shadows`;
                var img = new MessageAttachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png")
                break;
            case "steel_gigas":
                var name = "Steel Gigas";
                var fileName = shadowName;
                var url = `https://megamitensei.fandom.com/wiki/Steel_Gigas`;
                var img = new MessageAttachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png")
                break;
            case "steel_gigas_/a":
                var name = "Steel Gigas (The Answer)";
                var fileName = "steel_gigasAnswer";
                var url = `https://megamitensei.fandom.com/wiki/Steel_Gigas`;
                var img = new MessageAttachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png")
                break;
            case "furious_gigas":
                let furious = new MessageEmbed()
                    .setTitle("Furious Gigas")
                    .setURL("https://megamitensei.fandom.com/wiki/Furious_Gigas")
                    .setDescription(`[Report a Data Error!](${config.servers.discordinvite})`)
                    .setColor(config.colors.p3blue)
                    .attachFiles(new MessageAttachment(`./personadata/p3shadows/furious_gigas.png`, "shadow.png"))
                    .setImage("attachment://shadow.png")
                    .setFooter("Information gathered from the Megami Tensei Wiki", client.user.displayAvatarURL);

                let furiousBoss = new MessageEmbed()
                    .setTitle("Furious Gigas (Sub Boss)")
                    .setURL("https://megamitensei.fandom.com/wiki/Furious_Gigas")
                    .setDescription(`[Report a Data Error!](${config.servers.discordinvite})`)
                    .setColor(config.colors.p3blue)
                    .attachFiles(new MessageAttachment(`./personadata/p3shadows/furious_gigasBoss.png`, "shadow.png"))
                    .setImage("attachment://shadow.png")
                    .setFooter("Information gathered from the Megami Tensei Wiki", client.user.displayAvatarURL);

                await message.channel.send(furious);
                await message.channel.send(furiousBoss);
                return;
                break;
            case "furious_gigas_/a":
                var name = "Furious Gigas (The Answer)";
                var fileName = "furious_gigasAnswer";
                var url = `https://megamitensei.fandom.com/wiki/Furious_Gigas`;
                var img = new MessageAttachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png")
                break;
            case "mythical_gigas":
                var name = "Mythical Gigas";
                var fileName = shadowName;
                var url = `https://megamitensei.fandom.com/wiki/Mythical_Gigas`;
                var img = new MessageAttachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png")
                break;
            case "mythical_gigas_/a":
                var name = "Mythical Gigas (The Answer)";
                var fileName = "mythical_gigasAnswer";
                var url = `https://megamitensei.fandom.com/wiki/Mythical_Gigas`;
                var img = new MessageAttachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png")
                break;
            case "daring_gigas":
                var name = "Daring Gigas";
                var fileName = shadowName;
                var url = `https://megamitensei.fandom.com/wiki/Daring_Gigas`;
                var img = new MessageAttachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png")
                break;
            case "immortal_gigas_/a":
                var name = "Immortal Gigas (The Answer)";
                var fileName = "immortal_gigasAnswer";
                var url = `https://megamitensei.fandom.com/wiki/Immortal_Gigas`;
                var img = new MessageAttachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png")
                break;


            //musha shadows
            case "musha":
                var name = "Musha Shadows";
                var fileName = shadowName;
                var url = `https://megamitensei.fandom.com/wiki/List_of_Persona_3_Shadows`;
                var img = new MessageAttachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png")
                break;
            case "hakurou_musha":
                var name = "Hakurou Musha";
                var fileName = shadowName;
                var url = `https://megamitensei.fandom.com/wiki/Hakurou_Musha`;
                var img = new MessageAttachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png")
                break;
            case "kaiden_musha":
                var name = "Kaiden Musha";
                var fileName = shadowName;
                var url = `https://megamitensei.fandom.com/wiki/Rain_End_Musha`;
                var img = new MessageAttachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png")
                break;
            case "kaiden_musha_/a":
                var name = "Kaiden Musha (The Answer)";
                var fileName = "kaiden_mushaAnswer";
                var url = `https://megamitensei.fandom.com/wiki/Rain_End_Musha`;
                var img = new MessageAttachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png")
                break;
            case "onnen_musha":
                var name = "Onnen Musha";
                var fileName = shadowName;
                var url = `https://megamitensei.fandom.com/wiki/Raindrop_Musha`;
                var img = new MessageAttachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png")
                break;
            case "onnen_musha_/a":
                var name = "Onnen Musha (The Answer)";
                var fileName = "onnen_mushaAnswer";
                var url = `https://megamitensei.fandom.com/wiki/Raindrop_Musha`;
                var img = new MessageAttachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png")
                break;
            case "tenjin_musha":
                var name = "Tenjin Musha";
                var fileName = shadowName;
                var url = `https://megamitensei.fandom.com/wiki/Rain_Wind_Musha`;
                var img = new MessageAttachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png")
                break;
            case "tenjin_musha_/a":
                var name = "Tenjin Musha (The Answer)";
                var fileName = "tenjin_mushaAnswer";
                var url = `https://megamitensei.fandom.com/wiki/Rain_Wind_Musha`;
                var img = new MessageAttachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png")
                break;


            //minotaur shadows
            case "minotaur":
                var name = "Minotaur Shadows";
                var fileName = shadowName;
                var url = `https://megamitensei.fandom.com/wiki/List_of_Persona_3_Shadows`;
                var img = new MessageAttachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png")
                break;
            case "minotaur_iv":
                var name = "Minotaur IV";
                var fileName = shadowName;
                var url = `https://megamitensei.fandom.com/wiki/Minotaur_IV`;
                var img = new MessageAttachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png")
                break;
            case "minotaur_iv_/a":
                var name = "Minotaur IV (The Answer)";
                var fileName = "minotaur_ivAnswer";
                var url = `https://megamitensei.fandom.com/wiki/Minotaur_IV`;
                var img = new MessageAttachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png")
                break;
            case "minotaur_iii":
                var name = "Minotaur III";
                var fileName = shadowName;
                var url = `https://megamitensei.fandom.com/wiki/Minotaur_III`;
                var img = new MessageAttachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png")
                break;
            case "minotaur_ii":
                var name = "Minotaur II";
                var fileName = shadowName;
                var url = `https://megamitensei.fandom.com/wiki/Minotaur_II`;
                var img = new MessageAttachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png")
                break;
            case "minotaur_i":
                var name = "Minotaur I";
                var fileName = shadowName;
                var url = `https://megamitensei.fandom.com/wiki/Minotaur_I`;
                var img = new MessageAttachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png")
                break;
            case "neo_minotaur_/a":
                var name = "Neo Minotaur (The Answer)";
                var fileName = "neo_minotaurAnswer";
                var url = `https://megamitensei.fandom.com/wiki/Neo_Minotaur`;
                var img = new MessageAttachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png")
                break;


            //cyclops shadows
            case "cyclops":
                var name = "Cyclops Shadows";
                var fileName = shadowName;
                var url = `https://megamitensei.fandom.com/wiki/List_of_Persona_3_Shadows`;
                var img = new MessageAttachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png")
                break;
            case "mighty_cyclops":
                var name = "Mighty Cyclops";
                var fileName = shadowName;
                var url = `https://megamitensei.fandom.com/wiki/Mighty_Cyclops`;
                var img = new MessageAttachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png")
                break;
            case "mighty_cyclops_/a":
                var name = "Mighty Cyclops (The Answer)";
                var fileName = "mighty_cyclopsAnswer";
                var url = `https://megamitensei.fandom.com/wiki/Mighty_Cyclops`;
                var img = new MessageAttachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png")
                break;
            case "mad_cyclops":
                var name = "Mad Cyclops";
                var fileName = shadowName;
                var url = `https://megamitensei.fandom.com/wiki/Mad_Cyclops`;
                var img = new MessageAttachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png")
                break;
            case "mad_cyclops_/a":
                var name = "Mad Cyclops (The Answer)";
                var fileName = "mad_cyclopsAnswer";
                var url = `https://megamitensei.fandom.com/wiki/Mad_Cyclops`;
                var img = new MessageAttachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png")
                break;
            case "fierce_cyclops":
                let fierce = new MessageEmbed()
                    .setTitle("Fierce Cyclops")
                    .setURL("https://megamitensei.fandom.com/wiki/Fierce_Cyclops")
                    .setDescription(`[Report a Data Error!](${config.servers.discordinvite})`)
                    .setColor(config.colors.p3blue)
                    .attachFiles(new MessageAttachment(`./personadata/p3shadows/fierce_cyclops.png`, "shadow.png"))
                    .setImage("attachment://shadow.png")
                    .setFooter("Information gathered from the Megami Tensei Wiki", client.user.displayAvatarURL);

                let fierceBoss = new MessageEmbed()
                    .setTitle("Fierce Cyclops (Sub Boss)")
                    .setURL("https://megamitensei.fandom.com/wiki/Fierce_Cyclops")
                    .setDescription(`[Report a Data Error!](${config.servers.discordinvite})`)
                    .setColor(config.colors.p3blue)
                    .attachFiles(new MessageAttachment(`./personadata/p3shadows/fierce_cyclopsBoss.png`, "shadow.png"))
                    .setImage("attachment://shadow.png")
                    .setFooter("Information gathered from the Megami Tensei Wiki", client.user.displayAvatarURL);

                await message.channel.send(fierce);
                await message.channel.send(fierceBoss);
                return;
                break;
            case "chaos_cyclops":
                var name = "Chaos Cyclops";
                var fileName = shadowName;
                var url = `https://megamitensei.fandom.com/wiki/Chaos_Cyclops`;
                var img = new MessageAttachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png")
                break;
            case "chaos_cyclops_/a":
                var name = "Chaos Cyclops (The Answer)";
                var fileName = "chaos_cyclopsAnswer";
                var url = `https://megamitensei.fandom.com/wiki/Chaos_Cyclops`;
                var img = new MessageAttachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png")
                break;
            case "brilliant_cyclops_/a":
                var name = "Brilliant Cyclops (The Answer)";
                var fileName = "brilliant_cyclopsAnswer";
                var url = `https://megamitensei.fandom.com/wiki/Brilliant_Cyclops`;
                var img = new MessageAttachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png")
                break;
            case "rebellious_cyclops_/a":
                var name = "Rebellious Cyclops (The Answer)";
                var fileName = "rebellious_cyclopsAnswer";
                var url = `https://megamitensei.fandom.com/wiki/Rebellious_Cyclops`;
                var img = new MessageAttachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png")
                break;


            //jotun shadows
            case "jotun":
                var name = "Jotun Shadows";
                var fileName = shadowName;
                var url = `https://megamitensei.fandom.com/wiki/List_of_Persona_3_Shadows`;
                var img = new MessageAttachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png")
                break;
            case "jotun_of_power":
                var name = "Jotun of Power";
                var fileName = shadowName;
                var url = `https://megamitensei.fandom.com/wiki/Jotun_of_Power`;
                var img = new MessageAttachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png")
                break;
            case "jotun_of_power_/a":
                var name = "Jotun of Power (The Answer)";
                var fileName = "jotun_of_powerAnswer";
                var url = `https://megamitensei.fandom.com/wiki/Jotun_of_Power`;
                var img = new MessageAttachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png")
                break;
            case "jotun_of_blood":
                var name = "Jotun of Blood";
                var fileName = shadowName;
                var url = `https://megamitensei.fandom.com/wiki/Jotun_of_Blood`;
                var img = new MessageAttachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png")
                break;
            case "jotun_of_blood_/a":
                var name = "Jotun of Blood (The Answer)";
                var fileName = shadowName;
                var url = `https://megamitensei.fandom.com/wiki/Jotun_of_Blood`;
                var img = new MessageAttachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png")
                break;
            case "jotun_of_grief":
                var name = "Jotun of Grief";
                var fileName = shadowName;
                var url = `https://megamitensei.fandom.com/wiki/Jotun_of_Grief`;
                var img = new MessageAttachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png")
                break;
            case "jotun_of_evil":
                var name = "Jotun of Evil";
                var fileName = shadowName;
                var url = `https://megamitensei.fandom.com/wiki/Jotun_of_Evil`;
                var img = new MessageAttachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png")
                break;
            case "jotun_of_evil_/a":
                var name = "Jotun of Evil (The Answer)";
                var fileName = "jotun_of_evilAnswer";
                var url = `https://megamitensei.fandom.com/wiki/Jotun_of_Evil`;
                var img = new MessageAttachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png")
                break;


            //golden shadows
            case "wealth_hand":
                var name = "Wealth Hand";
                var fileName = shadowName;
                var url = `https://megamitensei.fandom.com/wiki/Wealth_Hand`;
                var img = new MessageAttachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png")
                break;
            case "wealth_hand_/a":
                var name = "Wealth Hand (The Answer)";
                var fileName = "wealth_handAnswer";
                var url = `https://megamitensei.fandom.com/wiki/Wealth_Hand`;
                var img = new MessageAttachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png")
                break;
            case "treasure_hand":
                var name = "Treasure Hand";
                var fileName = shadowName;
                var url = `https://megamitensei.fandom.com/wiki/Treasure_Hand`;
                var img = new MessageAttachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png")
                break;
            case "treasure_hand_/a":
                var name = "Treasure Hand (The Answer)";
                var fileName = "treasure_handAnswer";
                var url = `https://megamitensei.fandom.com/wiki/Treasure_Hand`;
                var img = new MessageAttachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png")
                break;
            case "supreme_hand":
                var name = "Supreme Hand";
                var fileName = shadowName;
                var url = `https://megamitensei.fandom.com/wiki/Supreme_Hand`;
                var img = new MessageAttachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png")
                break;
            case "supreme_hand_/a":
                var name = "Supreme Hand (The Answer)";
                var fileName = "supreme_handAnswer";
                var url = `https://megamitensei.fandom.com/wiki/Supreme_Hand`;
                var img = new MessageAttachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png")
                break;
            case "opulent_hand":
                var name = "Opulent Hand";
                var fileName = shadowName;
                var url = `https://megamitensei.fandom.com/wiki/Opulent_Hand`;
                var img = new MessageAttachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png")
                break;
            case "luxury_hand":
                var name = "Luxury Hand";
                var fileName = shadowName;
                var url = `https://megamitensei.fandom.com/wiki/Luxury_Hand`;
                var img = new MessageAttachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png")
                break;
            case "glorious_hand":
                var name = "Glorious Hand";
                var fileName = shadowName;
                var url = `https://megamitensei.fandom.com/wiki/Glorious_Hand`;
                var img = new MessageAttachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png")
                break;


            //full moon bosses
            case "arcana_priestess":
                let priestess = new MessageEmbed()
                    .setTitle("Arcana Priestess")
                    .setURL("https://megamitensei.fandom.com/wiki/Arcana_Priestess")
                    .setDescription(`[Report a Data Error!](${config.servers.discordinvite})`)
                    .setColor(config.colors.p3blue)
                    .attachFiles(new MessageAttachment(`./personadata/p3shadows/arcana_priestess.png`, "shadow.png"))
                    .setImage("attachment://shadow.png")
                    .setFooter("Information gathered from the Megami Tensei Wiki", client.user.displayAvatarURL);

                let priestessQuest = new MessageEmbed()
                    .setTitle("Arcana Priestess (Vision Quest)")
                    .setURL("https://megamitensei.fandom.com/wiki/Arcana_Priestess")
                    .setDescription(`[Report a Data Error!](${config.servers.discordinvite})`)
                    .setColor(config.colors.p3blue)
                    .attachFiles(new MessageAttachment(`./personadata/p3shadows/arcana_priestessQuest.png`, "shadow.png"))
                    .setImage("attachment://shadow.png")
                    .setFooter("Information gathered from the Megami Tensei Wiki", client.user.displayAvatarURL);

                await message.channel.send(priestess);
                await message.channel.send(priestessQuest);
                return;
                break;
            case "arcana_empress":
                let empress = new MessageEmbed()
                    .setTitle("Arcana Empress")
                    .setURL("https://megamitensei.fandom.com/wiki/Arcana_Empress")
                    .setDescription(`[Report a Data Error!](${config.servers.discordinvite})`)
                    .setColor(config.colors.p3blue)
                    .attachFiles(new MessageAttachment(`./personadata/p3shadows/arcana_empress.png`, "shadow.png"))
                    .setImage("attachment://shadow.png")
                    .setFooter("Information gathered from the Megami Tensei Wiki", client.user.displayAvatarURL);

                let empressQuest = new MessageEmbed()
                    .setTitle("Arcana Empress (Vision Quest)")
                    .setURL("https://megamitensei.fandom.com/wiki/Arcana_Empress")
                    .setDescription(`[Report a Data Error!](${config.servers.discordinvite})`)
                    .setColor(config.colors.p3blue)
                    .attachFiles(new MessageAttachment(`./personadata/p3shadows/arcana_empressQuest.png`, "shadow.png"))
                    .setImage("attachment://shadow.png")
                    .setFooter("Information gathered from the Megami Tensei Wiki", client.user.displayAvatarURL);

                await message.channel.send(empress);
                await message.channel.send(empressQuest);
                return;
                break;
            case "arcana_emperor":
                let emperor = new MessageEmbed()
                    .setTitle("Arcana Emperor")
                    .setURL("https://megamitensei.fandom.com/wiki/Arcana_Emperor")
                    .setDescription(`[Report a Data Error!](${config.servers.discordinvite})`)
                    .setColor(config.colors.p3blue)
                    .attachFiles(new MessageAttachment(`./personadata/p3shadows/arcana_emperor.png`, "shadow.png"))
                    .setImage("attachment://shadow.png")
                    .setFooter("Information gathered from the Megami Tensei Wiki", client.user.displayAvatarURL);

                let emperorQuest = new MessageEmbed()
                    .setTitle("Arcana Emperor (Vision Quest)")
                    .setURL("https://megamitensei.fandom.com/wiki/Arcana_Emperor")
                    .setDescription(`[Report a Data Error!](${config.servers.discordinvite})`)
                    .setColor(config.colors.p3blue)
                    .attachFiles(new MessageAttachment(`./personadata/p3shadows/arcana_emperorQuest.png`, "shadow.png"))
                    .setImage("attachment://shadow.png")
                    .setFooter("Information gathered from the Megami Tensei Wiki", client.user.displayAvatarURL);

                await message.channel.send(emperor);
                await message.channel.send(emperorQuest);
                return;
                break;
            case "arcana_hierophant":
                let hierophant = new MessageEmbed()
                    .setTitle("Arcana Hierophant")
                    .setURL("https://megamitensei.fandom.com/wiki/Arcana_Hierophant")
                    .setDescription(`[Report a Data Error!](${config.servers.discordinvite})`)
                    .setColor(config.colors.p3blue)
                    .attachFiles(new MessageAttachment(`./personadata/p3shadows/arcana_hierophant.png`, "shadow.png"))
                    .setImage("attachment://shadow.png")
                    .setFooter("Information gathered from the Megami Tensei Wiki", client.user.displayAvatarURL);

                let hierophantQuest = new MessageEmbed()
                    .setTitle("Arcana Hierophant (Vision Quest)")
                    .setURL("https://megamitensei.fandom.com/wiki/Arcana_Hierophant")
                    .setDescription(`[Report a Data Error!](${config.servers.discordinvite})`)
                    .setColor(config.colors.p3blue)
                    .attachFiles(new MessageAttachment(`./personadata/p3shadows/arcana_hierophantQuest.png`, "shadow.png"))
                    .setImage("attachment://shadow.png")
                    .setFooter("Information gathered from the Megami Tensei Wiki", client.user.displayAvatarURL);

                await message.channel.send(hierophant);
                await message.channel.send(hierophantQuest);
                return;
                break;
            case "arcana_lovers":
                let lovers = new MessageEmbed()
                    .setTitle("Arcana Lovers")
                    .setURL("https://megamitensei.fandom.com/wiki/Arcana_Lovers")
                    .setDescription(`[Report a Data Error!](${config.servers.discordinvite})`)
                    .setColor(config.colors.p3blue)
                    .attachFiles(new MessageAttachment(`./personadata/p3shadows/arcana_lovers.png`, "shadow.png"))
                    .setImage("attachment://shadow.png")
                    .setFooter("Information gathered from the Megami Tensei Wiki", client.user.displayAvatarURL);

                let loversQuest = new MessageEmbed()
                    .setTitle("Arcana Lovers (Vision Quest)")
                    .setURL("https://megamitensei.fandom.com/wiki/Arcana_Lovers")
                    .setDescription(`[Report a Data Error!](${config.servers.discordinvite})`)
                    .setColor(config.colors.p3blue)
                    .attachFiles(new MessageAttachment(`./personadata/p3shadows/arcana_loversQuest.png`, "shadow.png"))
                    .setImage("attachment://shadow.png")
                    .setFooter("Information gathered from the Megami Tensei Wiki", client.user.displayAvatarURL);

                await message.channel.send(lovers);
                await message.channel.send(loversQuest);
                return;
                break;
            case "arcana_chariot":
                let chariot = new MessageEmbed()
                    .setTitle("Arcana Chariot")
                    .setURL("https://megamitensei.fandom.com/wiki/Arcana_Chariot")
                    .setDescription(`[Report a Data Error!](${config.servers.discordinvite})`)
                    .setColor(config.colors.p3blue)
                    .attachFiles(new MessageAttachment(`./personadata/p3shadows/arcana_chariot.png`, "shadow.png"))
                    .setImage("attachment://shadow.png")
                    .setFooter("Information gathered from the Megami Tensei Wiki", client.user.displayAvatarURL);

                let chariotQuest = new MessageEmbed()
                    .setTitle("Arcana Chariot (Vision Quest)")
                    .setURL("https://megamitensei.fandom.com/wiki/Arcana_Chariot")
                    .setDescription(`[Report a Data Error!](${config.servers.discordinvite})`)
                    .setColor(config.colors.p3blue)
                    .attachFiles(new MessageAttachment(`./personadata/p3shadows/arcana_chariotQuest.png`, "shadow.png"))
                    .setImage("attachment://shadow.png")
                    .setFooter("Information gathered from the Megami Tensei Wiki", client.user.displayAvatarURL);

                await message.channel.send(chariot);
                await message.channel.send(chariotQuest);
                return;
                break;
            case "arcana_justice":
                let justice = new MessageEmbed()
                    .setTitle("Arcana Justice")
                    .setURL("https://megamitensei.fandom.com/wiki/Arcana_Justice")
                    .setDescription(`[Report a Data Error!](${config.servers.discordinvite})`)
                    .setColor(config.colors.p3blue)
                    .attachFiles(new MessageAttachment(`./personadata/p3shadows/arcana_justice.png`, "shadow.png"))
                    .setImage("attachment://shadow.png")
                    .setFooter("Information gathered from the Megami Tensei Wiki", client.user.displayAvatarURL);

                let justiceQuest = new MessageEmbed()
                    .setTitle("Arcana Justice (Vision Quest)")
                    .setURL("https://megamitensei.fandom.com/wiki/Arcana_Justice")
                    .setDescription(`[Report a Data Error!](${config.servers.discordinvite})`)
                    .setColor(config.colors.p3blue)
                    .attachFiles(new MessageAttachment(`./personadata/p3shadows/arcana_justiceQuest.png`, "shadow.png"))
                    .setImage("attachment://shadow.png")
                    .setFooter("Information gathered from the Megami Tensei Wiki", client.user.displayAvatarURL);

                await message.channel.send(justice);
                await message.channel.send(justiceQuest);
                return;
                break;
            case "arcana_hermit":
                let hermit = new MessageEmbed()
                    .setTitle("Arcana Hermit")
                    .setURL("https://megamitensei.fandom.com/wiki/Arcana_Hermit")
                    .setDescription(`[Report a Data Error!](${config.servers.discordinvite})`)
                    .setColor(config.colors.p3blue)
                    .attachFiles(new MessageAttachment(`./personadata/p3shadows/arcana_hermit.png`, "shadow.png"))
                    .setImage("attachment://shadow.png")
                    .setFooter("Information gathered from the Megami Tensei Wiki", client.user.displayAvatarURL);

                let hermitQuest = new MessageEmbed()
                    .setTitle("Arcana Hermit (Vision Quest)")
                    .setURL("https://megamitensei.fandom.com/wiki/Arcana_Hermit")
                    .setDescription(`[Report a Data Error!](${config.servers.discordinvite})`)
                    .setColor(config.colors.p3blue)
                    .attachFiles(new MessageAttachment(`./personadata/p3shadows/arcana_hermitQuest.png`, "shadow.png"))
                    .setImage("attachment://shadow.png")
                    .setFooter("Information gathered from the Megami Tensei Wiki", client.user.displayAvatarURL);

                await message.channel.send(hermit);
                await message.channel.send(hermitQuest);
                return;
                break;
            case "arcana_fortune":
                let fortune = new MessageEmbed()
                    .setTitle("Arcana Fortune")
                    .setURL("https://megamitensei.fandom.com/wiki/Arcana_Fortune")
                    .setDescription(`[Report a Data Error!](${config.servers.discordinvite})`)
                    .setColor(config.colors.p3blue)
                    .attachFiles(new MessageAttachment(`./personadata/p3shadows/arcana_fortune.png`, "shadow.png"))
                    .setImage("attachment://shadow.png")
                    .setFooter("Information gathered from the Megami Tensei Wiki", client.user.displayAvatarURL);

                let fortuneQuest = new MessageEmbed()
                    .setTitle("Arcana Fortune (Vision Quest)")
                    .setURL("https://megamitensei.fandom.com/wiki/Arcana_Fortune")
                    .setDescription(`[Report a Data Error!](${config.servers.discordinvite})`)
                    .setColor(config.colors.p3blue)
                    .attachFiles(new MessageAttachment(`./personadata/p3shadows/arcana_fortuneQuest.png`, "shadow.png"))
                    .setImage("attachment://shadow.png")
                    .setFooter("Information gathered from the Megami Tensei Wiki", client.user.displayAvatarURL);

                await message.channel.send(fortune);
                await message.channel.send(fortuneQuest);
                return;
                break;
            case "arcana_strength":
                let strength = new MessageEmbed()
                    .setTitle("Arcana Strength")
                    .setURL("https://megamitensei.fandom.com/wiki/Arcana_Strength")
                    .setDescription(`[Report a Data Error!](${config.servers.discordinvite})`)
                    .setColor(config.colors.p3blue)
                    .attachFiles(new MessageAttachment(`./personadata/p3shadows/arcana_strength.png`, "shadow.png"))
                    .setImage("attachment://shadow.png")
                    .setFooter("Information gathered from the Megami Tensei Wiki", client.user.displayAvatarURL);

                let strengthQuest = new MessageEmbed()
                    .setTitle("Arcana Strength (Vision Quest)")
                    .setURL("https://megamitensei.fandom.com/wiki/Arcana_Strength")
                    .setDescription(`[Report a Data Error!](${config.servers.discordinvite})`)
                    .setColor(config.colors.p3blue)
                    .attachFiles(new MessageAttachment(`./personadata/p3shadows/arcana_strengthQuest.png`, "shadow.png"))
                    .setImage("attachment://shadow.png")
                    .setFooter("Information gathered from the Megami Tensei Wiki", client.user.displayAvatarURL);

                await message.channel.send(strength);
                await message.channel.send(strengthQuest);
                return;
                break;
            case "arcana_hanged_man":
                let hanged = new MessageEmbed()
                    .setTitle("Arcana Hanged Man")
                    .setURL("https://megamitensei.fandom.com/wiki/Arcana_Hanged_Man")
                    .setDescription(`[Report a Data Error!](${config.servers.discordinvite})`)
                    .setColor(config.colors.p3blue)
                    .attachFiles(new MessageAttachment(`./personadata/p3shadows/arcana_hanged_man.png`, "shadow.png"))
                    .setImage("attachment://shadow.png")
                    .setFooter("Information gathered from the Megami Tensei Wiki", client.user.displayAvatarURL);

                let hangedQuest = new MessageEmbed()
                    .setTitle("Arcana Hanged Man (Vision Quest)")
                    .setURL("https://megamitensei.fandom.com/wiki/Arcana_Hanged_Man")
                    .setDescription(`[Report a Data Error!](${config.servers.discordinvite})`)
                    .setColor(config.colors.p3blue)
                    .attachFiles(new MessageAttachment(`./personadata/p3shadows/arcana_hanged_manQuest.png`, "shadow.png"))
                    .setImage("attachment://shadow.png")
                    .setFooter("Information gathered from the Megami Tensei Wiki", client.user.displayAvatarURL);

                await message.channel.send(hanged);
                await message.channel.send(hangedQuest);
                return;
                break;
            case "nyx_avatar":
                let nyxFool = new MessageEmbed()
                    .setTitle("Nyx Avatar (Fool)")
                    .setURL("https://megamitensei.fandom.com/wiki/Nyx_Avatar")
                    .setDescription(`[Report a Data Error!](${config.servers.discordinvite})`)
                    .setColor(config.colors.p3blue)
                    .setImage("https://github.com/ArkaneOnline/lavenza/blob/master/personadata/p3shadows/nyx_avatarFool.png?raw=true")
                    .setFooter("Page 1/14 | Information gathered from the Megami Tensei Wiki", client.user.displayAvatarURL);

                let nyxMagician = new MessageEmbed()
                    .setTitle("Nyx Avatar (Magician)")
                    .setURL("https://megamitensei.fandom.com/wiki/Nyx_Avatar")
                    .setDescription(`[Report a Data Error!](${config.servers.discordinvite})`)
                    .setColor(config.colors.p3blue)
                    .setImage("https://github.com/ArkaneOnline/lavenza/blob/master/personadata/p3shadows/nyx_avatarMagician.png?raw=true")
                    .setFooter("Page 2/14 | Information gathered from the Megami Tensei Wiki", client.user.displayAvatarURL);

                let nyxPriestess = new MessageEmbed()
                    .setTitle("Nyx Avatar (Priestess)")
                    .setURL("https://megamitensei.fandom.com/wiki/Nyx_Avatar")
                    .setDescription(`[Report a Data Error!](${config.servers.discordinvite})`)
                    .setColor(config.colors.p3blue)
                    .setImage("https://github.com/ArkaneOnline/lavenza/blob/master/personadata/p3shadows/nyx_avatarPriestess.png?raw=true")
                    .setFooter("Page 3/14 | Information gathered from the Megami Tensei Wiki", client.user.displayAvatarURL);

                let nyxEmpress = new MessageEmbed()
                    .setTitle("Nyx Avatar (Empress)")
                    .setURL("https://megamitensei.fandom.com/wiki/Nyx_Avatar")
                    .setDescription(`[Report a Data Error!](${config.servers.discordinvite})`)
                    .setColor(config.colors.p3blue)
                    .setImage("https://github.com/ArkaneOnline/lavenza/blob/master/personadata/p3shadows/nyx_avatarEmpress.png?raw=true")
                    .setFooter("Page 4/14 | Information gathered from the Megami Tensei Wiki", client.user.displayAvatarURL);

                let nyxEmperor = new MessageEmbed()
                    .setTitle("Nyx Avatar (Emperor)")
                    .setURL("https://megamitensei.fandom.com/wiki/Nyx_Avatar")
                    .setDescription(`[Report a Data Error!](${config.servers.discordinvite})`)
                    .setColor(config.colors.p3blue)
                    .setImage("https://github.com/ArkaneOnline/lavenza/blob/master/personadata/p3shadows/nyx_avatarEmperor.png?raw=true")
                    .setFooter("Page 5/14 | Information gathered from the Megami Tensei Wiki", client.user.displayAvatarURL);

                let nyxHierophant = new MessageEmbed()
                    .setTitle("Nyx Avatar (Hierophant)")
                    .setURL("https://megamitensei.fandom.com/wiki/Nyx_Avatar")
                    .setDescription(`[Report a Data Error!](${config.servers.discordinvite})`)
                    .setColor(config.colors.p3blue)
                    .setImage("https://github.com/ArkaneOnline/lavenza/blob/master/personadata/p3shadows/nyx_avatarHierophant.png?raw=true")
                    .setFooter("Page 6/14 | Information gathered from the Megami Tensei Wiki", client.user.displayAvatarURL);

                let nyxLovers = new MessageEmbed()
                    .setTitle("Nyx Avatar (Lovers)")
                    .setURL("https://megamitensei.fandom.com/wiki/Nyx_Avatar")
                    .setDescription(`[Report a Data Error!](${config.servers.discordinvite})`)
                    .setColor(config.colors.p3blue)
                    .setImage("https://github.com/ArkaneOnline/lavenza/blob/master/personadata/p3shadows/nyx_avatarLovers.png?raw=true")
                    .setFooter("Page 7/14 | Information gathered from the Megami Tensei Wiki", client.user.displayAvatarURL);

                let nyxChariot = new MessageEmbed()
                    .setTitle("Nyx Avatar (Chariot)")
                    .setURL("https://megamitensei.fandom.com/wiki/Nyx_Avatar")
                    .setDescription(`[Report a Data Error!](${config.servers.discordinvite})`)
                    .setColor(config.colors.p3blue)
                    .setImage("https://github.com/ArkaneOnline/lavenza/blob/master/personadata/p3shadows/nyx_avatarChariot.png?raw=true")
                    .setFooter("Page 8/14 | Information gathered from the Megami Tensei Wiki", client.user.displayAvatarURL);

                let nyxJustice = new MessageEmbed()
                    .setTitle("Nyx Avatar (Justice)")
                    .setURL("https://megamitensei.fandom.com/wiki/Nyx_Avatar")
                    .setDescription(`[Report a Data Error!](${config.servers.discordinvite})`)
                    .setColor(config.colors.p3blue)
                    .setImage("https://github.com/ArkaneOnline/lavenza/blob/master/personadata/p3shadows/nyx_avatarJustice.png?raw=true")
                    .setFooter("Page 9/14 | Information gathered from the Megami Tensei Wiki", client.user.displayAvatarURL);

                let nyxHermit = new MessageEmbed()
                    .setTitle("Nyx Avatar (Hermit)")
                    .setURL("https://megamitensei.fandom.com/wiki/Nyx_Avatar")
                    .setDescription(`[Report a Data Error!](${config.servers.discordinvite})`)
                    .setColor(config.colors.p3blue)
                    .setImage("https://github.com/ArkaneOnline/lavenza/blob/master/personadata/p3shadows/nyx_avatarHermit.png?raw=true")
                    .setFooter("Page 10/14 | Information gathered from the Megami Tensei Wiki", client.user.displayAvatarURL);

                let nyxFortune = new MessageEmbed()
                    .setTitle("Nyx Avatar (Fortune)")
                    .setURL("https://megamitensei.fandom.com/wiki/Nyx_Avatar")
                    .setDescription(`[Report a Data Error!](${config.servers.discordinvite})`)
                    .setColor(config.colors.p3blue)
                    .setImage("https://github.com/ArkaneOnline/lavenza/blob/master/personadata/p3shadows/nyx_avatarFortune.png?raw=true")
                    .setFooter("Page 11/14 | Information gathered from the Megami Tensei Wiki", client.user.displayAvatarURL);

                let nyxStrength = new MessageEmbed()
                    .setTitle("Nyx Avatar (Strength)")
                    .setURL("https://megamitensei.fandom.com/wiki/Nyx_Avatar")
                    .setDescription(`[Report a Data Error!](${config.servers.discordinvite})`)
                    .setColor(config.colors.p3blue)
                    .setImage("https://github.com/ArkaneOnline/lavenza/blob/master/personadata/p3shadows/nyx_avatarStrength.png?raw=true")
                    .setFooter("Page 12/14 | Information gathered from the Megami Tensei Wiki", client.user.displayAvatarURL);

                let nyxHanged = new MessageEmbed()
                    .setTitle("Nyx Avatar (Hanged Man)")
                    .setURL("https://megamitensei.fandom.com/wiki/Nyx_Avatar")
                    .setDescription(`[Report a Data Error!](${config.servers.discordinvite})`)
                    .setColor(config.colors.p3blue)
                    .setImage("https://github.com/ArkaneOnline/lavenza/blob/master/personadata/p3shadows/nyx_avatarHanged.png?raw=true")
                    .setFooter("Page 13/14 | Information gathered from the Megami Tensei Wiki", client.user.displayAvatarURL);

                let nyxDeath = new MessageEmbed()
                    .setTitle("Nyx Avatar (Death)")
                    .setURL("https://megamitensei.fandom.com/wiki/Nyx_Avatar")
                    .setDescription(`[Report a Data Error!](${config.servers.discordinvite})`)
                    .setColor(config.colors.p3blue)
                    .setImage("https://github.com/ArkaneOnline/lavenza/blob/master/personadata/p3shadows/nyx_avatarDeath.png?raw=true")
                    .setFooter("Page 14/14 | Information gathered from the Megami Tensei Wiki", client.user.displayAvatarURL);

                message.channel.send(nyxFool).then(msg => {
                    msg.react("◀️").then(r => { msg.react("▶️") })
                    const backwardsFilter = (reaction, user) => reaction.emoji.name === "◀️" && user.id === message.author.id;
                    const forwardsFilter = (reaction, user) => reaction.emoji.name === "▶️" && user.id === message.author.id;
                    const backwards = msg.createReactionCollector(backwardsFilter, { time: 120000 });
                    const forwards = msg.createReactionCollector(forwardsFilter, { time: 120000 });
                    let pageNum = 1;

                    forwards.on("collect", r => {
                        if (pageNum === 14) {
                            pageNum = 15;
                            msg.edit(nyxFool);
                        }
                        if (pageNum === 13) {
                            pageNum = 14;
                            msg.edit(nyxDeath);
                        }
                        if (pageNum === 12) {
                            pageNum = 13;
                            msg.edit(nyxHanged);
                        }
                        if (pageNum === 11) {
                            pageNum = 12;
                            msg.edit(nyxStrength);
                        }
                        if (pageNum === 10) {
                            pageNum = 11;
                            msg.edit(nyxFortune);
                        }
                        if (pageNum === 9) {
                            pageNum = 10;
                            msg.edit(nyxHermit);
                        }
                        if (pageNum === 8) {
                            pageNum = 9;
                            msg.edit(nyxJustice);
                        }
                        if (pageNum === 7) {
                            pageNum = 8;
                            msg.edit(nyxChariot);
                        }
                        if (pageNum === 6) {
                            pageNum = 7;
                            msg.edit(nyxLovers);
                        }
                        if (pageNum === 5) {
                            pageNum = 6;
                            msg.edit(nyxHierophant);
                        }
                        if (pageNum === 4) {
                            pageNum = 5;
                            msg.edit(nyxEmperor);
                        }
                        if (pageNum === 3) {
                            pageNum = 4;
                            msg.edit(nyxEmpress);
                        }
                        if (pageNum === 2) {
                            pageNum = 3;
                            msg.edit(nyxPriestess);
                        }
                        if (pageNum === 1) {
                            pageNum = 2;
                            msg.edit(nyxMagician);
                        }
                        if (pageNum === 15) {
                            pageNum = 1;
                            msg.edit(nyxFool);
                        }
                    })

                    backwards.on("collect", r => {
                        if (pageNum === 1) {
                            pageNum = 15;
                            msg.edit(nyxDeath);
                        }
                        if (pageNum === 2) {
                            pageNum = 1;
                            msg.edit(nyxFool);
                        }
                        if (pageNum === 3) {
                            pageNum = 2;
                            msg.edit(nyxMagician);
                        }
                        if (pageNum === 4) {
                            pageNum = 3;
                            msg.edit(nyxPriestess);
                        }
                        if (pageNum === 5) {
                            pageNum = 4;
                            msg.edit(nyxEmpress);
                        }
                        if (pageNum === 6) {
                            pageNum = 5;
                            msg.edit(nyxEmperor);
                        }
                        if (pageNum === 7) {
                            pageNum = 6;
                            msg.edit(nyxHierophant);
                        }
                        if (pageNum === 8) {
                            pageNum = 7;
                            msg.edit(nyxLovers);
                        }
                        if (pageNum === 9) {
                            pageNum = 8;
                            msg.edit(nyxChariot);
                        }
                        if (pageNum === 10) {
                            pageNum = 9;
                            msg.edit(nyxJustice);
                        }
                        if (pageNum === 11) {
                            pageNum = 10;
                            msg.edit(nyxHermit);
                        }
                        if (pageNum === 12) {
                            pageNum = 11;
                            msg.edit(nyxFortune);
                        }
                        if (pageNum === 13) {
                            pageNum = 12;
                            msg.edit(nyxStrength);
                        }
                        if (pageNum === 14) {
                            pageNum = 13;
                            msg.edit(nyxHanged);
                        }
                        if (pageNum === 15) {
                            pageNum = 14;
                            msg.edit(nyxDeath);
                        }
                    })
                })
                return;
                break;
            case "erebus":
                let erebus = new MessageEmbed()
                    .setTitle("Erebus")
                    .setURL("https://megamitensei.fandom.com/wiki/Erebus")
                    .setDescription(`[Report a Data Error!](${config.servers.discordinvite})`)
                    .setColor(config.colors.p3blue)
                    .attachFiles(new MessageAttachment(`./personadata/p3shadows/erebus.png`, "shadow.png"))
                    .setImage("attachment://shadow.png")
                    .setFooter("Information gathered from the Megami Tensei Wiki", client.user.displayAvatarURL);

                let erebusCharging = new MessageEmbed()
                    .setTitle("Erebus (Charging)")
                    .setURL("https://megamitensei.fandom.com/wiki/Erebus")
                    .setDescription(`[Report a Data Error!](${config.servers.discordinvite})`)
                    .setColor(config.colors.p3blue)
                    .attachFiles(new MessageAttachment(`./personadata/p3shadows/erebusCharging.png`, "shadow.png"))
                    .setImage("attachment://shadow.png")
                    .setFooter("Information gathered from the Megami Tensei Wiki", client.user.displayAvatarURL);

                await message.channel.send(erebus);
                await message.channel.send(erebusCharging);
                return;
                break;



            //optional bosses
            case "the_reaper":
                var name = "The Reaper";
                var fileName = shadowName;
                var url = `https://megamitensei.fandom.com/wiki/The_Reaper`;
                var img = new MessageAttachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png")
                break;
            case "elizabeth":
                let elizSurt = new MessageEmbed()
                    .setTitle("Elizabeth (Surt)")
                    .setURL("https://megamitensei.fandom.com/wiki/Elizabeth")
                    .setDescription(`[Report a Data Error!](${config.servers.discordinvite})`)
                    .setColor(config.colors.p3blue)
                    .setImage("https://github.com/ArkaneOnline/lavenza/blob/master/personadata/p3shadows/elizabethSurt.png?raw=true")
                    .setFooter("Page 1/9 | Information gathered from the Megami Tensei Wiki", client.user.displayAvatarURL);

                let elizJack = new MessageEmbed()
                    .setTitle("Elizabeth (Jack Frost)")
                    .setURL("https://megamitensei.fandom.com/wiki/Elizabeth")
                    .setDescription(`[Report a Data Error!](${config.servers.discordinvite})`)
                    .setColor(config.colors.p3blue)
                    .setImage("https://github.com/ArkaneOnline/lavenza/blob/master/personadata/p3shadows/elizabethJack.png?raw=true")
                    .setFooter("Page 2/9 | Information gathered from the Megami Tensei Wiki", client.user.displayAvatarURL);

                let elizThor = new MessageEmbed()
                    .setTitle("Elizabeth (Thor)")
                    .setURL("https://megamitensei.fandom.com/wiki/Elizabeth")
                    .setDescription(`[Report a Data Error!](${config.servers.discordinvite})`)
                    .setColor(config.colors.p3blue)
                    .setImage("https://github.com/ArkaneOnline/lavenza/blob/master/personadata/p3shadows/elizabethThor.png?raw=true")
                    .setFooter("Page 3/9 | Information gathered from the Megami Tensei Wiki", client.user.displayAvatarURL);

                let elizCu = new MessageEmbed()
                    .setTitle("Elizabeth (Cu Chulainn)")
                    .setURL("https://megamitensei.fandom.com/wiki/Elizabeth")
                    .setDescription(`[Report a Data Error!](${config.servers.discordinvite})`)
                    .setColor(config.colors.p3blue)
                    .setImage("https://github.com/ArkaneOnline/lavenza/blob/master/personadata/p3shadows/elizabethCu.png?raw=true")
                    .setFooter("Page 4/9 | Information gathered from the Megami Tensei Wiki", client.user.displayAvatarURL);

                let elizMetatron = new MessageEmbed()
                    .setTitle("Elizabeth (Metatron)")
                    .setURL("https://megamitensei.fandom.com/wiki/Elizabeth")
                    .setDescription(`[Report a Data Error!](${config.servers.discordinvite})`)
                    .setColor(config.colors.p3blue)
                    .setImage("https://github.com/ArkaneOnline/lavenza/blob/master/personadata/p3shadows/elizabethMetatron.png?raw=true")
                    .setFooter("Page 5/9 | Information gathered from the Megami Tensei Wiki", client.user.displayAvatarURL);

                let elizAlice = new MessageEmbed()
                    .setTitle("Elizabeth (Alice)")
                    .setURL("https://megamitensei.fandom.com/wiki/Elizabeth")
                    .setDescription(`[Report a Data Error!](${config.servers.discordinvite})`)
                    .setColor(config.colors.p3blue)
                    .setImage("https://github.com/ArkaneOnline/lavenza/blob/master/personadata/p3shadows/elizabethAlice.png?raw=true")
                    .setFooter("Page 6/9 | Information gathered from the Megami Tensei Wiki", client.user.displayAvatarURL);

                let elizNebiros = new MessageEmbed()
                    .setTitle("Elizabeth (Nebiros)")
                    .setURL("https://megamitensei.fandom.com/wiki/Elizabeth")
                    .setDescription(`[Report a Data Error!](${config.servers.discordinvite})`)
                    .setColor(config.colors.p3blue)
                    .setImage("https://github.com/ArkaneOnline/lavenza/blob/master/personadata/p3shadows/elizabethNebiros.png?raw=true")
                    .setFooter("Page 7/9 | Information gathered from the Megami Tensei Wiki", client.user.displayAvatarURL);

                let elizMasakado = new MessageEmbed()
                    .setTitle("Elizabeth (Masakado)")
                    .setURL("https://megamitensei.fandom.com/wiki/Elizabeth")
                    .setDescription(`[Report a Data Error!](${config.servers.discordinvite})`)
                    .setColor(config.colors.p3blue)
                    .setImage("https://github.com/ArkaneOnline/lavenza/blob/master/personadata/p3shadows/elizabethMasakado.png?raw=true")
                    .setFooter("Page 8/9 | Information gathered from the Megami Tensei Wiki", client.user.displayAvatarURL);

                let elizPixie = new MessageEmbed()
                    .setTitle("Elizabeth (Pixie)")
                    .setURL("https://megamitensei.fandom.com/wiki/Elizabeth")
                    .setDescription(`[Report a Data Error!](${config.servers.discordinvite})`)
                    .setColor(config.colors.p3blue)
                    .setImage("https://github.com/ArkaneOnline/lavenza/blob/master/personadata/p3shadows/elizabethPixie.png?raw=true")
                    .setFooter("Page 9/9 | Information gathered from the Megami Tensei Wiki", client.user.displayAvatarURL);

                message.channel.send(elizSurt).then(msg => {
                    msg.react("◀️").then(r => { msg.react("▶️") })
                    const backwardsFilter = (reaction, user) => reaction.emoji.name === "◀️" && user.id === message.author.id;
                    const forwardsFilter = (reaction, user) => reaction.emoji.name === "▶️" && user.id === message.author.id;
                    const backwards = msg.createReactionCollector(backwardsFilter, { time: 120000 });
                    const forwards = msg.createReactionCollector(forwardsFilter, { time: 120000 });
                    let pageNum = 1;

                    forwards.on("collect", r => {
                        if (pageNum === 9) {
                            pageNum = 10;
                            msg.edit(elizSurt);
                        }
                        if (pageNum === 8) {
                            pageNum = 9;
                            msg.edit(elizPixie);
                        }
                        if (pageNum === 7) {
                            pageNum = 8;
                            msg.edit(elizMasakado);
                        }
                        if (pageNum === 6) {
                            pageNum = 7;
                            msg.edit(elizNebiros);
                        }
                        if (pageNum === 5) {
                            pageNum = 6;
                            msg.edit(elizAlice);
                        }
                        if (pageNum === 4) {
                            pageNum = 5;
                            msg.edit(elizMetatron);
                        }
                        if (pageNum === 3) {
                            pageNum = 4;
                            msg.edit(elizCu);
                        }
                        if (pageNum === 2) {
                            pageNum = 3;
                            msg.edit(elizThor);
                        }
                        if (pageNum === 1) {
                            pageNum = 2;
                            msg.edit(elizJack);
                        }
                        if (pageNum === 10) {
                            pageNum = 1;
                            msg.edit(elizSurt);
                        }
                    })

                    backwards.on("collect", r => {
                        if (pageNum === 1) {
                            pageNum = 10;
                            msg.edit(elizPixie);
                        }
                        if (pageNum === 2) {
                            pageNum = 1;
                            msg.edit(elizSurt);
                        }
                        if (pageNum === 3) {
                            pageNum = 2;
                            msg.edit(elizJack);
                        }
                        if (pageNum === 4) {
                            pageNum = 3;
                            msg.edit(elizThor);
                        }
                        if (pageNum === 5) {
                            pageNum = 4;
                            msg.edit(elizCu);
                        }
                        if (pageNum === 6) {
                            pageNum = 5;
                            msg.edit(elizMetatron);
                        }
                        if (pageNum === 7) {
                            pageNum = 6;
                            msg.edit(elizAlice);
                        }
                        if (pageNum == 8) {
                            pageNum = 7;
                            msg.edit(elizNebiros);
                        }
                        if (pageNum === 9) {
                            pageNum = 8;
                            msg.edit(elizMasakado);
                        }
                        if (pageNum === 10) {
                            pageNum = 9;
                            msg.edit(elizPixie);
                        }
                    })
                })
                return;
                break;


        }
        //finishing checks and sending of the embed
        if (!name) {
            if (shadowName.endsWith("/a")) {
                return message.reply("This shadow doesn't appear to have an Answer variant, or you have entered an invalid Shadow name!")
            } else {
                return message.reply("You have entered an invalid shadow name! `Note: If the shadow you are looking for only appears in 'The Answer', you must add the '/a' switch to the end of the name!`")
            }
        }

        let embed = new MessageEmbed()
            .setTitle(name)
            .setURL(url)
            .setDescription(`[Report a Data Error!](${config.servers.discordinvite})`)
            .setColor(config.colors.p3blue)
            .attachFiles(img)
            .setImage("attachment://shadow.png")
            .setFooter("Information gathered from the Megami Tensei Wiki", client.user.displayAvatarURL);

        message.reply("`Note: Shadow data is incomplete from my official source. Some data is subject to change. If you want to help out, use the link at the top of the embed!`")
        return message.channel.send(embed);
    }
}