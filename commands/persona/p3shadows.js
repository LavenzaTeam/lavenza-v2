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
        if(!shadowName) return message.reply(`Please specify a shadow to search for! \nTo view all the shadows in the game, type \`${config.prefix}p3shadows list\``)


        //maya shadows
        if (shadowName === "maya") {
            var name = "Maya";
            var fileName = shadowName;
            var url = `https://megamitensei.fandom.com/wiki/List_of_Persona_3_Shadows`;
            var img = new Attachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png");
        }
        if (shadowName === "cowardly_maya") {
            var name = "Cowardly Maya";
            var fileName = shadowName;
            var url = `https://megamitensei.fandom.com/wiki/Cowardly_Maya`;
            var img = new Attachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png");
        }
        if (shadowName === "cowardly_maya_/a") {
            var name = "Cowardly Maya (The Answer)";
            var fileName = "cowardly_mayaAnswer";
            var url = `https://megamitensei.fandom.com/wiki/Cowardly_Maya`;
            var img = new Attachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png");
        }
        if (shadowName === "merciless_maya") {
            var name = "Merciless Maya";
            var fileName = shadowName;
            var url = `https://megamitensei.fandom.com/wiki/Merciless_Maya`;
            var img = new Attachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png");
        }
        if (shadowName === "merciless_maya_/a") {
            var name = "Cowardly Maya";
            var fileName = "merciless_mayaAnswer";
            var url = `https://megamitensei.fandom.com/wiki/Merciless_Maya`;
            var img = new Attachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png");
        }
        if (shadowName === "frivolous_maya") {
            var name = "Frivolous Maya";
            var fileName = shadowName;
            var url = `https://megamitensei.fandom.com/wiki/Frivolous_Maya`;
            var img = new Attachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png");
        }
        if (shadowName === "haughty_maya") {
            var name = "Haughty Maya";
            var fileName = shadowName;
            var url = `https://megamitensei.fandom.com/wiki/Haughty_Maya`;
            var img = new Attachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png");
        }
        if (shadowName === "indolent_maya") {
            var name = "Indolent Maya";
            var fileName = shadowName;
            var url = `https://megamitensei.fandom.com/wiki/Indolent_Maya`;
            var img = new Attachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png");
        }
        if (shadowName === "insidious_maya") {
            var name = "Insidious Maya";
            var fileName = shadowName;
            var url = `https://megamitensei.fandom.com/wiki/Insidious_Maya`;
            var img = new Attachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png");
        }
        if (shadowName === "insidious_maya_/a") {
            var name = "Insidious Maya (The Answer)";
            var fileName = "insidious_mayaAnswer";
            var url = `https://megamitensei.fandom.com/wiki/Insidious_Maya`;
            var img = new Attachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png");
        }
        if (shadowName === "ill_fated_maya") {
            var name = "Ill Fated Maya";
            var fileName = shadowName;
            var url = `https://megamitensei.fandom.com/wiki/Ill-fated_Maya`;
            var img = new Attachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png");
        }
        if (shadowName === "ill_fated_maya_/a") {
            var name = "Ill Fated Maya (The Answer)";
            var fileName = "ill_fated_mayaAnswer";
            var url = `https://megamitensei.fandom.com/wiki/Ill-fated_Maya`;
            var img = new Attachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png");
        }
        if (shadowName === "bigoted_maya") {
            var name = "Bigoted Maya";
            var fileName = shadowName;
            var url = `https://megamitensei.fandom.com/wiki/Bigoted_Maya`;
            var img = new Attachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png");
        }
        if (shadowName === "bigoted_maya_/a") {
            var name = "Bigoted Maya (The Answer)";
            var fileName = "bigoted_mayaAnswer";
            var url = `https://megamitensei.fandom.com/wiki/Bigoted_Maya`;
            var img = new Attachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png");
        }
        if (shadowName === "desirous_maya") {
            var name = "Desirous Maya";
            var fileName = shadowName;
            var url = `https://megamitensei.fandom.com/wiki/Desirous_Maya`;
            var img = new Attachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png");
        }
        if (shadowName === "desirous_maya_/a") {
            var name = "Desirous Maya (The Answer)";
            var fileName = "desirous_mayaAnswer";
            var url = `https://megamitensei.fandom.com/wiki/Desirous_Maya`;
            var img = new Attachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png");
        }
        if (shadowName === "imprudent_maya") {
            var name = "Imprudent Maya";
            var fileName = shadowName;
            var url = `https://megamitensei.fandom.com/wiki/Imprudent_Maya`;
            var img = new Attachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png");
        }
        if (shadowName === "imprudent_maya_/a") {
            var name = "Imprudent Maya";
            var fileName = "imprudent_mayaAnswer";
            var url = `https://megamitensei.fandom.com/wiki/Imprudent_Maya`;
            var img = new Attachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png");
        }
        if (shadowName === "visceral_maya") {
            var name = "Visceral Maya";
            var fileName = shadowName;
            var url = `https://megamitensei.fandom.com/wiki/Visceral_Maya`;
            var img = new Attachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png");
        }
        if (shadowName === "visceral_maya_/a") {
            var name = "Visceral Maya";
            var fileName = "visceral_mayaAnswer";
            var url = `https://megamitensei.fandom.com/wiki/Visceral_Maya`;
            var img = new Attachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png");
        }
        if (shadowName === "devious_maya") {
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
                .attachFile(new Attachment(`./personadata/p3shadows/devious_mayaHanged`, "shadow.png"))
                .setImage("attachment://shadow.png")
                .setFooter("Information gathered from the Megami Tensei Wiki", client.user.displayAvatarURL);

            let deviousVision = new RichEmbed()
                .setTitle("Devious Maya (Vision Quest)")
                .setURL("https://megamitensei.fandom.com/wiki/Devious_Maya#Vision%20Quest")
                .setDescription(`[Report a Data Error!](${config.servers.discordinvite})`)
                .setColor(config.colors.darkblue)
                .attachFile(new Attachment(`./personadata/p3shadows/devious_mayaVision`, "shadow.png"))
                .setImage("attachment://shadow.png")
                .setFooter("Information gathered from the Megami Tensei Wiki", client.user.displayAvatarURL);

            await message.channel.send(devious);
            await message.channel.send(deviousHanged);
            await message.channel.send(deviousVision);
            return;
        }
        if (shadowName === "devious_maya_/a") {
            var name = "Devious Maya";
            var fileName = "devious_mayaAnswer";
            var url = `https://megamitensei.fandom.com/wiki/Devious_Maya`;
            var img = new Attachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png");
        }
        if (shadowName === "conceited_maya_/a") {
            var name = "Conceited Maya";
            var fileName = "conceited_mayaAnswer";
            var url = `https://megamitensei.fandom.com/wiki/Conceited_Maya`;
            var img = new Attachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png");
        }


        //hand shadows
        if (shadowName === "hand") {
            var name = "Hand";
            var fileName = shadowName;
            var url = `https://megamitensei.fandom.com/wiki/List_of_Persona_3_Shadows`;
            var img = new Attachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png");
        }
        if (shadowName === "magic_hand") {
            var name = "Magic Hand";
            var fileName = shadowName;
            var url = `https://megamitensei.fandom.com/wiki/Magic_Hand`;
            var img = new Attachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png");
        }
        if (shadowName === "magic_hand_/a") {
            var name = "Magic Hand (The Answer)";
            var fileName = "magic_handAnswer";
            var url = `https://megamitensei.fandom.com/wiki/Magic_Hand`;
            var img = new Attachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png");
        }
        if (shadowName === "dancing_hand") {
            let hand = new RichEmbed()
                .setTitle("Dancing Hand")
                .setURL("https://megamitensei.fandom.com/wiki/Dancing_Hand#The%20Journey")
                .setDescription(`[Report a Data Error!](${config.servers.discordinvite})`)
                .setColor(config.colors.darkblue)
                .attachFile(new Attachment(`./personadata/p3shadows/dancing_hand.png`, "shadow.png"))
                .setImage("attachment://shadow.png")
                .setFooter("Information gathered from the Megami Tensei Wiki", client.user.displayAvatarURL);

            let handBoss = new RichEmbed()
                .setTitle("Dancing Hand")
                .setURL("https://megamitensei.fandom.com/wiki/Dancing_Hand#Sub-Boss")
                .setDescription(`[Report a Data Error!](${config.servers.discordinvite})`)
                .setColor(config.colors.darkblue)
                .attachFile(new Attachment(`./personadata/p3shadows/dancing_handBoss.png`, "shadow.png"))
                .setImage("attachment://shadow.png")
                .setFooter("Information gathered from the Megami Tensei Wiki", client.user.displayAvatarURL);


            await message.channel.send(hand);
            await message.channel.send(handBoss);
            return;
        }
        if (shadowName === "dancing_hand_/a") {
            var name = "Dancing Hand (The Answer)";
            var fileName = "dancing_handAnswer";
            var url = `https://megamitensei.fandom.com/wiki/Dancing_Hand`;
            var img = new Attachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png");
        }
        if (shadowName === "killing_hand") {
            var name = "Killing Hand";
            var fileName = shadowName;
            var url = `https://megamitensei.fandom.com/wiki/Killing_Hand`;
            var img = new Attachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png");
        }
        if (shadowName === "killing_hand_/a") {
            var name = "Killing Hand (The Answer)";
            var fileName = "killing_handAnswer";
            var url = `https://megamitensei.fandom.com/wiki/Killing_Hand`;
            var img = new Attachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png");
        }
        if (shadowName === "almighty_hand") {
            var name = "Almighty Hand";
            var fileName = shadowName;
            var url = `https://megamitensei.fandom.com/wiki/Almighty_Hand`;
            var img = new Attachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png");
        }


        //table shadows
        if (shadowName === "table") {
            var name = "Table";
            var fileName = shadowName;
            var url = `https://megamitensei.fandom.com/wiki/List_of_Persona_3_Shadows`;
            var img = new Attachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png");
        }
        if (shadowName === "laughing_table") {
            var name = "Laughing Table";
            var fileName = shadowName;
            var url = `https://megamitensei.fandom.com/wiki/Laughing_Table`;
            var img = new Attachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png");
        }
        if (shadowName === "laughing_table_/a") {
            var name = "Laughing Table (The Answer)";
            var fileName = "laughing_tableAnswer";
            var url = `https://megamitensei.fandom.com/wiki/Laughing_Table`;
            var img = new Attachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png");
        }
        if (shadowName === "crying_table") {
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
        }
        if (shadowName === "crying_table_/a") {
            var name = "Crying Table (The Answer)";
            var fileName = "crying_tableAnswer";
            var url = `https://megamitensei.fandom.com/wiki/Crying_Table`;
            var img = new Attachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png");
        }
        if (shadowName === "sleeping_table") {
            var name = "Sleeping Table";
            var fileName = shadowName;
            var url = `https://megamitensei.fandom.com/wiki/Sleeping_Table`;
            var img = new Attachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png");
        }
        if (shadowName === "sleeping_table_/a") {
            var name = "Sleeping Table (The Answer)";
            var fileName = "sleeping_tableAnswer";
            var url = `https://megamitensei.fandom.com/wiki/Sleeping_Table`;
            var img = new Attachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png");
        }
        if (shadowName === "angry_table") {
            var name = "Angry Table";
            var fileName = shadowName;
            var url = `https://megamitensei.fandom.com/wiki/Angry_Table`;
            var img = new Attachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png");
        }


        //magus shadows
        if (shadowName === "magical_magus") {
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
        }
        if (shadowName === "wondrous_magus") {
            var name = "Wondrous Magus";
            var fileName = shadowName;
            var url = `https://megamitensei.fandom.com/wiki/Wondrous_Magus`;
            var img = new Attachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png");
        }
        if (shadowName === "wondrous_magus_/a") {
            var name = "Wondrous Magus (The Answer)";
            var fileName = "wondrous_magusAnswer";
            var url = `https://megamitensei.fandom.com/wiki/Wondrous_Magus`;
            var img = new Attachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png");
        }
        if (shadowName === "prime_magus") {
            var name = "Prime Magus";
            var fileName = shadowName;
            var url = `https://megamitensei.fandom.com/wiki/Prime_Magus`;
            var img = new Attachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png");
        }
        if (shadowName === "prime_magus_/a") {
            var name = "Prime Magus (The Answer)";
            var fileName = "prime_magusAnswer";
            var url = `https://megamitensei.fandom.com/wiki/Prime_Magus`;
            var img = new Attachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png");
        }
        if (shadowName === "grand_magus") {
            var name = "Grand Magus";
            var fileName = shadowName;
            var url = `https://megamitensei.fandom.com/wiki/Grand_Magus`;
            var img = new Attachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png");
        }


        //tiara shadows
        if (shadowName === "tiara") {
            var name = "Tiara";
            var fileName = shadowName;
            var url = `https://megamitensei.fandom.com/wiki/List_of_Persona_3_Shadows`;
            var img = new Attachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png")
        }
        if (shadowName === "muttering_tiara") {
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
        }
        if (shadowName === "muttering_tiara_/a") {
            var name = "Muttering Tiara (The Answer)";
            var fileName = "muttering_tiaraAnswer";
            var url = `https://megamitensei.fandom.com/wiki/Muttering_Tiara`;
            var img = new Attachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png")
        }
        if (shadowName === "grieving_tiara") {
            var name = "Grieving Tiara";
            var fileName = shadowName;
            var url = `https://megamitensei.fandom.com/wiki/Grieving_Tiara`;
            var img = new Attachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png")
        }
        if (shadowName === "grieving_tiara_/a") {
            var name = "Grieving Tiara (The Answer)";
            var fileName = "grieving_tiaraAnswer";
            var url = `https://megamitensei.fandom.com/wiki/Grieving_Tiara`;
            var img = new Attachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png")
        }
        if (shadowName === "writhing_tiara") {
            var name = "Writhing Tiara";
            var fileName = shadowName;
            var url = `https://megamitensei.fandom.com/wiki/Writhing_Tiara`;
            var img = new Attachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png")
        }
        if (shadowName === "shouting_tiara") {
            var name = "Shouting Tiara";
            var fileName = shadowName;
            var url = `https://megamitensei.fandom.com/wiki/Shouting_Tiara`;
            var img = new Attachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png")
        }
        if (shadowName === "shouting_tiara_/a") {
            var name = "Shouting Tiara (The Answer)";
            var fileName = "shouting_tiaraAnswer";
            var url = `https://megamitensei.fandom.com/wiki/Shouting_Tiara`;
            var img = new Attachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png")
        }


        //book shadows
        if (shadowName === "book") {
            var name = "Book";
            var fileName = shadowName;
            var url = `https://megamitensei.fandom.com/wiki/List_of_Persona_3_Shadows`;
            var img = new Attachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png")
        }
        if (shadowName === "spurious_book") {
            var name = "Spurious Book";
            var fileName = shadowName;
            var url = `https://megamitensei.fandom.com/wiki/Spurious_Book`;
            var img = new Attachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png")
        }
        if (shadowName === "spurious_book_/a") {
            var name = "Spurious Book (The Answer)";
            var fileName = "spurious_bookAnswer";
            var url = `https://megamitensei.fandom.com/wiki/Spurious_Book`;
            var img = new Attachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png")
        }
        if (shadowName === "maniacal_book") {
            var name = "Maniacal Book";
            var fileName = shadowName;
            var url = `https://megamitensei.fandom.com/wiki/Maniacal_Book`;
            var img = new Attachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png")
        }
        if (shadowName === "maniacal_book_/a") {
            var name = "Maniacal Book (The Answer)";
            var fileName = "maniacal_bookAnswer";
            var url = `https://megamitensei.fandom.com/wiki/Maniacal_Book`;
            var img = new Attachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png")
        }
        if (shadowName === "silent_book") {
            var name = "Silent Book";
            var fileName = shadowName;
            var url = `https://megamitensei.fandom.com/wiki/Silent_Book`;
            var img = new Attachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png")
        }
        if (shadowName === "wrathful_book") {
            var name = "Wrathful Book";
            var fileName = shadowName;
            var url = `https://megamitensei.fandom.com/wiki/Wrathful_Book`;
            var img = new Attachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png")
        }
        if (shadowName === "wrathful_book_/a") {
            var name = "Wrathful Book";
            var fileName = "wrathful_bookAnswer";
            var url = `https://megamitensei.fandom.com/wiki/Wrathful_Book`;
            var img = new Attachment(`./personadata/p3shadows/${fileName}.png`, "shadow.png")
        }


        //idol shadows



        //finishing checks and sending of the embed
        if (!name) {
            if (shadowName.endsWith("/a")) {
                return message.reply("This shadow doesn't appear to have a Answer variant, or you have entered an invalid Shadow name!")
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