const config = require("../../config.json");
const { RichEmbed } = require("discord.js");

module.exports = {
    config: {
        name: "p3fesfusion",
        aliases: ["p3ff", "persona3fesfusion"],
        description: "View the recipe for creating a specified Persona in Persona 3 FES",
        usage: "<persona>",
        category: "persona"
    },
    run: async (client, message, args, query) => {
        message.reply("Fusion is a lengthy process that will not be perfected for a while! Bear that in mind while using the fusion commands!");

        //general data parsing and error checking
        let personaName = args.join("_").toLowerCase();
        if (query) personaName = query;
        if (personaName.endsWith("/f")) personaName = personaName.slice(0, -3);
        if (!personaName) return message.reply(`Please specify a Persona to search! To view a list of all Persona's, type \`${config.prefix}p3fesfusion list\``);

        //checks if the user entered the list argument
        if (personaName === "list") {
            message.reply("The Persona Fusion is not currently finished. Many of these names will not work when running the command. Check back soon™️!");

            let list = new RichEmbed()
                .setTitle("Persona 3 FES Personas")
                .setURL("https://megamitensei.fandom.com/wiki/List_of_Persona_3_FES_Personas")
                .setDescription(`Below is a list of all of the FUSABLE Persona's in Persona 3: FES. To view the fusion recipe, use one of the following commands, \`${config.prefix}p3fesfusion <personaName>\` or \`${config.prefix}p3 <personaName> /f\``)
                .addField("Fool Arcana", "`Orpheus`, `Slime`, `Legion`, `Black Frost`, `Ose`, `Decarabia`, `Loki`, `Susano-o`, `Orpheus Telos`")
                .addField("Magician Arcana", "`Nekomata`, `Jack Frost`, `Pyro Jack`, `Hua Po`, `Sati`, `Orobas`, `Rangda`, `Surt`")
                .addField("Priestess", "`Apsaras`, `Unicorn`, `High Pixie`, `Sarasvati`, `Ganga`, `Parvati`, `Kikuri-Hime`, `Scathach`")
                .addField("Empress Arcana", "`Leanan Sidhe`, `Yaksini`, `Laksmi`, `Hariti`, `Gabriel`, `Mother Harlot`, `Skadi`, `Alilat`")
                .addField("Emperor Arcana", "`Forneus`, `Oberon`, `Take-Mikazuchi`, `King Frost`, `Raja Naga`, `Kingu`, `Barong`, `Odin`")
                .addField("Hierophant Arcana", "`Omoikane`, `Berith`, `Shiisaa`, `Flauros`, `Thoth`, `Hokuto Seikun`, `Daisoujou`, `Kohryu`")
                .addField("Lovers Arcana", "`Pixie`, `Alp`, `Narcissus`, `Queen Mab`, `Saki Mitama`, `Titania`, `Raphael`, `Cybele`")
                .addField("Chariot Arcana", "`Ara Mitama`, `Chimera`, `Zouchouten`, `Ares`, `Oumitsunu`, `Nata Taishi`, `Koumokuten`, `Thor`")
                .addField("Justice Arcana", "`Angel`, `Archangel`, `Principality`, `Power`, `Virtue`, `Dominion`, `Throne`, `Melchizedek`")
                .addField("Hermit Arcana", "`Yomotsu Shikome`, `Naga`, `Lamia`, `Mothman`, `Taraka`, `Kurama Tengu`, `Nebiros`, `Kumbhanda`, `Arahabaki`")
                .addField("Fortune Arcana", "`Fortuna`, `Empusa`, `Kusi Mitama`, `Clotho`, `Lachesis`, `Atropos`, `Norn`")
                .addField("Strength Arcana", "`Valkyrie`, `Rakshasa`, `Titan`, `Jikokuten`, `Hanuman`, `Narasimha`, `Kali`, `Siegfried`")
                .addField("Hanged Man Arcana", "`Inugami`, `Take-Minakata`, `Orthus`, `Vasuki`, `Ubelluris`, `Hecatoncheires`, `Hell Biker`, `Attis`")
                .addField("Death Arcana", "`Ghoul`, `Pale Rider`, `Loa`, `Samael`, `Mot`, `Alice`, `Thanatos`")
                .addField("Temperance Arcana", "`Nigi Mitama`, `Mithra`, `Genbu`, `Seiryuu`, `Okuninushi`, `Sukazu`, `Byakko`, `Yurlunger`")
                .addField("Devil Arcana", "`Lilim`, `Vetala`, `Incubus`, `Succubus`, `Pazuzu`, `Lilith`, `Abaddon`, `Beelzebub`")
                .addField("Tower Arcana", "`Eligor`, `Cu Chulainn`, `Bishamonten`, `Seiten Taisei`, `Masakado`, `Mara`, `Shiva`, `Chi You`")
                .addField("Star Arcana", "`Nandi`, `Kaiwan`, `Ganesha`, `Garuda`, `Kartikeya`, `Saturnus`, `Helel`")
                .addField("Moon Arcana", "`Gurr`, `Yamatano-Orochi`, `Girimehkala`, `Dionysus`, `Chernobog`, `Seth`, `Baal Zebul`, `Sandalphon`")
                .addField("Sun Arcana", "`Yatagarasu`, `Quetzalcoatl`, `Jatayu`, `Horus`, `Suparna`, `Vishnu`, `Asura`")
                .addField("Judgement Arcana", "`Anubis`, `Trumpeter`, `Michael`, `Satan`, `Lucifer`, `Messiah`")
                .addField("Aeon Arcana", "`Uriel`, `Nidhoggr`, `Ananta`, `Atavaka`, `Metatron`")
                .setFooter("Information gathered from the Megami Tensei Wiki", client.user.displayAvatarURL)
                .setTimestamp();

            return message.channel.send(list);
        }

        //switch case loop checking what 
        switch (personaName) {
            //fool arcana
            case "orpheus":
                var name = "Orpheus";
                var url = "https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Orpheus";
                var note = "Orpheus is the starting Persona of the protagonist.";
                var result1 = "25,534¥ | [Legion](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Legion) (22/Fool) and [Slime](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Slime) (12/Fool)";
                var result2 = "No Result";
                var result3 = "No Result";
                var result4 = "No Result";
                var result5 = "No Result";
                break;
            case "slime":
                var name = "Slime";
                var url = "https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Slime";
                var note = "";
                var result1 = "8,358¥ | [Angel](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Angel) (4/Justice), [Apsaras](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Apsaras) (3/Priestess), and [Pixie](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Pixie) (2/Lovers)";
                var result2 = "8,520¥ | [Nekomata](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Nekomata) (5/Magician), [Apsaras](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Apsaras) (3/Priestess), and [Orpheus](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Orpheus) (1/Fool)";
                var result3 = "9,951¥ | [Jack Frost](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Jack%20Frost) (8/Magician), [Apsaras](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Apsaras) (3/Priestess), and [Orpheus](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Orpheus) (1/Fool)";
                var result4 = "10,275¥ | [Yomotsu Shikome](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Yomotsu%20Shikome) (9/Hermit), [Pixie](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Pixie) (2/Lovers), and [Orpheus](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Orpheus) (1/Fool)";
                var result5 = "10,635¥ | [Lilim](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Lilim) (8/Devil), [Nekomata](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Nekomata) (5/Magician), and [Orpheus](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Orpheus) (1/Fool)";
                break;
            case "legion":
                var name = "Legion";
                var url = "https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Legion";
                var note = "";
                var result1 = "15,027¥ | [Unicorn](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Unicorn) (11/Priestess), [Forneus](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Forneus) (7/Emperor), and [Ara Mitama](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Ara%20Mitama) (6/Chariot)";
                var result2 = "15,675¥ | [Berith](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Berith) (13/Hierophant), [Ara Mitama](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Ara%20Mitama) (6/Chariot), and [Nekomata](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Nekomata) (5/Magician)";
                var result3 = "15,783¥ | [Berith](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Berith) (13/Hierophant), [Forneus](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Forneus) (7/Emperor), and [Angel](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Angel) (4/Justice)";
                var result4 = "15,819¥ | [Chimera](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Chimera) (9/Chariot), [Yomotsu Shikome](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Yomotsu%20Shikome) (9/Hermit), and [Lilim](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Lilim) (8/Devil)";
                var result5 = "16,035¥ | [Unicorn](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Unicorn) (11/Priestess), [Jack Frost](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Jack%20Frost) (8/Magician), and [Omoikane](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Omoikane) (7/Hierophant)";
                break;
            case "black_frost":
                var name = "Black Frost";
                var url = "https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Black%20Frost"
                var result1 = "69,545¥ | [King Frost](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/King%20Frost) (30/Emperor), [Queen Mab](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Queen%20Mab) (27/Lovers), and [Pyro Jack](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Pyro%20Jack) (14/Magician), [Jack Frost](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Jack%20Frost) (8/Magician)";
                var result2 = "No Fusion Found"
                var result3 = "No Fusion Found"
                var result4 = "No Fusion Found"
                var result5 = "No Fusion Found"
                break;
            case "ose":
                var name = "Ose";
                var url = "https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Ose";
                var note = "";
                var result1 = "39,867¥ | [Narcissus](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Narcissus) (20/Lovers), [Ares](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Ares) (19/Chariot), [Gurr](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Gurr) (15/Moon)";
                var result2 = "40,515¥ | [High Pixie](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/High%20Pixie) (21/Priestess), [Hua Po](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Hua%20Po) (20/Magician), [Berith](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Berith) (13/Hierophant)";
                var result3 = "40,830¥ | [Hua Po](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Hua%20Po) (20/Magician), [Ares](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Ares) (19/Chariot), [Rakshasa](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Rakshasa) (16/Strength)";
                var result4 = "41,001¥	| [Vetala](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Vetala) (24/Devil), [Principality](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Principality) (16/Justice), [Pyro Jack](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Pyro%20Jack) (14/Magician)";
                var result5 = "41,100¥ | [High Pixie](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/High%20Pixie) (21/Priestess), [Ares](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Ares) (19/Chariot), [Oberon](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Oberon) (15/Emperor)";
                break;
            case "decarabia":
                var name = "Decarabia";
                var url = "https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Decarabia"
                var note = "";
                var result1 = "85,497¥ | [Ose](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Ose) (44/Fool), [Legion](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Legion) (22/Fool), [Slime](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Slime) (12/Fool)";
                var result2 = "99,906¥ | [Ose](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Ose) (44/Fool). [Black Frost](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Black%20Frost) (34/Fool), [Orpheus](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Orpheus) (1/Fool)";
                var result3 = "105,153¥ | [Ose](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Ose) (44/Fool), [Black Frost](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Black%20Frost) (34/Fool), [Slime](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Slime) (12/Fool)";
                var result4 = "115,593¥ | [Ose](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Ose) (44/Fool), [Black Frost](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Black%20Frost) (34/Fool), [Legion](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Legion) (22/Fool)";
                var result5 = "151,863¥ | [Kurama Tengu](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Kurama%20Tengu) (44/Hermit), [Nandi](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Nandi) (39/Star), [Hanuman](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Hanuman) (37/Strength)";
                break;
            case "loki":
                var name = "Loki";
                var url = "https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Loki"
                var note = "";
                var result1 = "138,210¥ | [Decarabia](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Decarabia) (50/Fool), [Ose](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Ose) (44/Fool), [Orpheus](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Orpheus) (1/Fool)";
                var result2 = "143,457¥ | [Decarabia](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Decarabia) (50/Fool), [Ose](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Ose) (44/Fool), [Slime](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Slime) (12/Fool)";
                var result3 = "153,897¥ | [Decarabia](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Decarabia) (50/Fool), [Ose](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Ose (44/Fool), [Legion](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Legion) (22/Fool)";
                var result4 = "173,553¥ | [Decarabia](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Decarabia) (50/Fool), [Ose](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Ose) (44/Fool), [Black Frost](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Black%20Frost) (34/Fool)";
                var result5 = "195,387¥ | [Parvati](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Parvati) (47/Priestess), [Hokuto Seikun](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Hokuto%20Seikun) (47/Hierophant), [Ose](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Ose) (44/Fool)";
                break;
            case "susano-o":
                var name = "Susano-o";
                var url = "https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Susano-o";
                var note = "Requires the Fool social link to be maxed out!"
                var result1 = "294,123¥ | [Loki](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Loki), (58/Fool), [Decarabia](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Decarabia) (50/Fool), [Ose](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Ose) (44/Fool), [Black Frost](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Black%20Frost) (34/Fool), [Legion](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Legion) (22/Fool), [Orpheus](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Orpheus) (1/Fool)";
                var result2 = "Fusion Not Found";
                var result3 = "Fusion Not Found";
                var result4 = "Fusion Not Found";
                var result5 = "Fusion Not Found";
                break;
            case "orpheus_telos":
                var name = "Orpheus Telos";
                var url = "https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Orpheus%20Telos";
                var note = "Requires all Social Links to be maxed!";
                var result1 = "1,213,392¥ | [Messiah](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Messiah) (90/Judgement), [Helel](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Helel) (88/Star), [Metatron](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Metatron) (87/Aeon), [Chi You](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Chi%20You) (86/Tower), [Asura](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Asura) (85/Sun), [Thanatos](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Thanatos) (64/Death)";
                var result2 = "No Fusion Found"
                var result3 = "No Fusion Found"
                var result4 = "No Fusion Found"
                var result5 = "No Fusion Found"
                break;

            // Magican Arcana 
            case "nekomata":
                var name = "Nekomata";
                var url = "https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Nekomata";
                var note = "";
                var result1 = "6,958¥ | [Apsaras](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Apsaras) (3/Priestess), [Pixie](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Pixie) (2/Lovers)";
                var result2 = "6,643¥ | [Alp](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Alp) (6/Lovers), [Apsaras](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Apsaras) (3/Priestess)";
                var result3 = "6,643¥ | [Ara Mitama](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Ara%20Mitama) (6/Chariot), [Apsaras](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Apsaras) (3/Priestess)";
                var result4 = "6,859¥ | [Omoikane](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Omoikane) (7/Hierophant), [Pixie](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Pixie) (2/Lovers)";
                var result5 = "14,086¥ | [Pyro Jack](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Pyro%20Jack) (14/Magician), [Jack Frost](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Jack%20Frost) (8/Magician)";
                break;
            case "jack_frost":
                var name = "Jack Frost"
                var url = "https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Jack%20Frost";
                var note = "";
                var result1 = "6,958¥ | [Ara Mitama](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Ara%20Mitama) (6/Chariot), [Angel](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Angel) (4/Justice)";
                var result2 = "6,958¥ | [Omoikane](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Omoikane) (7/Hierophant), [Alp](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Alp) (6/Lovers)";
                var result3 = "8,236¥ | [Chimera](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Chimera) (9/Chariot), [Apsaras](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Apsaras) (3/Priestess)";
                var result4 = "8,407¥ | [Inugami](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Inugami) (10/Hanged Man), [Orpheus](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Orpheus) (1/Fool)";
                var result5 = "8,551¥ | [Chimera](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Chimera) (9/Chariot), [Angel](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Angel) (4/Justice)";
                break;
            case "hua_po":
                var name = "Hua Po";
                var url = "https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Hua%20Po";
                var note = "Requires an item from the Elizabeth Requests!";
                var result1 = "18,375¥ | [Unicorn](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Unicorn) (11/Priestess), [Inugami](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Inugami) (10/Hanged Man), [Chimera](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Chimera) (9/Chariot)";
                var result2 = "18,375¥ | [Unicorn](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Unicorn) (11/Priestess), [Inugami](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Inugami) (10/Hanged Man), [Yomotsu Shikome](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Yomotsu%20Shikome) (9/Hermit)";
                var result3 = "18,483¥ | [Unicorn](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Unicorn) (11/Priestess), [Valkyrie](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Valkyrie) (11/Strength), [Lilim](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Lilim) (8/Devil)";
                var result4 = "18,699¥ | [Slime](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Slime) (12/Fool), [Valkyrie](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Valkyrie) (11/Strength), [Omoikane](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Omoikane) (7/Hierophant)";
                var result5 = "18,699¥ | [Slime](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Slime) (12/Fool), [Valkyrie](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Valkyrie) (11/Strength), [Forneus](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Forneus) (7/Emperor)";
                break;
            case "sati":
                var name = "Sati";
                var url = "https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Sati";
                var note = "";
                var result1 = "28,122¥ | [Hua Po](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Hua%20Po) (20/Magician), [Pyro Jack](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Pyro%20Jack) (14/Magician), [Nekomata](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Nekomata) (5/Magician)";
                var result2 = "29,553¥ | [Hua Po](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Hua%20Po) (20/Magiican), [Pyro Jack](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Pyro%20Jack) (14/Magician), [Jack Frost](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Jack%20Frost) (8/Magician)";
                var result3 = "30,988¥ | [High Pixie](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/High%20Pixie) (21/Priestess), [Ares](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Ares) (19/Chariot)";
                var result4 = "32,167¥ | [High Pixie](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/High%20Pixie) (21/Priestess), [Narcissus](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Narcissus) (20/Lovers)";
                var result5 = "32,284¥ | [Lamia](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Lamia) (25/Hermit), [Gurr](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Gurr) (15/Moon)";
                break;
            case "orobas":
                var name = "Orobas"
                var url = "https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Orobas"
                var note = "";
                var result1 = "40,929¥ | [Sati](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Sati) (28/Magician), [Pyro Jack](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Pyro%20Jack) (14/Magician), [Jack Frost](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Jack%20Frost) (8/Magician)";
                var result2 = "45,762¥ | [Sati](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Sati) (28/Magician), [Hua Po](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Hua%20Po) (20/Magician), [Nekomata](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Nekomata) (5/Magician)";
                var result3 = "47,193¥ | [Sati](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Sati) (28/Magician), [Hua Po](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Hua%20Po) (20/Magician), [Jack Frost](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Jack%20Frost) (8/Magician)";
                var result4 = "51,513¥ | [Sati](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Sati) (28/Magician), [Hua Po](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Hua%20Po) (20/Magician), [Pyro Jack](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Pyro%20Jack) (14/Magician)";
                var result5 = "53,740¥ | [Kusi Mitama](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Kusi%20Mitama) (29/Fortune), [Sarasvati](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Sarasvati) (27/Priestess)";
                break;
                var url = "https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Rangda";
                var note = "";
                var result1 = "67,938¥ | [Orobas](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Orobas) (34/Magician), [Sati](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Sati) (28/Magician), [Nekomata](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Nekomata) (5/Magician)";
                var result2 = "69,369¥ | [Orobas](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Orobas) (34/Magician), [Sati](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Sati) (28/Magician), [Jack Frost](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Jack%20Frost) (8/Magician)";
                var result3 = "73,689¥ | [Orobas](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Orobas) (34/Magician), [Sati](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Sati) (28/Magician), [Pyro Jack](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Pyro%20Jack) (14/Magician)";
                var result4 = "76,636¥ | [Saki Mitama](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Saki%20Mitama) (39/Lovers), [Kusi Mitama](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Kusi%20Mitama) [29/Fortune]";
                var result5 = "77,599¥ | [Nata Taishi](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Nata%20Taishi) (37/Chariot), [Virtue](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Virtue) (32/Justice)";
                break;
            case "surt":
                var name = "Surt";
                var url = "https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Surt";
                var note = "Requires the Magician Social Link to be maxed!";
                var result1 = "91,482¥ | [Rangda](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Rangda) (40/Magician), [Orobas](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Orobas) (34/Magician), [Nekomata](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Nekomata) (5/Magician)";
                var result2 = "92,913¥ | [Rangda](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Rangda) (40/Magician), [Orobas](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Orobas) (34/Magician), [Jack Frost](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Jack%20Frost) (8/Magician)";
                var result3 = "97,233¥ | [Rangda](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Rangda) (40/Magician), [Orobas](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Orobas) (34/Magician), [Pyro Jack](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Pyro%20Jack) (14/Magician)";
                var result4 = "100,828¥ | [Thoth](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Thoth) (41/Hierophant), [Saki Mitama](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Saki%20Mitama) (39/Lovers)";
                var result5 = "100,990¥ | [Girimehkala](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Girimehkala) (42/Moon), [Taraka](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Taraka) (38/Hermit)";
                break;
            // Start of Priestess / End of Magician
            case "apsaras":
                var name = "Apsaras";
                var url = "https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Apsaras";
                var note = "";
                var result1 = "4,807¥ | [Pixie](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Pixie) (2/Lovers), [Orpheus](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Orpheus) (1/Fool)";
                var result2 = "23,500¥ | [High Pixie](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/High%20Pixie) (21/Priestess), [Unicorn](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Unicorn) (11/Priestess)";
                var result3 = "32,032¥ | [Sarasvati](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Sarasvati) (27/Priestess), [Unicorn](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Unicorn) (11/Priestess)";
                var result4 = "No Fusion Found";
                var result5 = "No Fusion Found";
                break;
            case "unicorn":
                var name = "Unicorn";
                var url = "https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Unicorn";
                var note = "";
                var result1 = "6,175¥ | [Alp](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Alp) (6/Lovers), [Orpheus](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Orpheus) (1/Fool)";
                var result2 = "7,575¥ | [Apsaras](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Apsaras) (3/Priestess), [Pixie](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Pixie) (2/Lovers), [Orpheus](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Orpheus) (1/Fool)";
                var result3 = "7,768¥ | [Yomotsu Shikome](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Yomotsu%20Shikome) (9/Hermit), [Orpheus](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Orpheus) (1/Fool)";
                var result4 = "8,551¥ | [Yomotsu Shikome](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Yomotsu%20Shikome) (9/Hermit), [Angel](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Angel) (4/Justice";
                var result5 = "9,190¥ | [Inugami](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Inugami) (10/Hanged Man), [Angel](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Angel) (4/Justice)";
                break;
            case "high_pixie":
                var name = "High Pixie";
                var url = "https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/High%20Pixie";
                var note = "";
                var result1 = "14,082¥ | [Inugami](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Inugami) (10/Hanged Man), [Yomotsu Shikome](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Yomotsu%20Shikome) (9/Hermit), [Pixie](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Pixie) (2/Lovers)";
                var result2 = "14,334¥ | [Inugami](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Inugami) (10/Hanged Man), [Omoikane](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Omoikane) (7/Hierophant), [Ara Mitama](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Ara%20Mitama) (6/Chariot)";
                var result3 = "14,568¥ | [Unicorn](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Unicorn) (11/Priestess), [Yomotsu Shikome](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Yomotsu%20Shikome) (9/Hermit), [Orpheus](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Orpheus) (1/Fool)";
                var result4 = "14,730¥ | [Slime](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Slime) (12/Fool), [Lilim](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Lilim) (8/Devil), [Orpheus](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Orpheus) (1/Fool)";
                var result5 = "14,865¥ | [Archangel](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Archangel) (10/Justice), [Lilim](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Lilim) (8/Devil), [Ara Mitama](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Ara%20Mitama) (6/Chariot)";
                break;
            case "sarasvati":
                var name = "Sarasvati";
                var url = "https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Sarasvati"
                var note = "";
                var result1 = "33,454¥ | [Legion](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Legion) (22/Fool), [Narcissus](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Narcissus) (20/Lovers)";
                var result2 = "33,454¥ | [Mithra](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Mithra) (22/Temperance), [Narcissus](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Narcissus) (20/Lovers)";
                var result3 = "34,264¥ | [Power](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Power) (25/Justice), [Naga](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Naga) (17/Hermit)";
                var result4 = "34,750¥ | [Shiisaa](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Shiisaa) (26/Hierophant), [Rakasha](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Rakshasa) (16/Strength)";
                var result5 = "36,762¥ | [Narcissus](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Narcissus) (20/Lovers), [Naga](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Naga) (17/Hermit), [Zouchouten](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Zouchouten) (14/Chariot)";
                break;
            case "ganga":
                var name = "Ganga";
                var url = "https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Ganga";
                var note = "";
                var result1 = "44,700¥ | [Sarasvati](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Sarasvati) (27/Priestess), [High Pixie](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/High%20Pixie) (21/Priestess), [Apsaras](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Apsaras) (3/Priestess)";
                var result2 = "48,732¥ | [Sarasvati](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Sarasvati) (27/Priestess), [High Pixie](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/High%20Pixie) (21/Priestess), [Unicorn](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Unicorn) (11/Priestess)";
                var result3 = "50,518¥ | [Sati](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Sati) (28/Magician), [Yamatano-orochi](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Yamatano-orochi) (26/Moon)";
                var result4 = "51,814¥ | [Mothman](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Mothman) (32/Hermit), [Legion](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Legion) (22/Fool)";
                var result5 = "52,183¥ | [Jikokuten](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Jikokuten) (29/Strength), [Shiisaa](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Shiisaa) (26/Hierophant";
                break;
            case "parvati":
                var name = "Parvati";
                var url = "https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Parvati"
                var note = "";
                var result1 = "67,632¥ | [Ganga](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Ganga) (35/Priestess), [Sarasvati](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Sarasvati) (27/Priestess), [Apsaras](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Apsaras) (3/Priestess)";
                var result2 = "71,664¥ | [Ganga](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Ganga) (35/Priestess), [Sarasvati](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Sarasvati) (27/Priestess), [Unicorn](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Unicorn) (11/Priestess)";
                var result3 = "79,480¥ | [Hanuman](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Hanuman) (37/Strength), [Flauros](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Flauros) (33/Hierophant)";
                var result4 = "79,750¥ | [Taraka](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Taraka) (38/Hermit), [Virtue](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Virtue) (32/Justice)";
                var result5 = "79,750¥ | [Vasuki](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Vasuki) (38/Hanged Man), [Virtue](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Virtue) (32/Justice)";
                break;
            case "kikuri_hime":
                var name = "Kikuri-Hime";
                var url = "https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Kikuri-hime";
                var note = "";
                var result1 = "109,644¥ | [Parvati](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Parvati) (47/Priestess), [Sarasvati](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Sarasvati) (27/Priestess), [High Pixie](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/High%20Pixie) (21/Priestess)";
                var result2 = "110,112¥ | [Parvati](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Parvati) (47/Priestess), [Ganga](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Ganga) (35/Priestess), [Asparas](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Apsaras) (3/Priestess)";
                var result3 = "114,144¥ | [Parvati](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Parvati) (47/Priestess), [Ganga](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Ganga) (35/Priestess), [Unicorn](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Unicorn) (11/Priestess)";
                var result4 = "124,044¥ | [Parvati](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Parvati) (47/Priestess), [Ganga](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Ganga) (35/Priestess), [High Pixie](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/High%20Pixie) (21/Priestess)";
                var result5 = "132,576¥ | [Parvati](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Parvati) (47/Priestess), [Ganga](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Ganga) (35/Priestess), [Sarasvati](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Sarasvati) (27/Priestess)";
                break;
            case "scathach":
                var name = "Scathach";
                var url = "https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Scathach";
                var note = "Requires the Priestess social link to be maxed!";
                var result1 = "155,148¥ | [Kikuri-Hime](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Kikuri-hime) (53/Priestess), [Parvati](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Parvati) (47/Priestess), [Asparas](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Apsaras) (3/Priestess)";
                var result2 = "159,180¥ | [Kikuri-Hime](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Kikuri-hime) (53/Priestess), [Parvati](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Parvati) (47/Priestess), [Unicorn](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Unicorn) (11/Priestess)";
                var result3 = "169,080¥ | [Kikuri-Hime](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Kikuri-hime) (53/Priestess), [Parvati](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Parvati) (47/Priestess), [High Pixie](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/High%20Pixie) (21/Priestess)";
                var result4 = "169,822¥ | [Kumbhanda](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Kumbhanda) (56/Hermit), [Decarabia](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Decarabia) (50/Fool)";
                var result5 = "170,686¥ | [Loki](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Loki) (58/Fool) [Titania](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Titania) (48/Lovers)";
                break;
            // End of Priestess / Start of Empress
            case "leanan sidhe":
                

        }

        //checks if the user entered a valid persona name by checking if the "name" variable was defined
        if (!name) return message.reply(`You have entered an invalid Persona name! Check \`${config.prefix}p3fesfusion list\` for a full list of Persona's`);

        //creates the embed using all of the defined variables above and sends it to the current channel
        let embed = new RichEmbed()
            .setTitle(name)
            .setURL(url)
            .setColor(config.colors.p3blue)
            .addField("Combination #1", result1)
            .addField("Combination #2", result2)
            .addField("Combination #3", result3)
            .addField("Combination #4", result4)
            .addField("Combination #5", result5)
            .setFooter("Information gathered from Arantius's Persona 3 FES Fusion Calculator", client.user.displayAvatarURL);

        //checks to see if the note variable is defined, if it is, display the variable, if it isn't, don't display it
        if (note) {
            embed.setDescription(`${note} \n[Report a data error!](${config.servers.discordinvite})`)
        } else {
            embed.setDescription(`[Report a data error!](${config.servers.discordinvite})`)
        }

        //sends the embed to the current channel
        return message.channel.send(embed);
    }
}