const { MessageEmbed, MessageAttachment } = require("discord.js");
const config = require("../../config.json");

module.exports = {
    config: {
        name: "p3personas",
        aliases: [],
        description: "Views Persona data on a specified Persona",
        usage: "<persona> (/a)",
        category: "persona"
    },
    run: async (client, message, args, query) => {
        //general data parsing
        let personaName = args.join("_").toLowerCase();
        if (query) personaName = query;
        if (!personaName) return message.reply(`Please specify a Persona to search! \`To view a list of all valid Persona's, ${prefix}p3personas list\``)

        //list of every persona
        if (personaName === "list") {
            let list = new MessageEmbed()
                .setTitle("Persona 3 FES/Portable Personas")
                .setURL("https://megamitensei.fandom.com/wiki/List_of_Persona_3_Portable_Personas")
                .setColor(config.colors.p3blue)
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
                .setTimestamp()

            return message.channel.send(list);
        }


        //sets party members name to their persona
        switch (personaName) {
            case "yukari":
                personaName = "io";
                break;
            case "yukari_ultimate":
                personaName = "isis";
                break;
            case "junpei":
                personaName = "hermes";
                break;
            case "junpei_ultimate":
                personaName = "trismegistus";
                break;
            case "fuuka":
                personaName = "lucia";
                break;
            case "fukka_ultimate":
                personaName = "juno";
                break;
            case "mitsuru":
                personaName = "penthesilea";
                break;
            case "mitsuru_ultimate":
                personaName = "artemisia";
                break;
            case "akihiko":
                personaName = "polydeuces";
                break;
            case "akihiko_ultimate":
                personaName = "ceasar";
                break;
            case "shinjiro":
                personaName = "castor";
                break;
            case "aigis":
                personaName = "palladion";
                break;
            case "aigis_ultimate":
                personaName = "pallas_athena";
                break;
            case "ken":
                personaName = "nemesis";
                break;
            case "ken_ultimate":
                personaName = "kala_nemi";
                break;
            case "koromaru":
                personaName = "cerberus";
                break;
            case "metis":
                personaName = "psyche";
                break;
        }

        //fool arcana
        switch (personaName) {
            case "orpheus":
                var name = personaName.charAt(0).toUpperCase() + personaName.slice(1);
                var quote = "\"Thou art I... And I am thou... From the sea of thy soul I cometh... I am Orpheus, master of strings...\""
                var fileName = personaName;
                var url = `https://megamitensei.fandom.com/wiki/${name}`;
                var img = new MessageAttachment(`./personadata/p3/${fileName}.png`, "persona.png");
                break;
            case "orpheus_/a":
                var name = "Orpheus (The Answer)"
                var quote = "\"Thou art I... And I am thou... From the sea of thy soul I cometh... I am Orpheus, master of strings...\""
                var parseName = "Orpheus";
                var fileName = "orpheusAnswer";
                var url = `https://megamitensei.fandom.com/wiki/${parseName}#The%20Answer`;
                var img = new MessageAttachment(`./personadata/p3/${fileName}.png`, "persona.png");
                break;
            case "slime":
                var name = personaName.charAt(0).toUpperCase() + personaName.slice(1);
                var fileName = personaName;
                var url = `https://megamitensei.fandom.com/wiki/${name}`;
                var img = new MessageAttachment(`./personadata/p3/${fileName}.png`, "persona.png");
                break;
            case "slime /a":
                var name = "Slime (The Answer)";
                var fileName = "slimeAnswer";
                var url = `https://megamitensei.fandom.com/wiki/Slime`;
                var img = new MessageAttachment(`./personadata/p3/${fileName}.png`, "persona.png");
                break;
            case "legion":
                var name = personaName.charAt(0).toUpperCase() + personaName.slice(1);
                var fileName = personaName;
                var url = `https://megamitensei.fandom.com/wiki/${name}`;
                var img = new MessageAttachment(`./personadata/p3/${fileName}.png`, "persona.png");
                break;
            case "black_frost":
                var name = "Black Frost";
                var quote = "\"I've become hee ho evil! I'm Black Frost, heeeeee hoooooo!\""
                var fileName = personaName;
                var url = `https://megamitensei.fandom.com/wiki/Black_Frost`;
                var img = new MessageAttachment(`./personadata/p3/${fileName}.png`, "persona.png");
                break;
            case "ose":
                var name = personaName.charAt(0).toUpperCase() + personaName.slice(1);
                var fileName = personaName;
                var url = `https://megamitensei.fandom.com/wiki/${name}`;
                var img = new MessageAttachment(`./personadata/p3/${fileName}.png`, "persona.png");
                break;
            case "decarabia":
                var name = personaName.charAt(0).toUpperCase() + personaName.slice(1);
                var fileName = personaName;
                var url = `https://megamitensei.fandom.com/wiki/${name}`;
                var img = new MessageAttachment(`./personadata/p3/${fileName}.png`, "persona.png");
                break;
            case "loki":
                var name = personaName.charAt(0).toUpperCase() + personaName.slice(1);
                var fileName = personaName;
                var url = `https://megamitensei.fandom.com/wiki/${name}`;
                var img = new MessageAttachment(`./personadata/p3/${fileName}.png`, "persona.png");
                break;
            case "susano-o":
                var name = personaName.charAt(0).toUpperCase() + personaName.slice(1);
                var fileName = personaName;
                var url = `https://megamitensei.fandom.com/wiki/${name}`;
                var img = new MessageAttachment(`./personadata/p3/${fileName}.png`, "persona.png");
                break;
            case "orpheus_telos":
                var name = "Orpheus Telos";
                var quote = "\"By bonding with many people, Orpheus was once again born from the sea of the soul. He has awakened to the power of Cipher, which holds endless possibilities.\""
                var fileName = personaName;
                var url = `https://megamitensei.fandom.com/wiki/Orpheus_Telos`;
                var img = new MessageAttachment(`./personadata/p3/${fileName}.png`, "persona.png");
                break;

            //magician arcana
            case "hermes":
                var name = personaName.charAt(0).toUpperCase() + personaName.slice(1);
                var quote = "\"I am Hermes... Giver of fortune and fame, and herald of souls... To my alter ego: Love thy neighbor with a selflessness like the wind's...\"";
                var fileName = personaName;
                var url = `https://megamitensei.fandom.com/wiki/${name}`;
                var img = new MessageAttachment(`./personadata/p3/${fileName}.png`, "persona.png");
                break;
            case "trismegistus":
                var name = personaName.charAt(0).toUpperCase() + personaName.slice(1);
                var fileName = personaName;
                var url = `https://megamitensei.fandom.com/wiki/${name}`;
                var img = new MessageAttachment(`./personadata/p3/${fileName}.png`, "persona.png");
                break;
            case "trismegistus_/a":
                var name = "Trismegistus (The Answer)";
                var fileName = "trismegistusAnswer";
                var url = `https://megamitensei.fandom.com/wiki/Trismegistus`;
                var img = new MessageAttachment(`./personadata/p3/${fileName}.png`, "persona.png");
                break;
            case "nekomata":
                var name = personaName.charAt(0).toUpperCase() + personaName.slice(1);
                var fileName = personaName;
                var url = `https://megamitensei.fandom.com/wiki/${name}`;
                var img = new MessageAttachment(`./personadata/p3/${fileName}.png`, "persona.png");
                break;
            case "jack_frost":
                var name = "Jack Frost";
                var quote = "\"I'm going to kill you. Why? ...Eh, no reason! Life, hee... Life, ho... Hee ho is not fair!\""
                var fileName = personaName;
                var url = `https://megamitensei.fandom.com/wiki/Jack_Frost`;
                var img = new MessageAttachment(`./personadata/p3/${fileName}.png`, "persona.png");
                break;
            case "pyro_jack":
                var name = "Pyro Jack";
                var fileName = personaName;
                var url = `https://megamitensei.fandom.com/wiki/Pyro_Jack`;
                var img = new MessageAttachment(`./personadata/p3/${fileName}.png`, "persona.png");
                break;
            case "pyro_jack_/a":
                var name = "Pyro Jack (The Answer)";
                var fileName = "pyro_jackAnswer";
                var url = `https://megamitensei.fandom.com/wiki/Pyro_Jack`;
                var img = new MessageAttachment(`./personadata/p3/${fileName}.png`, "persona.png");
                break;
            case "hua_po":
                var name = "Hua Po";
                var fileName = personaName;
                var url = `https://megamitensei.fandom.com/wiki/Hua_Po`;
                var img = new MessageAttachment(`./personadata/p3/${fileName}.png`, "persona.png");
                break;
            case "hua_po_/a":
                var name = "Hua Po (The Answer)";
                var fileName = "hua_poAnswer";
                var url = `https://megamitensei.fandom.com/wiki/Pyro_Jack`;
                var img = new MessageAttachment(`./personadata/p3/${fileName}.png`, "persona.png");
                break;
            case "sati":
                var name = personaName.charAt(0).toUpperCase() + personaName.slice(1);
                var fileName = personaName;
                var url = `https://megamitensei.fandom.com/wiki/${name}`;
                var img = new MessageAttachment(`./personadata/p3/${fileName}.png`, "persona.png");
                break;
            case "orobas":
                var name = personaName.charAt(0).toUpperCase() + personaName.slice(1);
                var fileName = personaName;
                var url = `https://megamitensei.fandom.com/wiki/${name}`;
                var img = new MessageAttachment(`./personadata/p3/${fileName}.png`, "persona.png");
                break;
            case "rangda":
                var name = personaName.charAt(0).toUpperCase() + personaName.slice(1);
                var fileName = personaName;
                var url = `https://megamitensei.fandom.com/wiki/${name}`;
                var img = new MessageAttachment(`./personadata/p3/${fileName}.png`, "persona.png");
                break;
            case "surt":
                var name = personaName.charAt(0).toUpperCase() + personaName.slice(1);
                var fileName = personaName;
                var url = `https://megamitensei.fandom.com/wiki/${name}`;
                var img = new MessageAttachment(`./personadata/p3/${fileName}.png`, "persona.png");
                break;
            case "surt_/a":
                var name = "Surt (The Answer)";
                var fileName = "surtAnswer";
                var url = `https://megamitensei.fandom.com/wiki/Surt`;
                var img = new MessageAttachment(`./personadata/p3/${fileName}.png`, "persona.png");


            //priestess arcana
            case "lucia":
                var name = personaName.charAt(0).toUpperCase() + personaName.slice(1);
                var fileName = personaName;
                var url = `https://megamitensei.fandom.com/wiki/${name}`;
                var img = new MessageAttachment(`./personadata/p3/${fileName}.png`, "persona.png");
                break;
            case "juno":
                var name = personaName.charAt(0).toUpperCase() + personaName.slice(1);
                var fileName = personaName;
                var url = `https://megamitensei.fandom.com/wiki/${name}`;
                var img = new MessageAttachment(`./personadata/p3/${fileName}.png`, "persona.png");
                break;
            case "juno_/a":
                var name = "Juno (The Answer)";
                var fileName = "junoAnswer";
                var url = `https://megamitensei.fandom.com/wiki/Juno`;
                var img = new MessageAttachment(`./personadata/p3/${fileName}.png`, "persona.png");
                break;
            case "apsaras":
                var name = personaName.charAt(0).toUpperCase() + personaName.slice(1);
                var fileName = personaName;
                var url = `https://megamitensei.fandom.com/wiki/${name}`;
                var img = new MessageAttachment(`./personadata/p3/${fileName}.png`, "persona.png");
                break;
            case "unicorn":
                var name = personaName.charAt(0).toUpperCase() + personaName.slice(1);
                var fileName = personaName;
                var url = `https://megamitensei.fandom.com/wiki/${name}`;
                var img = new MessageAttachment(`./personadata/p3/${fileName}.png`, "persona.png");
                break;
            case "high_pixie":
                var name = "High Pixie";
                var fileName = personaName;
                var url = `https://megamitensei.fandom.com/wiki/High_Pixie`;
                var img = new MessageAttachment(`./personadata/p3/${fileName}.png`, "persona.png");
                break;
            case "sarasvati":
                var name = personaName.charAt(0).toUpperCase() + personaName.slice(1);
                var fileName = personaName;
                var url = `https://megamitensei.fandom.com/wiki/${name}`;
                var img = new MessageAttachment(`./personadata/p3/${fileName}.png`, "persona.png");
                break;
            case "ganga":
                var name = personaName.charAt(0).toUpperCase() + personaName.slice(1);
                var fileName = personaName;
                var url = `https://megamitensei.fandom.com/wiki/${name}`;
                var img = new MessageAttachment(`./personadata/p3/${fileName}.png`, "persona.png");
                break;
            case "parvati":
                var name = personaName.charAt(0).toUpperCase() + personaName.slice(1);
                var fileName = personaName;
                var url = `https://megamitensei.fandom.com/wiki/${name}`;
                var img = new MessageAttachment(`./personadata/p3/${fileName}.png`, "persona.png");
                break;
            case "parvati_/a":
                var name = "Parvati"
                var fileName = "parvatiAnswer";
                var url = `https://megamitensei.fandom.com/wiki/Parvati`;
                var img = new MessageAttachment(`./personadata/p3/${fileName}.png`, "persona.png");
                break;
            case "kikuri-hime":
                var name = personaName.charAt(0).toUpperCase() + personaName.slice(1);
                var fileName = "kikurihime";
                var url = `https://megamitensei.fandom.com/wiki/${name}`;
                var img = new MessageAttachment(`./personadata/p3/${fileName}.png`, "persona.png");
                break;
            case "scathach":
                var name = personaName.charAt(0).toUpperCase() + personaName.slice(1);
                var fileName = personaName;
                var url = `https://megamitensei.fandom.com/wiki/${name}`;
                var img = new MessageAttachment(`./personadata/p3/${fileName}.png`, "persona.png");
                break;

            //empress arcana
            case "penthesilea":
                var name = personaName.charAt(0).toUpperCase() + personaName.slice(1);
                var fileName = personaName;
                var url = `https://megamitensei.fandom.com/wiki/${name}`;
                var img = new MessageAttachment(`./personadata/p3/${fileName}.png`, "persona.png");
                break;
            case "artemisia":
                var name = personaName.charAt(0).toUpperCase() + personaName.slice(1);
                var fileName = personaName;
                var url = `https://megamitensei.fandom.com/wiki/${name}`;
                var img = new MessageAttachment(`./personadata/p3/${fileName}.png`, "persona.png");
                break;
            case "artemisia_/a":
                var name = "Artemisia (The Answer)";
                var fileName = "artemisiaAnswer";
                var url = `https://megamitensei.fandom.com/wiki/Artemisia`;
                var img = new MessageAttachment(`./personadata/p3/${fileName}.png`, "persona.png");
                break;
            case "leanan_sidhe":
                var name = "Leanan Sidhe";
                var fileName = personaName;
                var url = `https://megamitensei.fandom.com/wiki/Leanan_Sidhe`;
                var img = new MessageAttachment(`./personadata/p3/${fileName}.png`, "persona.png");
                break;
            case "yaksini":
                var name = personaName.charAt(0).toUpperCase() + personaName.slice(1);
                var fileName = personaName;
                var url = `https://megamitensei.fandom.com/wiki/${name}`;
                var img = new MessageAttachment(`./personadata/p3/${fileName}.png`, "persona.png");
                break;
            case "lakshmi":
                var name = personaName.charAt(0).toUpperCase() + personaName.slice(1);
                var fileName = personaName;
                var url = `https://megamitensei.fandom.com/wiki/${name}`;
                var img = new MessageAttachment(`./personadata/p3/${fileName}.png`, "persona.png");
                break;
            case "hariti":
                var name = personaName.charAt(0).toUpperCase() + personaName.slice(1);
                var fileName = personaName;
                var url = `https://megamitensei.fandom.com/wiki/${name}`;
                var img = new MessageAttachment(`./personadata/p3/${fileName}.png`, "persona.png");
                break;
            case "gabriel":
                var name = personaName.charAt(0).toUpperCase() + personaName.slice(1);
                var fileName = personaName;
                var url = `https://megamitensei.fandom.com/wiki/${name}`;
                var img = new MessageAttachment(`./personadata/p3/${fileName}.png`, "persona.png");
                break;
            case "mother_harlot":
                var name = "Mother Harlot";
                var fileName = personaName;
                var url = `https://megamitensei.fandom.com/wiki/Mother_Harlot`;
                var img = new MessageAttachment(`./personadata/p3/${fileName}.png`, "persona.png");
                break;
            case "skadi":
                var name = personaName.charAt(0).toUpperCase() + personaName.slice(1);
                var fileName = personaName;
                var url = `https://megamitensei.fandom.com/wiki/${name}`;
                var img = new MessageAttachment(`./personadata/p3/${fileName}.png`, "persona.png");
                break;
            case "alilat":
                var name = personaName.charAt(0).toUpperCase() + personaName.slice(1);
                var fileName = personaName;
                var url = `https://megamitensei.fandom.com/wiki/${name}`;
                var img = new MessageAttachment(`./personadata/p3/${fileName}.png`, "persona.png");
                break;

            //emporer arcana
            case "polydeuces":
                var name = personaName.charAt(0).toUpperCase() + personaName.slice(1);
                var fileName = personaName;
                var url = `https://megamitensei.fandom.com/wiki/${name}`;
                var img = new MessageAttachment(`./personadata/p3/${fileName}.png`, "persona.png");
                break;
            case "ceasar":
                var name = personaName.charAt(0).toUpperCase() + personaName.slice(1);
                var fileName = personaName;
                var url = `https://megamitensei.fandom.com/wiki/${name}`;
                var img = new MessageAttachment(`./personadata/p3/${fileName}.png`, "persona.png");
                break;
            case "ceasar_/a":
                var name = "Ceasar (The Answer)";
                var fileName = "ceasarAnswer";
                var url = `https://megamitensei.fandom.com/wiki/Ceasar`;
                var img = new MessageAttachment(`./personadata/p3/${fileName}.png`, "persona.png");
                break;
            case "forneus":
                var name = personaName.charAt(0).toUpperCase() + personaName.slice(1);
                var fileName = personaName;
                var url = `https://megamitensei.fandom.com/wiki/${name}`;
                var img = new MessageAttachment(`./personadata/p3/${fileName}.png`, "persona.png");
                break;
            case "oberon":
                var name = personaName.charAt(0).toUpperCase() + personaName.slice(1);
                var fileName = personaName;
                var url = `https://megamitensei.fandom.com/wiki/${name}`;
                var img = new MessageAttachment(`./personadata/p3/${fileName}.png`, "persona.png");
                break;
            case "take-mikazuchi":
                var name = personaName.charAt(0).toUpperCase() + personaName.slice(1);
                var fileName = personaName;
                var url = `https://megamitensei.fandom.com/wiki/${name}`;
                var img = new MessageAttachment(`./personadata/p3/${fileName}.png`, "persona.png");
                break;
            case "king_frost":
                var name = "King Frost";
                var quote = "\"I'm King of the Frosts! Bow to me! Hee-know your places!\"";
                var fileName = personaName;
                var url = `https://megamitensei.fandom.com/wiki/King_Frost`;
                var img = new MessageAttachment(`./personadata/p3/${fileName}.png`, "persona.png");
                break;
            case "raja_naga":
                var name = "Raja Naga";
                var fileName = personaName;
                var url = `https://megamitensei.fandom.com/wiki/Raja_Naga`;
                var img = new MessageAttachment(`./personadata/p3/${fileName}.png`, "persona.png");
                break;
            case "kingu":
                var name = personaName.charAt(0).toUpperCase() + personaName.slice(1);
                var fileName = personaName;
                var url = `https://megamitensei.fandom.com/wiki/${name}`;
                var img = new MessageAttachment(`./personadata/p3/${fileName}.png`, "persona.png");
                break;
            case "barong":
                var name = personaName.charAt(0).toUpperCase() + personaName.slice(1);
                var fileName = personaName;
                var url = `https://megamitensei.fandom.com/wiki/${name}`;
                var img = new MessageAttachment(`./personadata/p3/${fileName}.png`, "persona.png");
                break;
            case "odin":
                var name = personaName.charAt(0).toUpperCase() + personaName.slice(1);
                var fileName = personaName;
                var url = `https://megamitensei.fandom.com/wiki/${name}`;
                var img = new MessageAttachment(`./personadata/p3/${fileName}.png`, "persona.png");
                break;
            case "odin_/a":
                var name = "Odin (The Answer)";
                var fileName = "odinAnswer";
                var url = `https://megamitensei.fandom.com/wiki/Odin`;
                var img = new MessageAttachment(`./personadata/p3/${fileName}.png`, "persona.png");
                break;


            //hierophant arcana
            case "castor":
                var name = personaName.charAt(0).toUpperCase() + personaName.slice(1);
                var fileName = personaName;
                var url = `https://megamitensei.fandom.com/wiki/${name}`;
                var img = new MessageAttachment(`./personadata/p3/${fileName}.png`, "persona.png");
                break;
            case "psyche":
                var name = personaName.charAt(0).toUpperCase() + personaName.slice(1);
                var fileName = personaName;
                var url = `https://megamitensei.fandom.com/wiki/${name}`;
                var img = new MessageAttachment(`./personadata/p3/${fileName}.png`, "persona.png");
                break;
            case "omoikane":
                var name = personaName.charAt(0).toUpperCase() + personaName.slice(1);
                var quote = "\"Thinking about it, much time has passed since I governed over knowledge. Those who repay their debt to this country with knowledge shall gain form, becoming a ghost of national defense. If you are still a fool even after gaining knowledge, then you will learn the meaning of death.\"";
                var fileName = personaName;
                var url = `https://megamitensei.fandom.com/wiki/${name}`;
                var img = new MessageAttachment(`./personadata/p3/${fileName}.png`, "persona.png");
                break;
            case "berith":
                var name = personaName.charAt(0).toUpperCase() + personaName.slice(1);
                var fileName = personaName;
                var url = `https://megamitensei.fandom.com/wiki/${name}`;
                var img = new MessageAttachment(`./personadata/p3/${fileName}.png`, "persona.png");
                break;
            case "shiisaa":
                var name = personaName.charAt(0).toUpperCase() + personaName.slice(1);
                var fileName = personaName;
                var url = `https://megamitensei.fandom.com/wiki/${name}`;
                var img = new MessageAttachment(`./personadata/p3/${fileName}.png`, "persona.png");
                break;
            case "flauros":
                var name = personaName.charAt(0).toUpperCase() + personaName.slice(1);
                var fileName = personaName;
                var url = `https://megamitensei.fandom.com/wiki/${name}`;
                var img = new MessageAttachment(`./personadata/p3/${fileName}.png`, "persona.png");
                break;
            case "thoth":
                var name = personaName.charAt(0).toUpperCase() + personaName.slice(1);
                var fileName = personaName;
                var url = `https://megamitensei.fandom.com/wiki/${name}`;
                var img = new MessageAttachment(`./personadata/p3/${fileName}.png`, "persona.png");
                break;
            case "hokuto_seikun":
                var name = "Hokuto Seikun";
                var fileName = personaName;
                var url = `https://megamitensei.fandom.com/wiki/Hokuto_Seikun`;
                var img = new MessageAttachment(`./personadata/p3/${fileName}.png`, "persona.png");
                break;
            case "daisoujou":
                var name = personaName.charAt(0).toUpperCase() + personaName.slice(1);
                var quote = "\"It is my duty to save those who have gone astray... Let me be your guide. Receive my salvation... Accept your death!\"";
                var fileName = personaName;
                var url = `https://megamitensei.fandom.com/wiki/${name}`;
                var img = new MessageAttachment(`./personadata/p3/${fileName}.png`, "persona.png");
                break;
            case "kohryu":
                var name = personaName.charAt(0).toUpperCase() + personaName.slice(1);
                var quote = "\"You are a rare breed... you deserve praise for your efforts already. But you haven't come to be praised, have you? And I haven't left my post at the Confinement Chamber merely to praise you. Shall we begin?\""
                var fileName = personaName;
                var url = `https://megamitensei.fandom.com/wiki/${name}`;
                var img = new MessageAttachment(`./personadata/p3/${fileName}.png`, "persona.png");
                break;
            case "kohryu_/a":
                var name = "Kohryu (The Answer)";
                var quote = "\"You are a rare breed... you deserve praise for your efforts already. But you haven't come to be praised, have you? And I haven't left my post at the Confinement Chamber merely to praise you. Shall we begin?\""
                var fileName = "kohryuAnswer";
                var url = `https://megamitensei.fandom.com/wiki/Kohryu`;
                var img = new MessageAttachment(`./personadata/p3/${fileName}.png`, "persona.png");
                break;


            //lovers arcana
            case "io":
                var name = personaName.charAt(0).toUpperCase() + personaName.slice(1);
                var quote = "\"Help me!!\" -Yukari"
                var fileName = personaName;
                var url = `https://megamitensei.fandom.com/wiki/${name}`;
                var img = new MessageAttachment(`./personadata/p3/${fileName}.png`, "persona.png");
                break;
            case "isis":
                var name = personaName.charAt(0).toUpperCase() + personaName.slice(1);
                var fileName = personaName;
                var url = `https://megamitensei.fandom.com/wiki/${name}`;
                var img = new MessageAttachment(`./personadata/p3/${fileName}.png`, "persona.png");
                break;
            case "isis_/a":
                var name = "Isis (The Answer)";
                var fileName = "isisAnswer";
                var url = `https://megamitensei.fandom.com/wiki/Isis`;
                var img = new MessageAttachment(`./personadata/p3/${fileName}.png`, "persona.png");
                break;
            case "pixie":
                var name = personaName.charAt(0).toUpperCase() + personaName.slice(1);
                var fileName = personaName;
                var url = `https://megamitensei.fandom.com/wiki/${name}`;
                var img = new MessageAttachment(`./personadata/p3/${fileName}.png`, "persona.png");
                break;
            case "alp":
                var name = personaName.charAt(0).toUpperCase() + personaName.slice(1);
                var fileName = personaName;
                var url = `https://megamitensei.fandom.com/wiki/${name}`;
                var img = new MessageAttachment(`./personadata/p3/${fileName}.png`, "persona.png");
                break;
            case "tam_lin":
                var name = "Tam Lin";
                var fileName = personaName;
                var url = `https://megamitensei.fandom.com/wiki/Tam_Lin`;
                var img = new MessageAttachment(`./personadata/p3/${fileName}.png`, "persona.png");
                break;
            case "narcissus":
                var name = personaName.charAt(0).toUpperCase() + personaName.slice(1);
                var fileName = personaName;
                var url = `https://megamitensei.fandom.com/wiki/${name}`;
                var img = new MessageAttachment(`./personadata/p3/${fileName}.png`, "persona.png");
                break;
            case "queen_mab":
                var name = "Queen Mab";
                var fileName = personaName;
                var url = `https://megamitensei.fandom.com/wiki/Queen_Mab`;
                var img = new MessageAttachment(`./personadata/p3/${fileName}.png`, "persona.png");
                break;
            case "saki_mitama":
                var name = "Saki Mitama";
                var fileName = personaName;
                var url = `https://megamitensei.fandom.com/wiki/Saki_Mitama`;
                var img = new MessageAttachment(`./personadata/p3/${fileName}.png`, "persona.png");
                break;
            case "titania":
                var name = personaName.charAt(0).toUpperCase() + personaName.slice(1);
                var quote = "\"Are you ready?\"";
                var fileName = personaName;
                var url = `https://megamitensei.fandom.com/wiki/${name}`;
                var img = new MessageAttachment(`./personadata/p3/${fileName}.png`, "persona.png");
                break;
            case "raphael":
                var name = personaName.charAt(0).toUpperCase() + personaName.slice(1);
                var quote = "\"I'm a human... Five years ago, on that day... No... I'm Raphael... My duty is to build the Millennial Kingdom by God's authority! Witness the fury of the heavens!\"";
                var fileName = personaName;
                var url = `https://megamitensei.fandom.com/wiki/${name}`;
                var img = new MessageAttachment(`./personadata/p3/${fileName}.png`, "persona.png");
                break;
            case "cybele":
                var name = personaName.charAt(0).toUpperCase() + personaName.slice(1);
                var fileName = personaName;
                var url = `https://megamitensei.fandom.com/wiki/${name}`;
                var img = new MessageAttachment(`./personadata/p3/${fileName}.png`, "persona.png");
                break;
            case "cybele_/a":
                var name = "Cybele (The Answer)";
                var fileName = "cybeleAnswer";
                var url = `https://megamitensei.fandom.com/wiki/Cybele`;
                var img = new MessageAttachment(`./personadata/p3/${fileName}.png`, "persona.png");
                break;


            //chariot arcana
            case "palladion":
                var name = personaName.charAt(0).toUpperCase() + personaName.slice(1);
                var fileName = personaName;
                var url = `https://megamitensei.fandom.com/wiki/${name}`;
                var img = new MessageAttachment(`./personadata/p3/${fileName}.png`, "persona.png");
                break;
            case "pallas_athena":
                var name = "Pallas Athena";
                var fileName = personaName;
                var url = `https://megamitensei.fandom.com/wiki/Pallas_Athena`;
                var img = new MessageAttachment(`./personadata/p3/${fileName}.png`, "persona.png");
                break;
            case "ara_mitama":
                var name = "Ara Mitama";
                var fileName = personaName;
                var url = `https://megamitensei.fandom.com/wiki/Ara_Mitama`;
                var img = new MessageAttachment(`./personadata/p3/${fileName}.png`, "persona.png");
                break;
            case "zouchouten":
                var name = personaName.charAt(0).toUpperCase() + personaName.slice(1);
                var fileName = personaName;
                var url = `https://megamitensei.fandom.com/wiki/${name}`;
                var img = new MessageAttachment(`./personadata/p3/${fileName}.png`, "persona.png");
                break;
            case "ares":
                var name = personaName.charAt(0).toUpperCase() + personaName.slice(1);
                var fileName = personaName;
                var url = `https://megamitensei.fandom.com/wiki/${name}`;
                var img = new MessageAttachment(`./personadata/p3/${fileName}.png`, "persona.png");
                break;
            case "oumitsunu":
                var name = personaName.charAt(0).toUpperCase() + personaName.slice(1);
                var fileName = personaName;
                var url = `https://megamitensei.fandom.com/wiki/${name}`;
                var img = new MessageAttachment(`./personadata/p3/${fileName}.png`, "persona.png");
                break;
            case "nata_taishi":
                var name = "Nata Taishi";
                var fileName = personaName;
                var url = `https://megamitensei.fandom.com/wiki/Nezha`;
                var img = new MessageAttachment(`./personadata/p3/${fileName}.png`, "persona.png");
                break;
            case "koumokuten":
                var name = personaName.charAt(0).toUpperCase() + personaName.slice(1);
                var fileName = personaName;
                var url = `https://megamitensei.fandom.com/wiki/${name}`;
                var img = new MessageAttachment(`./personadata/p3/${fileName}.png`, "persona.png");
                break;
            case "thor":
                var name = personaName.charAt(0).toUpperCase() + personaName.slice(1);
                var fileName = personaName;
                var url = `https://megamitensei.fandom.com/wiki/${name}`;
                var img = new MessageAttachment(`./personadata/p3/${fileName}.png`, "persona.png");
                break;
            case "thor_/a":
                var name = "Thor (The Answer)";
                var fileName = "thorAnswer";
                var url = `https://megamitensei.fandom.com/wiki/Thor`;
                var img = new MessageAttachment(`./personadata/p3/${fileName}.png`, "persona.png");
                breal;
            case "nemesis":
                var name = personaName.charAt(0).toUpperCase() + personaName.slice(1);
                var fileName = personaName;
                var url = `https://megamitensei.fandom.com/wiki/${name}`;
                var img = new MessageAttachment(`./personadata/p3/${fileName}.png`, "persona.png");
                break;
            case "kala_nemi":
                var name = "Kala Nemi";
                var fileName = personaName;
                var url = `https://megamitensei.fandom.com/wiki/Kala_Nemi`;
                var img = new MessageAttachment(`./personadata/p3/${fileName}.png`, "persona.png");
                break;
            case "kala_nemi_/a":
                var name = "Kala Nemi (The Answer)";
                var fileName = kala_nemiAnswer;
                var url = `https://megamitensei.fandom.com/wiki/Kala_Nemi`;
                var img = new MessageAttachment(`./personadata/p3/${fileName}.png`, "persona.png");
                break;
            case "angel":
                var name = personaName.charAt(0).toUpperCase() + personaName.slice(1);
                var quote = "\"The comfort of death will come for men and demons alike... by the guidance of the Great Will.\"";
                var fileName = personaName;
                var url = `https://megamitensei.fandom.com/wiki/${name}`;
                var img = new MessageAttachment(`./personadata/p3/${fileName}.png`, "persona.png");
                break;
            case "archangel":
                var name = personaName.charAt(0).toUpperCase() + personaName.slice(1);
                var fileName = personaName;
                var url = `https://megamitensei.fandom.com/wiki/${name}`;
                var img = new MessageAttachment(`./personadata/p3/${fileName}.png`, "persona.png");
                break;
            case "principality":
                var name = personaName.charAt(0).toUpperCase() + personaName.slice(1);
                var fileName = personaName;
                var url = `https://megamitensei.fandom.com/wiki/${name}`;
                var img = new MessageAttachment(`./personadata/p3/${fileName}.png`, "persona.png");
                break;
            case "power":
                var name = personaName.charAt(0).toUpperCase() + personaName.slice(1);
                var quote = "\"I am Power. Let us together tread down the path of strife...\""
                var fileName = personaName;
                var url = `https://megamitensei.fandom.com/wiki/${name}`;
                var img = new MessageAttachment(`./personadata/p3/${fileName}.png`, "persona.png");
                break;
            case "virtue":
                var name = personaName.charAt(0).toUpperCase() + personaName.slice(1);
                var fileName = personaName;
                var url = `https://megamitensei.fandom.com/wiki/${name}`;
                var img = new MessageAttachment(`./personadata/p3/${fileName}.png`, "persona.png");
                break;
            case "dominion":
                var name = personaName.charAt(0).toUpperCase() + personaName.slice(1);
                var fileName = personaName;
                var url = `https://megamitensei.fandom.com/wiki/${name}`;
                var img = new MessageAttachment(`./personadata/p3/${fileName}.png`, "persona.png");
                break;
            case "throne":
                var name = personaName.charAt(0).toUpperCase() + personaName.slice(1);
                var fileName = personaName;
                var url = `https://megamitensei.fandom.com/wiki/${name}`;
                var img = new MessageAttachment(`./personadata/p3/${fileName}.png`, "persona.png");
                break;
            case "melchizedek":
                var name = personaName.charAt(0).toUpperCase() + personaName.slice(1);
                var fileName = personaName;
                var url = `https://megamitensei.fandom.com/wiki/${name}`;
                var img = new MessageAttachment(`./personadata/p3/${fileName}.png`, "persona.png");
                break;
            case "melchizedek_/a":
                var name = "Melchizedek (The Answer)";
                var fileName = "melchizedekAnswer";
                var url = `https://megamitensei.fandom.com/wiki/Melchizedek`;
                var img = new MessageAttachment(`./personadata/p3/${fileName}.png`, "persona.png");
                break;
            case "yomotsu_shikome":
                var name = "Yomotsu Shikome";
                var fileName = personaName;
                var url = `https://megamitensei.fandom.com/wiki/Yomotsu_Shikome`;
                var img = new MessageAttachment(`./personadata/p3/${fileName}.png`, "persona.png");
                break;
            case "naga":
                var name = personaName.charAt(0).toUpperCase() + personaName.slice(1);
                var fileName = personaName;
                var url = `https://megamitensei.fandom.com/wiki/${name}`;
                var img = new MessageAttachment(`./personadata/p3/${fileName}.png`, "persona.png");
                break;
            case "lamia":
                var name = personaName.charAt(0).toUpperCase() + personaName.slice(1);
                var fileName = personaName;
                var url = `https://megamitensei.fandom.com/wiki/${name}`;
                var img = new MessageAttachment(`./personadata/p3/${fileName}.png`, "persona.png");
                break;
            case "mothman":
                var name = "Yomotsu Shikome";
                var fileName = personaName;
                var url = `https://megamitensei.fandom.com/wiki/${name}`;
                var img = new MessageAttachment(`./personadata/p3/${fileName}.png`, "persona.png");
                break;
            case "taraka":
                var name = personaName.charAt(0).toUpperCase() + personaName.slice(1);
                var fileName = personaName;
                var url = `https://megamitensei.fandom.com/wiki/${name}`;
                var img = new MessageAttachment(`./personadata/p3/${fileName}.png`, "persona.png");
                break;
            case "kurama_tengu":
                var name = "Kurama Tengu";
                var fileName = personaName;
                var url = `https://megamitensei.fandom.com/wiki/Kurama_Tengu`;
                var img = new MessageAttachment(`./personadata/p3/${fileName}.png`, "persona.png");
                break;
            case "nebiros":
                var name = personaName.charAt(0).toUpperCase() + personaName.slice(1);
                var fileName = personaName;
                var url = `https://megamitensei.fandom.com/wiki/${name}`;
                var img = new MessageAttachment(`./personadata/p3/${fileName}.png`, "persona.png");
                break;
            case "kumbhanda":
                var name = personaName.charAt(0).toUpperCase() + personaName.slice(1);
                var fileName = personaName;
                var url = `https://megamitensei.fandom.com/wiki/${name}`;
                var img = new MessageAttachment(`./personadata/p3/${fileName}.png`, "persona.png");
                break;
            case "arahabaki":
                var name = personaName.charAt(0).toUpperCase() + personaName.slice(1);
                var fileName = personaName;
                var url = `https://megamitensei.fandom.com/wiki/${name}`;
                var img = new MessageAttachment(`./personadata/p3/${fileName}.png`, "persona.png");
                break;
            case "fortuna":
                var name = personaName.charAt(0).toUpperCase() + personaName.slice(1);
                var fileName = personaName;
                var url = `https://megamitensei.fandom.com/wiki/${name}`;
                var img = new MessageAttachment(`./personadata/p3/${fileName}.png`, "persona.png");
                break;
            case "empusa":
                var name = personaName.charAt(0).toUpperCase() + personaName.slice(1);
                var fileName = personaName;
                var url = `https://megamitensei.fandom.com/wiki/${name}`;
                var img = new MessageAttachment(`./personadata/p3/${fileName}.png`, "persona.png");
                break;
            case "kusi_mitama":
                var name = "Kusi Mitama";
                var fileName = personaName;
                var url = `https://megamitensei.fandom.com/wiki/Kusi_Mitama`;
                var img = new MessageAttachment(`./personadata/p3/${fileName}.png`, "persona.png");
                break;
            case "clotho":
                var name = personaName.charAt(0).toUpperCase() + personaName.slice(1);
                var fileName = personaName;
                var url = `https://megamitensei.fandom.com/wiki/${name}`;
                var img = new MessageAttachment(`./personadata/p3/${fileName}.png`, "persona.png");
                break;
            case "lachesis":
                var name = personaName.charAt(0).toUpperCase() + personaName.slice(1);
                var fileName = personaName;
                var url = `https://megamitensei.fandom.com/wiki/${name}`;
                var img = new MessageAttachment(`./personadata/p3/${fileName}.png`, "persona.png");
                break;
            case "atropos":
                var name = personaName.charAt(0).toUpperCase() + personaName.slice(1);
                var fileName = personaName;
                var url = `https://megamitensei.fandom.com/wiki/${name}`;
                var img = new MessageAttachment(`./personadata/p3/${fileName}.png`, "persona.png");
                break;
            case "norn":
                var name = personaName.charAt(0).toUpperCase() + personaName.slice(1);
                var quote = "\"I am Norn. The Keeper of Fate... Destiny's guide...\"";
                var fileName = personaName;
                var url = `https://megamitensei.fandom.com/wiki/${name}`;
                var img = new MessageAttachment(`./personadata/p3/${fileName}.png`, "persona.png");
                break;


            //strength arcana
            case "cerberus":
                var name = personaName.charAt(0).toUpperCase() + personaName.slice(1);
                var fileName = personaName;
                var url = `https://megamitensei.fandom.com/wiki/${name}`;
                var img = new MessageAttachment(`./personadata/p3/${fileName}.png`, "persona.png");
                break;
            case "cerberus_/a":
                var name = "Cerberus (The Answer)";
                var fileName = "cerberusAnswer";
                var url = `https://megamitensei.fandom.com/wiki/Cerberus`;
                var img = new MessageAttachment(`./personadata/p3/${fileName}.png`, "persona.png");
                break;
            case "valkyrie":
                var name = personaName.charAt(0).toUpperCase() + personaName.slice(1);
                var fileName = personaName;
                var url = `https://megamitensei.fandom.com/wiki/${name}`;
                var img = new MessageAttachment(`./personadata/p3/${fileName}.png`, "persona.png");
                break;
            case "rakshasa":
                var name = personaName.charAt(0).toUpperCase() + personaName.slice(1);
                var fileName = personaName;
                var url = `https://megamitensei.fandom.com/wiki/${name}`;
                var img = new MessageAttachment(`./personadata/p3/${fileName}.png`, "persona.png");
                break;
            case "titan":
                var name = personaName.charAt(0).toUpperCase() + personaName.slice(1);
                var fileName = personaName;
                var url = `https://megamitensei.fandom.com/wiki/${name}`;
                var img = new MessageAttachment(`./personadata/p3/${fileName}.png`, "persona.png");
                break;
            case "jikokuten":
                var name = personaName.charAt(0).toUpperCase() + personaName.slice(1);
                var fileName = personaName;
                var url = `https://megamitensei.fandom.com/wiki/${name}`;
                var img = new MessageAttachment(`./personadata/p3/${fileName}.png`, "persona.png");
                break;
            case "hanuman":
                var name = personaName.charAt(0).toUpperCase() + personaName.slice(1);
                var fileName = personaName;
                var url = `https://megamitensei.fandom.com/wiki/${name}`;
                var img = new MessageAttachment(`./personadata/p3/${fileName}.png`, "persona.png");
                break;
            case "narasimha":
                var name = personaName.charAt(0).toUpperCase() + personaName.slice(1);
                var fileName = personaName;
                var url = `https://megamitensei.fandom.com/wiki/${name}`;
                var img = new MessageAttachment(`./personadata/p3/${fileName}.png`, "persona.png");
                break;
            case "kali":
                var name = personaName.charAt(0).toUpperCase() + personaName.slice(1);
                var fileName = personaName;
                var url = `https://megamitensei.fandom.com/wiki/${name}`;
                var img = new MessageAttachment(`./personadata/p3/${fileName}.png`, "persona.png");
                break;
            case "siegfried":
                var name = personaName.charAt(0).toUpperCase() + personaName.slice(1);
                var fileName = personaName;
                var url = `https://megamitensei.fandom.com/wiki/${name}`;
                var img = new MessageAttachment(`./personadata/p3/${fileName}.png`, "persona.png");
                break;
            case "siegfried_/a":
                var name = "Siegfried (The Answer)";
                var fileName = "siegfriedAnswer";
                var url = `https://megamitensei.fandom.com/wiki/Siegfried`;
                var img = new MessageAttachment(`./personadata/p3/${fileName}.png`, "persona.png");
                break;


            //hanged man arcana
            case "inugami":
                var name = personaName.charAt(0).toUpperCase() + personaName.slice(1);
                var fileName = personaName;
                var url = `https://megamitensei.fandom.com/wiki/${name}`;
                var img = new MessageAttachment(`./personadata/p3/${fileName}.png`, "persona.png");
                break;
            case "take-minakata":
                var name = personaName.charAt(0).toUpperCase() + personaName.slice(1);
                var quote = "\"Man, what're you going on about? I've been making my own way on muscle alone since I was born. Talk is cheap. So c'mon, man, let's get to comparin' our strength! Both of my arms might be gone, but I ain't sunk so low that I'd let a human get the best of me!\"";
                var fileName = personaName;
                var url = `https://megamitensei.fandom.com/wiki/${name}`;
                var img = new MessageAttachment(`./personadata/p3/${fileName}.png`, "persona.png");
                break;
            case "orthus":
                var name = personaName.charAt(0).toUpperCase() + personaName.slice(1);
                var fileName = personaName;
                var url = `https://megamitensei.fandom.com/wiki/${name}`;
                var img = new MessageAttachment(`./personadata/p3/${fileName}.png`, "persona.png");
                break;
            case "vasuki":
                var name = personaName.charAt(0).toUpperCase() + personaName.slice(1);
                var fileName = personaName;
                var url = `https://megamitensei.fandom.com/wiki/${name}`;
                var img = new MessageAttachment(`./personadata/p3/${fileName}.png`, "persona.png");
                break;
            case "ubelluris":
                var name = personaName.charAt(0).toUpperCase() + personaName.slice(1);
                var fileName = personaName;
                var url = `https://megamitensei.fandom.com/wiki/${name}`;
                var img = new MessageAttachment(`./personadata/p3/${fileName}.png`, "persona.png");
                break;
            case "hecatoncheires":
                var name = personaName.charAt(0).toUpperCase() + personaName.slice(1);
                var fileName = personaName;
                var url = `https://megamitensei.fandom.com/wiki/${name}`;
                var img = new MessageAttachment(`./personadata/p3/${fileName}.png`, "persona.png");
                break;
            case "hell_biker":
                var name = "Hell Biker";
                var quote = "\"It's Hell Biker... Don't get cocky. We're going from one side of Hell to the other, you know...\"";
                var fileName = personaName;
                var url = `https://megamitensei.fandom.com/wiki/Hell_Biker`;
                var img = new MessageAttachment(`./personadata/p3/${fileName}.png`, "persona.png");
                break;
            case "attis":
                var name = personaName.charAt(0).toUpperCase() + personaName.slice(1);
                var quote = "\"I am Attis... Our bodies may be different, but I am you... I put myself in your care.\"";
                var fileName = personaName;
                var url = `https://megamitensei.fandom.com/wiki/${name}`;
                var img = new MessageAttachment(`./personadata/p3/${fileName}.png`, "persona.png");
                break;
            case "attis_/a":
                var name = "Attis (The Answer)";
                var quote = "\"I am Attis... Our bodies may be different, but I am you... I put myself in your care.\"";
                var fileName = "attisAnswer";
                var url = `https://megamitensei.fandom.com/wiki/Attis`;
                var img = new MessageAttachment(`./personadata/p3/${fileName}.png`, "persona.png");
                break;


            //death arcana
            case "ghoul":
                var name = personaName.charAt(0).toUpperCase() + personaName.slice(1);
                var fileName = personaName;
                var url = `https://megamitensei.fandom.com/wiki/${name}`;
                var img = new MessageAttachment(`./personadata/p3/${fileName}.png`, "persona.png");
                break;
            case "pale_rider":
                var name = "Pale Rider";
                var quote = "\"A world heading towards death, and a world steeped in death. How canst thy life shine so brilliantly amidst it? Show me... thou blue knight filled to th'brim with death...!\"";
                var fileName = personaName;
                var url = `https://megamitensei.fandom.com/wiki/Pale_Rider`;
                var img = new MessageAttachment(`./personadata/p3/${fileName}.png`, "persona.png");
                break;
            case "loa":
                var name = personaName.charAt(0).toUpperCase() + personaName.slice(1);
                var fileName = personaName;
                var url = `https://megamitensei.fandom.com/wiki/${name}`;
                var img = new MessageAttachment(`./personadata/p3/${fileName}.png`, "persona.png");
                break;
            case "samael":
                var name = personaName.charAt(0).toUpperCase() + personaName.slice(1);
                var quote = "\"I am the fearsome king, the evil conscience of God, the serpent of a red Eden... I have many names, many theories bandied about me, and no doubt much awe attached to my name... Thou still darest challenge me...?\"";
                var fileName = personaName;
                var url = `https://megamitensei.fandom.com/wiki/${name}`;
                var img = new MessageAttachment(`./personadata/p3/${fileName}.png`, "persona.png");
                break;
            case "mot":
                var name = personaName.charAt(0).toUpperCase() + personaName.slice(1);
                var quote = "\"What wilt thou gain by fighting me god of death and meaninglessness? Doth more meaninglessness await a meaningless battle, or will it be answered by creation? Regardless, I shall destroy thee. On this stage where Death playeth its music, I shall scatter the embers of thy life.\"";
                var fileName = personaName;
                var url = `https://megamitensei.fandom.com/wiki/${name}`;
                var img = new MessageAttachment(`./personadata/p3/${fileName}.png`, "persona.png");
                break;
            case "alice":
                var name = personaName.charAt(0).toUpperCase() + personaName.slice(1);
                var quote = "\"I want you to do just one more thing for me... Would you die for me please...?\"";
                var fileName = personaName;
                var url = `https://megamitensei.fandom.com/wiki/${name}`;
                var img = new MessageAttachment(`./personadata/p3/${fileName}.png`, "persona.png");
                break;
            case "thanatos":
                var name = personaName.charAt(0).toUpperCase() + personaName.slice(1);
                var fileName = personaName;
                var url = `https://megamitensei.fandom.com/wiki/${name}`;
                var img = new MessageAttachment(`./personadata/p3/${fileName}.png`, "persona.png");
                break;
            case "thanatos_/a":
                var name = "Thanatos (The Answer)";
                var fileName = "thanatosAnswer";
                var url = `https://megamitensei.fandom.com/wiki/Thanatos`;
                var img = new MessageAttachment(`./personadata/p3/${fileName}.png`, "persona.png");
                break;


            //temperance arcana
            case "nigi_mitama":
                var name = "Nigi Mitama";
                var fileName = personaName;
                var url = `https://megamitensei.fandom.com/wiki/Nigi_Mitama`;
                var img = new MessageAttachment(`./personadata/p3/${fileName}.png`, "persona.png");
                break;
            case "mithra":
                var name = personaName.charAt(0).toUpperCase() + personaName.slice(1);
                var quote = "\"The sin of man is forgetting the gods and losing harmony with the land and rivers! Humans are not fit to receive the blessing of the gods!\"";
                var fileName = personaName;
                var url = `https://megamitensei.fandom.com/wiki/${name}`;
                var img = new MessageAttachment(`./personadata/p3/${fileName}.png`, "persona.png");
                break;
            case "genbu":
                var name = personaName.charAt(0).toUpperCase() + personaName.slice(1);
                var fileName = personaName;
                var url = `https://megamitensei.fandom.com/wiki/${name}`;
                var img = new MessageAttachment(`./personadata/p3/${fileName}.png`, "persona.png");
                break;
            case "seiryu":
                var name = personaName.charAt(0).toUpperCase() + personaName.slice(1);
                var fileName = personaName;
                var url = `https://megamitensei.fandom.com/wiki/${name}`;
                var img = new MessageAttachment(`./personadata/p3/${fileName}.png`, "persona.png");
                break;
            case "okuninushi":
                var name = personaName.charAt(0).toUpperCase() + personaName.slice(1);
                var fileName = personaName;
                var url = `https://megamitensei.fandom.com/wiki/${name}`;
                var img = new MessageAttachment(`./personadata/p3/${fileName}.png`, "persona.png");
                break;
            case "suzaku":
                var name = personaName.charAt(0).toUpperCase() + personaName.slice(1);
                var fileName = personaName;
                var url = `https://megamitensei.fandom.com/wiki/${name}`;
                var img = new MessageAttachment(`./personadata/p3/${fileName}.png`, "persona.png");
                break;
            case "byakko":
                var name = personaName.charAt(0).toUpperCase() + personaName.slice(1);
                var fileName = personaName;
                var url = `https://megamitensei.fandom.com/wiki/${name}`;
                var img = new MessageAttachment(`./personadata/p3/${fileName}.png`, "persona.png");
                break;
            case "yurlungur":
                var name = personaName.charAt(0).toUpperCase() + personaName.slice(1);
                var fileName = personaName;
                var url = `https://megamitensei.fandom.com/wiki/${name}`;
                var img = new MessageAttachment(`./personadata/p3/${fileName}.png`, "persona.png");
                break;
            case "lilim":
                var name = personaName.charAt(0).toUpperCase() + personaName.slice(1);
                var fileName = personaName;
                var url = `https://megamitensei.fandom.com/wiki/${name}`;
                var img = new MessageAttachment(`./personadata/p3/${fileName}.png`, "persona.png");
                break;
            case "mokoi":
                var name = personaName.charAt(0).toUpperCase() + personaName.slice(1);
                var fileName = personaName;
                var url = `https://megamitensei.fandom.com/wiki/${name}`;
                var img = new MessageAttachment(`./personadata/p3/${fileName}.png`, "persona.png");
                break;
            case "vetala":
                var name = personaName.charAt(0).toUpperCase() + personaName.slice(1);
                var fileName = personaName;
                var url = `https://megamitensei.fandom.com/wiki/${name}`;
                var img = new MessageAttachment(`./personadata/p3/${fileName}.png`, "persona.png");
                break;
            case "incubus":
                var name = personaName.charAt(0).toUpperCase() + personaName.slice(1);
                var fileName = personaName;
                var url = `https://megamitensei.fandom.com/wiki/${name}`;
                var img = new MessageAttachment(`./personadata/p3/${fileName}.png`, "persona.png");
                break;
            case "pazuzu":
                var name = personaName.charAt(0).toUpperCase() + personaName.slice(1);
                var fileName = personaName;
                var url = `https://megamitensei.fandom.com/wiki/${name}`;
                var img = new MessageAttachment(`./personadata/p3/${fileName}.png`, "persona.png");
                break;
            case "lilith":
                var name = personaName.charAt(0).toUpperCase() + personaName.slice(1);
                var fileName = personaName;
                var url = `https://megamitensei.fandom.com/wiki/${name}`;
                var img = new MessageAttachment(`./personadata/p3/${fileName}.png`, "persona.png");
                break;
            case "abaddon":
                var name = personaName.charAt(0).toUpperCase() + personaName.slice(1);
                var fileName = personaName;
                var url = `https://megamitensei.fandom.com/wiki/${name}`;
                var img = new MessageAttachment(`./personadata/p3/${fileName}.png`, "persona.png");
                break;
            case "beelzebub":
                var name = personaName.charAt(0).toUpperCase() + personaName.slice(1);
                var quote = "\"The army of chaos will rise at Lord Lucifer's command. To bring about that glorious event, I would gladly assist you. But, you must first demonstrate that you are worthy of my help.\"";
                var fileName = personaName;
                var url = `https://megamitensei.fandom.com/wiki/${name}`;
                var img = new MessageAttachment(`./personadata/p3/${fileName}.png`, "persona.png");
                break;
            case "eligor":
                var name = personaName.charAt(0).toUpperCase() + personaName.slice(1);
                var fileName = personaName;
                var url = `https://megamitensei.fandom.com/wiki/${name}`;
                var img = new MessageAttachment(`./personadata/p3/${fileName}.png`, "persona.png");
                break;
            case "cu_chulainn":
                var name = "Cu Chulainn";
                var fileName = personaName;
                var url = `https://megamitensei.fandom.com/wiki/Cu_Chulainn`;
                var img = new MessageAttachment(`./personadata/p3/${fileName}.png`, "persona.png");
                break;
            case "bishamonten":
                var name = personaName.charAt(0).toUpperCase() + personaName.slice(1);
                var fileName = personaName;
                var url = `https://megamitensei.fandom.com/wiki/${name}`;
                var img = new MessageAttachment(`./personadata/p3/${fileName}.png`, "persona.png");
                break;
            case "seiten_taisei":
                var name = "Seiten Taisei";
                var fileName = personaName;
                var url = `https://megamitensei.fandom.com/wiki/Seiten_Taisei`;
                var img = new MessageAttachment(`./personadata/p3/${fileName}.png`, "persona.png");
                break;
            case "masakado":
                var name = personaName.charAt(0).toUpperCase() + personaName.slice(1);
                var fileName = personaName;
                var url = `https://megamitensei.fandom.com/wiki/${name}`;
                var img = new MessageAttachment(`./personadata/p3/${fileName}.png`, "persona.png");
                break;
            case "mara":
                var name = personaName.charAt(0).toUpperCase() + personaName.slice(1);
                var quote = "\"Mwahahahaha! Welcome to Mara's den! You may think you can defeat me, but I'm clearly the bigger man. Gwahahahaha! Now, then... Why don't we get this party started, hm? Ahahahahahaha!\"";
                var fileName = personaName;
                var url = `https://megamitensei.fandom.com/wiki/${name}`;
                var img = new MessageAttachment(`./personadata/p3/${fileName}.png`, "persona.png");
                break;
            case "shiva":
                var name = personaName.charAt(0).toUpperCase() + personaName.slice(1);
                var quote = "\"I am Nataraja, the destroyer of all. I shall ascertain if you are worthy to face Brahman. If you cannot defeat me, then your world does not deserve to exist.\"";
                var fileName = personaName;
                var url = `https://megamitensei.fandom.com/wiki/${name}`;
                var img = new MessageAttachment(`./personadata/p3/${fileName}.png`, "persona.png");
                break;
            case "chi_you":
                var name = "Chi You";
                var fileName = personaName;
                var url = `https://megamitensei.fandom.com/wiki/Chi_You`;
                var img = new MessageAttachment(`./personadata/p3/${fileName}.png`, "persona.png");
                break;
            case "neko_shogun":
                var name = "Neko Shogun";
                var quote = "\"A prophetic Taoist god, originally known as Mao Shogun. Due to a linguistic error involving the Chinese word for cat, his name was changed to Neko Shogun.\"";
                var fileName = personaName;
                var url = `https://megamitensei.fandom.com/wiki/Neko_Shogun`;
                var img = new MessageAttachment(`./personadata/p3/${fileName}.png`, "persona.png");
                break;
            case "setanta":
                var name = personaName.charAt(0).toUpperCase() + personaName.slice(1);
                var fileName = personaName;
                var url = `https://megamitensei.fandom.com/wiki/${name}`;
                var img = new MessageAttachment(`./personadata/p3/${fileName}.png`, "persona.png");
                break;
            case "nandi":
                var name = personaName.charAt(0).toUpperCase() + personaName.slice(1);
                var fileName = personaName;
                var url = `https://megamitensei.fandom.com/wiki/${name}`;
                var img = new MessageAttachment(`./personadata/p3/${fileName}.png`, "persona.png");
                break;
            case "kaiwan":
                var name = personaName.charAt(0).toUpperCase() + personaName.slice(1);
                var fileName = personaName;
                var url = `https://megamitensei.fandom.com/wiki/${name}`;
                var img = new MessageAttachment(`./personadata/p3/${fileName}.png`, "persona.png");
                break;
            case "ganesha":
                var name = personaName.charAt(0).toUpperCase() + personaName.slice(1);
                var fileName = personaName;
                var url = `https://megamitensei.fandom.com/wiki/${name}`;
                var img = new MessageAttachment(`./personadata/p3/${fileName}.png`, "persona.png");
                break;
            case "garuda":
                var name = personaName.charAt(0).toUpperCase() + personaName.slice(1);
                var quote = "\"I am the wings of the Lord... the highest in the bright sky, whose heights no human could attain. Shallow, foolish humans, who crawl across the face of the Earth and consume all they touch... How have you come to think that I might deign to speak with you? Grovel at my feet instead, as is only natural.\"";
                var fileName = personaName;
                var url = `https://megamitensei.fandom.com/wiki/${name}`;
                var img = new MessageAttachment(`./personadata/p3/${fileName}.png`, "persona.png");
                break;
            case "kartikeya":
                var name = personaName.charAt(0).toUpperCase() + personaName.slice(1);
                var quote = "\"So mother sent you here... I thought she might have. Still, I don't want to go back! Never! Why...? ...Because I'm scared. Yeah, that's right. I'm scared of my mother. Well, Mother's very kind, but... It's just that... She's just way too out there! Like she doesn't belong in this Universe! I used to be six kids! But Mother hugged us all together, and we got merged into one person. Who has that kind of power!? That's just not right! Look... Once, she accidently cut off somebody's head, and then she just replaced it with an elephant's head. My entire family is messed up! \"";
                var fileName = personaName;
                var url = `https://megamitensei.fandom.com/wiki/${name}`;
                var img = new MessageAttachment(`./personadata/p3/${fileName}.png`, "persona.png");
                break;
            case "saturnus":
                var name = personaName.charAt(0).toUpperCase() + personaName.slice(1);
                var fileName = personaName;
                var url = `https://megamitensei.fandom.com/wiki/${name}`;
                var img = new MessageAttachment(`./personadata/p3/${fileName}.png`, "persona.png");
                break;
            case "helel":
                var name = personaName.charAt(0).toUpperCase() + personaName.slice(1);
                var quote = "\"Can't you see that death lies in wait on your path, ready to consume all hope...?\"";
                var fileName = personaName;
                var url = `https://megamitensei.fandom.com/wiki/${name}`;
                var img = new MessageAttachment(`./personadata/p3/${fileName}.png`, "persona.png");
                break;
            case "gurr":
                var name = personaName.charAt(0).toUpperCase() + personaName.slice(1);
                var fileName = personaName;
                var url = `https://megamitensei.fandom.com/wiki/${name}`;
                var img = new MessageAttachment(`./personadata/p3/${fileName}.png`, "persona.png");
                break;
            case "yamata_no_orochi":
                var name = "Yamata no Orochi";
                var fileName = personaName;
                var url = `https://megamitensei.fandom.com/wiki/Yamata_no_Orochi`;
                var img = new MessageAttachment(`./personadata/p3/${fileName}.png`, "persona.png");
                break;
            case "girimehkala":
                var name = personaName.charAt(0).toUpperCase() + personaName.slice(1);
                var fileName = personaName;
                var url = `https://megamitensei.fandom.com/wiki/${name}`;
                var img = new MessageAttachment(`./personadata/p3/${fileName}.png`, "persona.png");
                break;
            case "dionysus":
                var name = personaName.charAt(0).toUpperCase() + personaName.slice(1);
                var fileName = personaName;
                var url = `https://megamitensei.fandom.com/wiki/${name}`;
                var img = new MessageAttachment(`./personadata/p3/${fileName}.png`, "persona.png");
                break;
            case "chernobog":
                var name = personaName.charAt(0).toUpperCase() + personaName.slice(1);
                var fileName = personaName;
                var url = `https://megamitensei.fandom.com/wiki/${name}`;
                var img = new MessageAttachment(`./personadata/p3/${fileName}.png`, "persona.png");
                break;
            case "seth":
                var name = personaName.charAt(0).toUpperCase() + personaName.slice(1);
                var fileName = personaName;
                var url = `https://megamitensei.fandom.com/wiki/${name}`;
                var img = new MessageAttachment(`./personadata/p3/${fileName}.png`, "persona.png");
                break;
            case "baal_zebul":
                var name = "Baal Zebul";
                var quote = "\"The army of chaos will rise at Lord Lucifer's command. To bring about that glorious event, I would gladly assist you. But, you must first demonstrate that you are worthy of my help.\"";
                var fileName = personaName;
                var url = `https://megamitensei.fandom.com/wiki/Baal_Zebul`;
                var img = new MessageAttachment(`./personadata/p3/${fileName}.png`, "persona.png");
                break;
            case "sandalphon":
                var name = personaName.charAt(0).toUpperCase() + personaName.slice(1);
                var fileName = personaName;
                var url = `https://megamitensei.fandom.com/wiki/${name}`;
                var img = new MessageAttachment(`./personadata/p3/${fileName}.png`, "persona.png");
                break;
            case "yatagarasu":
                var name = personaName.charAt(0).toUpperCase() + personaName.slice(1);
                var fileName = personaName;
                var url = `https://megamitensei.fandom.com/wiki/${name}`;
                var img = new MessageAttachment(`./personadata/p3/${fileName}.png`, "persona.png");
                break;
            case "quetzalcoatl":
                var name = personaName.charAt(0).toUpperCase() + personaName.slice(1);
                var fileName = personaName;
                var url = `https://megamitensei.fandom.com/wiki/${name}`;
                var img = new MessageAttachment(`./personadata/p3/${fileName}.png`, "persona.png");
                break;
            case "jatayu":
                var name = personaName.charAt(0).toUpperCase() + personaName.slice(1);
                var fileName = personaName;
                var url = `https://megamitensei.fandom.com/wiki/${name}`;
                var img = new MessageAttachment(`./personadata/p3/${fileName}.png`, "persona.png");
                break;
            case "horus":
                var name = personaName.charAt(0).toUpperCase() + personaName.slice(1);
                var fileName = personaName;
                var url = `https://megamitensei.fandom.com/wiki/${name}`;
                var img = new MessageAttachment(`./personadata/p3/${fileName}.png`, "persona.png");
                break;
            case "suparna":
                var name = personaName.charAt(0).toUpperCase() + personaName.slice(1);
                var fileName = personaName;
                var url = `https://megamitensei.fandom.com/wiki/${name}`;
                var img = new MessageAttachment(`./personadata/p3/${fileName}.png`, "persona.png");
                break;
            case "vishnu":
                var name = personaName.charAt(0).toUpperCase() + personaName.slice(1);
                var quote = "\"It's been a long while since the dharma vanished from people's hearts and the adharma took hold... I must cleanse this impurity. If you wish to change my mind, then show me the strength of your dharma!\"";
                var fileName = personaName;
                var url = `https://megamitensei.fandom.com/wiki/${name}`;
                var img = new MessageAttachment(`./personadata/p3/${fileName}.png`, "persona.png");
                break;
            case "asura":
                var name = personaName.charAt(0).toUpperCase() + personaName.slice(1);
                var fileName = personaName;
                var url = `https://megamitensei.fandom.com/wiki/${name}`;
                var img = new MessageAttachment(`./personadata/p3/${fileName}.png`, "persona.png");
                break;
            case "anubis":
                var name = personaName.charAt(0).toUpperCase() + personaName.slice(1);
                var fileName = personaName;
                var url = `https://megamitensei.fandom.com/wiki/${name}`;
                var img = new MessageAttachment(`./personadata/p3/${fileName}.png`, "persona.png");
                break;
            case "trumpeter":
                var name = personaName.charAt(0).toUpperCase() + personaName.slice(1);
                var quote = "\"...'Tis no worth in conversation. A lamb's voice is but mere bleating before the sound of my trumpet, like the falling leaves... What shall cause the downfall? The stars, the Earth, or the world of humans? Now, singest thou to me with the voice of thy soul, that thou might keep the world from ending...\"";
                var fileName = personaName;
                var url = `https://megamitensei.fandom.com/wiki/${name}`;
                var img = new MessageAttachment(`./personadata/p3/${fileName}.png`, "persona.png");
                break;
            case "michael":
                var name = personaName.charAt(0).toUpperCase() + personaName.slice(1);
                var fileName = personaName;
                var url = `https://megamitensei.fandom.com/wiki/${name}`;
                var img = new MessageAttachment(`./personadata/p3/${fileName}.png`, "persona.png");
                break;
            case "satan":
                var name = personaName.charAt(0).toUpperCase() + personaName.slice(1);
                var quote = "\"I am Satan, the one who stands below God the judge. I see you have chosen to retaliate, just as that man did. Then prepare, Seraph, to receive God's eternal punishment of damnation!\"";
                var fileName = personaName;
                var url = `https://megamitensei.fandom.com/wiki/${name}`;
                var img = new MessageAttachment(`./personadata/p3/${fileName}.png`, "persona.png");
                break;
            case "lucifer":
                var name = personaName.charAt(0).toUpperCase() + personaName.slice(1);
                var quote = "\"Can't you see that death lies in wait on your path, ready to consume all hope...?\"";
                var fileName = personaName;
                var url = `https://megamitensei.fandom.com/wiki/${name}`;
                var img = new MessageAttachment(`./personadata/p3/${fileName}.png`, "persona.png");
                break;
            case "messiah":
                var name = personaName.charAt(0).toUpperCase() + personaName.slice(1);
                var fileName = personaName;
                var url = `https://megamitensei.fandom.com/wiki/${name}`;
                var img = new MessageAttachment(`./personadata/p3/${fileName}.png`, "persona.png");
                break;
            case "uriel":
                var name = personaName.charAt(0).toUpperCase() + personaName.slice(1);
                var quote = "\"I... am... Uriel... My duty is to build the Millennial Kingdom by God's authority... I will cast you down to hell!\"";
                var fileName = personaName;
                var url = `https://megamitensei.fandom.com/wiki/${name}`;
                var img = new MessageAttachment(`./personadata/p3/${fileName}.png`, "persona.png");
                break;
            case "nidhoggr":
                var name = personaName.charAt(0).toUpperCase() + personaName.slice(1);
                var fileName = personaName;
                var url = `https://megamitensei.fandom.com/wiki/${name}`;
                var img = new MessageAttachment(`./personadata/p3/${fileName}.png`, "persona.png");
                break;
            case "ananta":
                var name = personaName.charAt(0).toUpperCase() + personaName.slice(1);
                var fileName = personaName;
                var url = `https://megamitensei.fandom.com/wiki/${name}`;
                var img = new MessageAttachment(`./personadata/p3/${fileName}.png`, "persona.png");
                break;
            case "atavaka":
                var name = personaName.charAt(0).toUpperCase() + personaName.slice(1);
                var fileName = personaName;
                var url = `https://megamitensei.fandom.com/wiki/${name}`;
                var img = new MessageAttachment(`./personadata/p3/${fileName}.png`, "persona.png");
                break;
            case "metatron":
                var name = personaName.charAt(0).toUpperCase() + personaName.slice(1);
                var quote = "\"I can see by the darkness in your soul that you have chosen to disregard my warning... you are beyond the point of redemption. I cannot turn a blind eye to the fallen angel's abominable plan to foster the birth of a new demon. Delivering the candelabra to the Labyrinth of Amala is just as grave a sin. Listen, Fiend! Foul demon whose soul is tainted with darkness! Listen! And tremble in fear! I am Metatron! I am one with god! By his will, I shall destroy you!\"";
                var fileName = personaName;
                var url = `https://megamitensei.fandom.com/wiki/${name}`;
                var img = new MessageAttachment(`./personadata/p3/${fileName}.png`, "persona.png");
        }



        //final checks and sending of the embed
        if (!name) {
            if (personaName.endsWith("/a")) {
                return message.reply("This Persona either doesn't have a variant for \"The Answer\", or you entered an invalid Persona name!");
            } else {
                return message.reply("You entered an invalid Persona name!");
            }
        }
        let embed = new MessageEmbed()
            .setTitle(name)
            .setURL(url)
            .setColor(config.colors.p3blue)
            .attachFiles(img)
            .setImage("attachment://persona.png")
            .setFooter("Info gathered from the Megami Tensei Wiki", client.user.displayAvatarURL)
        if (quote) {
            embed.setDescription(`${quote} \n[Report a data error!](${config.servers.discordinvite})`)
        } else {
            embed.setDescription(`[Report a data error!](${config.servers.discordinvite})`)
        }

        return message.channel.send(embed);
    }
}