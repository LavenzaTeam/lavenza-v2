const { RichEmbed, Attachment } = require("discord.js");
const config = require("../../config.json");

module.exports = {
    config: {
        name: "p3shadows",
        aliases: ["p3s", "persona3shadows", "p3enemies", "p3e"],
        description: "Sends data about a specified shadow from Persona 3",
        usage: "<shadow> (/a)",
        category: "persona"
    },
    run: async (client, message, args) => {
        let shadowName = args.join("_").toLowerCase();
        if (!shadowName) return message.reply(`Please specify a shadow to search for! \nTo view all the shadows in the game, type \`${config.prefix}p3shadows list\``)


        //maya shadows
        switch (shadowName) {


            case "maya":
                var name = "Maya";
                var fileName = shadowName;
                var url = `https://megamitensei.fandom.com/wiki/List_of_Persona_3_Shadows`;
                var img = new Attachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png");
                break;

            case "cowardly_maya":
                var name = "Cowardly Maya";
                var fileName = shadowName;
                var url = `https://megamitensei.fandom.com/wiki/Cowardly_Maya`;
                var img = new Attachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png");
                break;
            case "cowardly_maya_/a":
                var name = "Cowardly Maya (The Answer)";
                var fileName = "cowardly_mayaAnswer";
                var url = `https://megamitensei.fandom.com/wiki/Cowardly_Maya`;
                var img = new Attachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png");
                break;
            case "merciless_maya":
                var name = "Merciless Maya";
                var fileName = shadowName;
                var url = `https://megamitensei.fandom.com/wiki/Merciless_Maya`;
                var img = new Attachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png");
                break;
            case "merciless_maya_/a":
                var name = "Cowardly Maya";
                var fileName = "merciless_mayaAnswer";
                var url = `https://megamitensei.fandom.com/wiki/Merciless_Maya`;
                var img = new Attachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png");
                break;
            case "frivolous_maya":
                var name = "Frivolous Maya";
                var fileName = shadowName;
                var url = `https://megamitensei.fandom.com/wiki/Frivolous_Maya`;
                var img = new Attachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png");
                break;
            case "haughty_maya":
                var name = "Haughty Maya";
                var fileName = shadowName;
                var url = `https://megamitensei.fandom.com/wiki/Haughty_Maya`;
                var img = new Attachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png");
                break;
            case "indolent_maya":
                var name = "Indolent Maya";
                var fileName = shadowName;
                var url = `https://megamitensei.fandom.com/wiki/Indolent_Maya`;
                var img = new Attachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png");
                break;
            case "insidious_maya":
                var name = "Insidious Maya";
                var fileName = shadowName;
                var url = `https://megamitensei.fandom.com/wiki/Insidious_Maya`;
                var img = new Attachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png");
                break;
            case "insidious_maya_/a":
                var name = "Insidious Maya (The Answer)";
                var fileName = "insidious_mayaAnswer";
                var url = `https://megamitensei.fandom.com/wiki/Insidious_Maya`;
                var img = new Attachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png");
                break;
            case "ill_fated_maya":
                var name = "Ill Fated Maya";
                var fileName = shadowName;
                var url = `https://megamitensei.fandom.com/wiki/Ill-fated_Maya`;
                var img = new Attachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png");
                break;
            case "ill_fated_maya_/a":
                var name = "Ill Fated Maya (The Answer)";
                var fileName = "ill_fated_mayaAnswer";
                var url = `https://megamitensei.fandom.com/wiki/Ill-fated_Maya`;
                var img = new Attachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png");
                break;
            case "bigoted_maya":
                var name = "Bigoted Maya";
                var fileName = shadowName;
                var url = `https://megamitensei.fandom.com/wiki/Bigoted_Maya`;
                var img = new Attachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png");
                break;
            case "bigoted_maya_/a":
                var name = "Bigoted Maya (The Answer)";
                var fileName = "bigoted_mayaAnswer";
                var url = `https://megamitensei.fandom.com/wiki/Bigoted_Maya`;
                var img = new Attachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png");
                break;
            case "desirous_maya":
                var name = "Desirous Maya";
                var fileName = shadowName;
                var url = `https://megamitensei.fandom.com/wiki/Desirous_Maya`;
                var img = new Attachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png");
                break;
            case "desirous_maya_/a":
                var name = "Desirous Maya (The Answer)";
                var fileName = "desirous_mayaAnswer";
                var url = `https://megamitensei.fandom.com/wiki/Desirous_Maya`;
                var img = new Attachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png");
                break;
            case "imprudent_maya":
                var name = "Imprudent Maya";
                var fileName = shadowName;
                var url = `https://megamitensei.fandom.com/wiki/Imprudent_Maya`;
                var img = new Attachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png");
                break;
            case "imprudent_maya_/a":
                var name = "Imprudent Maya";
                var fileName = "imprudent_mayaAnswer";
                var url = `https://megamitensei.fandom.com/wiki/Imprudent_Maya`;
                var img = new Attachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png");
                break;
            case "visceral_maya":
                var name = "Visceral Maya";
                var fileName = shadowName;
                var url = `https://megamitensei.fandom.com/wiki/Visceral_Maya`;
                var img = new Attachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png");
                break;
            case "visceral_maya_/a":
                var name = "Visceral Maya";
                var fileName = "visceral_mayaAnswer";
                var url = `https://megamitensei.fandom.com/wiki/Visceral_Maya`;
                var img = new Attachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png");
                break;
            case "devious_maya":
                let devious = new RichEmbed()
                    .setTitle("Devious Maya")
                    .setURL("https://megamitensei.fandom.com/wiki/Devious_Maya#The%20Journey")
                    .setDescription(`[Report a Data Error!](${config.servers.discordinvite})`)
                    .setColor(config.colors.darkblue)
                    .attachFile(new Attachment(`./personadata/p3shadows/devious_maya.png`, "shadow.png"))
                    .setImage("attachment://shadow.png")
                    .setFooter("Information gathered from the Megami Tensei Wiki", client.user.displayAvatarURL);

                let deviousHanged = new RichEmbed()
                    .setTitle("Devious Maya (Hanged Man)")
                    .setURL("https://megamitensei.fandom.com/wiki/Devious_Maya#The%20Journey")
                    .setDescription(`[Report a Data Error!](${config.servers.discordinvite})`)
                    .setColor(config.colors.darkblue)
                    .attachFile(new Attachment(`./personadata/p3shadows/devious_mayaHanged.png`, "shadow.png"))
                    .setImage("attachment://shadow.png")
                    .setFooter("Information gathered from the Megami Tensei Wiki", client.user.displayAvatarURL);

                let deviousVision = new RichEmbed()
                    .setTitle("Devious Maya (Vision Quest)")
                    .setURL("https://megamitensei.fandom.com/wiki/Devious_Maya#Vision%20Quest")
                    .setDescription(`[Report a Data Error!](${config.servers.discordinvite})`)
                    .setColor(config.colors.darkblue)
                    .attachFile(new Attachment(`./personadata/p3shadows/devious_mayaVision.png`, "shadow.png"))
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
                var img = new Attachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png");
                break;
            case "conceited_maya_/a":
                var name = "Conceited Maya";
                var fileName = "conceited_mayaAnswer";
                var url = `https://megamitensei.fandom.com/wiki/Conceited_Maya`;
                var img = new Attachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png");
                break;


            //hand shadows
            case "hand":
                var name = "Hand";
                var fileName = shadowName;
                var url = `https://megamitensei.fandom.com/wiki/List_of_Persona_3_Shadows`;
                var img = new Attachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png");
                break;
            case "magic_hand":
                var name = "Magic Hand";
                var fileName = shadowName;
                var url = `https://megamitensei.fandom.com/wiki/Magic_Hand`;
                var img = new Attachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png");
                break;
            case "magic_hand_/a":
                var name = "Magic Hand (The Answer)";
                var fileName = "magic_handAnswer";
                var url = `https://megamitensei.fandom.com/wiki/Magic_Hand`;
                var img = new Attachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png");
                break;
            case "dancing_hand":
                let hand = new RichEmbed()
                    .setTitle("Dancing Hand")
                    .setURL("https://megamitensei.fandom.com/wiki/Dancing_Hand#The%20Journey")
                    .setDescription(`[Report a Data Error!](${config.servers.discordinvite})`)
                    .setColor(config.colors.darkblue)
                    .attachFile(new Attachment(`./personadata/p3shadows/dancing_hand.png`, "shadow.png"))
                    .setImage("attachment://shadow.png")
                    .setFooter("Information gathered from the Megami Tensei Wiki", client.user.displayAvatarURL);

                let handBoss = new RichEmbed()
                    .setTitle("Dancing Hand (Sub Boss)")
                    .setURL("https://megamitensei.fandom.com/wiki/Dancing_Hand#Sub-Boss")
                    .setDescription(`[Report a Data Error!](${config.servers.discordinvite})`)
                    .setColor(config.colors.darkblue)
                    .attachFile(new Attachment(`./personadata/p3shadows/dancing_handBoss.png`, "shadow.png"))
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
                var img = new Attachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png");
                break;
            case "killing_hand":
                var name = "Killing Hand";
                var fileName = shadowName;
                var url = `https://megamitensei.fandom.com/wiki/Killing_Hand`;
                var img = new Attachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png");
                break;
            case "killing_hand_/a":
                var name = "Killing Hand (The Answer)";
                var fileName = "killing_handAnswer";
                var url = `https://megamitensei.fandom.com/wiki/Killing_Hand`;
                var img = new Attachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png");
                break;
            case "almighty_hand":
                var name = "Almighty Hand";
                var fileName = shadowName;
                var url = `https://megamitensei.fandom.com/wiki/Almighty_Hand`;
                var img = new Attachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png");
                break;


            //table shadows
            case "table":
                var name = "Table";
                var fileName = shadowName;
                var url = `https://megamitensei.fandom.com/wiki/List_of_Persona_3_Shadows`;
                var img = new Attachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png");
                break;
            case "laughing_table":
                var name = "Laughing Table";
                var fileName = shadowName;
                var url = `https://megamitensei.fandom.com/wiki/Laughing_Table`;
                var img = new Attachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png");
                break;
            case "laughing_table_/a":
                var name = "Laughing Table (The Answer)";
                var fileName = "laughing_tableAnswer";
                var url = `https://megamitensei.fandom.com/wiki/Laughing_Table`;
                var img = new Attachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png");
                break;
            case "crying_table":
                let cry = new RichEmbed()
                    .setTitle("Crying Table")
                    .setURL("https://megamitensei.fandom.com/wiki/Crying_Table")
                    .setDescription(`[Report a Data Error!](${config.servers.discordinvite})`)
                    .setColor(config.colors.darkblue)
                    .attachFile(new Attachment(`./personadata/p3shadows/crying_table.png`, "shadow.png"))
                    .setImage("attachment://shadow.png")
                    .setFooter("Information gathered from the Megami Tensei Wiki", client.user.displayAvatarURL);

                let cryBoss = new RichEmbed()
                    .setTitle("Crying Table (Sub Boss)")
                    .setURL("https://megamitensei.fandom.com/wiki/Crying_Table")
                    .setDescription(`[Report a Data Error!](${config.servers.discordinvite})`)
                    .setColor(config.colors.darkblue)
                    .attachFile(new Attachment(`./personadata/p3shadows/crying_tableBoss.png`, "shadow.png"))
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
                var img = new Attachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png");
                break;
            case "sleeping_table":
                var name = "Sleeping Table";
                var fileName = shadowName;
                var url = `https://megamitensei.fandom.com/wiki/Sleeping_Table`;
                var img = new Attachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png");
                break;
            case "sleeping_table_/a":
                var name = "Sleeping Table (The Answer)";
                var fileName = "sleeping_tableAnswer";
                var url = `https://megamitensei.fandom.com/wiki/Sleeping_Table`;
                var img = new Attachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png");
                break;
            case "angry_table":
                var name = "Angry Table";
                var fileName = shadowName;
                var url = `https://megamitensei.fandom.com/wiki/Angry_Table`;
                var img = new Attachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png");
                break;


            //magus shadows
            case "magical_magus":
                let magus = new RichEmbed()
                    .setTitle("Magical Magus")
                    .setURL("https://megamitensei.fandom.com/wiki/Magical_Magus")
                    .setDescription(`[Report a Data Error!](${config.servers.discordinvite})`)
                    .setColor(config.colors.darkblue)
                    .attachFile(new Attachment(`./personadata/p3shadows/magical_magus.png`, "shadow.png"))
                    .setImage("attachment://shadow.png")
                    .setFooter("Information gathered from the Megami Tensei Wiki", client.user.displayAvatarURL);

                let magusBoss = new RichEmbed()
                    .setTitle("Magical Magus (Sub Boss)")
                    .setURL("https://megamitensei.fandom.com/wiki/Magical_Magus")
                    .setDescription(`[Report a Data Error!](${config.servers.discordinvite})`)
                    .setColor(config.colors.darkblue)
                    .attachFile(new Attachment(`./personadata/p3shadows/magical_magusBoss.png`, "shadow.png"))
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
                var img = new Attachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png");
                break;
            case "wondrous_magus_/a":
                var name = "Wondrous Magus (The Answer)";
                var fileName = "wondrous_magusAnswer";
                var url = `https://megamitensei.fandom.com/wiki/Wondrous_Magus`;
                var img = new Attachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png");
                break;
            case "prime_magus":
                var name = "Prime Magus";
                var fileName = shadowName;
                var url = `https://megamitensei.fandom.com/wiki/Prime_Magus`;
                var img = new Attachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png");
                break;
            case "prime_magus_/a":
                var name = "Prime Magus (The Answer)";
                var fileName = "prime_magusAnswer";
                var url = `https://megamitensei.fandom.com/wiki/Prime_Magus`;
                var img = new Attachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png");
                break;
            case "grand_magus":
                var name = "Grand Magus";
                var fileName = shadowName;
                var url = `https://megamitensei.fandom.com/wiki/Grand_Magus`;
                var img = new Attachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png");
                break;


            //tiara shadows
            case "tiara":
                var name = "Tiara";
                var fileName = shadowName;
                var url = `https://megamitensei.fandom.com/wiki/List_of_Persona_3_Shadows`;
                var img = new Attachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png")
                break;
            case "muttering_tiara":
                let mutter = new RichEmbed()
                    .setTitle("Muttering Tiara")
                    .setURL("https://megamitensei.fandom.com/wiki/Muttering_Tiara")
                    .setDescription(`[Report a Data Error!](${config.servers.discordinvite})`)
                    .setColor(config.colors.darkblue)
                    .attachFile(new Attachment(`./personadata/p3shadows/muttering_tiara.png`, "shadow.png"))
                    .setImage("attachment://shadow.png")
                    .setFooter("Information gathered from the Megami Tensei Wiki", client.user.displayAvatarURL);

                let mutterBoss1 = new RichEmbed()
                    .setTitle("Muttering Tiara (Sub Boss #1)")
                    .setURL("https://megamitensei.fandom.com/wiki/Muttering_Tiara")
                    .setDescription(`[Report a Data Error!](${config.servers.discordinvite})`)
                    .setColor(config.colors.darkblue)
                    .attachFile(new Attachment(`./personadata/p3shadows/muttering_tiaraBoss1.png`, "shadow.png"))
                    .setImage("attachment://shadow.png")
                    .setFooter("Information gathered from the Megami Tensei Wiki", client.user.displayAvatarURL);

                let mutterBoss2 = new RichEmbed()
                    .setTitle("Muttering Tiara (Sub Boss #2)")
                    .setURL("https://megamitensei.fandom.com/wiki/Muttering_Tiara")
                    .setDescription(`[Report a Data Error!](${config.servers.discordinvite})`)
                    .setColor(config.colors.darkblue)
                    .attachFile(new Attachment(`./personadata/p3shadows/muttering_handBoss2.png`, "shadow.png"))
                    .setImage("attachment://shadow.png")
                    .setFooter("Information gathered from the Megami Tensei Wiki", client.user.displayAvatarURL);

                let mutterVision1 = new RichEmbed()
                    .setTitle("Muttering Tiara (Vision Quest #1)")
                    .setURL("https://megamitensei.fandom.com/wiki/Muttering_Tiara")
                    .setDescription(`[Report a Data Error!](${config.servers.discordinvite})`)
                    .setColor(config.colors.darkblue)
                    .attachFile(new Attachment(`./personadata/p3shadows/muttering_tiaraVision1.png`, "shadow.png"))
                    .setImage("attachment://shadow.png")
                    .setFooter("Information gathered from the Megami Tensei Wiki", client.user.displayAvatarURL);

                let mutterVision2 = new RichEmbed()
                    .setTitle("Muttering Tiara (Vision Quest #2)")
                    .setURL("https://megamitensei.fandom.com/wiki/Muttering_Tiara")
                    .setDescription(`[Report a Data Error!](${config.servers.discordinvite})`)
                    .setColor(config.colors.darkblue)
                    .attachFile(new Attachment(`./personadata/p3shadows/muttering_tiaraVision2.png`, "shadow.png"))
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
                var img = new Attachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png")
                break;
            case "grieving_tiara":
                var name = "Grieving Tiara";
                var fileName = shadowName;
                var url = `https://megamitensei.fandom.com/wiki/Grieving_Tiara`;
                var img = new Attachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png")
                break;
            case "grieving_tiara_/a":
                var name = "Grieving Tiara (The Answer)";
                var fileName = "grieving_tiaraAnswer";
                var url = `https://megamitensei.fandom.com/wiki/Grieving_Tiara`;
                var img = new Attachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png")
                break;
            case "writhing_tiara":
                var name = "Writhing Tiara";
                var fileName = shadowName;
                var url = `https://megamitensei.fandom.com/wiki/Writhing_Tiara`;
                var img = new Attachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png")
                break;
            case "shouting_tiara":
                var name = "Shouting Tiara";
                var fileName = shadowName;
                var url = `https://megamitensei.fandom.com/wiki/Shouting_Tiara`;
                var img = new Attachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png")
                break;
            case "shouting_tiara_/a":
                var name = "Shouting Tiara (The Answer)";
                var fileName = "shouting_tiaraAnswer";
                var url = `https://megamitensei.fandom.com/wiki/Shouting_Tiara`;
                var img = new Attachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png")
                break;


            //book shadows
            case "book":
                var name = "Book";
                var fileName = shadowName;
                var url = `https://megamitensei.fandom.com/wiki/List_of_Persona_3_Shadows`;
                var img = new Attachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png")
                break;
            case "spurious_book":
                var name = "Spurious Book";
                var fileName = shadowName;
                var url = `https://megamitensei.fandom.com/wiki/Spurious_Book`;
                var img = new Attachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png")
                break;
            case "spurious_book_/a":
                var name = "Spurious Book (The Answer)";
                var fileName = "spurious_bookAnswer";
                var url = `https://megamitensei.fandom.com/wiki/Spurious_Book`;
                var img = new Attachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png")
                break;
            case "maniacal_book":
                var name = "Maniacal Book";
                var fileName = shadowName;
                var url = `https://megamitensei.fandom.com/wiki/Maniacal_Book`;
                var img = new Attachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png")
                break;
            case "maniacal_book_/a":
                var name = "Maniacal Book (The Answer)";
                var fileName = "maniacal_bookAnswer";
                var url = `https://megamitensei.fandom.com/wiki/Maniacal_Book`;
                var img = new Attachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png")
                break;
            case "silent_book":
                var name = "Silent Book";
                var fileName = shadowName;
                var url = `https://megamitensei.fandom.com/wiki/Silent_Book`;
                var img = new Attachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png")
                break;
            case "wrathful_book":
                var name = "Wrathful Book";
                var fileName = shadowName;
                var url = `https://megamitensei.fandom.com/wiki/Wrathful_Book`;
                var img = new Attachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png")
                break;
            case "wrathful_book_/a":
                var name = "Wrathful Book";
                var fileName = "wrathful_bookAnswer";
                var url = `https://megamitensei.fandom.com/wiki/Wrathful_Book`;
                var img = new Attachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png")
                break;


            //idol shadows
            case "idol":
                var name = "Idol";
                var fileName = shadowName;
                var url = `https://megamitensei.fandom.com/wiki/List_of_Persona_3_Shadows`
                var img = new Attachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png")
                break;
            case "tranquil_idol":
                var name = "Tranquil Idol";
                var fileName = shadowName;
                var url = `https://megamitensei.fandom.com/wiki/Tranquil_Idol`;
                var img = new Attachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png")
                break;
            case "tranquil_idol_/a":
                var name = "Tranquil Idol (The Answer)";
                var fileName = "tranquil_idolAnswer";
                var url = `https://megamitensei.fandom.com/wiki/Tranquil_Idol`;
                var img = new Attachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png")
                break;
            case "liberating_idol":
                var name = "Liberating Idol";
                var fileName = shadowName;
                var url = `https://megamitensei.fandom.com/wiki/Liberating_Idol`;
                var img = new Attachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png")
                break;
            case "liberating_idol_/a":
                var name = "Liberating Idol (The Answer)";
                var fileName = "liberating_idolAnswer";
                var url = `https://megamitensei.fandom.com/wiki/Liberating_Idol`;
                var img = new Attachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png")
                break;
            case "ruinous_idol":
                var name = "Ruinous Idol";
                var fileName = shadowName;
                var url = `https://megamitensei.fandom.com/wiki/Ruinous_Idol`;
                var img = new Attachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png")
                break;
            case "ruinous_idol_/a":
                var name = "Ruinous Idol (The Answer)";
                var fileName = "ruinous_idolAnswer";
                var url = `https://megamitensei.fandom.com/wiki/Ruinous_Idol`;
                var img = new Attachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png")
                break;
            case "vehement_idol":
                var name = "Vehement Idol";
                var fileName = shadowName;
                var url = `https://megamitensei.fandom.com/wiki/Vehement_Idol`;
                var img = new Attachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png")
                break;
            case "primitive_idol_/a":
                var name = "Primitive Idol (The Answer)";
                var fileName = "primitive_idolAnswer";
                var url = `https://megamitensei.fandom.com/wiki/Primitive_Idol`;
                var img = new Attachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png")
                break;


            //eagle shadows
            case "eagle":
                var name = "Eagle";
                var fileName = "eagle";
                var url = `https://megamitensei.fandom.com/wiki/List_of_Persona_3_Shadows`;
                var img = new Attachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png")
                break;
            case "venus_eagle":
                let venus = new RichEmbed()
                    .setTitle("Venus Eagle")
                    .setURL("https://megamitensei.fandom.com/wiki/Venus_Eagle")
                    .setDescription(`[Report a Data Error!](${config.servers.discordinvite})`)
                    .setColor(config.colors.darkblue)
                    .attachFile(new Attachment(`./personadata/p3shadows/venus_eagle.png`, "shadow.png"))
                    .setImage("attachment://shadow.png")
                    .setFooter("Information gathered from the Megami Tensei Wiki", client.user.displayAvatarURL);

                let venusBoss = new RichEmbed()
                    .setTitle("Venus Eagle (Sub Boss)")
                    .setURL("https://megamitensei.fandom.com/wiki/Venus_Eagle")
                    .setDescription(`[Report a Data Error!](${config.servers.discordinvite})`)
                    .setColor(config.colors.darkblue)
                    .attachFile(new Attachment(`./personadata/p3shadows/venus_eagleBoss.png`, "shadow.png"))
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
                var img = new Attachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png")
                break;
            case "dark_eagle":
                var name = "Dark Eagle";
                var fileName = shadowName;
                var url = `https://megamitensei.fandom.com/wiki/Dark_Eagle`;
                var img = new Attachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png")
                break;
            case "dark_eagle_/a":
                var name = "Dark Eagle (The Answer)";
                var fileName = "dark_eagleAnswer";
                var url = `https://megamitensei.fandom.com/wiki/Dark_Eagle`;
                var img = new Attachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png")
                break;
            case "jupiter_eagle":
                var name = "Jupiter Eagle";
                var fileName = shadowName;
                var url = `https://megamitensei.fandom.com/wiki/Jupiter_Eagle`;
                var img = new Attachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png")
                break;
            case "eternal_eagle":
                var name = "Eternal Eagle";
                var fileName = shadowName;
                var url = `https://megamitensei.fandom.com/wiki/Eternal_Eagle`;
                var img = new Attachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png")
                break;


            //relic shadows
            case "relic":
                var name = "Relic";
                var fileName = shadowName;
                var url = `https://megamitensei.fandom.com/wiki/List_of_Persona_3_Shadows`;
                var img = new Attachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png")
                break;
            case "change_relic":
                var name = "Change Relic";
                var fileName = shadowName;
                var url = `https://megamitensei.fandom.com/wiki/Change_Relic`;
                var img = new Attachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png")
                break;
            case "change_relic_/a":
                var name = "Change Relic (The Answer)";
                var fileName = "change_relicAnswer";
                var url = `https://megamitensei.fandom.com/wiki/Change_Relic`;
                var img = new Attachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png")
                break;
            case "constancy_relic":
                var name = "Constancy Relic";
                var fileName = shadowName;
                var url = `https://megamitensei.fandom.com/wiki/Constancy_Relic`;
                var img = new Attachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png")
                break;
            case "constancy_relic_/a":
                var name = "Constancy Relic (The Answer)";
                var fileName = "constancy_relicAnswer";
                var url = `https://megamitensei.fandom.com/wiki/Constancy_Relic`;
                var img = new Attachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png")
                break;
            case "creation_relic":
                var name = "Creation Relic";
                var fileName = shadowName;
                var url = `https://megamitensei.fandom.com/wiki/Creation_Relic`;
                var img = new Attachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png")
                break;
            case "creation_relic_/a":
                var name = "Creation Relic (The Answer)";
                var fileName = "creation_relicAnswer";
                var url = `https://megamitensei.fandom.com/wiki/Creation_Relic`;
                var img = new Attachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png")
                break;
            case "growth_relic":
                var name = "Growth Relic";
                var fileName = shadowName;
                var url = `https://megamitensei.fandom.com/wiki/Growth_Relic`;
                var img = new Attachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png")
                break;
            case "affection_relic":
                var name = "Affection Relic";
                var fileName = shadowName;
                var url = `https://megamitensei.fandom.com/wiki/Affection_Relic`;
                var img = new Attachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png")
                break;


            //mother shadows
            case "mother":
                var name = "Mother";
                var fileName = shadowName;
                var url = `https://megamitensei.fandom.com/wiki/List_of_Persona_3_Shadows`;
                var img = new Attachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png")
                break;
            case "elegant_mother":
                var name = "Elegant Mother";
                var fileName = shadowName;
                var url = `https://megamitensei.fandom.com/wiki/Elegant_Mother`;
                var img = new Attachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png")
                break;
            case "elegant_mother_/a":
                var name = "Elegant Mother (The Answer)";
                var fileName = "elegant_motherAnswer";
                var url = `https://megamitensei.fandom.com/wiki/Elegant_Mother`;
                var img = new Attachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png")
                break;
            case "regal_mother":
                var name = "Regal Mother";
                var fileName = shadowName;
                var url = `https://megamitensei.fandom.com/wiki/Regal_Mother`;
                var img = new Attachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png")
                break;
            case "regal_mother_/a":
                var name = "Regal Mother (The Answer)";
                var fileName = "regal_motherAnswer";
                var url = `https://megamitensei.fandom.com/wiki/Regal_Mother`;
                var img = new Attachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png")
                break;
            case "pistil_mother":
                var name = "Pistil Mother";
                var fileName = shadowName;
                var url = `https://megamitensei.fandom.com/wiki/Pistil_Mother`;
                var img = new Attachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png")
                break;
            case "divine_mother":
                var name = "Divine Mother";
                var fileName = shadowName;
                var url = `https://megamitensei.fandom.com/wiki/Divine_Mother`;
                var img = new Attachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png")
                break;


            //beetle shadows
            case "beetle":
                var name = "Beetle";
                var fileName = shadowName;
                var url = `https://megamitensei.fandom.com/wiki/List_of_Persona_3_Shadows`;
                var img = new Attachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png")
                break;
            case "grave_beetle":
                var name = "Grave Beetle";
                var fileName = shadowName;
                var url = `https://megamitensei.fandom.com/wiki/Grave_Beetle`;
                var img = new Attachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png")
                break;
            case "grave_beetle_/a":
                var name = "Grave Beetle (The Answer)";
                var fileName = "grave_beetleAnswer";
                var url = `https://megamitensei.fandom.com/wiki/Grave_Beetle`;
                var img = new Attachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png")
                break;
            case "adamant_beetle":
                var name = "Adamant Beetle";
                var fileName = shadowName;
                var url = `https://megamitensei.fandom.com/wiki/Adamant_Beetle`;
                var img = new Attachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png")
                break;
            case "golden_beetle":
                let gold = new RichEmbed()
                    .setTitle("Golden Beetle")
                    .setURL("https://megamitensei.fandom.com/wiki/Golden_Beetle")
                    .setDescription(`[Report a Data Error!](${config.servers.discordinvite})`)
                    .setColor(config.colors.darkblue)
                    .attachFile(new Attachment(`./personadata/p3shadows/golden_beetle.png`, "shadow.png"))
                    .setImage("attachment://shadow.png")
                    .setFooter("Information gathered from the Megami Tensei Wiki", client.user.displayAvatarURL);

                let goldBoss = new RichEmbed()
                    .setTitle("Golden Beetle (Sub Boss)")
                    .setURL("https://megamitensei.fandom.com/wiki/Golden_Beetle")
                    .setDescription(`[Report a Data Error!](${config.servers.discordinvite})`)
                    .setColor(config.colors.darkblue)
                    .attachFile(new Attachment(`./personadata/p3shadows/golden_beetleBoss.png`, "shadow.png"))
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
                var img = new Attachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png")
                break;
            case "emperor_beetle":
                var name = "Emperor Beetle";
                var fileName = shadowName;
                var url = `https://megamitensei.fandom.com/wiki/Emperor_Beetle`;
                var img = new Attachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png")
                break;
            case "burning_beetle":
                var name = "Burning Beetle";
                var fileName = shadowName;
                var url = `https://megamitensei.fandom.com/wiki/Burning_Beetle`;
                var img = new Attachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png")
                break;


            //knight shadows
            case "knight":
                var name = "Knight";
                var fileName = shadowName;
                var url = `https://megamitensei.fandom.com/wiki/List_of_Persona_3_Shadows`;
                var img = new Attachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png")
                break;
            case "intrepid_knight":
                var name = "Intrepid Knight";
                var fileName = shadowName;
                var url = `https://megamitensei.fandom.com/wiki/Intrepid_Knight`;
                var img = new Attachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png")
                break;
            case "intrepid_knight_/a":
                var name = "Intrepid Knight (The Answer)";
                var fileName = "intrepid_knightAnswer";
                var url = `https://megamitensei.fandom.com/wiki/Intrepid_Knight`;
                var img = new Attachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png")
                break;
            case "avenger_knight":
                var name = "Avenger Knight";
                var fileName = shadowName;
                var url = `https://megamitensei.fandom.com/wiki/Avenger_Knight`;
                var img = new Attachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png")
                break;
            case "avenger_knight_/a":
                var name = "Avenger Knight (The Answer)";
                var fileName = "avenger_knightAnswer";
                var url = `https://megamitensei.fandom.com/wiki/Avenger_Knight`;
                var img = new Attachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png")
                break;
            case "champion_knight":
                var name = "Champion Knight";
                var fileName = shadowName;
                var url = `https://megamitensei.fandom.com/wiki/Champion_Knight`;
                var img = new Attachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png")
                break;
            case "champion_knight_/a":
                var name = "Champion Knight (The Answer)";
                var fileName = "champion_knightAnswer";
                var url = `https://megamitensei.fandom.com/wiki/Champion_Knight`;
                var img = new Attachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png")
                break;
            case "hell_knight":
                let hell = new RichEmbed()
                    .setTitle("Hell Knight")
                    .setURL("https://megamitensei.fandom.com/wiki/Hell_Knight")
                    .setDescription(`[Report a Data Error!](${config.servers.discordinvite})`)
                    .setColor(config.colors.darkblue)
                    .attachFile(new Attachment(`./personadata/p3shadows/hell_knight.png`, "shadow.png"))
                    .setImage("attachment://shadow.png")
                    .setFooter("Information gathered from the Megami Tensei Wiki", client.user.displayAvatarURL);

                let hellBoss = new RichEmbed()
                    .setTitle("Hell Knight (Sub Boss)")
                    .setURL("https://megamitensei.fandom.com/wiki/Hell_Knight")
                    .setDescription(`[Report a Data Error!](${config.servers.discordinvite})`)
                    .setColor(config.colors.darkblue)
                    .attachFile(new Attachment(`./personadata/p3shadows/hell_knightBoss.png`, "shadow.png"))
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
                var img = new Attachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png")
                break;


            //castle shadows
            case "castle":
                var name = "Castle";
                var fileName = shadowName;
                var url = `https://megamitensei.fandom.com/wiki/List_of_Persona_3_Shadows`;
                var img = new Attachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png")
                break;
            case "death_castle":
                var name = "Death Castle";
                var fileName = shadowName;
                var url = `https://megamitensei.fandom.com/wiki/Death_Castle`;
                var img = new Attachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png")
                break;
            case "death_knight_/a":
                var name = "Death Castle (The Answer)";
                var fileName = "death_castleAnswer";
                var url = `https://megamitensei.fandom.com/wiki/Death_Castle`;
                var img = new Attachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png")
                break;
            case "solid_castle":
                var name = "Solid Castle";
                var fileName = shadowName;
                var url = `https://megamitensei.fandom.com/wiki/Solid_Castle`;
                var img = new Attachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png")
                break;
            case "solid_castle_/a":
                var name = "Solid Castle (The Answer)";
                var fileName = "solid_castleAnswer";
                var url = `https://megamitensei.fandom.com/wiki/Solid_Castle`;
                var img = new Attachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png")
                break;
            case "power_castle":
                var name = "Power Castle";
                var fileName = shadowName;
                var url = `https://megamitensei.fandom.com/wiki/Power_Castle`;
                var img = new Attachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png")
                break;
            case "power_castle_/a":
                var name = "Power Castle";
                var fileName = "power_castleAnswer";
                var url = `https://megamitensei.fandom.com/wiki/Power_Castle`;
                var img = new Attachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png")
                break;
            case "king_castle":
                var name = "King Castle";
                var fileName = shadowName;
                var url = `https://megamitensei.fandom.com/wiki/King_Castle`;
                var img = new Attachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png")
                break;


            //twin shadows
            case "twins":
                var name = "Twins";
                var fileName = shadowName;
                var url = `https://megamitensei.fandom.com/wiki/List_of_Persona_3_Shadows`;
                var img = new Attachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png")
                break;
            case "trance_twins":
                var name = "Trance Twins";
                var fileName = shadowName;
                var url = `https://megamitensei.fandom.com/wiki/Trance_Twins`;
                var img = new Attachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png")
                break;
            case "trance_twins_/a":
                var name = "Trance Twins (The Answer)";
                var fileName = "trance_twinsAnswer";
                var url = `https://megamitensei.fandom.com/wiki/Trance_Twins`;
                var img = new Attachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png")
                break;
            case "killer_twins":
                var name = "Killer Twins";
                var fileName = shadowName;
                var url = `https://megamitensei.fandom.com/wiki/Killer_Twins`;
                var img = new Attachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png")
                break;
            case "killer_twins_/a":
                var name = "Killer Twins (The Answer)";
                var fileName = "killer_twinsAnswer";
                var url = `https://megamitensei.fandom.com/wiki/Killer_Twins`;
                var img = new Attachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png")
                break;
            case "death_twins":
                var name = "Death Twins";
                var fileName = shadowName;
                var url = `https://megamitensei.fandom.com/wiki/Death_Twins`;
                var img = new Attachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png")
                break;
            case "crazy_twins":
                var name = "Crazy Twins";
                var fileName = shadowName;
                var url = `https://megamitensei.fandom.com/wiki/Crazy_Twins`;
                var img = new Attachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png")
                break;


            //tower shadows
            case "tower":
                var name = "Tower";
                var fileName = shadowName;
                var url = `https://megamitensei.fandom.com/wiki/List_of_Persona_3_Personas`;
                var img = new Attachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png")
                break;
            case "dogmatic_tower":
                var name = "Dogmatic Tower";
                var fileName = shadowName;
                var url = `https://megamitensei.fandom.com/wiki/Dogmatic_Tower`;
                var img = new Attachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png")
                break;
            case "dogmatic_tower_/a":
                var name = "Dogmatic Tower (The Answer)";
                var fileName = "dogmatic_towerAnswer";
                var url = `https://megamitensei.fandom.com/wiki/Dogmatic_Tower`;
                var img = new Attachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png")
                break;
            case "fanatic_tower":
                var name = "Fanatic Tower";
                var fileName = shadowName;
                var url = `https://megamitensei.fandom.com/wiki/Fanatic_Tower`;
                var img = new Attachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png")
                break;
            case "fanatic_tower_/a":
                var name = "Fanatic Tower (The Answer)";
                var fileName = "fanatic_towerAnswer";
                var url = `https://megamitensei.fandom.com/wiki/Fanatic_Tower`;
                var img = new Attachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png")
                break;
            case "apostate_tower":
                var name = "Apostate Tower";
                var fileName = shadowName;
                var url = `https://megamitensei.fandom.com/wiki/Apostate_Tower`;
                var img = new Attachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png")
                break;
            case "corrupt_tower_/a":
                var name = "Corrupt Tower (The Answer)";
                var fileName = "corrupt_towerAnswer";
                var url = `https://megamitensei.fandom.com/wiki/Corrupt_Tower`;
                var img = new Attachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png")
                break;
            case "grudge_tower_/a":
                var name = "Grudge Tower (The Answer)";
                var fileName = "grudge_towerAnswer";
                var url = `https://megamitensei.fandom.com/wiki/Grudge_Tower`;
                var img = new Attachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png")
                break;


            //sigil shadows
            case "sigil":
                var name = "Sigil";
                var fileName = shadowName;
                var url = `https://megamitensei.fandom.com/wiki/List_of_Persona_3_Shadows`;
                var img = new Attachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png")
                break;
            case "blue_sigil":
                var name = "Blue Sigil";
                var fileName = shadowName;
                var url = `https://megamitensei.fandom.com/wiki/Blue_Sigil`;
                var img = new Attachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png")
                break;
            case "blue_sigil_/a":
                var name = "Blue Sigil (The Answer)";
                var fileName = "blue_sigilAnswer";
                var url = `https://megamitensei.fandom.com/wiki/Blue_Sigil`;
                var img = new Attachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png")
                break;
            case "red_sigil":
                var name = "Red Sigil";
                var fileName = shadowName;
                var url = `https://megamitensei.fandom.com/wiki/Red_Sigil`;
                var img = new Attachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png")
                break;
            case "red_sigil_/a":
                var name = "Red Sigil (The Answer)";
                var fileName = "red_sigilAnswer";
                var url = `https://megamitensei.fandom.com/wiki/Red_Sigil`;
                var img = new Attachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png")
                break;
            case "green_sigil":
                let green = new RichEmbed()
                    .setTitle("Green Sigil")
                    .setURL("https://megamitensei.fandom.com/wiki/Green_Sigil")
                    .setDescription(`[Report a Data Error!](${config.servers.discordinvite})`)
                    .setColor(config.colors.darkblue)
                    .attachFile(new Attachment(`./personadata/p3shadows/green_sigil.png`, "shadow.png"))
                    .setImage("attachment://shadow.png")
                    .setFooter("Information gathered from the Megami Tensei Wiki", client.user.displayAvatarURL);

                let greenPortable = new RichEmbed()
                    .setTitle("Green Sigil (Portable)")
                    .setURL("https://megamitensei.fandom.com/wiki/Green_Sigil")
                    .setDescription(`[Report a Data Error!](${config.servers.discordinvite})`)
                    .setColor(config.colors.darkblue)
                    .attachFile(new Attachment(`./personadata/p3shadows/green_sigilPortable`, "shadow.png"))
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
                var img = new Attachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png")
                break;
            case "white_sigil":
                var name = "White Sigil";
                var fileName = shadowName;
                var url = `https://megamitensei.fandom.com/wiki/White_Sigil`;
                var img = new Attachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png")
                break;


            //cupid shadows
            case "cupid":
                var name = "Cupid";
                var fileName = shadowName;
                var url = `https://megamitensei.fandom.com/wiki/List_of_Persona_3_Shadows`;
                var img = new Attachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png")
                break;
            case "obsessed_cupid":
                var name = "Obsessed Cupid";
                var fileName = shadowName;
                var url = `https://megamitensei.fandom.com/wiki/Obsessed_Cupid`;
                var img = new Attachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png")
                break;
            case "obsessed_cupid_/a":
                var name = "Obsessed Cupid (The Answer)";
                var fileName = "obsessed_cupidAnswer";
                var url = `https://megamitensei.fandom.com/wiki/Obsessed_Cupid`;
                var img = new Attachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png")
                break;
            case "jealous_cupid":
                var name = "Jealous Cupid";
                var fileName = shadowName;
                var url = `https://megamitensei.fandom.com/wiki/Jealous_Cupid`;
                var img = new Attachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png")
                break;
            case "jealous_cupid_/a":
                var name = "Jealous Cupid (The Answer)";
                var fileName = "jealous_cupidAnswer";
                var url = `https://megamitensei.fandom.com/wiki/Jealous_Cupid`;
                var img = new Attachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png")
                break;
            case "devoted_cupid":
                var name = "Devoted Cupid";
                var fileName = shadowName;
                var url = `https://megamitensei.fandom.com/wiki/Devoted_Cupid`;
                var img = new Attachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png")
                break;
            case "gracious_cupid":
                var name = "Gracious Cupid";
                var fileName = shadowName;
                var url = `https://megamitensei.fandom.com/wiki/Gracious_Cupid`;
                var img = new Attachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png")
                break;


            //dancer shaodws
            case "dancer":
                var name = "Dancer";
                var fileName = shadowName;
                var url = `https://megamitensei.fandom.com/wiki/List_of_Persona_3_Shadows`;
                var img = new Attachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png")
                break;
            case "soul_dancer":
                var name = "Soul Dancer";
                var fileName = shadowName;
                var url = `https://megamitensei.fandom.com/wiki/Soul_Dancer`;
                var img = new Attachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png")
                break;
            case "soul_dancer_/a":
                let soul = new RichEmbed()
                    .setTitle("Soul Dancer (The Answer)")
                    .setURL("https://megamitensei.fandom.com/wiki/Soul_Dancer")
                    .setDescription(`[Report a Data Error!](${config.servers.discordinvite})`)
                    .setColor(config.colors.darkblue)
                    .attachFile(new Attachment(`./personadata/p3shadows/soul_dancerAnswer.png`, "shadow.png"))
                    .setImage("attachment://shadow.png")
                    .setFooter("Information gathered from the Megami Tensei Wiki", client.user.displayAvatarURL);

                let soulBoss = new RichEmbed()
                    .setTitle("Soul Dancer (The Answer, Sub Boss)")
                    .setURL("https://megamitensei.fandom.com/wiki/Soul_Dancer")
                    .setDescription(`[Report a Data Error!](${config.servers.discordinvite})`)
                    .setColor(config.colors.darkblue)
                    .attachFile(new Attachment(`./personadata/p3shadows/soul_dancerBoss.png`, "shadow.png"))
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
                var img = new Attachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png")
                break;
            case "natural_dancer":
                var name = "Natural Dancer";
                var fileName = shadowName;
                var url = `https://megamitensei.fandom.com/wiki/Natural_Dancer`;
                var img = new Attachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png")
                break;
            case "natural_dancer_/a":
                var name = "Natural Dancer (The Answer)";
                var fileName = "natural_dancerAnswer";
                var url = `https://megamitensei.fandom.com/wiki/Natural_Dancer`;
                var img = new Attachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png")
                break;
            case "royal_dancer":
                let royal = new RichEmbed()
                    .setTitle("Royal Dancer")
                    .setURL("https://megamitensei.fandom.com/wiki/Royal_Dancer")
                    .setDescription(`[Report a Data Error!](${config.servers.discordinvite})`)
                    .setColor(config.colors.darkblue)
                    .attachFile(new Attachment(`./personadata/p3shadows/royal_dancer.png`, "shadow.png"))
                    .setImage("attachment://shadow.png")
                    .setFooter("Information gathered from the Megami Tensei Wiki", client.user.displayAvatarURL);

                let royalBoss = new RichEmbed()
                    .setTitle("Royal Dancer (Sub Boss)")
                    .setURL("https://megamitensei.fandom.com/wiki/Royal_Dancer")
                    .setDescription(`[Report a Data Error!](${config.servers.discordinvite})`)
                    .setColor(config.colors.darkblue)
                    .attachFile(new Attachment(`./personadata/p3shadows/royal_dancerBoss.png`, "shadow.png"))
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
                var img = new Attachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png")
                break;
            case "harem_dancer_/a":
                var name = "Harem Dancer (The Answer)";
                var fileName = "harem_dancerAnswer";
                var url = `https://megamitensei.fandom.com/wiki/Harem_Dancer`;
                var img = new Attachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png")
                break;


            //snake shadows
            case "snake":
                var name = "Snake";
                var fileName = shadowName;
                var url = `https://megamitensei.fandom.com/wiki/List_of_Persona_3_Shadows`;
                var img = new Attachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png")
                break;
            case "lustful_snake":
                var name = "Lustful Snake";
                var fileName = shadowName;
                var url = `https://megamitensei.fandom.com/wiki/Ardent_Dancer`;
                var img = new Attachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png")
                break;
            case "immoral_snake":
                var name = "Immoral Snake";
                var fileName = shadowName;
                var url = `https://megamitensei.fandom.com/wiki/Immoral_Snake`;
                var img = new Attachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png")
                break;
            case "carnal_snake":
                let carnal = new RichEmbed()
                    .setTitle("Carnal Snake")
                    .setURL("https://megamitensei.fandom.com/wiki/Carnal_Snake")
                    .setDescription(`[Report a Data Error!](${config.servers.discordinvite})`)
                    .setColor(config.colors.darkblue)
                    .attachFile(new Attachment(`./personadata/p3shadows/carnal_snake.png`, "shadow.png"))
                    .setImage("attachment://shadow.png")
                    .setFooter("Information gathered from the Megami Tensei Wiki", client.user.displayAvatarURL);

                let carnalBoss = new RichEmbed()
                    .setTitle("Carnal Snake (Sub Boss)")
                    .setURL("https://megamitensei.fandom.com/wiki/Carnal_Snake")
                    .setDescription(`[Report a Data Error!](${config.servers.discordinvite})`)
                    .setColor(config.colors.darkblue)
                    .attachFile(new Attachment(`./personadata/p3shadows/carnal_snakeBoss.png`, "shadow.png"))
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
                var img = new Attachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png")
                break;
            case "stoic_snake_/a":
                var name = "Stoic Snake (The Answer)";
                var fileName = "stoic_snakeAnswer";
                var url = `https://megamitensei.fandom.com/wiki/Stoic_Snake`;
                var img = new Attachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png")
                break;


            //wheel shadows
            case "wheel":
                var name = "Wheel";
                var fileName = shadowName;
                var url = `https://megamitensei.fandom.com/wiki/List_of_Persona_3_Shadows`;
                var img = new Attachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png")
                break;
            case "bestial_wheel":
                var name = "Bestial Wheel";
                var fileName = shadowName;
                var url = `https://megamitensei.fandom.com/wiki/Bestial_Wheel`;
                var img = new Attachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png")
                break;
            case "mach_wheel":
                var name = "Mach Wheel";
                var fileName = shadowName;
                var url = `https://megamitensei.fandom.com/wiki/Mach_Wheel`;
                var img = new Attachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png")
                break;
            case "mach_wheel_/a":
                var name = "Mach Wheel (The Answer)";
                var fileName = "mach_wheelAnswer";
                var url = `https://megamitensei.fandom.com/wiki/Mach_Wheel`;
                var img = new Attachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png")
                break;
            case "brave_wheel":
                var name = "Brave Wheel";
                var fileName = shadowName;
                var url = `https://megamitensei.fandom.com/wiki/Brave_Wheel`;
                var img = new Attachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png")
                break;
            case "brave_wheel_/a":
                var name = "Brave Wheel (The Answer)";
                var fileName = "brave_wheelAnswer";
                var url = `https://megamitensei.fandom.com/wiki/Brave_Wheel`;
                var img = new Attachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png")
                break;
            case "battle_wheel":
                var name = "Battle Wheel";
                var fileName = shadowName;
                var url = `https://megamitensei.fandom.com/wiki/Battle_Wheel`;
                var img = new Attachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png")
                break;


            //drive shadows
            case "drive":
                var name = "Drive";
                var fileName = shadowName;
                var url = `https://megamitensei.fandom.com/wiki/List_of_Persona_3_Shadows`;
                var img = new Attachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png")
                break;
            case "rampage_drive":
                var name = "Rampage Drive";
                var fileName = shadowName;
                var url = `https://megamitensei.fandom.com/wiki/Rampage_Drive`;
                var img = new Attachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png")
                break;
            case "wild_drive":
                var name = "Wild Drive";
                var fileName = shadowName;
                var url = `https://megamitensei.fandom.com/wiki/Wild_Drive`;
                var img = new Attachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png")
                break;
            case "wild_drive_/a":
                var name = "Wild Drive (The Answer)";
                var fileName = "wild_driveAnswer";
                var url = `https://megamitensei.fandom.com/wiki/Wild_Drive`;
                var img = new Attachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png")
                break;
            case "killer_drive":
                var name = "Killer Drive";
                var fileName = shadowName;
                var url = `https://megamitensei.fandom.com/wiki/Killer_Drive`;
                var img = new Attachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png")
                break;
            case "killer_drive_/a":
                var name = "Killer Drive (The Answer)";
                var fileName = "killer_driveAnswer";
                var url = `https://megamitensei.fandom.com/wiki/Killer_Drive`;
                var img = new Attachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png")
                break;
            case "slaughter_drive":
                var name = "Slaughter Drive";
                var fileName = shadowName;
                var url = `https://megamitensei.fandom.com/wiki/Slaughter_Drive`;
                var img = new Attachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png")
                break;
            case "slaughter_drive_/a":
                var name = "Slaughter Drive (The Answer)";
                var fileName = "slughter_driveAnswer";
                var url = `https://megamitensei.fandom.com/wiki/Slaughter_Drive`;
                var img = new Attachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png")
                break;


            //turret shadows
            case "turret":
                var name = "Turret";
                var fileName = shadowName;
                var url = `https://megamitensei.fandom.com/wiki/List_of_Persona_3_Shadows`;
                var img = new Attachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png")
                break;
            case "arcane_turret":
                let arcane = new RichEmbed()
                    .setTitle("Arcane Turret")
                    .setURL("https://megamitensei.fandom.com/wiki/Arcane_Turret")
                    .setDescription(`[Report a Data Error!](${config.servers.discordinvite})`)
                    .setColor(config.colors.darkblue)
                    .attachFile(new Attachment(`./personadata/p3shadows/arcane_turret.png`, "shadow.png"))
                    .setImage("attachment://shadow.png")
                    .setFooter("Information gathered from the Megami Tensei Wiki", client.user.displayAvatarURL);

                let arcaneBoss = new RichEmbed()
                    .setTitle("Arcane Turret (Sub Boss)")
                    .setURL("https://megamitensei.fandom.com/wiki/Arcane_Turret")
                    .setDescription(`[Report a Data Error!](${config.servers.discordinvite})`)
                    .setColor(config.colors.darkblue)
                    .attachFile(new Attachment(`./personadata/p3shadows/arcane_turretBoss.png`, "shadow.png"))
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
                var img = new Attachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png")
                break;
            case "scarlet_turret":
                var name = "Scarlet Turret";
                var fileName = shadowName;
                var url = `https://megamitensei.fandom.com/wiki/Scarlet_Turret`;
                var img = new Attachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png")
                break;
            case "wicked_turret":
                var name = "Wicked Turret";
                var fileName = shadowName;
                var url = `https://megamitensei.fandom.com/wiki/Wicked_Turret`;
                var img = new Attachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png")
                break;
            case "wicked_turret_/a":
                var name = "Wicked Turret (The Answer)";
                var fileName = "wicked_turretAnswer";
                var url = `https://megamitensei.fandom.com/wiki/Wicked_Turret`;
                var img = new Attachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png")
                break;
            case "hallowed_turret":
                var name = "Hallowed Turret";
                var fileName = shadowName;
                var url = `https://megamitensei.fandom.com/wiki/Hallowed_Turret`;
                var img = new Attachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png")
                break;
            case "berserk_turret_/a":
                var name = "Berserk Turret (The Answer)";
                var fileName = "berserk_turretAnswer";
                var url = `https://megamitensei.fandom.com/wiki/Barserk_Turret`;
                var img = new Attachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png")
                break;
            case "spastic_turret_/a":
                var name = "Spastic Turret (The Answer)";
                var fileName = "spastic_turretAnswer";
                var url = `https://megamitensei.fandom.com/wiki/Spastic_Turret`;
                var img = new Attachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png")
                break;


            //balance shadows
            case "balance":
                var name = "Balance";
                var fileName = shadowName;
                var url = `https://megamitensei.fandom.com/wiki/List_of_Persona_3_Shadows`;
                var img = new Attachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png")
                break;
            case "heat_balance":
                var name = "Heat Balance";
                var fileName = shadowName;
                var url = `https://megamitensei.fandom.com/wiki/Heat_Balance`;
                var img = new Attachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png")
                break;
            case "heat_balance_/a":
                var name = "Heat Balance (The Answer)";
                var fileName = "heat_balanceAnswer";
                var url = `https://megamitensei.fandom.com/wiki/Heat_Balance`;
                var img = new Attachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png")
                break;
            case "sky_balance":
                var name = "Sky Balance";
                var fileName = shadowName;
                var url = `https://megamitensei.fandom.com/wiki/Sky_Balance`;
                var img = new Attachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png")
                break;
            case "sky_balance_/a":
                var name = "Sky Balance (The Answer)";
                var fileName = "sky_balanceAnswer";
                var url = `https://megamitensei.fandom.com/wiki/Sky_Balance`;
                var img = new Attachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png")
                break;
            case "light_balance":
                var name = "Light Balance";
                var fileName = shadowName;
                var url = `https://megamitensei.fandom.com/wiki/Light_Balance`;
                var img = new Attachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png")
                break;
            case "light_balance_/a":
                var name = "Light Balance (The Answer)";
                var fileName = "light_balanceAnswer";
                var url = `https://megamitensei.fandom.com/wiki/Light_Balance`;
                var img = new Attachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png")
                break;
            case "world_balance":
                var name = "World Balance";
                var fileName = shadowName;
                var url = `https://megamitensei.fandom.com/wiki/World_Balance`;
                var img = new Attachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png")
                break;
            case "world_balance_/a":
                var name = "World Balance (The Answer)";
                var fileName = "world_balanceAnswer";
                var url = `https://megamitensei.fandom.com/wiki/World_Balance`;
                var img = new Attachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png")
                break;

            
            //sword shadows



        }
        //finishing checks and sending of the embed
        if (!name) {
            if (shadowName.endsWith("/a")) {
                return message.reply("This shadow doesn't appear to have an Answer variant, or you have entered an invalid Shadow name!")
            } else {
                return message.reply("You have entered an invalid shadow name! `Note: If the shadow you are looking for only appears in 'The Answer', you must add the '/a' switch to the end of the name!`")
            }
        }

        let embed = new RichEmbed()
            .setTitle(name)
            .setURL(url)
            .setDescription(`[Report a Data Error!](${config.servers.discordinvite})`)
            .setColor(config.colors.darkblue)
            .attachFile(img)
            .setImage("attachment://shadow.png")
            .setFooter("Information gathered from the Megami Tensei Wiki", client.user.displayAvatarURL);

        message.reply("`Note: Shadow data is incomplete from my official source. Some data is subject to change. If you want to help out, use the link at the top of the embed!`")
        return message.channel.send(embed);
    }
}