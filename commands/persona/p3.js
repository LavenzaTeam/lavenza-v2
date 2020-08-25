const { MessageEmbed } = require("discord.js");
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
            let personalist = new MessageEmbed()
                .setTitle("Persona 3 FES/Portable Personas")
                .setURL("https://megamitensei.fandom.com/wiki/List_of_Persona_3_Portable_Personas")
                .setColor(config.colors.p3blue)
                .setThumbnail(client.user.avatarURL())
                .setDescription(`Below is a list of every single Persona in the Persona 3 games! \nTo view the information about a specified Persona, run the command \`${config.prefix}p3 <persona name>\` \nTo view the fusion information for a specified Persona, run the command \`${config.prefix}p3 <persona name> /f \` or \`/p\` \n[Report a Data Error!](${config.servers.discordinvite})`)
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
                .setFooter("Information gathered from the Megami Tensei Wiki | (Page 1/3)", client.user.avatarURL())
                .setTimestamp();

            let shadowlist = new MessageEmbed()
                .setTitle("List of Persona 3 FES/Portable Shadows")
                .setURL("https://megamitensei.fandom.com/wiki/List_of_Persona_3_Shadows")
                .setDescription(`Below is a list of every Shadow in the Persona 3 Games! \nTo view the information about a specified shadow, run the command \`${config.prefix}p3 <shadow name>\` \n[Report a Data Error!](${config.servers.discordinvite})`)
                .setColor(config.colors.p3blue)
                .setThumbnail(client.user.avatarURL())
                .addField("Normal Shadow Types", "`Maya`, `Hand`, `Table`, `Magus`, `Tiara`, `Book`, `Idol`, `Eagle`, `Relic`, `Mother`, `Beetle`, `Knight`, `Castle`, `Twins`, `Tower`, `Sigil`, `Cupid`, `Dancer`, `Snake`, `Wheel`, `Drive`, `Turret`, `Balance`, `Sword`, `Giant`, `Raven`, `Phantom`, `Seeker`, `Dice`, `Sand`, `Beast`, `Gigas`, `Musha`, `Minotaur`, `Cyclops`, `Jotun`")
                .addField("Golden Shadows", "`Wealth Hand`, `Treasure Hand`, `Supreme Hand`, `Opulent Hand`, `Luxury Hand`, `Glorious Hand`")
                .addField("Full Moon Bosses", "`Arcana Priestess`, `Arcana Empress`, `Arcana Emperor`, `Arcana Hierophant`, `Arcana Lovers`, `Arcana Chariot`, `Arcana Justice`, `Arcana Justice`, `Arcana Hermit`, `Arcana Fortune`, `Arcana Strength`, `Arcana Hanged Man`, `Nyx`, `Erebus`")
                .addField("Optional Bosses", "`Elizabeth`, `The Reaper`")
                .setFooter("Information gathered from the Megami Tensei Wiki | (Page 2/3)", client.user.avatarURL())
                .setTimestamp();

            let socaillinklist = new MessageEmbed()
                .setTitle("List of Persona 3 FES/Portable Social Links")
                .setURL("https://megamitensei.fandom.com/wiki/Social_Link")
                .setDescription(`Below is a list of every Socail Link in the Persona 3 games. \nTo view the information about a specified Social Link, run the command \`${config.prefix}p3 <social link> /sl\` \n[Report a Data Error!](${config.servers.discordinvite})`)
                .setColor(config.colors.p3blue)
                .setThumbnail(client.user.avatarURL())
                .addField("Male MC Social Links", "`SEES`, `Kenji Tomochika`, `Fuuka Yamagishi`, `Mitsuru Kirijou`, `Hidetoshi Odagiri`, `Bunkichi/Mitsuko Kitamura`, `Yukari Takeba`, `Kazushi Miyamoto`, `Chihiro Fushimi`, `Maya`, `Keisuke Hiraga`, `Yuko Nishiwaki`, `Maiko Oohashi`, `Pharos`, `Bebe`, `Tanaka`, `Mutatsu`, `Mamoru Hayase`, `Nozomi Suemitsu`, `Akinari Kamiki`, `Aigis`")
                .addField("Female MC Social Links", "`SEES`, `Junpei Iori`, `Fuuka Yamagishi`, `Mitsuru Kirijo`, `Hidetoshi Odagiri`, `Bunkichi/Mitsuko Kitamura`, `Yukari Takeba`, `Rio Iwasaki`, `Ken Amada`, `Saori Hasegawa`, `Ryoji Mochizuki`, `Koromaru`, `Maiko Oohashi`, `Pharos`, `Bebe`, `Tanaka`, `Mutatsu`, `Akihiko Sanada`, `Shinjiro Aragaki`, `Akinari Kamiki`, `Aigis`")
                .setFooter("Information gathered from the Megami Tensei Wiki | (Page 3/3)", client.user.avatarURL())
                .setTimestamp();

            message.channel.send(personalist).then(msg => {
                msg.react("◀️").then(r => { msg.react("▶️") });
                const backwardsFilter = (reaction, user) => reaction.emoji.name === "◀️" && user.id === message.author.id;
                const forwardsFilter = (reaction, user) => reaction.emoji.name === "▶️" && user.id === message.author.id;
                const backwards = msg.createReactionCollector(backwardsFilter, { time: 120000 });
                const forwards = msg.createReactionCollector(forwardsFilter, { time: 120000 });
                let pageNum = 1;

                forwards.on("collect", r => {
                    if (pageNum === 3) {
                        pageNum = 0;
                        msg.edit(personalist);
                    }
                    if (pageNum === 2) {
                        pageNum = 3;
                        msg.edit(socaillinklist);
                    }
                    if (pageNum === 1) {
                        pageNum = 2;
                        msg.edit(shadowlist);
                    }
                    if (pageNum === 0) {
                        pageNum = 1;
                        msg.edit(personalist);
                    }
                });

                backwards.on("collect", r => {
                    if (pageNum === 1) {
                        pageNum = 0;
                        msg.edit(socaillinklist);
                    }
                    if (pageNum === 2) {
                        pageNum = 1;
                        msg.edit(personalist);
                    }
                    if (pageNum === 3) {
                        pageNum = 2;
                        msg.edit(shadowlist);
                    }
                    if (pageNum === 0) {
                        pageNum = 3;
                        msg.edit(socaillinklist);
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
                return;
            case "orpheus_/a":
                p3pcommand.run(client, message, args, query);
                return;
            case "slime":
                p3pcommand.run(client, message, args, query);
                return;
            case "slime_/a":
                p3pcommand.run(client, message, args, query);
                return;
            case "legion":
                p3pcommand.run(client, message, args, query);
                return;
            case "black_frost":
                p3pcommand.run(client, message, args, query);
                return;
            case "ose":
                p3pcommand.run(client, message, args, query);
                return;
            case "decarabia":
                p3pcommand.run(client, message, args, query);
                return;
            case "loki":
                p3pcommand.run(client, message, args, query);
                return;
            case "susano-o":
                p3pcommand.run(client, message, args, query);
                return;
            case "orpheus_telos":
                p3pcommand.run(client, message, args, query);
                return;

            //magician arcana
            case "hermes":
                p3pcommand.run(client, message, args, query);
                return;
            case "trismegistus":
                p3pcommand.run(client, message, args, query);
                return;
            case "trismegistus_/a":
                p3pcommand.run(client, message, args, query);
                return;
            case "nekomata":
                p3pcommand.run(client, message, args, query);
                return;
            case "jack_frost":
                p3pcommand.run(client, message, args, query);
                return;
            case "pyro_jack":
                p3pcommand.run(client, message, args, query);
                return;
            case "pyro_jack_/a":
                p3pcommand.run(client, message, args, query);
                return;
            case "hua_po":
                p3pcommand.run(client, message, args, query);
                return;
            case "hua_po_/a":
                p3pcommand.run(client, message, args, query);
                return;
            case "sati":
                p3pcommand.run(client, message, args, query);
                return;
            case "orobas":
                p3pcommand.run(client, message, args, query);
                return;
            case "rangda":
                p3pcommand.run(client, message, args, query);
                return;
            case "surt":
                p3pcommand.run(client, message, args, query);
                return;
            case "surt_/a":
                p3pcommand.run(client, message, args, query);
                return;

            //preistess arcana
            case "lucia":
                p3pcommand.run(client, message, args, query);
                return;
            case "juno":
                p3pcommand.run(client, message, args, query);
                return;
            case "juno_/a":
                p3pcommand.run(client, message, args, query);
                return;
            case "apsaras":
                p3pcommand.run(client, message, args, query);
                return;
            case "unicorn":
                p3pcommand.run(client, message, args, query);
                return;
            case "high_pixie":
                p3pcommand.run(client, message, args, query);
                return;
            case "sarasvati":
                p3pcommand.run(client, message, args, query);
                return;
            case "ganga":
                p3pcommand.run(client, message, args, query);
                return;
            case "parvati":
                p3pcommand.run(client, message, args, query);
                return;
            case "parvati_/a":
                p3pcommand.run(client, message, args, query);
                return;
            case "kikuri-hime":
                p3pcommand.run(client, message, args, query);
                return;
            case "scathach":
                p3pcommand.run(client, message, args, query);
                return;

            //empress arcana
            case "penthesilea":
                p3pcommand.run(client, message, args, query);
                return;
            case "artemisia":
                p3pcommand.run(client, message, args, query);
                return;
            case "artemisia_/a":
                p3pcommand.run(client, message, args, query);
                return;
            case "leanan_sidhe":
                p3pcommand.run(client, message, args, query);
                return;
            case "yaksini":
                p3pcommand.run(client, message, args, query);
                return;
            case "lakshmi":
                p3pcommand.run(client, message, args, query);
                return;
            case "hariti":
                p3pcommand.run(client, message, args, query);
                return;
            case "gabriel":
                p3pcommand.run(client, message, args, query);
                return;
            case "mother_harlot":
                p3pcommand.run(client, message, args, query);
                return;
            case "skadi":
                p3pcommand.run(client, message, args, query);
                return;
            case "alilat":
                p3pcommand.run(client, message, args, query);
                return;

            //emperor arcana
            case "polydeuces":
                p3pcommand.run(client, message, args, query);
                return;
            case "ceasar":
                p3pcommand.run(client, message, args, query);
                return;
            case "ceasar_/a":
                p3pcommand.run(client, message, args, query);
                return;
            case "forneus":
                p3pcommand.run(client, message, args, query);
                return;
            case "oberon":
                p3pcommand.run(client, message, args, query);
                return;
            case "take-mikazuchi":
                p3pcommand.run(client, message, args, query);
                return;
            case "king_frost":
                p3pcommand.run(client, message, args, query);
                return;
            case "raja_naga":
                p3pcommand.run(client, message, args, query);
                return;
            case "kingu":
                p3pcommand.run(client, message, args, query);
                return;
            case "barong":
                p3pcommand.run(client, message, args, query);
                return;
            case "odin":
                p3pcommand.run(client, message, args, query);
                return;
            case "odin_/a":
                p3pcommand.run(client, message, args, query);
                return;

            //hierophant arcana
            case "castor":
                p3pcommand.run(client, message, args, query);
                return;
            case "omoikane":
                p3pcommand.run(client, message, args, query);
                return;
            case "berith":
                p3pcommand.run(client, message, args, query);
                return;
            case "shiisaa":
                p3pcommand.run(client, message, args, query);
                return;
            case "flauros":
                p3pcommand.run(client, message, args, query);
                return;
            case "thoth":
                p3pcommand.run(client, message, args, query);
                return;
            case "hokuto_seikun":
                p3pcommand.run(client, message, args, query);
                return;
            case "daisoujou":
                p3pcommand.run(client, message, args, query);
                return;
            case "kohryu":
                p3pcommand.run(client, message, args, query);
                return;
            case "kohryu_/a":
                p3pcommand.run(client, message, args, query);
                return;

            //lovers arcana
            case "io":
                p3pcommand.run(client, message, args, query);
                return;
            case "isis":
                p3pcommand.run(client, message, args, query);
                return;
            case "isis_/a":
                p3pcommand.run(client, message, args, query);
                return;
            case "pixie":
                p3pcommand.run(client, message, args, query);
                return;
            case "alp":
                p3pcommand.run(client, message, args, query);
                return;
            case "tam_lin":
                p3pcommand.run(client, message, args, query);
                return;
            case "narcissus":
                p3pcommand.run(client, message, args, query);
                return;
            case "queen_mab":
                p3pcommand.run(client, message, args, query);
                return;
            case "saki_mitama":
                p3pcommand.run(client, message, args, query);
                return;
            case "titania":
                p3pcommand.run(client, message, args, query);
                return;
            case "raphael":
                p3pcommand.run(client, message, args, query);
                return;
            case "cybele":
                p3pcommand.run(client, message, args, query);
                return;
            case "cybele_/a":
                p3pcommand.run(client, message, args, query);
                return;

            //chariot arcana
            case "palladion":
                p3pcommand.run(client, message, args, query);
                return;
            case "pallas_athena":
                p3pcommand.run(client, message, args, query);
                return;
            case "ara_mitama":
                p3pcommand.run(client, message, args, query);
                return;
            case "chimera":
                p3pcommand.run(client, message, args, query);
                return;
            case "zouchouten":
                p3pcommand.run(client, message, args, query);
                return;
            case "ares":
                p3pcommand.run(client, message, args, query);
                return;
            case "oumitsunu":
                p3pcommand.run(client, message, args, query);
                return;
            case "nata_taishi":
                p3pcommand.run(client, message, args, query);
                return;
            case "koumokuten":
                p3pcommand.run(client, message, args, query);
                return;
            case "thor":
                p3pcommand.run(client, message, args, query);
                return;
            case "thor_/a":
                p3pcommand.run(client, message, args, query);
                return;

            //justice arcana
            case "nemesis":
                p3pcommand.run(client, message, args, query);
                return;
            case "kala_nemi":
                p3pcommand.run(client, message, args, query);
                return;
            case "kala_nemi_/a":
                p3pcommand.run(client, message, args, query);
                return;
            case "angel":
                p3pcommand.run(client, message, args, query);
                return;
            case "archangel":
                p3pcommand.run(client, message, args, query);
                return;
            case "principality":
                p3pcommand.run(client, message, args, query);
                return;
            case "power":
                p3pcommand.run(client, message, args, query);
                return;
            case "virtue":
                p3pcommand.run(client, message, args, query);
                return;
            case "dominion":
                p3pcommand.run(client, message, args, query);
                return;
            case "throne":
                p3pcommand.run(client, message, args, query);
                return;
            case "melchizedek":
                p3pcommand.run(client, message, args, query);
                return;
            case "melchizedek_/a":
                p3pcommand.run(client, message, args, query);
                return;

            //hermit arcana
            case "yomostu_shikome":
                p3pcommand.run(client, message, args, query);
                return;
            case "naga":
                p3pcommand.run(client, message, args, query);
                return;
            case "lamia":
                p3pcommand.run(client, message, args, query);
                return;
            case "mothman":
                p3pcommand.run(client, message, args, query);
                return;
            case "taraka":
                p3pcommand.run(client, message, args, query);
                return;
            case "kurama_tengu":
                p3pcommand.run(client, message, args, query);
                return;
            case "nebiros":
                p3pcommand.run(client, message, args, query);
                return;
            case "kumbhanda":
                p3pcommand.run(client, message, args, query);
                return;
            case "arahabaki":
                p3pcommand.run(client, message, args, query);
                return;

            //fortune arcana
            case "fortuna":
                p3pcommand.run(client, message, args, query);
                return;
            case "empusa":
                p3pcommand.run(client, message, args, query);
                return;
            case "kusi_mitama":
                p3pcommand.run(client, message, args, query);
                return;
            case "clotho":
                p3pcommand.run(client, message, args, query);
                return;
            case "lachesis":
                p3pcommand.run(client, message, args, query);
                return;
            case "atropos":
                p3pcommand.run(client, message, args, query);
                return;
            case "norn":
                p3pcommand.run(client, message, args, query);
                return;

            //strength arcana
            case "cerberus":
                p3pcommand.run(client, message, args, query);
                return;
            case "cerberus_/a":
                p3pcommand.run(client, message, args, query);
                return;
            case "valkyrie":
                p3pcommand.run(client, message, args, query);
                return;
            case "rakshasa":
                p3pcommand.run(client, message, args, query);
                return;
            case "titan":
                p3pcommand.run(client, message, args, query);
                return;
            case "jikokuten":
                p3pcommand.run(client, message, args, query);
                return;
            case "hanuman":
                p3pcommand.run(client, message, args, query);
                return;
            case "narasimha":
                p3pcommand.run(client, message, args, query);
                return;
            case "kali":
                p3pcommand.run(client, message, args, query);
                return;
            case "siegfried":
                p3pcommand.run(client, message, args, query);
                return;
            case "siegfried_/a":
                p3pcommand.run(client, message, args, query);
                return;

            //hanged man arcana
            case "inugami":
                p3pcommand.run(client, message, args, query);
                return;
            case "take-minakata":
                p3pcommand.run(client, message, args, query);
                return;
            case "orthus":
                p3pcommand.run(client, message, args, query);
                return;
            case "vasuki":
                p3pcommand.run(client, message, args, query);
                return;
            case "ubelluris":
                p3pcommand.run(client, message, args, query);
                return;
            case "hecatoncheires":
                p3pcommand.run(client, message, args, query);
                return;
            case "hell_biker":
                p3pcommand.run(client, message, args, query);
                return;
            case "attis":
                p3pcommand.run(client, message, args, query);
                return;
            case "attis_/a":
                p3pcommand.run(client, message, args, query);
                return;

            //death arcana
            case "ghoul":
                p3pcommand.run(client, message, args, query);
                return;
            case "pale_rider":
                p3pcommand.run(client, message, args, query);
                return;
            case "loa":
                p3pcommand.run(client, message, args, query);
                return;
            case "samael":
                p3pcommand.run(client, message, args, query);
                return;
            case "mot":
                p3pcommand.run(client, message, args, query);
                return;
            case "alice":
                p3pcommand.run(client, message, args, query);
                return;
            case "thanatos":
                p3pcommand.run(client, message, args, query);
                return;
            case "thanatos_/a":
                p3pcommand.run(client, message, args, query);
                return;

            //temperance arcana
            case "nigi_mitama":
                p3pcommand.run(client, message, args, query);
                return;
            case "mithra":
                p3pcommand.run(client, message, args, query);
                return;
            case "genbu":
                p3pcommand.run(client, message, args, query);
                return;
            case "seiryuu":
                p3pcommand.run(client, message, args, query);
                return;
            case "okuninushi":
                p3pcommand.run(client, message, args, query);
                return;
            case "sukazu":
                p3pcommand.run(client, message, args, query);
                return;
            case "byakko":
                p3pcommand.run(client, message, args, query);
                return;
            case "yurlungur":
                p3pcommand.run(client, message, args, query);
                return;

            //devil arcana
            case "lilim":
                p3pcommand.run(client, message, args, query);
                return;
            case "mokoi":
                p3pcommand.run(client, message, args, query);
                return;
            case "vetala":
                p3pcommand.run(client, message, args, query);
                return;
            case "incubus":
                p3pcommand.run(client, message, args, query);
                return;
            case "succubus":
                p3pcommand.run(client, message, args, query);
                return;
            case "pazuzu":
                p3pcommand.run(client, message, args, query);
                return;
            case "lilith":
                p3pcommand.run(client, message, args, query);
                return;
            case "abaddon":
                p3pcommand.run(client, message, args, query);
                return;
            case "beelzebub":
                p3pcommand.run(client, message, args, query);
                return;

            //tower arcana
            case "eligor":
                p3pcommand.run(client, message, args, query);
                return;
            case "cu_chulainn":
                p3pcommand.run(client, message, args, query);
                return;
            case "bishamonten":
                p3pcommand.run(client, message, args, query);
                return;
            case "seiten_taisei":
                p3pcommand.run(client, message, args, query);
                return;
            case "masakado":
                p3pcommand.run(client, message, args, query);
                return;
            case "mara":
                p3pcommand.run(client, message, args, query);
                return;
            case "shiva":
                p3pcommand.run(client, message, args, query);
                return;
            case "chi_you":
                p3pcommand.run(client, message, args, query);
                return;

            //star arcana
            case "neko_shogun":
                p3pcommand.run(client, message, args, query);
                return;
            case "setanta":
                p3pcommand.run(client, message, args, query);
                return;
            case "nandi":
                p3pcommand.run(client, message, args, query);
                return;
            case "kaiwan":
                p3pcommand.run(client, message, args, query);
                return;
            case "ganesha":
                p3pcommand.run(client, message, args, query);
                return;
            case "garuda":
                p3pcommand.run(client, message, args, query);
                return;
            case "kartikeya":
                p3pcommand.run(client, message, args, query);
                return;
            case "saturnus":
                p3pcommand.run(client, message, args, query);
                return;
            case "helel":
                p3pcommand.run(client, message, args, query);
                return;

            //moon arcana
            case "gurr":
                p3pcommand.run(client, message, args, query);
                return;
            case "yamatano-orochi":
                p3pcommand.run(client, message, args, query);
                return;
            case "girimehkala":
                p3pcommand.run(client, message, args, query);
                return;
            case "dionysus":
                p3pcommand.run(client, message, args, query);
                return;
            case "chernobog":
                p3pcommand.run(client, message, args, query);
                return;
            case "seth":
                p3pcommand.run(client, message, args, query);
                return;
            case "baal_zebul":
                p3pcommand.run(client, message, args, query);
                return;
            case "sandalphon":
                p3pcommand.run(client, message, args, query);
                return;

            //sun arcana
            case "yatagarasu":
                p3pcommand.run(client, message, args, query);
                return;
            case "quetzalcoatl":
                p3pcommand.run(client, message, args, query);
                return;
            case "jatayu":
                p3pcommand.run(client, message, args, query);
                return;
            case "horus":
                p3pcommand.run(client, message, args, query);
                return;
            case "suparna":
                p3pcommand.run(client, message, args, query);
                return;
            case "vishnu":
                p3pcommand.run(client, message, args, query);
                return;
            case "asura":
                p3pcommand.run(client, message, args, query);
                return;

            //judgement arcana
            case "anubis":
                p3pcommand.run(client, message, args, query);
                return;
            case "trumpeter":
                p3pcommand.run(client, message, args, query);
                return;
            case "michael":
                p3pcommand.run(client, message, args, query);
                return;
            case "satan":
                p3pcommand.run(client, message, args, query);
                return;
            case "lucifer":
                p3pcommand.run(client, message, args, query);
                return;
            case "messiah":
                p3pcommand.run(client, message, args, query);
                return;

            //aeon arcana
            case "uriel":
                p3pcommand.run(client, message, args, query);
                return;
            case "nidhoggr":
                p3pcommand.run(client, message, args, query);
                return;
            case "ananta":
                p3pcommand.run(client, message, args, query);
                return;
            case "atavaka":
                p3pcommand.run(client, message, args, query);
                return;
            case "metatron":
                p3pcommand.run(client, message, args, query);
                return;
        }

        //p3shadows command file
        switch (query) {
            //maya shadows
            case "maya":
                p3scommand.run(client, message, args, query);
                return;
            case "cowardly_maya":
                p3scommand.run(client, message, args, query);
                return;
            case "cowardly_maya_/a":
                p3scommand.run(client, message, args, query);
                return;
            case "merciless_maya":
                p3scommand.run(client, message, args, query);
                return;
            case "merciless_maya_/a":
                p3scommand.run(client, message, args, query);
                return;
            case "frivolous_maya":
                p3scommand.run(client, message, args, query);
                return;
            case "haughty_maya":
                p3scommand.run(client, message, args, query);
                return;
            case "indolent_maya":
                p3scommand.run(client, message, args, query);
                return;
            case "insidious_maya":
                p3scommand.run(client, message, args, query);
                return;
            case "insidious_maya_/a":
                p3scommand.run(client, message, args, query);
                return;
            case "ill_fated_maya":
                p3scommand.run(client, message, args, query);
                return;
            case "ill_fated_maya_/a":
                p3scommand.run(client, message, args, query);
                return;
            case "bigoted_maya":
                p3scommand.run(client, message, args, query);
                return;
            case "bigoted_maya_/a":
                p3scommand.run(client, message, args, query);
                return;
            case "desirous_maya":
                p3scommand.run(client, message, args, query);
                return;
            case "desirous_maya_/a":
                p3scommand.run(client, message, args, query);
                return;
            case "imprudent_maya":
                p3scommand.run(client, message, args, query);
                return;
            case "imprudent_maya_/a":
                p3scommand.run(client, message, args, query);
                return;
            case "visceral_maya":
                p3scommand.run(client, message, args, query);
                return;
            case "visceral_maya_/a":
                p3scommand.run(client, message, args, query);
                return;
            case "devious_maya":
                p3scommand.run(client, message, args, query);
                return;
            case "devious_maya_/a":
                p3scommand.run(client, message, args, query);
                return;
            case "conceited_maya_/a":
                p3scommand.run(client, message, args, query);
                return;

            //hand shadows
            case "hand":
                p3scommand.run(client, message, args, query);
                return;
            case "magic_hand":
                p3scommand.run(client, message, args, query);
                return;
            case "magic_hand_/a":
                p3scommand.run(client, message, args, query);
                return;
            case "dancing_hand":
                p3scommand.run(client, message, args, query);
                return;
            case "dancing_hand_/a":
                p3scommand.run(client, message, args, query);
                return;
            case "killing_hand":
                p3scommand.run(client, message, args, query);
                return;
            case "killing_hand_/a":
                p3scommand.run(client, message, args, query);
                return;
            case "almighty_hand":
                p3scommand.run(client, message, args, query);
                return;

            //table shadows
            case "table":
                p3scommand.run(client, message, args, query);
                return;
            case "laughing_table":
                p3scommand.run(client, message, args, query);
                return;
            case "laughing_table_/a":
                p3scommand.run(client, message, args, query);
                return;
            case "crying_table":
                p3scommand.run(client, message, args, query);
                return;
            case "crying_table_/a":
                p3scommand.run(client, message, args, query);
                return;
            case "sleeping_table":
                p3scommand.run(client, message, args, query);
                return;
            case "sleeping_table_/a":
                p3scommand.run(client, message, args, query);
                return;
            case "angry_table":
                p3scommand.run(client, message, args, query);
                return;

            //magus shadows
            case "magus":
                p3scommand.run(client, message, args, query);
                return;
            case "magical_magus":
                p3scommand.run(client, message, args, query);
                return;
            case "wondrous_magus":
                p3scommand.run(client, message, args, query);
                return;
            case "wondrous_magus_/a":
                p3scommand.run(client, message, args, query);
                return;
            case "prime_magus":
                p3scommand.run(client, message, args, query);
                return;
            case "prime_magus_/a":
                p3scommand.run(client, message, args, query);
                return;
            case "grand_magus":
                p3scommand.run(client, message, args, query);
                return;

            //tiara shadows
            case "tiara":
                p3scommand.run(client, message, args, query);
                return;
            case "muttering_tiara":
                p3scommand.run(client, message, args, query);
                return;
            case "muttering_tiara_/a":
                p3scommand.run(client, message, args, query);
                return;
            case "grieving_tiara":
                p3scommand.run(client, message, args, query);
                return;
            case "grieving_tiara_/a":
                p3scommand.run(client, message, args, query);
                return;
            case "writhing_tiara":
                p3scommand.run(client, message, args, query);
                return;
            case "shouting_tiara":
                p3scommand.run(client, message, args, query);
                return;
            case "shouting_tiara_/a":
                p3scommand.run(client, message, args, query);
                return;

            //book shadows
            case "book":
                p3scommand.run(client, message, args, query);
                return;
            case "spurious_book":
                p3scommand.run(client, message, args, query);
                return;
            case "spurious_book_/a":
                p3scommand.run(client, message, args, query);
                return;
            case "maniacal_book":
                p3scommand.run(client, message, args, query);
                return;
            case "maniacal_book_/a":
                p3scommand.run(client, message, args, query);
                return;
            case "silent_book":
                p3scommand.run(client, message, args, query);
                return;
            case "wrathful_book":
                p3scommand.run(client, message, args, query);
                return;
            case "wrathful_book_/a":
                p3scommand.run(client, message, args, query);
                return;

            //idol shadows
            case "idol":
                p3scommand.run(client, message, args, query);
                return;
            case "tranquil_idol":
                p3scommand.run(client, message, args, query);
                return;
            case "tranquil_idol_/a":
                p3scommand.run(client, message, args, query);
                return;
            case "liberating_idol":
                p3scommand.run(client, message, args, query);
                return;
            case "liberating_idol_/a":
                p3scommand.run(client, message, args, query);
                return;
            case "ruinous_idol":
                p3scommand.run(client, message, args, query);
                return;
            case "ruinous_idol_/a":
                p3scommand.run(client, message, args, query);
                return;
            case "vehement_idol":
                p3scommand.run(client, message, args, query);
                return;
            case "primitive_idol_/a":
                p3scommand.run(client, message, args, query);
                return;

            //eagle shadows
            case "eagle":
                p3scommand.run(client, message, args, query);
                return;
            case "venus_eagle":
                p3scommand.run(client, message, args, query);
                return;
            case "venus_eagle_/a":
                p3scommand.run(client, message, args, query);
                return;
            case "dark_eagle":
                p3scommand.run(client, message, args, query);
                return;
            case "dark_eagle_/a":
                p3scommand.run(client, message, args, query);
                return;
            case "jupiter_eagle":
                p3scommand.run(client, message, args, query);
                return;
            case "eternal_eagle":
                p3scommand.run(client, message, args, query);
                return;

            //relic shadows
            case "relic":
                p3scommand.run(client, message, args, query);
                return;
            case "change_relic":
                p3scommand.run(client, message, args, query);
                return;
            case "change_relic_/a":
                p3scommand.run(client, message, args, query);
                return;
            case "constancy_relic":
                p3scommand.run(client, message, args, query);
                return;
            case "constancy_relic_/a":
                p3scommand.run(client, message, args, query);
                return;
            case "creation_relic":
                p3scommand.run(client, message, args, query);
                return;
            case "creation_relic_/a":
                p3scommand.run(client, message, args, query);
                return;
            case "growth_relic":
                p3scommand.run(client, message, args, query);
                return;
            case "affection_relic":
                p3scommand.run(client, message, args, query);
                return;

            //mother shadows
            case "mother":
                p3scommand.run(client, message, args, query);
                return;
            case "elegant_mother":
                p3scommand.run(client, message, args, query);
                return;
            case "elegant_mother_/a":
                p3scommand.run(client, message, args, query);
                return;
            case "regal_mother":
                p3scommand.run(client, message, args, query);
                return;
            case "regal_mother_/a":
                p3scommand.run(client, message, args, query);
                return;
            case "pistil_mother":
                p3scommand.run(client, message, args, query);
                return;
            case "divine_mother":
                p3scommand.run(client, message, args, query);
                return;

            //beetle shadows
            case "beetle":
                p3scommand.run(client, message, args, query);
                return;
            case "grave_beetle":
                p3scommand.run(client, message, args, query);
                return;
            case "grave_beetle_/a":
                p3scommand.run(client, message, args, query);
                return;
            case "adamant_beetle":
                p3scommand.run(client, message, args, query);
                return;
            case "golden_beetle":
                p3scommand.run(client, message, args, query);
                return;
            case "golden_beetle_/a":
                p3scommand.run(client, message, args, query);
                return;
            case "emperor_beetle":
                p3scommand.run(client, message, args, query);
                return;
            case "burning_beetle":
                p3scommand.run(client, message, args, query);
                return;

            //knight shadows
            case "knight":
                p3scommand.run(client, message, args, query);
                return;
            case "intrepid_knight":
                p3scommand.run(client, message, args, query);
                return;
            case "intrepid_knight_/a":
                p3scommand.run(client, message, args, query);
                return;
            case "avenger_knight":
                p3scommand.run(client, message, args, query);
                return;
            case "avenger_knight_/a":
                p3scommand.run(client, message, args, query);
                return;
            case "champion_knight":
                p3scommand.run(client, message, args, query);
                return;
            case "champion_knight_/a":
                p3scommand.run(client, message, args, query);
                return;
            case "hell_knight":
                p3scommand.run(client, message, args, query);
                return;
            case "hell_knight_/a":
                p3scommand.run(client, message, args, query);
                return;

            //castle shadows
            case "castle":
                p3scommand.run(client, message, args, query);
                return;
            case "death_castle":
                p3scommand.run(client, message, args, query);
                return;
            case "death_castle_/a":
                p3scommand.run(client, message, args, query);
                return;
            case "solid_castle":
                p3scommand.run(client, message, args, query);
                return;
            case "solid_castle_/a":
                p3scommand.run(client, message, args, query);
                return;
            case "power_castle":
                p3scommand.run(client, message, args, query);
                return;
            case "power_castle_/a":
                p3scommand.run(client, message, args, query);
                return;
            case "king_castle":
                p3scommand.run(client, message, args, query);
                return;

            //twins shadows
            case "twins":
                p3scommand.run(client, message, args, query);
                return;
            case "trance_twins":
                p3scommand.run(client, message, args, query);
                return;
            case "trance_twins_/a":
                p3scommand.run(client, message, args, query);
                return;
            case "killer_twins":
                p3scommand.run(client, message, args, query);
                return;
            case "killer_twins_/a":
                p3scommand.run(client, message, args, query);
                return;
            case "death_twins":
                p3scommand.run(client, message, args, query);
                return;
            case "crazy_twins":
                p3scommand.run(client, message, args, query);
                return;

            //tower shadows
            case "tower":
                p3scommand.run(client, message, args, query);
                return;
            case "dogmatic_tower":
                p3scommand.run(client, message, args, query);
                return;
            case "dogmatic_tower_/a":
                p3scommand.run(client, message, args, query);
                return;
            case "fanatic_tower":
                p3scommand.run(client, message, args, query);
                return;
            case "fanatic_tower_/a":
                p3scommand.run(client, message, args, query);
                return;
            case "apostate_tower":
                p3scommand.run(client, message, args, query);
                return;
            case "corrupt_tower_/a":
                p3scommand.run(client, message, args, query);
                return;
            case "grudge_tower_/a":
                p3scommand.run(client, message, args, query);
                return;

            //sigil shadows
            case "sigil":
                p3scommand.run(client, message, args, query);
                return;
            case "blue_sigil":
                p3scommand.run(client, message, args, query);
                return;
            case "blue_sigil_/a":
                p3scommand.run(client, message, args, query);
                return;
            case "red_sigil":
                p3scommand.run(client, message, args, query);
                return;
            case "red_sigil_/a":
                p3scommand.run(client, message, args, query);
                return;
            case "green_sigil":
                p3scommand.run(client, message, args, query);
                return;
            case "green_sigil_/a":
                p3scommand.run(client, message, args, query);
                return;
            case "white_sigil":
                p3scommand.run(client, message, args, query);
                return;

            //cupid shadows
            case "cupid":
                p3scommand.run(client, message, args, query);
                return;
            case "obsessed_cupid":
                p3scommand.run(client, message, args, query);
                return;
            case "obsessed_cupid_/a":
                p3scommand.run(client, message, args, query);
                return;
            case "jealous_cupid":
                p3scommand.run(client, message, args, query);
                return;
            case "jealous_cupid_/a":
                p3scommand.run(client, message, args, query);
                return;
            case "devoted_cupid":
                p3scommand.run(client, message, args, query);
                return;
            case "gracious_cupid":
                p3scommand.run(client, message, args, query);
                return;

            //dancer shadows
            case "dancer":
                p3scommand.run(client, message, args, query);
                return;
            case "soul_dancer":
                p3scommand.run(client, message, args, query);
                return;
            case "soul_dancer_/a":
                p3scommand.run(client, message, args, query);
                return;
            case "ardent_dancer":
                p3scommand.run(client, message, args, query);
                return;
            case "natural_dancer":
                p3scommand.run(client, message, args, query);
                return;
            case "natural_dancer_/a":
                p3scommand.run(client, message, args, query);
                return;
            case "royal_dancer":
                p3scommand.run(client, message, args, query);
                return;
            case "royal_dancer_/a":
                p3scommand.run(client, message, args, query);
                return;
            case "harem_dancer_/a":
                p3scommand.run(client, message, args, query);
                return;

            //snake shadows
            case "snake":
                p3scommand.run(client, message, args, query);
                return;
            case "lustful_snake":
                p3scommand.run(client, message, args, query);
                return;
            case "immoral_snake":
                p3scommand.run(client, message, args, query);
                return;
            case "carnal_snake":
                p3scommand.run(client, message, args, query);
                return;
            case "amorous_snake":
                p3scommand.run(client, message, args, query);
                return;
            case "stoic_snake_/a":
                p3scommand.run(client, message, args, query);
                return;

            //wheel shadows
            case "wheel":
                p3scommand.run(client, message, args, query);
                return;
            case "bestial_wheel":
                p3scommand.run(client, message, args, query);
                return;
            case "mach_wheel":
                p3scommand.run(client, message, args, query);
                return;
            case "mach_wheel_/a":
                p3scommand.run(client, message, args, query);
                return;
            case "brave_wheel":
                p3scommand.run(client, message, args, query);
                return;
            case "brave_wheel_/a":
                p3scommand.run(client, message, args, query);
                return;
            case "battle_wheel":
                p3scommand.run(client, message, args, query);
                return;

            //drive shadows
            case "drive":
                p3scommand.run(client, message, args, query);
                return;
            case "rampage_drive":
                p3scommand.run(client, message, args, query);
                return;
            case "wild_drive":
                p3scommand.run(client, message, args, query);
                return;
            case "wild_drive_/a":
                p3scommand.run(client, message, args, query);
                return;
            case "killer_drive":
                p3scommand.run(client, message, args, query);
                return;
            case "killer_drive_/a":
                p3scommand.run(client, message, args, query);
                return;
            case "slaughter_drive":
                p3scommand.run(client, message, args, query);
                return;
            case "slaughter_drive_/a":
                p3scommand.run(client, message, args, query);
                return;

            //turret shadows
            case "turret":
                p3scommand.run(client, message, args, query);
                return;
            case "arcane_turret":
                p3scommand.run(client, message, args, query);
                return;
            case "arcane_turret_/a":
                p3scommand.run(client, message, args, query);
                return;
            case "scarlet_turret":
                p3scommand.run(client, message, args, query);
                return;
            case "wicked_turret":
                p3scommand.run(client, message, args, query);
                return;
            case "wicked_turret_/a":
                p3scommand.run(client, message, args, query);
                return;
            case "hallowed_turret":
                p3scommand.run(client, message, args, query);
                return;
            case "berserk_turret_/a":
                p3scommand.run(client, message, args, query);
                return;
            case "spastic_turret_/a":
                p3scommand.run(client, message, args, query);
                return;

            //balance shadows
            case "balance":
                p3scommand.run(client, message, args, query);
                return;
            case "heat_balance":
                p3scommand.run(client, message, args, query);
                return;
            case "heat_balance_/a":
                p3scommand.run(client, message, args, query);
                return;
            case "sky_balance":
                p3scommand.run(client, message, args, query);
                return;
            case "sky_balance_/a":
                p3scommand.run(client, message, args, query);
                return;
            case "light_balance":
                p3scommand.run(client, message, args, query);
                return;
            case "light_balance_/a":
                p3scommand.run(client, message, args, query);
                return;
            case "world_balance":
                p3scommand.run(client, message, args, query);
                return;
            case "world_balance_/a":
                p3scommand.run(client, message, args, query);
                return;

            //sword shadows
            case "sword":
                p3scommand.run(client, message, args, query);
                return;
            case "justice_sword":
                p3scommand.run(client, message, args, query);
                return;
            case "justice_sword_/a":
                p3scommand.run(client, message, args, query);
                return;
            case "conviction_sword":
                p3scommand.run(client, message, args, query);
                return;
            case "conviction_sword_/a":
                p3scommand.run(client, message, args, query);
                return;
            case "judgement_sword":
                p3scommand.run(client, message, args, query);
                return;
            case "judgement_sword_/a":
                p3scommand.run(client, message, args, query);
                return;
            case "doom_sword":
                p3scommand.run(client, message, args, query);
                return;

            //giant shadows
            case "giant":
                p3scommand.run(client, message, args, query);
                return;
            case "order_giant":
                p3scommand.run(client, message, args, query);
                return;
            case "order_giant_/a":
                p3scommand.run(client, message, args, query);
                return;
            case "stasis_giant":
                p3scommand.run(client, message, args, query);
                return;
            case "stasis_giant_/a":
                p3scommand.run(client, message, args, query);
                return;
            case "harmony_giant":
                p3scommand.run(client, message, args, query);
                return;
            case "void_giant":
                p3scommand.run(client, message, args, query);
                return;
            case "void_giant_/a":
                p3scommand.run(client, message, args, query);
                return;
            case "loss_giant_/a":
                p3scommand.run(client, message, args, query);
                return;

            //raven shadows
            case "raven":
                p3scommand.run(client, message, args, query);
                return;
            case "black_raven":
                p3scommand.run(client, message, args, query);
                return;
            case "black_raven_/a":
                p3scommand.run(client, message, args, query);
                return;
            case "vicious_raven":
                p3scommand.run(client, message, args, query);
                return;
            case "vicious_raven_/a":
                p3scommand.run(client, message, args, query);
                return;
            case "amenti_raven":
                p3scommand.run(client, message, args, query);
                return;
            case "ice_raven":
                p3scommand.run(client, message, args, query);
                return;
            case "ice_raven_/a":
                p3scommand.run(client, message, args, query);
                return;

            //phantom shadows
            case "phantom":
                p3scommand.run(client, message, args, query);
                return;
            case "phantom_mage":
                p3scommand.run(client, message, args, query);
                return;
            case "phantom_master":
                p3scommand.run(client, message, args, query);
                return;
            case "phantom_master_/a":
                p3scommand.run(client, message, args, query);
                return;
            case "phantom_lord":
                p3scommand.run(client, message, args, query);
                return;
            case "phantom_king":
                p3scommand.run(client, message, args, query);
                return;
            case "phantom_hero_/a":
                p3scommand.run(client, message, args, query);
                return;

            //seeker shadows
            case "seeker":
                p3scommand.run(client, message, args, query);
                return;
            case "death_seeker":
                p3scommand.run(client, message, args, query);
                return;
            case "death_seeker_/a":
                p3scommand.run(client, message, args, query);
                return;
            case "fate_seeker":
                p3scommand.run(client, message, args, query);
                return;
            case "noble_seeker":
                p3scommand.run(client, message, args, query);
                return;
            case "acheron_seeker":
                p3scommand.run(client, message, args, query);
                return;
            case "acheron_seeker_/a":
                p3scommand.run(client, message, args, query);
                return;

            //dice shadows
            case "dice":
                p3scommand.run(client, message, args, query);
                return;
            case "bronze_dice":
                p3scommand.run(client, message, args, query);
                return;
            case "bronze_dice_/a":
                p3scommand.run(client, message, args, query);
                return;
            case "mind_dice":
                p3scommand.run(client, message, args, query);
                return;
            case "curse_dice":
                p3scommand.run(client, message, args, query);
                return;
            case "curse_dice_/a":
                p3scommand.run(client, message, args, query);
                return;
            case "reckoning_dice":
                p3scommand.run(client, message, args, query);
                return;
            case "iron_dice":
                p3scommand.run(client, message, args, query);
                return;
            case "death_dice":
                p3scommand.run(client, message, args, query);
                return;
            case "death_dice_/a":
                p3scommand.run(client, message, args, query);
                return;
            case "silver_dice":
                p3scommand.run(client, message, args, query);
                return;
            case "silver_dice_/a":
                p3scommand.run(client, message, args, query);
                return;
            case "platinum_dice":
                p3scommand.run(client, message, args, query);
                return;

            //sand shadows
            case "sand":
                p3scommand.run(client, message, args, query);
                return;
            case "flowing_sand":
                p3scommand.run(client, message, args, query);
                return;
            case "flowing_sand_/a":
                p3scommand.run(client, message, args, query);
                return;
            case "perpetual_sand":
                p3scommand.run(client, message, args, query);
                return;
            case "infinite_sand":
                p3scommand.run(client, message, args, query);
                return;
            case "eternal_sand":
                p3scommand.run(client, message, args, query);
                return;

            //beast shadows
            case "beast":
                p3scommand.run(client, message, args, query);
                return;
            case "wild_beast":
                p3scommand.run(client, message, args, query);
                return;
            case "wild_beast_/a":
                p3scommand.run(client, message, args, query);
                return;
            case "enslaved_beast":
                p3scommand.run(client, message, args, query);
                return;
            case "enslaved_beast_/a":
                p3scommand.run(client, message, args, query);
                return;
            case "mighty_beast":
                p3scommand.run(client, message, args, query);
                return;
            case "nemean_beast":
                p3scommand.run(client, message, args, query);
                return;
            case "el_dorado_beast_/a":
                p3scommand.run(client, message, args, query);
                return;

            //gigas shadows
            case "gigas":
                p3scommand.run(client, message, args, query);
                return;
            case "steel_gigas":
                p3scommand.run(client, message, args, query);
                return;
            case "steel_gigas_/a":
                p3scommand.run(client, message, args, query);
                return;
            case "furious_gigas":
                p3scommand.run(client, message, args, query);
                return;
            case "furious_gigas_/a":
                p3scommand.run(client, message, args, query);
                return;
            case "mythical_gigas":
                p3scommand.run(client, message, args, query);
                return;
            case "mythical_gigas_/a":
                p3scommand.run(client, message, args, query);
                return;
            case "daring_gigas":
                p3scommand.run(client, message, args, query);
                return;
            case "immortal_gigas_/a":
                p3scommand.run(client, message, args, query);
                return;

            //musha shadows
            case "musha":
                p3scommand.run(client, message, args, query);
                return;
            case "hakurou_musha":
                p3scommand.run(client, message, args, query);
                return;
            case "kaiden_musha":
                p3scommand.run(client, message, args, query);
                return;
            case "kaiden_musha_/a":
                p3scommand.run(client, message, args, query);
                return;
            case "onnen_musha":
                p3scommand.run(client, message, args, query);
                return;
            case "onnen_musha_/a":
                p3scommand.run(client, message, args, query);
                return;
            case "tenjin_musha":
                p3scommand.run(client, message, args, query);
                return;
            case "tenjin_musha_/a":
                p3scommand.run(client, message, args, query);
                return;

            //minotaur shadows
            case "minotaur":
                p3scommand.run(client, message, args, query);
                return;
            case "minotaur_iv":
                p3scommand.run(client, message, args, query);
                return;
            case "minotaur_iv_/a":
                p3scommand.run(client, message, args, query);
                return;
            case "minotaur_iii":
                p3scommand.run(client, message, args, query);
                return;
            case "minotaur_ii":
                p3scommand.run(client, message, args, query);
                return;
            case "minotaur_i":
                p3scommand.run(client, message, args, query);
                return;
            case "neo_minotaur_/a":
                p3scommand.run(client, message, args, query);
                return;

            //cyclops shadows
            case "cyclops":
                p3scommand.run(client, message, args, query);
                return;
            case "mighty_cyclops":
                p3scommand.run(client, message, args, query);
                return;
            case "mighty_cyclops_/a":
                p3scommand.run(client, message, args, query);
                return;
            case "mad_cyclops":
                p3scommand.run(client, message, args, query);
                return;
            case "mad_cyclops_/a":
                p3scommand.run(client, message, args, query);
                return;
            case "fierce_cyclops":
                p3scommand.run(client, message, args, query);
                return;
            case "chaos_cyclops":
                p3scommand.run(client, message, args, query);
                return;
            case "chaos_cyclops_/a":
                p3scommand.run(client, message, args, query);
                return;
            case "brilliant_cyclops_/a":
                p3scommand.run(client, message, args, query);
                return;
            case "rebellious_cyclops_/a":
                p3scommand.run(client, message, args, query);
                return;

            //jotun shadows
            case "jotun":
                p3scommand.run(client, message, args, query);
                return;
            case "jotun_of_power":
                p3scommand.run(client, message, args, query);
                return;
            case "jotun_of_power_/a":
                p3scommand.run(client, message, args, query);
                return;
            case "jotun_of_blood":
                p3scommand.run(client, message, args, query);
                return;
            case "jotun_of_blood_/a":
                p3scommand.run(client, message, args, query);
                return;
            case "jotun_of_grief":
                p3scommand.run(client, message, args, query);
                return;
            case "jotun_of_evil":
                p3scommand.run(client, message, args, query);
                return;
            case "jotun_of_evil_/a":
                p3scommand.run(client, message, args, query);
                return;

            //golden shadows
            case "wealth_hand":
                p3scommand.run(client, message, args, query);
                return;
            case "wealth_hand_/a":
                p3scommand.run(client, message, args, query);
                return;
            case "treasure_hand":
                p3scommand.run(client, message, args, query);
                return;
            case "treasure_hand_/a":
                p3scommand.run(client, message, args, query);
                return;
            case "supreme_hand":
                p3scommand.run(client, message, args, query);
                return;
            case "supreme_hand_/a":
                p3scommand.run(client, message, args, query);
                return;
            case "opulent_hand":
                p3scommand.run(client, message, args, query);
                return;
            case "luxury_hand":
                p3scommand.run(client, message, args, query);
                return;
            case "glorious_hand":
                p3scommand.run(client, message, args, query);
                return;

            //full moon bosses
            case "arcana_priestess":
                p3scommand.run(client, message, args, query);
                return;
            case "arcana_empress":
                p3scommand.run(client, message, args, query);
                return;
            case "arcana_emperor":
                p3scommand.run(client, message, args, query);
                return;
            case "arcana_hierophant":
                p3scommand.run(client, message, args, query);
                return;
            case "arcana_lovers":
                p3scommand.run(client, message, args, query);
                return;
            case "arcana_chariot":
                p3scommand.run(client, message, args, query);
                return;
            case "arcana_justice":
                p3scommand.run(client, message, args, query);
                return;
            case "arcana_hermit":
                p3scommand.run(client, message, args, query);
                return;
            case "arcana_fortune":
                p3scommand.run(client, message, args, query);
                return;
            case "arcana_strength":
                p3scommand.run(client, message, args, query);
                return;
            case "arcana_hanged_man":
                p3scommand.run(client, message, args, query);
                return;
            case "nyx_avatar":
                p3scommand.run(client, message, args, query);
                return;
            case "erebus":
                p3scommand.run(client, message, args, query);
                return;

            //optional bosses
            case "the_reaper":
                p3scommand.run(client, message, args, query);
                return;
            case "elizabeth":
                p3scommand.run(client, message, args, query);
                return;
        }

        //p3fesfusion command file
        switch (query) {
            //fool arcana
            case "orpheus_/f":
                p3ffcommand.run(client, message, args, query);
                return;
            case "slime_/f":
                p3ffcommand.run(client, message, args, query);
                return;
            case "legion_/f":
                p3ffcommand.run(client, message, args, query);
                return;
            case "black_frost_/f":
                p3ffcommand.run(client, message, args, query);
                return;
            case "ose_/f":
                p3ffcommand.run(client, message, args, query);
                return;
            case "decarabia_/f":
                p3ffcommand.run(client, message, args, query);
                return;
            case "loki_/f":
                p3ffcommand.run(client, message, args, query);
                return;
            case "susano-o_/f":
                p3ffcommand.run(client, message, args, query);
                return;
            case "orpheus_telos_/f":
                p3ffcommand.run(client, message, args, query);
                return;

            //magician arcana
            case "nekomata_/f":
                p3ffcommand.run(client, message, args, query);
                return;
            case "jack_frost_/f":
                p3ffcommand.run(client, message, args, query);
                return;
            case "pyro_jack_/f":
                p3ffcommand.run(client, message, args, query);
                return;
            case "hua_po_/f":
                p3ffcommand.run(client, message, args, query);
                return;
            case "sati_/f":
                p3ffcommand.run(client, message, args, query);
                return;
            case "orobas_/f":
                p3ffcommand.run(client, message, args, query);
                return;
            case "rangda_/f":
                p3ffcommand.run(client, message, args, query);
                return;
            case "surt_/f":
                p3ffcommand.run(client, message, args, query);
                return;

            //priestess arcana
            case "apsaras_/f":
                p3ffcommand.run(client, message, args, query);
                return;
            case "unicorn_/f":
                p3ffcommand.run(client, message, args, query);
                return;
            case "high_pixie_/f":
                p3ffcommand.run(client, message, args, query);
                return;
            case "sarasvati_/f":
                p3ffcommand.run(client, message, args, query);
                return;
            case "ganga_/f":
                p3ffcommand.run(client, message, args, query);
                return;
            case "parvati_/f":
                p3ffcommand.run(client, message, args, query);
                return;
            case "kikuri_hime_/f":
                p3ffcommand.run(client, message, args, query);
                return;
            case "scathach_/f":
                p3ffcommand.run(client, message, args, query);
                return;

            //empress arcana
            case "leanan_sidhe_/f":
                p3ffcommand.run(client, message, args, query);
                return;
            case "yaksini_/f":
                p3ffcommand.run(client, message, args, query);
                return;
            case "laksmi_/f":
                p3ffcommand.run(client, message, args, query);
                return;
            case "hariti_/f":
                p3ffcommand.run(client, message, args, query);
                return;
            case "gabriel_/f":
                p3ffcommand.run(client, message, args, query);
                return;
            case "mother_harlot_/f":
                p3ffcommand.run(client, message, args, query);
                return;
            case "skadi_/f":
                p3ffcommand.run(client, message, args, query);
                return;
            case "alilat_/f":
                p3ffcommand.run(client, message, args, query);
                return;

            //emperor arcana
            case "forneus_/f":
                p3ffcommand.run(client, message, args, query);
                return;
            case "oberon_/f":
                p3ffcommand.run(client, message, args, query);
                return;
            case "take_mikazuchi_/f":
                p3ffcommand.run(client, message, args, query);
                return;
            case "king_frost_/f":
                p3ffcommand.run(client, message, args, query);
                return;
            case "raja_naga_/f":
                p3ffcommand.run(client, message, args, query);
                return;
            case "kingu_/f":
                p3ffcommand.run(client, message, args, query);
                return;
            case "barong_/f":
                p3ffcommand.run(client, message, args, query);
                return;
            case "odin_/f":
                p3ffcommand.run(client, message, args, query);
                return;

            //hierophant arcana
            case "omoikane_/f":
                p3ffcommand.run(client, message, args, query);
                return;
            case "berith_/f":
                p3ffcommand.run(client, message, args, query);
                return;
            case "shiisaa_/f":
                p3ffcommand.run(client, message, args, query);
                return;
            case "flauros_/f":
                p3ffcommand.run(client, message, args, query);
                return;
            case "thoth_/f":
                p3ffcommand.run(client, message, args, query);
                return;
            case "hokuto_seikun_/f":
                p3ffcommand.run(client, message, args, query);
                return;
            case "daisoujou_/f":
                p3ffcommand.run(client, message, args, query);
                return;
            case "kohryu_/f":
                p3ffcommand.run(client, message, args, query);
                return;

            //lovers arcana
            case "pixie_/f":
                p3ffcommand.run(client, message, args, query);
                return;
            case "alp_/f":
                p3ffcommand.run(client, message, args, query);
                return;
            case "narcissus_/f":
                p3ffcommand.run(client, message, args, query);
                return;
            case "queen_mab_/f":
                p3ffcommand.run(client, message, args, query);
                return;
            case "saki_mitama_/f":
                p3ffcommand.run(client, message, args, query);
                return;
            case "titania_/f":
                p3ffcommand.run(client, message, args, query);
                return;
            case "raphael_/f":
                p3ffcommand.run(client, message, args, query);
                return;
            case "cybele_/f":
                p3ffcommand.run(client, message, args, query);
                return;

            //chariot arcana
            case "ara_mitama_/f":
                p3ffcommand.run(client, message, args, query);
                return;
            case "chimera_/f":
                p3ffcommand.run(client, message, args, query);
                return;
            case "zouchouten_/f":
                p3ffcommand.run(client, message, args, query);
                return;
            case "ares_/f":
                p3ffcommand.run(client, message, args, query);
                return;
            case "oumitsunu_/f":
                p3ffcommand.run(client, message, args, query);
                return;
            case "nata_taishi_/f":
                p3ffcommand.run(client, message, args, query);
                return;
            case "koumokuten_/f":
                p3ffcommand.run(client, message, args, query);
                return;
            case "thor_/f":
                p3ffcommand.run(client, message, args, query);
                return;

            //justice arcana
            case "angel_/f":
                p3ffcommand.run(client, message, args, query);
                return;
            case "archangel_/f":
                p3ffcommand.run(client, message, args, query);
                return;
            case "principality_/f":
                p3ffcommand.run(client, message, args, query);
                return;
            case "power_/f":
                p3ffcommand.run(client, message, args, query);
                return;
            case "virtue_/f":
                p3ffcommand.run(client, message, args, query);
                return;
            case "dominion_/f":
                p3ffcommand.run(client, message, args, query);
                return;
            case "throne_/f":
                p3ffcommand.run(client, message, args, query);
                return;
            case "melchizedek_/f":
                p3ffcommand.run(client, message, args, query);
                return;

            //hermit arcana
            case "yomotsu_shikome_/f":
                p3ffcommand.run(client, message, args, query);
                return;
            case "naga_/f":
                p3ffcommand.run(client, message, args, query);
                return;
            case "lamia_/f":
                p3ffcommand.run(client, message, args, query);
                return;
            case "mothman_/f":
                p3ffcommand.run(client, message, args, query);
                return;
            case "taraka_/f":
                p3ffcommand.run(client, message, args, query);
                return;
            case "kurama_tengu_/f":
                p3ffcommand.run(client, message, args, query);
                return;
            case "nebiros_/f":
                p3ffcommand.run(client, message, args, query);
                return;
            case "kumbhanda_/f":
                p3ffcommand.run(client, message, args, query);
                return;
            case "arahabaki_/f":
                p3ffcommand.run(client, message, args, query);
                return;

            //fortune arcana
            case "fortuna_/f":
                p3ffcommand.run(client, message, args, query);
                return;
            case "empusa_/f":
                p3ffcommand.run(client, message, args, query);
                return;
            case "kusi_mitama_/f":
                p3ffcommand.run(client, message, args, query);
                return;
            case "clotho_/f":
                p3ffcommand.run(client, message, args, query);
                return;
            case "lachesis_/f":
                p3ffcommand.run(client, message, args, query);
                return;
            case "atropos_/f":
                p3ffcommand.run(client, message, args, query);
                return;
            case "norn_/f":
                p3ffcommand.run(client, message, args, query);
                return;

            //strength arcana
            case "valkyrie_/f":
                p3ffcommand.run(client, message, args, query);
                return;
            case "rakshasa_/f":
                p3ffcommand.run(client, message, args, query);
                return;
            case "titan_/f":
                p3ffcommand.run(client, message, args, query);
                return;
            case "jikokuten_/f":
                p3ffcommand.run(client, message, args, query);
                return;
            case "hanuman_/f":
                p3ffcommand.run(client, message, args, query);
                return;
            case "narashima_/f":
                p3ffcommand.run(client, message, args, query);
                return;
            case "kali_/f":
                p3ffcommand.run(client, message, args, query);
                return;
            case "siegfried_/f":
                p3ffcommand.run(client, message, args, query);
                return;

            //hanged man arcana
            case "inugami_/f":
                p3ffcommand.run(client, message, args, query);
                return;
            case "take_minakata_/f":
                p3ffcommand.run(client, message, args, query);
                return;
            case "orthus_/f":
                p3ffcommand.run(client, message, args, query);
                return;
            case "vasuki_/f":
                p3ffcommand.run(client, message, args, query);
                return;
            case "ubelluris_/f":
                p3ffcommand.run(client, message, args, query);
                return;
            case "hecatoncheires_/f":
                p3ffcommand.run(client, message, args, query);
                return;
            case "hell_biker_/f":
                p3ffcommand.run(client, message, args, query);
                return;
            case "attis_/f":
                p3ffcommand.run(client, message, args, query);
                return;

            //death arcana
            case "ghoul_/f":
                p3ffcommand.run(client, message, args, query);
                return;
            case "pale_rider_/f":
                p3ffcommand.run(client, message, args, query);
                return;
            case "loa_/f":
                p3ffcommand.run(client, message, args, query);
                return;
            case "samael_/f":
                p3ffcommand.run(client, message, args, query);
                return;
            case "mot_/f":
                p3ffcommand.run(client, message, args, query);
                return;
            case "alice_/f":
                p3ffcommand.run(client, message, args, query);
                return;
            case "thanatos_/f":
                p3ffcommand.run(client, message, args, query);
                return;

            //temperance arcana
            case "nigi_mitama_/f":
                p3ffcommand.run(client, message, args, query);
                return;
            case "mithra_/f":
                p3ffcommand.run(client, message, args, query);
                return;
            case "genbu_/f":
                p3ffcommand.run(client, message, args, query);
                return;
            case "seiryuu_/f":
                p3ffcommand.run(client, message, args, query);
                return;
            case "okuninushi_/f":
                p3ffcommand.run(client, message, args, query);
                return;
            case "suzaku_/f":
                p3ffcommand.run(client, message, args, query);
                return;
            case "byakko_/f":
                p3ffcommand.run(client, message, args, query);
                return;
            case "yurlungur_/f":
                p3ffcommand.run(client, message, args, query);
                return;

            //devil arcana
            case "lilim_/f":
                p3ffcommand.run(client, message, args, query);
                return;
            case "vetala_/f":
                p3ffcommand.run(client, message, args, query);
                return;
            case "incubus_/f":
                p3ffcommand.run(client, message, args, query);
                return;
            case "succubus_/f":
                p3ffcommand.run(client, message, args, query);
                return;
            case "pazuzu_/f":
                p3ffcommand.run(client, message, args, query);
                return;
            case "lilith_/f":
                p3ffcommand.run(client, message, args, query);
                return;
            case "abaddon_/f":
                p3ffcommand.run(client, message, args, query);
                return;
            case "beelzebub_/f":
                p3ffcommand.run(client, message, args, query);
                return;

            //tower arcana
            case "eligor_/f":
                p3ffcommand.run(client, message, args, query);
                return;
            case "cu_chulainn_/f":
                p3ffcommand.run(client, message, args, query);
                return;
            case "bishamonten_/f":
                p3ffcommand.run(client, message, args, query);
                return;
            case "seiten_taisei_/f":
                p3ffcommand.run(client, message, args, query);
                return;
            case "masakado_/f":
                p3ffcommand.run(client, message, args, query);
                return;
            case "mara_/f":
                p3ffcommand.run(client, message, args, query);
                return;
            case "shiva_/f":
                p3ffcommand.run(client, message, args, query);
                return;
            case "chi_you_/f":
                p3ffcommand.run(client, message, args, query);
                return;

            //star arcana
            case "nandi_/f":
                p3ffcommand.run(client, message, args, query);
                return;
            case "kaiwan_/f":
                p3ffcommand.run(client, message, args, query);
                return;
            case "ganesha_/f":
                p3ffcommand.run(client, message, args, query);
                return;
            case "garuda_/f":
                p3ffcommand.run(client, message, args, query);
                return;
            case "kartikeya_/f":
                p3ffcommand.run(client, message, args, query);
                return;
            case "saturnus_/f":
                p3ffcommand.run(client, message, args, query);
                return;
            case "helel_/f":
                p3ffcommand.run(client, message, args, query);
                return;

            //moon arcana
            case "gurr_/f":
                p3ffcommand.run(client, message, args, query);
                return;
            case "yamatano_orochi_/f":
                p3ffcommand.run(client, message, args, query);
                return;
            case "girimehkala_/f":
                p3ffcommand.run(client, message, args, query);
                return;
            case "dionysus_/f":
                p3ffcommand.run(client, message, args, query);
                return;
            case "chernobog_/f":
                p3ffcommand.run(client, message, args, query);
                return;
            case "seth_/f":
                p3ffcommand.run(client, message, args, query);
                return;
            case "baal_zebul_/f":
                p3ffcommand.run(client, message, args, query);
                return;
            case "sandalphon_/f":
                p3ffcommand.run(client, message, args, query);
                return;

            //sun arcana
            case "yatagarasu_/f":
                p3ffcommand.run(client, message, args, query);
                return;
            case "quetzalcoatl_/f":
                p3ffcommand.run(client, message, args, query);
                return;
            case "jatayu_/f":
                p3ffcommand.run(client, message, args, query);
                return;
            case "horus_/f":
                p3ffcommand.run(client, message, args, query);
                return;
            case "suparna_/f":
                p3ffcommand.run(client, message, args, query);
                return;
            case "vishnu_/f":
                p3ffcommand.run(client, message, args, query);
                return;
            case "asura_/f":
                p3ffcommand.run(client, message, args, query);
                return;

            //judgement arcana
            case "anubis_/f":
                p3ffcommand.run(client, message, args, query);
                return;
            case "trumpeter_/f":
                p3ffcommand.run(client, message, args, query);
                return;
            case "michael_/f":
                p3ffcommand.run(client, message, args, query);
                return;
            case "satan_/f":
                p3ffcommand.run(client, message, args, query);
                return;
            case "lucifer_/f":
                p3ffcommand.run(client, message, args, query);
                return;
            case "messiah_/f":
                p3ffcommand.run(client, message, args, query);
                return;

            //aeon arcana
            case "uriel_/f":
                p3ffcommand.run(client, message, args, query);
                return;
            case "nidhoggr_/f":
                p3ffcommand.run(client, message, args, query);
                return;
            case "ananta_/f":
                p3ffcommand.run(client, message, args, query);
                return;
            case "atavaka_/f":
                p3ffcommand.run(client, message, args, query);
                return;
            case "metatron_/f":
                p3ffcommand.run(client, message, args, query);
                return;
        }

        //p3pfusion command file
        switch (query) {
            //fool arcana
            case "orpheus_/p":
                p3pfcommand.run(client, message, args, query);
                return;
            case "slime_/p":
                p3pfcommand.run(client, message, args, query);
                return;
            case "legion_/p":
                p3pfcommand.run(client, message, args, query);
                return;
            case "black_frost_/p":
                p3pfcommand.run(client, message, args, query);
                return;
            case "ose_/p":
                p3pfcommand.run(client, message, args, query);
                return;
            case "decarabia_/p":
                p3pfcommand.run(client, message, args, query);
                return;
            case "loki_/p":
                p3pfcommand.run(client, message, args, query);
                return;
            case "susano-o_/p":
                p3pfcommand.run(client, message, args, query);
                return;
            case "orpheus_telos_/p":
                p3pfcommand.run(client, message, args, query);
                return;

            //magician arcana
            case "nekomata_/p":
                p3pfcommand.run(client, message, args, query);
                return;
            case "jack_frost_/p":
                p3pfcommand.run(client, message, args, query);
                return;
            case "pyro_jack_/p":
                p3pfcommand.run(client, message, args, query);
                return;
            case "hua_po_/p":
                p3pfcommand.run(client, message, args, query);
                return;
            case "sati_/p":
                p3pfcommand.run(client, message, args, query);
                return;
            case "orobas_/p":
                p3pfcommand.run(client, message, args, query);
                return;
            case "rangda_/p":
                p3pfcommand.run(client, message, args, query);
                return;
            case "surt_/p":
                p3pfcommand.run(client, message, args, query);
                return;

            //priestess arcana
            case "apsaras_/p":
                p3pfcommand.run(client, message, args, query);
                return;
            case "unicorn_/p":
                p3pfcommand.run(client, message, args, query);
                return;
            case "high_pixie_/p":
                p3pfcommand.run(client, message, args, query);
                return;
            case "sarasvati_/p":
                p3pfcommand.run(client, message, args, query);
                return;
            case "ganga_/p":
                p3pfcommand.run(client, message, args, query);
                return;
            case "parvati_/p":
                p3pfcommand.run(client, message, args, query);
                return;
            case "kikuri_hime_/p":
                p3pfcommand.run(client, message, args, query);
                return;
            case "scathach_/p":
                p3pfcommand.run(client, message, args, query);
                return;

            //empress arcana
            case "leanan_sidhe_/p":
                p3pfcommand.run(client, message, args, query);
                return;
            case "yaksini_/p":
                p3pfcommand.run(client, message, args, query);
                return;
            case "lakshmi_/p":
                p3pfcommand.run(client, message, args, query);
                return;
            case "hariti_/p":
                p3pfcommand.run(client, message, args, query);
                return;
            case "gabriel_/p":
                p3pfcommand.run(client, message, args, query);
                return;
            case "mother_harlot_/p":
                p3pfcommand.run(client, message, args, query);
                return;
            case "skadi_/p":
                p3pfcommand.run(client, message, args, query);
                return;
            case "alilat_/p":
                p3pfcommand.run(client, message, args, query);
                return;

            //emperor arcana
            case "forneus_/p":
                p3pfcommand.run(client, message, args, query);
                return;
            case "oberon_/p":
                p3pfcommand.run(client, message, args, query);
                return;
            case "take_mikazuchi_/p":
                p3pfcommand.run(client, message, args, query);
                return;
            case "king_frost_/p":
                p3pfcommand.run(client, message, args, query);
                return;
            case "raja_naga_/p":
                p3pfcommand.run(client, message, args, query);
                return;
            case "kingu_/p":
                p3pfcommand.run(client, message, args, query);
                return;
            case "barong_/p":
                p3pfcommand.run(client, message, args, query);
                return;
            case "odin_/p":
                p3pfcommand.run(client, message, args, query);
                return;

            //hierophant arcana
            case "omoikane_/p":
                p3pfcommand.run(client, message, args, query);
                return;
            case "berith_/p":
                p3pfcommand.run(client, message, args, query);
                return;
            case "shiisaa_/p":
                p3pfcommand.run(client, message, args, query);
                return;
            case "flauros_/p":
                p3pfcommand.run(client, message, args, query);
                return;
            case "thoth_/p":
                p3pfcommand.run(client, message, args, query);
                return;
            case "hokuto_seikun_/p":
                p3pfcommand.run(client, message, args, query);
                return;
            case "daisoujou_/p":
                p3pfcommand.run(client, message, args, query);
                return;
            case "kohryu_/p":
                p3pfcommand.run(client, message, args, query);
                return;

            //lovers arcana
            case "pixie_/p":
                p3pfcommand.run(client, message, args, query);
                return;
            case "alp_/p":
                p3pfcommand.run(client, message, args, query);
                return;
            case "tam_lin_/p":
                p3pfcommand.run(client, message, args, query);
                return;
            case "narcissus_/p":
                p3pfcommand.run(client, message, args, query);
                return;
            case "queen_mab_/p":
                p3pfcommand.run(client, message, args, query);
                return;
            case "saki_mitama_/p":
                p3pfcommand.run(client, message, args, query);
                return;
            case "titania_/p":
                p3pfcommand.run(client, message, args, query);
                return;
            case "raphael_/p":
                p3pfcommand.run(client, message, args, query);
                return;
            case "cybele_/p":
                p3pfcommand.run(client, message, args, query);
                return;

            //chariot arcana
            case "ara_mitama_/p":
                p3pfcommand.run(client, message, args, query);
                return;
            case "chimera_/p":
                p3pfcommand.run(client, message, args, query);
                return;
            case "zouchouten_/p":
                p3pfcommand.run(client, message, args, query);
                return;
            case "ares_/p":
                p3pfcommand.run(client, message, args, query);
                return;
            case "oumitsunu_/p":
                p3pfcommand.run(client, message, args, query);
                return;
            case "nata_taishi_/p":
                p3pfcommand.run(client, message, args, query);
                return;
            case "koumokuten_/p":
                p3pfcommand.run(client, message, args, query);
                return;
            case "thor_/p":
                p3pfcommand.run(client, message, args, query);
                return;

            //justice arcana
            case "angel_/p":
                p3pfcommand.run(client, message, args, query);
                return;
            case "archangel_/p":
                p3pfcommand.run(client, message, args, query);
                return;
            case "principality_/p":
                p3pfcommand.run(client, message, args, query);
                return;
            case "power_/p":
                p3pfcommand.run(client, message, args, query);
                return;
            case "virtue_/p":
                p3pfcommand.run(client, message, args, query);
                return;
            case "dominion_/p":
                p3pfcommand.run(client, message, args, query);
                return;
            case "throne_/p":
                p3pfcommand.run(client, message, args, query);
                return;
            case "melchizedek_/p":
                p3pfcommand.run(client, message, args, query);
                return;

            //hermit arcana
            case "yomostu_shikome_/p":
                p3pfcommand.run(client, message, args, query);
                return;
            case "naga_/p":
                p3pfcommand.run(client, message, args, query);
                return;
            case "lamia_/p":
                p3pfcommand.run(client, message, args, query);
                return;
            case "mothman_/p":
                p3pfcommand.run(client, message, args, query);
                return;
            case "taraka_/p":
                p3pfcommand.run(client, message, args, query);
                return;
            case "kurama_tengu_/p":
                p3pfcommand.run(client, message, args, query);
                return;
            case "nebiros_/p":
                p3pfcommand.run(client, message, args, query);
                return;
            case "kumbhanda_/p":
                p3pfcommand.run(client, message, args, query);
                return;
            case "arahabaki_/p":
                p3pfcommand.run(client, message, args, query);
                return;

            //fortune arcana
            case "fortuna_/p":
                p3pfcommand.run(client, message, args, query);
                return;
            case "empusa_/p":
                p3pfcommand.run(client, message, args, query);
                return;
            case "kusi_mitama_/p":
                p3pfcommand.run(client, message, args, query);
                return;
            case "clotho_/p":
                p3pfcommand.run(client, message, args, query);
                return;
            case "lachesis_/p":
                p3pfcommand.run(client, message, args, query);
                return;
            case "atropos_/p":
                p3pfcommand.run(client, message, args, query);
                return;
            case "norn_/p":
                p3pfcommand.run(client, message, args, query);
                return;

            //strength arcana
            case "valkyrie_/p":
                p3pfcommand.run(client, message, args, query);
                return;
            case "rakshasa_/p":
                p3pfcommand.run(client, message, args, query);
                return;
            case "titan_/p":
                p3pfcommand.run(client, message, args, query);
                return;
            case "jikokuten_/p":
                p3pfcommand.run(client, message, args, query);
                return;
            case "hanuman_/p":
                p3pfcommand.run(client, message, args, query);
                return;
            case "narashima_/p":
                p3pfcommand.run(client, message, args, query);
                return;
            case "kali_/p":
                p3pfcommand.run(client, message, args, query);
                return;
            case "siegfried_/p":
                p3pfcommand.run(client, message, args, query);
                return;

            //hanged man arcana
            case "inugami_/p":
                p3pfcommand.run(client, message, args, query);
                return;
            case "take_minakata_/p":
                p3pfcommand.run(client, message, args, query);
                return;
            case "orthus_/p":
                p3pfcommand.run(client, message, args, query);
                return;
            case "vasuki_/p":
                p3pfcommand.run(client, message, args, query);
                return;
            case "ubelluris_/p":
                p3pfcommand.run(client, message, args, query);
                return;
            case "hecatoncheires_/p":
                p3pfcommand.run(client, message, args, query);
                return;
            case "hell_biker_/p":
                p3pfcommand.run(client, message, args, query);
                return;
            case "attis_/p":
                p3pfcommand.run(client, message, args, query);
                return;

            //death arcana
            case "ghoul_/p":
                p3pfcommand.run(client, message, args, query);
                return;
            case "pale_rider_/p":
                p3pfcommand.run(client, message, args, query);
                return;
            case "loa_/p":
                p3pfcommand.run(client, message, args, query);
                return;
            case "samael_/p":
                p3pfcommand.run(client, message, args, query);
                return;
            case "mot_/p":
                p3pfcommand.run(client, message, args, query);
                return;
            case "alice_/p":
                p3pfcommand.run(client, message, args, query);
                return;
            case "thanatos_/p":
                p3pfcommand.run(client, message, args, query);
                return;

            //tmperance arcana
            case "nigi_mitama_/p":
                p3pfcommand.run(client, message, args, query);
                return;
            case "mithra_/p":
                p3pfcommand.run(client, message, args, query);
                return;
            case "genbu_/p":
                p3pfcommand.run(client, message, args, query);
                return;
            case "seiryuu_/p":
                p3pfcommand.run(client, message, args, query);
                return;
            case "okuninushi_/p":
                p3pfcommand.run(client, message, args, query);
                return;
            case "suzaku_/p":
                p3pfcommand.run(client, message, args, query);
                return;
            case "byakko_/p":
                p3pfcommand.run(client, message, args, query);
                return;
            case "yurlungur_/p":
                p3pfcommand.run(client, message, args, query);
                return;

            //devil arcana
            case "lilim_/p":
                p3pfcommand.run(client, message, args, query);
                return;
            case "mokoi_/p":
                p3pfcommand.run(client, message, args, query);
                return;
            case "vetala_/p":
                p3pfcommand.run(client, message, args, query);
                return;
            case "incubus_/p":
                p3pfcommand.run(client, message, args, query);
                return;
            case "succubus_/p":
                p3pfcommand.run(client, message, args, query);
                return;
            case "pazuzu_/p":
                p3pfcommand.run(client, message, args, query);
                return;
            case "lilith_/p":
                p3pfcommand.run(client, message, args, query);
                return;
            case "abaddon_/p":
                p3pfcommand.run(client, message, args, query);
                return;
            case "beelzebub_/p":
                p3pfcommand.run(client, message, args, query);
                return;

            //tower arcana
            case "eligor_/p":
                p3pfcommand.run(client, message, args, query);
                return;
            case "cu_chulainn_/p":
                p3pfcommand.run(client, message, args, query);
                return;
            case "bishamonten_/p":
                p3pfcommand.run(client, message, args, query);
                return;
            case "seiten_taisei_/p":
                p3pfcommand.run(client, message, args, query);
                return;
            case "masakado_/p":
                p3pfcommand.run(client, message, args, query);
                return;
            case "mara_/p":
                p3pfcommand.run(client, message, args, query);
                return;
            case "shiva_/p":
                p3pfcommand.run(client, message, args, query);
                return;
            case "chi_you_/p":
                p3pfcommand.run(client, message, args, query);
                return;

            //star arcana
            case "neko_shogun_/p":
                p3pfcommand.run(client, message, args, query);
                return;
            case "setanta_/p":
                p3pfcommand.run(client, message, args, query);
                return;
            case "nandi_/p":
                p3pfcommand.run(client, message, args, query);
                return;
            case "kaiwan_/p":
                p3pfcommand.run(client, message, args, query);
                return;
            case "ganesha_/p":
                p3pfcommand.run(client, message, args, query);
                return;
            case "garuda_/p":
                p3pfcommand.run(client, message, args, query);
                return;
            case "kartikeya_/p":
                p3pfcommand.run(client, message, args, query);
                return;
            case "saturnus_/p":
                p3pfcommand.run(client, message, args, query);
                return;
            case "helel_/p":
                p3pfcommand.run(client, message, args, query);
                return;

            //moon arcana
            case "gurr_/p":
                p3pfcommand.run(client, message, args, query);
                return;
            case "yamatano_orochi_/p":
                p3pfcommand.run(client, message, args, query);
                return;
            case "girimehkala_/p":
                p3pfcommand.run(client, message, args, query);
                return;
            case "dionysus_/p":
                p3pfcommand.run(client, message, args, query);
                return;
            case "chernobog_/p":
                p3pfcommand.run(client, message, args, query);
                return;
            case "seth_/p":
                p3pfcommand.run(client, message, args, query);
                return;
            case "baal_zebul_/p":
                p3pfcommand.run(client, message, args, query);
                return;
            case "sandalphon_/p":
                p3pfcommand.run(client, message, args, query);
                return;

            //sun arcana
            case "yatagarasu_/p":
                p3pfcommand.run(client, message, args, query);
                return;
            case "quetzalcoatl_/p":
                p3pfcommand.run(client, message, args, query);
                return;
            case "jatayu_/p":
                p3pfcommand.run(client, message, args, query);
                return;
            case "horus_/p":
                p3pfcommand.run(client, message, args, query);
                return;
            case "suparna_/p":
                p3pfcommand.run(client, message, args, query);
                return;
            case "vishnu_/p":
                p3pfcommand.run(client, message, args, query);
                return;
            case "asura_/p":
                p3pfcommand.run(client, message, args, query);
                return;

            //judgement arcana
            case "anubis_/p":
                p3pfcommand.run(client, message, args, query);
                return;
            case "trumpeter_/p":
                p3pfcommand.run(client, message, args, query);
                return;
            case "michael_/p":
                p3pfcommand.run(client, message, args, query);
                return;
            case "satan_/p":
                p3pfcommand.run(client, message, args, query);
                return;
            case "lucifer_/p":
                p3pfcommand.run(client, message, args, query);
                return;
            case "messiah_/p":
                p3pfcommand.run(client, message, args, query);
                return;

            //aeon arcana
            case "uriel_/p":
                p3pfcommand.run(client, message, args, query);
                return;
            case "nidhoggr_/p":
                p3pfcommand.run(client, message, args, query);
                return;
            case "ananta_/p":
                p3pfcommand.run(client, message, args, query);
                return;
            case "atavaka_/p":
                p3pfcommand.run(client, message, args, query);
                return;
            case "metatron_/p":
                p3pfcommand.run(client, message, args, query);
                return;
        }

        message.reply(`You have entered an invalid Persona/Shadow name! \nTo view a list of all valid Persona/Shadows, check \`${config.prefix}p3 list\``);
    }
}