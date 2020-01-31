const { RichEmbed } = require("discord.js");
const config = require("../../config.json");

module.exports = {
    config: {
        name: "p3",
        aliases: [],
        description: "A command that tries to condense all of the other Persona 3 commands into one command. `/a` will give you the answer variant, `/f` will get you the FES Fusion of a Persona, and `/p` will give you the Portable Fusion of a Persona. Note that you may only append one switch at a time.",
        usage: "<persona/shadow> (/a) (/f) (/p)",
        category: "persona"
    },
    run: async (client, message, args) => {
        let p3pcommand = client.commands.get("p3personas");
        let p3scommand = client.commands.get("p3shadows");
        let p3ffcommand = client.commands.get("p3fesfusion");
        let p3pfcommand = client.commands.get("p3pfusion");
        let query = args.join("_").toLowerCase();

        //checks for the "list" argument
        if (query === "list") {
            let personalist = new RichEmbed()
                .setTitle("Persona 3 FES/Portable Personas")
                .setURL("https://megamitensei.fandom.com/wiki/List_of_Persona_3_Portable_Personas")
                .setDescription(`Below is a list of every single Persona in the Persona 3 games! \nTo view the information about a specified Persona, run the command \`${config.prefix}p3personas <persona name>\` \n[Report a Data Error!](${config.servers.discordinvite})`)
                .addField("Fool Arcana", "`Orpheus`, `Slime`, `Legion`, `Black Frost`, `Ose`, `Decarabia`, `Loki`, `Susano-o`, `Orpheus Telos`")
                .addField("Magician Arcana", "`Hermes`, `Trismegistus`, `Nekomata`, `Jack Frost`, `Pyro Jack`, `Hua Po`, `Sati`, `Orobas`, `Rangda`, `Surt`")
                .addField("Priestess Arcana", "`Lucia`, `Juno`, `Apsaras`, `Unicorn`, `High Pixie`, `Sarasvati`, `Ganga`, `Parvati`, `Kikuri-hime`, `Scathach`")
                .addField("Empress Arcana", "`Penthesilea`, `Artemisia`, `Leanan Sidhe`, `Yaksini`, `Lakshmi`, `Hariti`, `Gabriel`, `Mother Harlot`, `Skadi`, `Alilat`")
                .addField("Emperor Arcana", "`Polydeuces`, `Ceasar`, `Forneus`, `Oberon`, `Take-Mikazuchi`, `King Frost`, `Raja Naga`, `Kingu`, `Barong`, `Odin`")
                .addField("Hierophant Arcana", "`Castor`, `Psyche`, `Omoikane`, `Berith`, `Shiisaa`, `Flauros`, `Thoth`, `Hokuto Seikun`, `Daisoujou`, `Kohryu`")
                .addField("Lovers Arcana", "`Io`, `Isis`, `Pixie`, `Alp`, `Tam Lin`, `Narcissus`, `Queen Mab`, `Saki Mitama`, `Titania`, `Raphael`, `Cybele`")
                .addField("Chariot Arcana", "`Palladion`, `Pallas Athena`, `Ara Mitama`, `Chimera`, `Zouchouten`, `Ares`, `Oumitsunu`, `Nata Taishi`, `Koumokuten`, `Thor`")
                .addField("Justice Arcana", "`Nemesis`, `Kala Nemi`, `Angel`, `Archangel`, `Principality`, `Power`, `Virtue`, `Dominion`, `Throne`, `Melchizedek`")
                .addField("Hermit Arcana", "`Yomotsu Shikome`, `Naga`, `Lamia`, `Mothman`, `Taraka`, `Kurama Tengu`, `Nebiros`, `Kumbhanda`, `Arahabaki`")
                .addField("Fortune Arcana", "`Fortuna`, `Empusa`, `Kusi Mitama`, `Clotho`, `Lachesis`, `Atropos`, `Norn`")
                .addField("Strength Arcana", "`Cerberus`, `Valkyrie`, `Rakshasa`, `Titan`, `Jikokuten`, `Hanuman`, `Narashimha`, `Kali`, `Siegfried`")
                .addField("Hanged Man Arcana", "`Inugami`, `Take-Minakata`, `Orthus`, `Vasuki`, `Ubelluris`, `Hecatoncheires`, `Hell Biker`, `Attis`")
                .addField("Death Arcana", "`Ghoul`, `Pale Rider`, `Loa`, `Samael`, `Mot`, `Alice`, `Thanatos`")
                .addField("Temperance Arcana", "`Nigi Mitama`, `Mithra`, `Genbu`, `Seiryuu`, `Okuninushi`, `Suzaku`, `Byakko`, `Yurlungur`")
                .addField("Devil Arcana", "`Lilim`, `Mokoi`, `Vetala`, `Incubus`, `Succubus`, `Pazuzu`, `Lilith`, `Abaddon`, `Beelzebub`")
                .addField("Tower Arcana", "`Eligor`, `Cu Chulainn`, `Bishamonten`, `Seiten Taisei`, `Masakado`, `Mara`, `Shiva`, `Chi You`")
                .addField("Star Arcana", "`Neko Shogun`, `Setanta`, `Nandi`, `Kaiwan`, `Ganesha`, `Garuda`, `Kartikeya`, `Saturnus`, `Helel`")
                .addField("Moon Arcana", "`Gurr`, `Yamata No Orochi`, `Girimehkala`, `Dionysus`, `Chernobog`, `Seth`, `Baal Zebul`, `Sandalphon`")
                .addField("Sun Arcana", "`Yatagarasu`, `Quetzalcoatl`, `Jatayu`, `Horus`, `Suparna`, `Vishnu`, `Asura`")
                .addField("Judgement Arcana", "`Anubis`, `Trumpeter`, `Michael`, `Satan`, `Lucifer`, `Messiah`")
                .addField("Aeon Arcana", "`Uriel`, `Nidhoggr`, `Ananta`, `Atavaka`, `Metatron`")
                .setFooter("Information gathered from the Megami Tensei Wiki", client.user.displayAvatarURL)
                .setTimestamp();

            let shadowlist = new RichEmbed()
                .setTitle("List of Persona 3 FES/Portable Shadows")
                .setURL("https://megamitensei.fandom.com/wiki/List_of_Persona_3_Shadows")
                .setDescription(`[Report a Data Error!](${config.servers.discordinvite})`)
                .setColor(config.colors.darkblue)
                .setThumbnail(client.user.displayAvatarURL)
                .addField("Normal Shadow Types", "`Maya`, `Hand`, `Table`, `Magus`, `Tiara`, `Book`, `Idol`, `Eagle`, `Relic`, `Mother`, `Beetle`, `Knight`, `Castle`, `Twins`, `Tower`, `Sigil`, `Cupid`, `Dancer`, `Snake`, `Wheel`, `Drive`, `Turret`, `Balance`, `Sword`, `Giant`, `Raven`, `Phantom`, `Seeker`, `Dice`, `Sand`, `Beast`, `Gigas`, `Musha`, `Minotaur`, `Cyclops`, `Jotun`")
                .addField("Golden Shadows", "`Wealth Hand`, `Treasure Hand`, `Supreme Hand`, `Opulent Hand`, `Luxury Hand`, `Glorious Hand`")
                .addField("Full Moon Bosses", "`Arcana Priestess`, `Arcana Empress`, `Arcana Emperor`, `Arcana Hierophant`, `Arcana Lovers`, `Arcana Chariot`, `Arcana Justice`, `Arcana Justice`, `Arcana Hermit`, `Arcana Fortune`, `Arcana Strength`, `Arcana Hanged Man`, `Nyx`, `Erebus`")
                .addField("Optional Bosses", "`Elizabeth`, `The Reaper`")
                .setFooter("Information gathered from the Megami Tensei Wiki", client.user.displayAvatarURL)
                .setTimestamp();

            message.channel.send(personalist).then(msg => {
                msg.react("◀️").then(r => { msg.react("▶️") });
                const backwardsFilter = (reaction, user) => reaction.emoji.name === "◀️" && user.id === message.author.id;
                const forwardsFilter = (reaction, user) => reaction.emoji.name === "▶️" && user.id === message.author.id;
                const backwards = msg.createReactionCollector(backwardsFilter, { time: 120000 });
                const forwards = msg.createReactionCollector(forwardsFilter, { time: 120000 });
                let pageNum = 1;

                forwards.on("collect", r => {
                    if(pageNum === 2){
                        pageNum = 0;
                        msg.edit(personalist);
                    }
                    if(pageNum === 1){
                        pageNum = 2;
                        msg.edit(shadowlist);
                    }
                    if(pageNum === 0){
                        pageNum = 1;
                        msg.edit(personalist);
                    }
                });

                backwards.on("collect", r => {
                    if(pageNum === 1){
                        pageNum = 0;
                        msg.edit(shadowlist);
                    }
                    if(pageNum === 2){
                        pageNum = 1;
                        msg.edit(personalist);
                    }
                    if(pageNum === 0){
                        pageNum = 2;
                        msg.edit(shadowlist);
                    }
                });
            })

            return;
        }

        //p3personas command file
        switch (query) {
            //fool arcana
            case "orpheus":
                p3pcommand.run(client, message, args, query);
                break;
        }

        //p3shadows command file
        switch (query) {
            //maya shadows
            case "maya":
                p3scommand.run(client, message, args, query);
                break;
        }

        //p3fesfusion command file
        switch (query) {
            //fool arcana
            case "orpheus_/f":
                p3ffcommand.run(client, message, args, query);
                break;
        }

        //p3pfusion command file
        switch (query) {
            //fool arcana
            case "orpheus_/p":
                p3pfcommand.run(client, message, args, query);
                break;
        }
    }
}