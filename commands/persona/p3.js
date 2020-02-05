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
                .setColor(config.colors.p3blue)
                .setThumbnail(client.user.displayAvatarURL)
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
                .setColor(config.colors.p3blue)
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
                    if (pageNum === 2) {
                        pageNum = 0;
                        msg.edit(personalist);
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
                        msg.edit(shadowlist);
                    }
                    if (pageNum === 2) {
                        pageNum = 1;
                        msg.edit(personalist);
                    }
                    if (pageNum === 0) {
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
            case "orpheus_/a":
                p3pcommand.run(client, message, args, query);
                break;
            case "slime":
                p3pcommand.run(client, message, args, query);
                break;
            case "slime_/a":
                p3pcommand.run(client, message, args, query);
                break;
            case "legion":
                p3pcommand.run(client, message, args, query);
                break;
            case "black_frost":
                p3pcommand.run(client, message, args, query);
                break;
            case "ose":
                p3pcommand.run(client, message, args, query);
                break;
            case "decarabia":
                p3pcommand.run(client, message, args, query);
                break;
            case "loki":
                p3pcommand.run(client, message, args, query);
                break;
            case "susano-o":
                p3pcommand.run(client, message, args, query);
                break;
            case "orpheus_telos":
                p3pcommand.run(client, message, args, query);
                break;

            //magician arcana
            case "hermes":
                p3pcommand.run(client, message, args, query);
                break;
            case "trismegistus":
                p3pcommand.run(client, message, args, query);
                break;
            case "trismegistus_/a":
                p3pcommand.run(client, message, args, query);
                break;
            case "nekomata":
                p3pcommand.run(client, message, args, query);
                break;
            case "jack_frost":
                p3pcommand.run(client, message, args, query);
                break;
            case "pyro_jack":
                p3pcommand.run(client, message, args, query);
                break;
            case "pyro_jack_/a":
                p3pcommand.run(client, message, args, query);
                break;
            case "hua_po":
                p3pcommand.run(client, message, args, query);
                break;
            case "hua_po_/a":
                p3pcommand.run(client, message, args, query);
                break;
            case "sati":
                p3pcommand.run(client, message, args, query);
                break;
            case "orobas":
                p3pcommand.run(client, message, args, query);
                break;
            case "rangda":
                p3pcommand.run(client, message, args, query);
                break;
            case "surt":
                p3pcommand.run(client, message, args, query);
                break;
            case "surt_/a":
                p3pcommand.run(client, message, args, query);
                break;

            //preistess arcana
            case "lucia":
                p3pcommand.run(client, message, args, query);
                break;
            case "juno":
                p3pcommand.run(client, message, args, query);
                break;
            case "juno_/a":
                p3pcommand.run(client, message, args, query);
                break;
            case "apsaras":
                p3pcommand.run(client, message, args, query);
                break;
            case "unicorn":
                p3pcommand.run(client, message, args, query);
                break;
            case "high_pixie":
                p3pcommand.run(client, message, args, query);
                break;
            case "sarasvati":
                p3pcommand.run(client, message, args, query);
                break;
            case "ganga":
                p3pcommand.run(client, message, args, query);
                break;
            case "parvati":
                p3pcommand.run(client, message, args, query);
                break;
            case "parvati_/a":
                p3pcommand.run(client, message, args, query);
                break;
            case "kikuri-hime":
                p3pcommand.run(client, message, args, query);
                break;
            case "scathach":
                p3pcommand.run(client, message, args, query);
                break;

            //empress arcana
            case "penthesilea":
                p3pcommand.run(client, message, args, query);
                break;
            case "artemisia":
                p3pcommand.run(client, message, args, query);
                break;
            case "artemisia_/a":
                p3pcommand.run(client, message, args, query);
                break;
            case "leanan_sidhe":
                p3pcommand.run(client, message, args, query);
                break;
            case "yaksini":
                p3pcommand.run(client, message, args, query);
                break;
            case "lakshmi":
                p3pcommand.run(client, message, args, query);
                break;
            case "hariti":
                p3pcommand.run(client, message, args, query);
                break;
            case "gabriel":
                p3pcommand.run(client, message, args, query);
                break;
            case "mother_harlot":
                p3pcommand.run(client, message, args, query);
                break;
            case "skadi":
                p3pcommand.run(client, message, args, query);
                break;
            case "alilat":
                p3pcommand.run(client, message, args, query);
                break;

            //emperor arcana
            case "polydeuces":
                p3pcommand.run(client, message, args, query);
                break;
            case "ceasar":
                p3pcommand.run(client, message, args, query);
                break;
            case "ceasar_/a":
                p3pcommand.run(client, message, args, query);
                break;
            case "forneus":
                p3pcommand.run(client, message, args, query);
                break;
            case "oberon":
                p3pcommand.run(client, message, args, query);
                break;
            case "take-mikazuchi":
                p3pcommand.run(client, message, args, query);
                break;
            case "king_frost":
                p3pcommand.run(client, message, args, query);
                break;
            case "raja_naga":
                p3pcommand.run(client, message, args, query);
                break;
            case "kingu":
                p3pcommand.run(client, message, args, query);
                break;
            case "barong":
                p3pcommand.run(client, message, args, query);
                break;
            case "odin":
                p3pcommand.run(client, message, args, query);
                break;
            case "odin_/a":
                p3pcommand.run(client, message, args, query);
                break;

            //hierophant arcana
            case "castor":
                p3pcommand.run(client, message, args, query);
                break;
            case "omoikane":
                p3pcommand.run(client, message, args, query);
                break;
            case "berith":
                p3pcommand.run(client, message, args, query);
                break;
            case "shiisaa":
                p3pcommand.run(client, message, args, query);
                break;
            case "flauros":
                p3pcommand.run(client, message, args, query);
                break;
            case "thoth":
                p3pcommand.run(client, message, args, query);
                break;
            case "hokuto_seikun":
                p3pcommand.run(client, message, args, query);
                break;
            case "daisoujou":
                p3pcommand.run(client, message, args, query);
                break;
            case "kohryu":
                p3pcommand.run(client, message, args, query);
                break;
            case "kohryu_/a":
                p3pcommand.run(client, message, args, query);
                break;

            //lovers arcana
            case "io":
                p3pcommand.run(client, message, args, query);
                break;
            case "isis":
                p3pcommand.run(client, message, args, query);
                break;
            case "isis_/a":
                p3pcommand.run(client, message, args, query);
                break;
            case "pixie":
                p3pcommand.run(client, message, args, query);
                break;
            case "alp":
                p3pcommand.run(client, message, args, query);
                break;
            case "tam_lin":
                p3pcommand.run(client, message, args, query);
                break;
            case "narcissus":
                p3pcommand.run(client, message, args, query);
                break;
            case "queen_mab":
                p3pcommand.run(client, message, args, query);
                break;
            case "saki_mitama":
                p3pcommand.run(client, message, args, query);
                break;
            case "titania":
                p3pcommand.run(client, message, args, query);
                break;
            case "raphael":
                p3pcommand.run(client, message, args, query);
                break;
            case "cybele":
                p3pcommand.run(client, message, args, query);
                break;
            case "cybele_/a":
                p3pcommand.run(client, message, args, query);
                break;

            //chariot arcana
            case "palladion":
                p3pcommand.run(client, message, args, query);
                break;
            case "pallas_athena":
                p3pcommand.run(client, message, args, query);
                break;
            case "ara_mitama":
                p3pcommand.run(client, message, args, query);
                break;
            case "chimera":
                p3pcommand.run(client, message, args, query);
                break;
            case "zouchouten":
                p3pcommand.run(client, message, args, query);
                break;
            case "ares":
                p3pcommand.run(client, message, args, query);
                break;
            case "oumitsunu":
                p3pcommand.run(client, message, args, query);
                break;
            case "nata_taishi":
                p3pcommand.run(client, message, args, query);
                break;
            case "koumokuten":
                p3pcommand.run(client, message, args, query);
                break;
            case "thor":
                p3pcommand.run(client, message, args, query);
                break;
            case "thor_/a":
                p3pcommand.run(client, message, args, query);
                break;

            //justice arcana
            case "nemesis":
                p3pcommand.run(client, message, args, query);
                break;
            case "kala_nemi":
                p3pcommand.run(client, message, args, query);
                break;
            case "kala_nemi_/a":
                p3pcommand.run(client, message, args, query);
                break;
            case "angel":
                p3pcommand.run(client, message, args, query);
                break;
            case "archangel":
                p3pcommand.run(client, message, args, query);
                break;
            case "principality":
                p3pcommand.run(client, message, args, query);
                break;
            case "power":
                p3pcommand.run(client, message, args, query);
                break;
            case "virtue":
                p3pcommand.run(client, message, args, query);
                break;
            case "dominion":
                p3pcommand.run(client, message, args, query);
                break;
            case "throne":
                p3pcommand.run(client, message, args, query);
                break;
            case "melchizedek":
                p3pcommand.run(client, message, args, query);
                break;
            case "melchizedek_/a":
                p3pcommand.run(client, message, args, query);
                break;

            //hermit arcana
            case "yomostu_shikome":
                p3pcommand.run(client, message, args, query);
                break;
            case "naga":
                p3pcommand.run(client, message, args, query);
                break;
            case "lamia":
                p3pcommand.run(client, message, args, query);
                break;
            case "mothman":
                p3pcommand.run(client, message, args, query);
                break;
            case "taraka":
                p3pcommand.run(client, message, args, query);
                break;
            case "kurama_tengu":
                p3pcommand.run(client, message, args, query);
                break;
            case "nebiros":
                p3pcommand.run(client, message, args, query);
                break;
            case "kumbhanda":
                p3pcommand.run(client, message, args, query);
                break;
            case "arahabaki":
                p3pcommand.run(client, message, args, query);
                break;

            //fortune arcana
            case "fortuna":
                p3pcommand.run(client, message, args, query);
                break;
            case "empusa":
                p3pcommand.run(client, message, args, query);
                break;
            case "kusi_mitama":
                p3pcommand.run(client, message, args, query);
                break;
            case "clotho":
                p3pcommand.run(client, message, args, query);
                break;
            case "lachesis":
                p3pcommand.run(client, message, args, query);
                break;
            case "atropos":
                p3pcommand.run(client, message, args, query);
                break;
            case "norn":
                p3pcommand.run(client, message, args, query);
                break;

            //strength arcana
            case "cerberus":
                p3pcommand.run(client, message, args, query);
                break;
            case "cerberus_/a":
                p3pcommand.run(client, message, args, query);
                break;
            case "valkyrie":
                p3pcommand.run(client, message, args, query);
                break;
            case "rakshasa":
                p3pcommand.run(client, message, args, query);
                break;
            case "titan":
                p3pcommand.run(client, message, args, query);
                break;
            case "jikokuten":
                p3pcommand.run(client, message, args, query);
                break;
            case "hanuman":
                p3pcommand.run(client, message, args, query);
                break;
            case "narasimha":
                p3pcommand.run(client, message, args, query);
                break;
            case "kali":
                p3pcommand.run(client, message, args, query);
                break;
            case "siegfried":
                p3pcommand.run(client, message, args, query);
                break;
            case "siegfried_/a":
                p3pcommand.run(client, message, args, query);
                break;

            //hanged man arcana
            case "inugami":
                p3pcommand.run(client, message, args, query);
                break;
            case "take-minakata":
                p3pcommand.run(client, message, args, query);
                break;
            case "orthus":
                p3pcommand.run(client, message, args, query);
                break;
            case "vasuki":
                p3pcommand.run(client, message, args, query);
                break;
            case "ubelluris":
                p3pcommand.run(client, message, args, query);
                break;
            case "hecatoncheires":
                p3pcommand.run(client, message, args, query);
                break;
            case "hell_biker":
                p3pcommand.run(client, message, args, query);
                break;
            case "attis":
                p3pcommand.run(client, message, args, query);
                break;
            case "attis_/a":
                p3pcommand.run(client, message, args, query);
                break;

            //death arcana
            case "ghoul":
                p3pcommand.run(client, message, args, query);
                break;
            case "pale_rider":
                p3pcommand.run(client, message, args, query);
                break;
            case "loa":
                p3pcommand.run(client, message, args, query);
                break;
            case "samael":
                p3pcommand.run(client, message, args, query);
                break;
            case "mot":
                p3pcommand.run(client, message, args, query);
                break;
            case "alice":
                p3pcommand.run(client, message, args, query);
                break;
            case "thanatos":
                p3pcommand.run(client, message, args, query);
                break;
            case "thanatos_/a":
                p3pcommand.run(client, message, args, query);
                break;

            //temperance arcana
            case "nigi_mitama":
                p3pcommand.run(client, message, args, query);
                break;
            case "mithra":
                p3pcommand.run(client, message, args, query);
                break;
            case "genbu":
                p3pcommand.run(client, message, args, query);
                break;
            case "seiryuu":
                p3pcommand.run(client, message, args, query);
                break;
            case "okuninushi":
                p3pcommand.run(client, message, args, query);
                break;
            case "sukazu":
                p3pcommand.run(client, message, args, query);
                break;
            case "byakko":
                p3pcommand.run(client, message, args, query);
                break;
            case "yurlungur":
                p3pcommand.run(client, message, args, query);
                break;

            //devil arcana
            case "lilim":
                p3pcommand.run(client, message, args, query);
                break;
            case "mokoi":
                p3pcommand.run(client, message, args, query);
                break;
            case "vetala":
                p3pcommand.run(client, message, args, query);
                break;
            case "incubus":
                p3pcommand.run(client, message, args, query);
                break;
            case "succubus":
                p3pcommand.run(client, message, args, query);
                break;
            case "pazuzu":
                p3pcommand.run(client, message, args, query);
                break;
            case "lilith":
                p3pcommand.run(client, message, args, query);
                break;
            case "abaddon":
                p3pcommand.run(client, message, args, query);
                break;
            case "beelzebub":
                p3pcommand.run(client, message, args, query);
                break;

            //tower arcana
            case "eligor":
                p3pcommand.run(client, message, args, query);
                break;
            case "cu_chulainn":
                p3pcommand.run(client, message, args, query);
                break;
            case "bishamonten":
                p3pcommand.run(client, message, args, query);
                break;
            case "seiten_taisei":
                p3pcommand.run(client, message, args, query);
                break;
            case "masakado":
                p3pcommand.run(client, message, args, query);
                break;
            case "mara":
                p3pcommand.run(client, message, args, query);
                break;
            case "shiva":
                p3pcommand.run(client, message, args, query);
                break;
            case "chi_you":
                p3pcommand.run(client, message, args, query);
                break;

            //star arcana
            case "neko_shogun":
                p3pcommand.run(client, message, args, query);
                break;
            case "setanta":
                p3pcommand.run(client, message, args, query);
                break;
            case "nandi":
                p3pcommand.run(client, message, args, query);
                break;
            case "kaiwan":
                p3pcommand.run(client, message, args, query);
                break;
            case "ganesha":
                p3pcommand.run(client, message, args, query);
                break;
            case "garuda":
                p3pcommand.run(client, message, args, query);
                break;
            case "kartikeya":
                p3pcommand.run(client, message, args, query);
                break;
            case "saturnus":
                p3pcommand.run(client, message, args, query);
                break;
            case "helel":
                p3pcommand.run(client, message, args, query);
                break;

            //moon arcana
            case "gurr":
                p3pcommand.run(client, message, args, query);
                break;
            case "yamatano-orochi":
                p3pcommand.run(client, message, args, query);
                break;
            case "girimehkala":
                p3pcommand.run(client, message, args, query);
                break;
            case "dionysus":
                p3pcommand.run(client, message, args, query);
                break;
            case "chernobog":
                p3pcommand.run(client, message, args, query);
                break;
            case "seth":
                p3pcommand.run(client, message, args, query);
                break;
            case "baal_zebul":
                p3pcommand.run(client, message, args, query);
                break;
            case "sandalphon":
                p3pcommand.run(client, message, args, query);
                break;

            //sun arcana
            case "yatagarasu":
                p3pcommand.run(client, message, args, query);
                break;
            case "quetzalcoatl":
                p3pcommand.run(client, message, args, query);
                break;
            case "jatayu":
                p3pcommand.run(client, message, args, query);
                break;
            case "horus":
                p3pcommand.run(client, message, args, query);
                break;
            case "suparna":
                p3pcommand.run(client, message, args, query);
                break;
            case "vishnu":
                p3pcommand.run(client, message, args, query);
                break;
            case "asura":
                p3pcommand.run(client, message, args, query);
                break;

            //judgement arcana
            case "anubis":
                p3pcommand.run(client, message, args, query);
                break;
            case "trumpeter":
                p3pcommand.run(client, message, args, query);
                break;
            case "michael":
                p3pcommand.run(client, message, args, query);
                break;
            case "satan":
                p3pcommand.run(client, message, args, query);
                break;
            case "lucifer":
                p3pcommand.run(client, message, args, query);
                break;
            case "messiah":
                p3pcommand.run(client, message, args, query);
                break;

            //aeon arcana
            case "uriel":
                p3pcommand.run(client, message, args, query);
                break;
            case "nidhoggr":
                p3pcommand.run(client, message, args, query);
                break;
            case "ananta":
                p3pcommand.run(client, message, args, query);
                break;
            case "atavaka":
                p3pcommand.run(client, message, args, query);
                break;
            case "metatron":
                p3pcommand.run(client, message, args, query);
                break;
        }

        //p3shadows command file
        switch (query) {
            //maya shadows
            case "maya":
                p3scommand.run(client, message, args, query);
                break;
            case "cowardly_maya":
                p3scommand.run(client, message, args, query);
                break;
            case "cowardly_maya_/a":
                p3scommand.run(client, message, args, query);
                break;
            case "merciless_maya":
                p3scommand.run(client, message, args, query);
                break;
            case "merciless_maya_/a":
                p3scommand.run(client, message, args, query);
                break;
            case "frivolous_maya":
                p3scommand.run(client, message, args, query);
                break;
            case "haughty_maya":
                p3scommand.run(client, message, args, query);
                break;
            case "indolent_maya":
                p3scommand.run(client, message, args, query);
                break;
            case "insidious_maya":
                p3scommand.run(client, message, args, query);
                break;
            case "insidious_maya_/a":
                p3scommand.run(client, message, args, query);
                break;
            case "ill_fated_maya":
                p3scommand.run(client, message, args, query);
                break;
            case "ill_fated_maya_/a":
                p3scommand.run(client, message, args, query);
                break;
            case "bigoted_maya":
                p3scommand.run(client, message, args, query);
                break;
            case "bigoted_maya_/a":
                p3scommand.run(client, message, args, query);
                break;
            case "desirous_maya":
                p3scommand.run(client, message, args, query);
                break;
            case "desirous_maya_/a":
                p3scommand.run(client, message, args, query);
                break;
            case "imprudent_maya":
                p3scommand.run(client, message, args, query);
                break;
            case "imprudent_maya_/a":
                p3scommand.run(client, message, args, query);
                break;
            case "visceral_maya":
                p3scommand.run(client, message, args, query);
                break;
            case "visceral_maya_/a":
                p3scommand.run(client, message, args, query);
                break;
            case "devious_maya":
                p3scommand.run(client, message, args, query);
                break;
            case "devious_maya_/a":
                p3scommand.run(client, message, args, query);
                break;
            case "conceited_maya_/a":
                p3scommand.run(client, message, args, query);
                break;

            //hand shadows
            case "hand":
                p3scommand.run(client, message, args, query);
                break;
            case "magic_hand":
                p3scommand.run(client, message, args, query);
                break;
            case "magic_hand_/a":
                p3scommand.run(client, message, args, query);
                break;
            case "dancing_hand":
                p3scommand.run(client, message, args, query);
                break;
            case "dancing_hand_/a":
                p3scommand.run(client, message, args, query);
                break;
            case "killing_hand":
                p3scommand.run(client, message, args, query);
                break;
            case "killing_hand_/a":
                p3scommand.run(client, message, args, query);
                break;
            case "almighty_hand":
                p3scommand.run(client, message, args, query);
                break;

            //table shadows
            case "table":
                p3scommand.run(client, message, args, query);
                break;
            case "laughing_table":
                p3scommand.run(client, message, args, query);
                break;
            case "laughing_table_/a":
                p3scommand.run(client, message, args, query);
                break;
            case "crying_table":
                p3scommand.run(client, message, args, query);
                break;
            case "crying_table_/a":
                p3scommand.run(client, message, args, query);
                break;
            case "sleeping_table":
                p3scommand.run(client, message, args, query);
                break;
            case "sleeping_table_/a":
                p3scommand.run(client, message, args, query);
                break;
            case "angry_table":
                p3scommand.run(client, message, args, query);
                break;

            //magus shadows
            case "magus":
                p3scommand.run(client, message, args, query);
                break;
            case "magical_magus":
                p3scommand.run(client, message, args, query);
                break;
            case "wondrous_magus":
                p3scommand.run(client, message, args, query);
                break;
            case "wondrous_magus_/a":
                p3scommand.run(client, message, args, query);
                break;
            case "prime_magus":
                p3scommand.run(client, message, args, query);
                break;
            case "prime_magus_/a":
                p3scommand.run(client, message, args, query);
                break;
            case "grand_magus":
                p3scommand.run(client, message, args, query);
                break;

            //tiara shadows
            case "tiara":
                p3scommand.run(client, message, args, query);
                break;
            case "muttering_tiara":
                p3scommand.run(client, message, args, query);
                break;
            case "muttering_tiara_/a":
                p3scommand.run(client, message, args, query);
                break;
            case "grieving_tiara":
                p3scommand.run(client, message, args, query);
                break;
            case "grieving_tiara_/a":
                p3scommand.run(client, message, args, query);
                break;
            case "writhing_tiara":
                p3scommand.run(client, message, args, query);
                break;
            case "shouting_tiara":
                p3scommand.run(client, message, args, query);
                break;
            case "shouting_tiara_/a":
                p3scommand.run(client, message, args, query);
                break;

            //book shadows
            case "book":
                p3scommand.run(client, message, args, query);
                break;
            case "spurious_book":
                p3scommand.run(client, message, args, query);
                break;
            case "spurious_book_/a":
                p3scommand.run(client, message, args, query);
                break;
            case "maniacal_book":
                p3scommand.run(client, message, args, query);
                break;
            case "maniacal_book_/a":
                p3scommand.run(client, message, args, query);
                break;
            case "silent_book":
                p3scommand.run(client, message, args, query);
                break;
            case "wrathful_book":
                p3scommand.run(client, message, args, query);
                break;
            case "wrathful_book_/a":
                p3scommand.run(client, message, args, query);
                break;

            //idol shadows
            case "idol":
                p3scommand.run(client, message, args, query);
                break;
            case "tranquil_idol":
                p3scommand.run(client, message, args, query);
                break;
            case "tranquil_idol_/a":
                p3scommand.run(client, message, args, query);
                break;
            case "liberating_idol":
                p3scommand.run(client, message, args, query);
                break;
            case "liberating_idol_/a":
                p3scommand.run(client, message, args, query);
                break;
            case "ruinous_idol":
                p3scommand.run(client, message, args, query);
                break;
            case "ruinous_idol_/a":
                p3scommand.run(client, message, args, query);
                break;
            case "vehement_idol":
                p3scommand.run(client, message, args, query);
                break;
            case "primitive_idol_/a":
                p3scommand.run(client, message, args, query);
                break;

            //eagle shadows
            case "eagle":
                p3scommand.run(client, message, args, query);
                break;
            case "venus_eagle":
                p3scommand.run(client, message, args, query);
                break;
            case "venus_eagle_/a":
                p3scommand.run(client, message, args, query);
                break;
            case "dark_eagle":
                p3scommand.run(client, message, args, query);
                break;
            case "dark_eagle_/a":
                p3scommand.run(client, message, args, query);
                break;
            case "jupiter_eagle":
                p3scommand.run(client, message, args, query);
                break;
            case "eternal_eagle":
                p3scommand.run(client, message, args, query);
                break;

            //relic shadows
            case "relic":
                p3scommand.run(client, message, args, query);
                break;
            case "change_relic":
                p3scommand.run(client, message, args, query);
                break;
            case "change_relic_/a":
                p3scommand.run(client, message, args, query);
                break;
            case "constancy_relic":
                p3scommand.run(client, message, args, query);
                break;
            case "constancy_relic_/a":
                p3scommand.run(client, message, args, query);
                break;
            case "creation_relic":
                p3scommand.run(client, message, args, query);
                break;
            case "creation_relic_/a":
                p3scommand.run(client, message, args, query);
                break;
            case "growth_relic":
                p3scommand.run(client, message, args, query);
                break;
            case "affection_relic":
                p3scommand.run(client, message, args, query);
                break;

            //mother shadows
            case "mother":
                p3scommand.run(client, message, args, query);
                break;
            case "elegant_mother":
                p3scommand.run(client, message, args, query);
                break;
            case "elegant_mother_/a":
                p3scommand.run(client, message, args, query);
                break;
            case "regal_mother":
                p3scommand.run(client, message, args, query);
                break;
            case "regal_mother_/a":
                p3scommand.run(client, message, args, query);
                break;
            case "pistil_mother":
                p3scommand.run(client, message, args, query);
                break;
            case "divine_mother":
                p3scommand.run(client, message, args, query);
                break;

            //beetle shadows
            case "beetle":
                p3scommand.run(client, message, args, query);
                break;
            case "grave_beetle":
                p3scommand.run(client, message, args, query);
                break;
            case "grave_beetle_/a":
                p3scommand.run(client, message, args, query);
                break;
            case "adamant_beetle":
                p3scommand.run(client, message, args, query);
                break;
            case "golden_beetle":
                p3scommand.run(client, message, args, query);
                break;
            case "golden_beetle_/a":
                p3scommand.run(client, message, args, query);
                break;
            case "emperor_beetle":
                p3scommand.run(client, message, args, query);
                break;
            case "burning_beetle":
                p3scommand.run(client, message, args, query);
                break;

            //knight shadows
            case "knight":
                p3scommand.run(client, message, args, query);
                break;
            case "intrepid_knight":
                p3scommand.run(client, message, args, query);
                break;
            case "intrepid_knight_/a":
                p3scommand.run(client, message, args, query);
                break;
            case "avenger_knight":
                p3scommand.run(client, message, args, query);
                break;
            case "avenger_knight_/a":
                p3scommand.run(client, message, args, query);
                break;
            case "champion_knight":
                p3scommand.run(client, message, args, query);
                break;
            case "champion_knight_/a":
                p3scommand.run(client, message, args, query);
                break;
            case "hell_knight":
                p3scommand.run(client, message, args, query);
                break;
            case "hell_knight_/a":
                p3scommand.run(client, message, args, query);
                break;

            //castle shadows
            case "castle":
                p3scommand.run(client, message, args, query);
                break;
            case "death_castle":
                p3scommand.run(client, message, args, query);
                break;
            case "death_castle_/a":
                p3scommand.run(client, message, args, query);
                break;
            case "solid_castle":
                p3scommand.run(client, message, args, query);
                break;
            case "solid_castle_/a":
                p3scommand.run(client, message, args, query);
                break;
            case "power_castle":
                p3scommand.run(client, message, args, query);
                break;
            case "power_castle_/a":
                p3scommand.run(client, message, args, query);
                break;
            case "king_castle":
                p3scommand.run(client, message, args, query);
                break;

            //twins shadows
            case "twins":
                p3scommand.run(client, message, args, query);
                break;
            case "trance_twins":
                p3scommand.run(client, message, args, query);
                break;
            case "trance_twins_/a":
                p3scommand.run(client, message, args, query);
                break;
            case "killer_twins":
                p3scommand.run(client, message, args, query);
                break;
            case "killer_twins_/a":
                p3scommand.run(client, message, args, query);
                break;
            case "death_twins":
                p3scommand.run(client, message, args, query);
                break;
            case "crazy_twins":
                p3scommand.run(client, message, args, query);
                break;

            //tower shadows
            case "tower":
                p3scommand.run(client, message, args, query);
                break;
            case "dogmatic_tower":
                p3scommand.run(client, message, args, query);
                break;
            case "dogmatic_tower_/a":
                p3scommand.run(client, message, args, query);
                break;
            case "fanatic_tower":
                p3scommand.run(client, message, args, query);
                break;
            case "fanatic_tower_/a":
                p3scommand.run(client, message, args, query);
                break;
            case "apostate_tower":
                p3scommand.run(client, message, args, query);
                break;
            case "corrupt_tower_/a":
                p3scommand.run(client, message, args, query);
                break;
            case "grudge_tower_/a":
                p3scommand.run(client, message, args, query);
                break;

            //sigil shadows
            case "sigil":
                p3scommand.run(client, message, args, query);
                break;
            case "blue_sigil":
                p3scommand.run(client, message, args, query);
                break;
            case "blue_sigil_/a":
                p3scommand.run(client, message, args, query);
                break;
            case "red_sigil":
                p3scommand.run(client, message, args, query);
                break;
            case "red_sigil_/a":
                p3scommand.run(client, message, args, query);
                break;
            case "green_sigil":
                p3scommand.run(client, message, args, query);
                break;
            case "green_sigil_/a":
                p3scommand.run(client, message, args, query);
                break;
            case "white_sigil":
                p3scommand.run(client, message, args, query);
                break;

            //cupid shadows
            case "cupid":
                p3scommand.run(client, message, args, query);
                break;
            case "obsessed_cupid":
                p3scommand.run(client, message, args, query);
                break;
            case "obsessed_cupid_/a":
                p3scommand.run(client, message, args, query);
                break;
            case "jealous_cupid":
                p3scommand.run(client, message, args, query);
                break;
            case "jealous_cupid_/a":
                p3scommand.run(client, message, args, query);
                break;
            case "devoted_cupid":
                p3scommand.run(client, message, args, query);
                break;
            case "gracious_cupid":
                p3scommand.run(client, message, args, query);
                break;

            //dancer shadows
            case "dancer":
                p3scommand.run(client, message, args, query);
                break;
            case "soul_dancer":
                p3scommand.run(client, message, args, query);
                break;
            case "soul_dancer_/a":
                p3scommand.run(client, message, args, query);
                break;
            case "ardent_dancer":
                p3scommand.run(client, message, args, query);
                break;
            case "natural_dancer":
                p3scommand.run(client, message, args, query);
                break;
            case "natural_dancer_/a":
                p3scommand.run(client, message, args, query);
                break;
            case "royal_dancer":
                p3scommand.run(client, message, args, query);
                break;
            case "royal_dancer_/a":
                p3scommand.run(client, message, args, query);
                break;
            case "harem_dancer_/a":
                p3scommand.run(client, message, args, query);
                break;

            //snake shadows
            case "snake":
                p3scommand.run(client, message, args, query);
                break;
            case "lustful_snake":
                p3scommand.run(client, message, args, query);
                break;
            case "immoral_snake":
                p3scommand.run(client, message, args, query);
                break;
            case "carnal_snake":
                p3scommand.run(client, message, args, query);
                break;
            case "amorous_snake":
                p3scommand.run(client, message, args, query);
                break;
            case "stoic_snake_/a":
                p3scommand.run(client, message, args, query);
                break;

            //wheel shadows
            case "wheel":
                p3scommand.run(client, message, args, query);
                break;
            case "bestial_wheel":
                p3scommand.run(client, message, args, query);
                break;
            case "mach_wheel":
                p3scommand.run(client, message, args, query);
                break;
            case "mach_wheel_/a":
                p3scommand.run(client, message, args, query);
                break;
            case "brave_wheel":
                p3scommand.run(client, message, args, query);
                break;
            case "brave_wheel_/a":
                p3scommand.run(client, message, args, query);
                break;
            case "battle_wheel":
                p3scommand.run(client, message, args, query);
                break;

            //drive shadows
            case "drive":
                p3scommand.run(client, message, args, query);
                break;
            case "rampage_drive":
                p3scommand.run(client, message, args, query);
                break;
            case "wild_drive":
                p3scommand.run(client, message, args, query);
                break;
            case "wild_drive_/a":
                p3scommand.run(client, message, args, query);
                break;
            case "killer_drive":
                p3scommand.run(client, message, args, query);
                break;
            case "killer_drive_/a":
                p3scommand.run(client, message, args, query);
                break;
            case "slaughter_drive":
                p3scommand.run(client, message, args, query);
                break;
            case "slaughter_drive_/a":
                p3scommand.run(client, message, args, query);
                break;

            //turret shadows
            case "turret":
                p3scommand.run(client, message, args, query);
                break;
            case "arcane_turret":
                p3scommand.run(client, message, args, query);
                break;
            case "arcane_turret_/a":
                p3scommand.run(client, message, args, query);
                break;
            case "scarlet_turret":
                p3scommand.run(client, message, args, query);
                break;
            case "wicked_turret":
                p3scommand.run(client, message, args, query);
                break;
            case "wicked_turret_/a":
                p3scommand.run(client, message, args, query);
                break;
            case "hallowed_turret":
                p3scommand.run(client, message, args, query);
                break;
            case "berserk_turret_/a":
                p3scommand.run(client, message, args, query);
                break;
            case "spastic_turret_/a":
                p3scommand.run(client, message, args, query);
                break;

            //balance shadows
            case "balance":
                p3scommand.run(client, message, args, query);
                break;
            case "heat_balance":
                p3scommand.run(client, message, args, query);
                break;
            case "heat_balance_/a":
                p3scommand.run(client, message, args, query);
                break;
            case "sky_balance":
                p3scommand.run(client, message, args, query);
                break;
            case "sky_balance_/a":
                p3scommand.run(client, message, args, query);
                break;
            case "light_balance":
                p3scommand.run(client, message, args, query);
                break;
            case "light_balance_/a":
                p3scommand.run(client, message, args, query);
                break;
            case "world_balance":
                p3scommand.run(client, message, args, query);
                break;
            case "world_balance_/a":
                p3scommand.run(client, message, args, query);
                break;

            //sword shadows
            case "sword":
                p3scommand.run(client, message, args, query);
                break;
            case "justice_sword":
                p3scommand.run(client, message, args, query);
                break;
            case "justice_sword_/a":
                p3scommand.run(client, message, args, query);
                break;
            case "conviction_sword":
                p3scommand.run(client, message, args, query);
                break;
            case "conviction_sword_/a":
                p3scommand.run(client, message, args, query);
                break;
            case "judgement_sword":
                p3scommand.run(client, message, args, query);
                break;
            case "judgement_sword_/a":
                p3scommand.run(client, message, args, query);
                break;
            case "doom_sword":
                p3scommand.run(client, message, args, query);
                break;

            //giant shadows
            case "giant":
                p3scommand.run(client, message, args, query);
                break;
            case "order_giant":
                p3scommand.run(client, message, args, query);
                break;
            case "order_giant_/a":
                p3scommand.run(client, message, args, query);
                break;
            case "stasis_giant":
                p3scommand.run(client, message, args, query);
                break;
            case "stasis_giant_/a":
                p3scommand.run(client, message, args, query);
                break;
            case "harmony_giant":
                p3scommand.run(client, message, args, query);
                break;
            case "void_giant":
                p3scommand.run(client, message, args, query);
                break;
            case "void_giant_/a":
                p3scommand.run(client, message, args, query);
                break;
            case "loss_giant_/a":
                p3scommand.run(client, message, args, query);
                break;

            //raven shadows
            case "raven":
                p3scommand.run(client, message, args, query);
                break;
            case "black_raven":
                p3scommand.run(client, message, args, query);
                break;
            case "black_raven_/a":
                p3scommand.run(client, message, args, query);
                break;
            case "vicious_raven":
                p3scommand.run(client, message, args, query);
                break;
            case "vicious_raven_/a":
                p3scommand.run(client, message, args, query);
                break;
            case "amenti_raven":
                p3scommand.run(client, message, args, query);
                break;
            case "ice_raven":
                p3scommand.run(client, message, args, query);
                break;
            case "ice_raven_/a":
                p3scommand.run(client, message, args, query);
                break;

            //phantom shadows
            case "phantom":
                p3scommand.run(client, message, args, query);
                break;
            case "phantom_mage":
                p3scommand.run(client, message, args, query);
                break;
            case "phantom_master":
                p3scommand.run(client, message, args, query);
                break;
            case "phantom_master_/a":
                p3scommand.run(client, message, args, query);
                break;
            case "phantom_lord":
                p3scommand.run(client, message, args, query);
                break;
            case "phantom_king":
                p3scommand.run(client, message, args, query);
                break;
            case "phantom_hero_/a":
                p3scommand.run(client, message, args, query);
                break;

            //seeker shadows
            case "seeker":
                p3scommand.run(client, message, args, query);
                break;
            case "death_seeker":
                p3scommand.run(client, message, args, query);
                break;
            case "death_seeker_/a":
                p3scommand.run(client, message, args, query);
                break;
            case "fate_seeker":
                p3scommand.run(client, message, args, query);
                break;
            case "noble_seeker":
                p3scommand.run(client, message, args, query);
                break;
            case "acheron_seeker":
                p3scommand.run(client, message, args, query);
                break;
            case "acheron_seeker_/a":
                p3scommand.run(client, message, args, query);
                break;

            //dice shadows
            case "dice":
                p3scommand.run(client, message, args, query);
                break;
            case "bronze_dice":
                p3scommand.run(client, message, args, query);
                break;
            case "bronze_dice_/a":
                p3scommand.run(client, message, args, query);
                break;
            case "mind_dice":
                p3scommand.run(client, message, args, query);
                break;
            case "curse_dice":
                p3scommand.run(client, message, args, query);
                break;
            case "curse_dice_/a":
                p3scommand.run(client, message, args, query);
                break;
            case "reckoning_dice":
                p3scommand.run(client, message, args, query);
                break;
            case "iron_dice":
                p3scommand.run(client, message, args, query);
                break;
            case "death_dice":
                p3scommand.run(client, message, args, query);
                break;
            case "death_dice_/a":
                p3scommand.run(client, message, args, query);
                break;
            case "silver_dice":
                p3scommand.run(client, message, args, query);
                break;
            case "silver_dice_/a":
                p3scommand.run(client, message, args, query);
                break;
            case "platinum_dice":
                p3scommand.run(client, message, args, query);
                break;

            //sand shadows
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