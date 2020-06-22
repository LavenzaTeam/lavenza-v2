const config = require("../../config.json");
const { MessageEmbed } = require("discord.js");

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

            let list = new MessageEmbed()
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
            // Start of Fool
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
                var result4 = "41,001¥ | [Vetala](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Vetala) (24/Devil), [Principality](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Principality) (16/Justice), [Pyro Jack](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Pyro%20Jack) (14/Magician)";
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

            // Start of Magican / End of Fool 
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
            case "rangda":
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
            case "leanan_sidhe":
                var name = "Leanan Sidhe";
                var url = "https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Leanan%20Sidhe";
                var note = "";
                var result1 = "10,315¥ | [Nigi Mitama](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Nigi%20Mitama) (12/Temperance), [Asparas](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Apsaras) (3/Priestess)";
                var result2 = "12,354¥ | [Nigi Mitama](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Nigi%20Mitama) (12/Temperance), [Pixie](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Pixie) (2/Lovers), [Orpheus](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Orpheus) (1/Fool)";
                var result3 = "12,619¥ | [Gurr](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Gurr) (15/Moon), [Pixie](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Pixie) (2/Lovers)";
                var result4 = "13,722¥ | [Nigi Mitama](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Nigi%20Mitama) (12/Temperance), [Alp](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Alp) (6/Lovers), [Orpheus](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Orpheus) (1/Fool)";
                var result5 = "13,987¥ | [Gurr](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Gurr) (15/Moon), [Alp](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Alp) (6/Lovers)";
                break;
            case "yaksini":
                var name = "Yaksini";
                var url = "https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Yaksini";
                var note = "";
                var result1 = "71,902¥ | [Raja Naga](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Raja%20Naga) (36/Emperor), [Yatagarasu](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Yatagarasu) (30/Sun)";
                var result2 = "74,971¥ | [Nandi](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Nandi) (39/Star), [Sati](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Sati) (28/Magician)";
                var result3 = "77,230¥ | [Cu Chulainn](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Cu%20Chulainn) (40/Tower), [Sati](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Sati) (28/Magician)";
                var result4 = "78,211¥ | [Quetzalcoatl](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Quetzalcoatl) (43/Sun), [Take Mikazuchi](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Take-mikazuchi) (24/Emperor)";
                var result5 = "79,480¥ | [Samael](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Samael) (37/Death), [Flauros](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Flauros) (33/Hierophant)";
                break;
            case "laksmi":
                var name = "Laksmi"
                var url = "https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Laksmi";
                var note = "";
                var result1 = "154,540¥ | [Odin](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Odin) (57/Emperor), [Quetzalcoatl](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Quetzalcoatl) (43/Sun)";
                var result2 = "154,855¥ | [Surt](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Surt) (52/Magican), [Kaiwan](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Kaiwan) (49/Star)";
                var result3 = "155,827¥ | [Jatayu](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Jatayu) (55/Sun), [Kingu](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Kingu) (46/Emperor)";
                var result4 = "157,294¥ | [Bishamonten](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Bishamonten) (60/Tower), [Rangda](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Rangda) (40/Magician)";
                var result5 = "157,771¥ | [Loki](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Loki) (58/Fool), [Quetzalcoatl](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Quetzalcoatl) (43/Sun)";
                break;
            case "hariti":
                var name = "Hariti";
                var url = "https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Hariti";
                var note = "";
                var result1 = "197,335¥ | [Chernobog](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Chernobog) (58/Moon), [Byakko](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Byakko) (57/Temperance)";
                var result2 = "198,478¥ | [Seth](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Seth) (66/Moon), [Titania](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Titania) (48/Lovers)";
                var result3 = "198,478¥ | [Seth](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Seth) (66/Moon), [Ubelluris](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Ubelluris) (48/Hanged Man)";
                var result4 = "198,955¥ | [Horus](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Horus) (63/Sun), [Barong](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Barong) (52/Emperor)";
                var result5 = "199,603¥ | [Scatchach](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Scathach) (64/Priestess), [Suzaku](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Suzaku) (51/Temperance)";
                break;
            case "gabriel":
                var name = "Gabriel";
                var url = "https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Gabriel";
                var note = "";
                var result1 = "230,140¥ | [Nidhoggr](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Nidhoggr) (69/Aeon), [Jatayu](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Jatayu) (55/Sun)";
                var result2 = "232,075¥ | [Attis](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Attis) (67/Hanged Man), [Chernobog](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Chernobog) (58/Moon)";
                var result3 = "234,496¥ | [Horus](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Horus) (63/Sun), [Uriel](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Uriel) (63/Aeon)";
                var result4 = "234,883¥ | [Baal Zebul](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Baal%20Zebul) (71/Moon), [Hecatoncheries](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Hecatoncheires)(54/Hanged Man)";
                var result5 = "234,982¥ | [Seth](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Seth) (66/Moon), [Hell Biker](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Hell%20Biker) (60/Hanged Man)";
                break;
            case "mother_harlot":
                var name = "Mother Harlot";
                var url = "https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Mother%20Harlot";
                var note = "";
                var result1 = "278,992¥ | [Baal Zebul](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Baal%20Zebul) (71/Moon), [Attis](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Attis) (67/Hanged Man)";
                var result2 = "280,126¥ | [Sandalphon](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Sandalphon) (74/Moon), [Yurlungur](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Yurlungur) (64/Temperance)";
                var result3 = "280,720¥ | [Ananta](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Ananta) (75/Aeon), [Horus](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Horus) (63/Sun)";
                var result4 = "282,655¥ | [Suparna](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Suparna) (70/Sun), [Nidhoggr](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Nidhoggr) (69/Aeon)";
                var result5 = "282,763¥ | [Baal Zebul](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Baal%20Zebul) (71/Moon), [Cybele](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Cybele) (68/Lovers)";
                break;
            case "skadi":
                var name = "Skadi";
                var url = "https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Skadi";
                var note = "";
                var result1 = "325,180¥ | [Asura](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Asura) (85/Moon), [Uriel](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Uriel) (63/Aeon)";
                var result2 = "328,294¥ | [Atavaka](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Atavaka) (80/Aeon), [Suparna](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Suparna) (70/Sun)";
                var result3 = "334,419¥ | [Mother Harlot](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Mother%20Harlot) (74/Empress), [Gabriel](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Gabriel) (69/Empress), [Leanan Sidhe](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Leanan%20Sidhe) (33/Empress)";
                var result4 = "334,720¥ | [Metatron](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Metatron) (87/Aeon), [Horus](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Horus) (63/Sun)";
                var result5 = "338,275¥ | [Metatron](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Metatron) (87/Aeon), [Scatchach](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Scathach) (64/Priestess)";
                break;
            case "aliat":
                var name = "Aliat";
                var url = "https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Alilat";
                var note = "Requires the Empress social link to be maxed out!";
                var result1 = "371,404¥ | [Asura](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Asura) (85/Sun), [Ananta](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Ananta) (75/Aeon)";
                var result2 = "375,454¥ | [Orpheus Telos](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Orpheus%20Telos) (90/Fool), [Suparna](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Suparna) (70/Sun)";
                var result3 = "375,607¥ | [Asura](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Asura) (85/Sun), [Susano-o](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Susano-o) (76/Fool)";
                var result4 = "392,959¥ | [Asura](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Asura) (85/Sun), [Atavaka](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Atavaka) (80/Aeon)";
                var result5 = "393,715¥ | [Metatron](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Metatron) (87/Aeon), [Vishnu](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Vishnu) (78/Sun)";
                break;

            // End of Empress / Start of Emperor
            case "forneus":
                var name = "Forneus";
                var url = "https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Forneus";
                var note = "";
                var result1 = "5,959¥ | [Nekomata](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Nekomata) (5/Magician), [Pixie](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Pixie) (2/Lovers)";
                var result2 = "6,175¥ | [Ara Mitama](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Ara%20Mitama) (6/Chariot), [Orpheus](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Orpheus) (1/Fool)";
                var result3 = "6,382¥ | [Ara Mitama](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Ara%20Mitama) (6/Chariot), [Pixie](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Pixie) (2/Lovers)";
                var result4 = "7,327¥ | [Alp](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Alp) (6/Lovers), [Nekomata](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Nekomata) (5/Magician)";
                var result5 = "7,390¥ | [Jack Frost](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Jack%20Frost) (8/Magician), [Pixie](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Pixie) (2/Lovers)";
                break;
            case "oberon":
                var name = "Oberon";
                var url = "https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Oberon";
                var note = "";
                var result1 = "8,682¥ | [Ara Mitama](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Ara%20Mitama) (6/Chariot), [Pixie](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Pixie) (2/Lovers), [Orpheus](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Orpheus0 (1/Fool)";
                var result2 = "8,758¥ | [Jack Frost](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Jack%20Frost) (8/Magician), [Alp](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Alp) (6/Lovers)";
                var result3 = "9,343¥ | [Chimera](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Chimera) (9/Chariot), [Alp](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Alp) (6/Lovers)";
                var result4 = "10,275¥ | [Chimera](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Chimera) (9/Chariot), [Pixie](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Pixie) (2/Lovers), [Orpheus](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Orpheus) (1/Fool)";
                var result5 = "10,311¥ | [Forneus](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Forneus) (7/Emperor), [Nekomata](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Nekomata) (5/Magician), [Pixie](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Pixie) (2/Lovers)";
                break;
            case "take_mikazuchi":
                var name = "Take-Mikazuchi";
                var url = "https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Take-mikazuchi";
                var note = "";
                var result1 = "20,440¥ | [Fortuna](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Fortuna) (17/Fortune), [Berith](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Berith) (13/Hierophant)";
                var result2 = "20,616¥ | [Berith](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Berith) (13/Hierophant), [Valkyrie](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Valkyrie) (11/Strength), [Yomotsu Shikome](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Yomotsu%20Shikome) (9/Hermit)";
                var result3 = "20,616¥ | [Berith](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Berith) (13/Hierophant), [Unicorn](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Unicorn) (11/Priestess), [Yomotsu Shikome](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Yomotsu%20Shikome) (9/Hermit)";
                var result4 = "20,778¥ | [Pyro Jack](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Pyro%20Jack) (14/Magician), [Inugami](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Inugami) (10/Hanged Man), [Chimera](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Chimera) (9/Chariot)";
                var result5 = "20,778¥ | [Pyro Jack](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Pyro%20Jack) (14/Magician), [Inugami](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Inugami) (10/Hanged Man), [Yomotsu Shikome](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Yomotsu%20Shikome) (9/Hermit)";
                break;
            case "king_frost":
                var name = "King Frost";
                var url = "https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/King%20Frost";
                var note = "Requires an item from the Elizabeth Request!";
                var result1 = "41,500¥ | [Lamia](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Lamia) (25/Hermit), [Empusa](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Empusa) (23/Fortune)";
                var result2 = "42,310¥ | [Sati](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Sati) (28/Magician), [Narcissus](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Narcissus) (20/Lovers)";
                var result3 = "43,003¥ | [Shiisaa](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Shiisaa) (26/Hierophant), [Empusa](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Empusa) (23/Fortune)";
                var result4 = "43,975¥ | [Kusi Mitama](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Kusi%20Mitama) (29/Fortune), [Hua Po](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Hua%20Po) (20/Magician)";
                var result5 = "45,694¥ | [Oumitsunu](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Oumitsunu) (30/Chariot), [Narcissus](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Narcissus) (20/Lovers)";
                break;
            case "raja_naga":
                var name = "Raja Naga";
                var url = "https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Raja%20Naga";
                var note = "";
                var result1 = "55,302¥ | [King Frost](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/King%20Frost) (30/Emperor), [Take-Mikazuchi](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Take-mikazuchi) (24/Emperor), [Forneus](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Forneus) (7/Emperor)";
                var result2 = "61,062¥ | [King Frost](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/King%20Frost) (30/Emperor), [Take-Mikazuchi](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Take-mikazuchi) (24/Emperor), [Oberon](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Oberon) (15/Emperor)";
                var result3 = "62,335¥ | [Mothman](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Mothman) (32/Hermit), [Kusi Mitama](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Kusi%20Mitama) (29/Fortune)";
                var result4 = "62,875¥ | [Orobas](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Orobas) (34/Magician), [Queen Mab](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Queen%20Mab) (27/Lovers)";
                var result5 = "64,054¥ | [Virtue](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Virtue) (32/Justice), [Yatagarasu](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Yatagarasu) (30/Sun)";
                break;
            case "kingu":
                var name = "Kingu";
                var url = "https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Kingu";
                var note = "";
                var result1 = "76,254¥ | [Raja Naga](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Raja%20Naga) (36/Emperor), [King Frost](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/King%20Frost) (30/Emperor), [Forneus](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Forneus) (7/Emperor)";
                var result2 = "82,014¥ | [Raja Naga](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Raja%20Naga) (36/Emperor), [King Frost](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/King%20Frost) (30/Emperor), [Oberon](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Oberon) (15/Emperor)";
                var result3 = "83,404¥ | [Samael](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Samael) (37/Death), [Ganga](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Ganga) (35/Priestess)";
                var result4 = "83,566¥ | [Clotho](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Clotho) (38/Fortune), [Orobas](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Orobas) (34/Magician)";
                var result5 = "85,294¥ | [Dominion](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Dominion) (42/Justice), [Yatagarasu](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Yatagarasu) (30/Sun)";
                break;
            case "barong":
                var name = "Barong";
                var url = "https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Barong";
                var note = "";
                var result1 = "111,102¥ | [Kingu](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Kingu) (46/Emperor), [Raja Naga](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Raja%20Naga) (36/Emperor), [Forneus](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Forneus) (7/Emperor)";
                var result2 = "116,025¥ | [Kingu](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Kingu) (46/Emperor), [King Frost](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/King%20Frost) (30/Emperor), [Take-Mikazuchi](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Take-mikazuchi) (24/Emperor)";
                var result3 = "116,862¥ | [Kingu](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Kingu) (46/Emperor), [Raja Naga](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Raja%20Naga) (36/Emperor), [Oberon](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Oberon) (17/Emperor)";
                var result4 = "127,473¥ | [Kingu](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Kingu) (46/Emperor), [Raja Naga](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Raja%20Naga) (36/Emperor), [Take-Mikazuchi](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Take-mikazuchi) (24/Emperor)";
                var result5 = "130,204¥ | [Parvati](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Parvati) (47/Priestess), [Mot](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Mot) (46/Death)";
                break;
            case "odin":
                var name = "Odin";
                var url = "https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Odin";
                var note = "Requires the Emperor social link to be maxed!";
                var result1 = "151,134¥ | [Barong](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Barong) (52/Emperor), [Kingu](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Kingu) (46/Emperor), [Forneus](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Forneus) (7/Emperor)";
                var result2 = "156,894¥ | [Barong](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Barong) (52/Emperor), [Kingu](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Kingu) (46/Emperor), [Oberon](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Oberon) (15/Emperor)";
                var result3 = "163,630¥ | [Atropos](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Atropos) (54/Fortune), [Nebiros](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Nebiros) (50/Hermit)";
                var result4 = "167,505¥ | [Barong](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Barong) (52/Emperor), [Kingu](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Kingu) (46/Emperor), [Take-Mikazuchi](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Take-mikazuchi) (24/Emperor)";
                var result5 = "167,788¥ | [Raphael](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Raphael) (61/Lovers), [Koumokuten](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Koumokuten) (43/Chariot)";
                break;

            // End of Emperor / Start of Hierophant
            case "omoikane":
                var name = "Omoikane";
                var url = "https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Omoikane";
                var note = "";
                var result1 = "5,752¥ | [Nekomata](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Nekomata) (5/Magician), [Orpheus](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Orpheus) (1/Fool)";
                var result2 = "6,535¥ | [Nekomata](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Nekomata) (5/Magician), [Angel](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Angel) (4/Justice)";
                var result3 = "7,183¥ | [Jack Frost](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Jack%20Frost) (8/Magician), [Orpheus](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Orpheus) (1/Fool)";
                var result4 = "7,890¥ | [Angel](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Angel) (4/Justice), [Pixie](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Pixie) (2/Lovers), [Orpheus](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Orpheus) (1/Fool)";
                var result5 = "7,966¥ | [Jack Frost](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Jack%20Frost) (8/Magician), [Angel](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Angel) (4/Justice)";
                break;
            case "berith":
                var name = "Berith";
                var url = "https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Berith";
                var note = "";
                var result1 = "9,159¥ | [Forneus](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Forneus) (7/Emperor), [Pixie](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Pixie) (2/Lovers), [Orpheus](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Orpheus) (1/Fool)";
                var result2 = "9,559¥ | [Archangel](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Archangel) (10/Justice), [Nekomata](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Nekomata) (5/Magician)";
                var result3 = "10,104¥ | [Omoikane](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Omoikane) (7/Hierophant), [Nekomata](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Nekomata) (5/Magician), [Orpheus](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Orpheus) (1/Fool)";
                var result4 = "10,104¥ | [Forneus](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Forneus) (7/Emperor), [Alp](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Alp) (6/Devil), [Orpheus](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Orpheus) (1/Fool)";
                var result5 = "10,675¥ | [Valkyrie](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Valkyrie) (11/Strength), [Alp](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Alp) (6/Devil)";
                break;
            case "shiisaa":
                var name = "Shiisaa";
                var url = "https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Shiisaa";
                var note = "";
                var result1 = "16,620 ¥ | [Unicorn](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Unicorn) (11/Priestess), [Chimera](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Chimera) (9/Chariot), [Omoikane](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Omoikane) (7/Hierophant)";
                var result2 = "16,750 ¥	| [Pyro Jack](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Pyro%20Jack) (14/Magician), [Slime](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Slime) (12/Fool)";
                var result3 = "16,782 ¥	| [Slime](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Slime) (12/Fool) [Jack Frost](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Jack%20Frost) (8/Magician), [Forneus](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Forneus) (7/Emperor)";
                var result4 = "16,890 ¥	| [Slime](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Slime) (12/Fool), [Yomoto Shikome](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Yomotsu%20Shikome) (9/Hermit), [Ara Mitama](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Ara%20Mitama) (6/Chariot)";
                var result5 = "17,043 ¥	| [Inugami](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Inugami) (10/Hanged Man), [Chimera](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Chimera) (9/Chariot), [Yomoto Shikome](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Yomotsu%20Shikome) (9/Hermit";
                break;
            case "flauros":
                var name = "Flauros";
                var url = "https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Flauros";
                var note = "";
                var result1 = "49,015¥ | [Sati](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Sati) (28/Magician), [Power](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Power) (25/Justice)";
                var result2 = "49,294¥ | [Virtue](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Power) (32/Justice), [Hua Po](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Hua%20Po) (20/Magician)";
                var result3 = "53,110¥ | [Black Frost](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Black%20Frost) (34/Fool), [Hua Po](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Hua%20Po) (20/Magician)";
                var result4 = "53,740¥ | [Jikokuten](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Jikokuten) (29/Strength), [Queen Mab](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Queen%20Mab) (27/Lovers)";
                var result5 = "54,177¥ | [Take-Mikazuchi](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Take-mikazuchi) (24/Emperor), [Legion](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Legion) (22/Fool), [Narcissus](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Narcissus) (20/Lovers)";
                break;
            case "thoth":
                var name = "Thoth";
                var url = "https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Thoth";
                var note = "Requires an item from the Elizabeth's Requests!";
                var result1 = "63,735¥ | [Flauros](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Flauros) (33/Hierophant), [Shiisaa](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Shiisaa) (26/Hierophant), [Omoikane](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Omoikane) (7/Hierophant)";
                var result2 = "67,731¥ | [Flauros](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Flauros) (33/Hierophant), [Shiisaa](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Shiisaa) (26/Hierophant), [Berith](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Berith) (13/Hierophant)";
                var result3 = "71,470¥ | [Orobas](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Orobas) (34/Magician), [Virtue](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Virtue) (32/Justice)";
                var result4 = "73,360¥ | [Nandi](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Nandi) (39/Star), [Queen Mab](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Queen%20Mab) (27/Lovers)";
                var result5 = "74,431¥ | [Vasuki](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Vasuki) (38/Hanged Man), [Genbu](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Genbu) (29/Temperance)";
                break;
            case "hokuto_seikun":
                var name = "Hokuto Seikun";
                var url = "https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Hokuto%20Seikun";
                var note = "";
                var result1 = "92,760¥ | [Thoth](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Thoth) (41/Hierophant), [Flauros](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Flauros) (33/Hierophant), [Omoikane](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Omoikane) (7/Hierophant)"
                var result2 = "96,756¥ | [Thoth](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Thoth) (41/Hierophant), [Flauros](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Flauros) (33/Hierophant), [Berith](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Berith) (13/Hierophant)";
                var result3 = "105,454¥ | [Dominion](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Dominion) (42/Justice), [Rangda](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Rangda) (40/Magician)";
                var result4 = "105,616¥ | [Quetzalcoatl](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Quetzalcoatl) (43/Sun), [Saki Mitama](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Saki%20Mitama) (39/Lovers)";
                var result5 = "105,886¥ | [Okuninushi](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Okuninushi) (44/Temperance), [Vasuki](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Vasuki) (38/Hanged Man)";
                break;
            case "daisoujou":
                var name = "Daisoujou";
                var url = "https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Daisoujou";
                var note = "";
                var result1 = "106,045¥ | [Saki Mitama](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Saki%20Mitama) (39/Lovers), [Kusi Mitama](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Kusi%20Mitama) (29/Fortune), [Mithra](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Mithra) (22/Temperance), [Nigi Mitama](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Nigi%20Mitama) (12/Temperance), [Ara Mitama](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Ara%20Mitama) (6/Chariot)";
                var result2 = "Fusion Not Found!";
                var result3 = "Fusion Not Found!";
                var result4 = "Fusion Not Found!";
                var result5 = "Fusion Not Found!";
                break;
            case "kohryu":
                var name = "Kohryu";
                var url = "https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Kohryu";
                var note = "Requires the Hierophant Social Link to be maxed!"
                var result1 = "246,035¥ | [Byakko](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Byakko) (57/Temperance), [Suzaku](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Suzaku) (51/Temperance), [Seiryuu](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Seiryuu) (36/Temperance), [Genbu](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Genbu) (29/Temperance)";
                var result2 = "Fusion Not Found!";
                var result3 = "Fusion Not Found!";
                var result4 = "Fusion Not Found!";
                var result5 = "Fusion Not Found!";
                break;

            // Start of Lovers / End of Hierophant
            case "pixie":
                var name = "Pixie";
                var url = "https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Pixie";
                var note = "";
                var result1 = "19,342¥ | [Narcissus](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Narcissus) (20/Lovers), [Alp](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Alp) (6/Lovers)";
                var result2 = "29,107¥ | [Queen Mab](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Queen%20Mab) (27/Lovers), [Alp](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Alp) (6/Lovers)";
                var result3 = "Fusion Not Found!";
                var result4 = "Fusion Not Found!";
                var result5 = "Fusion Not Found!";
                break;
            case "alp":
                var name = "Alp";
                var url = "https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Alp";
                var note = "";
                var result1 = "5,383¥ | [Angel](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Angel) (4/Justice), [Orpheus](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Orpheus) (1/Fool)";
                var result2 = "5,851¥ | [Angel](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Angel) (4/Justice), [Apsaras](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Apsaras) (3/Priestess)";
                var result3 = "6,220¥ | [Nekomata](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Nekomata) (5/Magician), [Apsaras](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Apsaras) (3/Priestess)";
                var result4 = "7,651¥ | [Jack Frost](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Jack%20Frost) (8/Magician), [Apsaras](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Apsaras) (6/Lovers)";
                var result5 = "8,407¥ | [Archangel](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Archangel) (10/Justice), [Orpheus](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Orpheus) (1/Fool)";
                break;
            case "narcissus":
                var name = "Narcissus";
                var url = "https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Narcissus";
                var note = "";
                var result1 = "8,875¥ | [Archangel](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Archangel) (10/Justice), [Apsaras](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Apsaras) (3/Priestess)";
                var result2 = "9,258¥ | [Alp](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Alp) (6/Lovers), [Angel](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Angel) (4/Justice), [Orpheus](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Orpheus) (1/Fool)";
                var result3 = "9,627¥ | [Forneus](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Forneus) (7/Emperor), [Apsaras](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Apsaras) (3/Priestess), [Pixie](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Pixie) (2/Lovers)";
                var result4 = "9,726¥ | [Alp](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Alp) (6/Lovers), [Angel](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Angel) (4/Justice), [Apsaras](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Apsaras) (3/Priestess)";
                var result5 = "9,883¥ | [Unicorn](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Unicorn) (11/Priestess), [Angel](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Angel) (4/Justice)";
                break;
            case "queen_mab":
                var name = "Queen Mab";
                var url = "https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Queen%20Mab";
                var note = "";
                var result1 = "32,167¥ | [High Pixie](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/High%20Pixie) (21/Priestess), [Hua Po](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Hua%20Po) (20/Magician)";
                var result2 = "33,387¥ | [Naga](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Naga) (17/Hermit), [Fortuna](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Fortuna) (17/Fortune), [Pyro Jack](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Pyro%20Jack) (14/Magician)";
                var result3 = "34,089¥ | [Narcissus](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Narcissus) (20/Lovers), [Principality](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Principality) (16/Justice), [Slime](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Slime) (12/Fool)";
                var result4 = "34,242¥ | [Fortuna](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Fortuna) (17/Fortune), [Principality](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Principality) (16/Justice), [Rakshasa](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Rakshasa) (16/Strength)";
                var result5 = "34,359¥ | [High Pixie](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/High%20Pixie) (21/Priestess), [Gurr](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Gurr) (15/Moon), [Nigi Mitama](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Nigi%20Mitama) (12/Temperance)";
                break;
            case "saki_mitama":
                var name = "Nigi Mitama";
                var url = "https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Saki%20Mitama";
                var note = "";
                var result1 = "43,206¥ | [Queen Mab](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Queen%20Mab) (27/Lovers), [Narcissus](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Narcissus) (20/Lovers), [Pixie](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Pixie) (2/Lovers)";
                var result2 = "44,574¥ | [Queen Mab](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Queen%20Mab) (27/Lovers), [Narcissus](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Narcissus) (20/Lovers), [Alp](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Alp) (6/Lovers)";
                var result3 = "50,518¥ | [Orthrus](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Orthrus), [Shiisaa](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Shiisaa) (26/Hierophant)";
                var result4 = "51,814¥ | [Virtue](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Virtue) (32/Justice), [Legion](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Legion) (22/Fool)";
                var result5 = "52,075¥ | [Sati](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Sati) (28/Magician), [Sarasvati](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Sarasvati) (27/Priestess)";
                break;
            case "titania":
                var name = "Titania";
                var url = "https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Titania";
                var note = "";
                var result1 = "75,867¥ | [Saki Mitama](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Saki%20Mitama) (39/Lovers), [Queen Mab](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Queen%20Mab) (27/Lovers), [Pixie](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Pixie) (2/Lovers)";
                var result2 = "77,235¥ | [Saki Mitama](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Saki%20Mitama) (39/Lovers), [Queen Mab](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Queen%20Mab) (27/Lovers), [Alp}(https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Alp) (6/Lovers)";
                var result3 = "88,827¥ | [Saki Mitama](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Saki%20Mitama) (39/Lovers), [Queen Mab](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Queen%20Mab) (27/Lovers), [Narcissus](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Narcissus) (20/Lovers)";
                var result4 = "98,623¥ | [Thoth](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Thoth) (41/Hierophant), [Vasuki](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Vasuki) (38/Hanged Man)";
                var result5 = "100,783¥ | [Kingu](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Kingu) (46/Emperor), [Leanan Sidhe](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Leanan%20Sidhe) (33/Empress)";
                break;
            case "raphael":
                var name = "Raphael";
                var url = "https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Raphael";
                var note = "";
                var result1 = "121,038¥ | [Titania](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Titania) (48/Lovers), [Saki Mitama](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Saki%20Mitama) (39/Lovers), [Pixie](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Pixie) (2/Lovers)";
                var result2 = "122,406¥	| [Titania](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Titania) (48/Lovers), [Saki Mitama](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Saki%20Mitama) (39/Lovers), [Alp](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Alp) (6/Lovers)";
                var result3 = "133,998¥	| [Titania](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Titania) (48/Lovers), [Saki Mitama](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Saki%20Mitama) (39/Lovers), [Narcissus](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Narcissus) (20/Lovers";
                var result4 = "141,022¥ | [Yakisni](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Yaksini) (50/Empress), [Kingu](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Kingu) (46/Emperor)";
                var result5 = "141,292¥ | [Suzaku](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Suzaku) (51/Temperance), [Lachesis](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Lachesis) (45/Fortune)";
                break;
            case "cybele":
                var name = "Cybele";
                var url = "https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Cybele";
                var note = "Requires the Lovers social link to be maxed!";
                var result1 = "183,210¥ | [Raphael](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Raphael) (61/Lovers), [Titania](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Titania) (48/Lovers), [Pixie](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Pixie) (2/Lovers)";
                var result2 = "184,578¥ | [Raphael](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Raphael) (61/Lovers), [Titania](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Titania) (48/Lovers), [Alp](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Alp) (6/Lovers)";
                var result3 = "196,170¥ | [Raphael](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Raphael) (61/Lovers), [Titania](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Titania) (48/Lovers), [Narcissus](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Narcissus) (20/Lovers)";
                var result4 = "205,935¥ | [Raphael](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Raphael) (61/Lovers), [Titania](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Titania) (48/Lovers), [Queen Mab](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Queen%20Mab) (27/Lovers)";
                var result5 = "220,654¥ | [Hariti](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Hariti) (62/Empress), [Arahabaki](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Arahabaki) (60/Hermit)";
                break;

            // End of Lovers / Start of Chariot 
            case "ara_mitama":
                var name = "Ara Mitama";
                var url = "https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Ara%20Mitama";
                var note = "";
                var result1 = "5,590¥ | [Angel](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Angel) (4/Justice), [Pixie](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Pixie) (2/Lovers)";
                var result2 = "6,652¥ | [Forneus](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Forneus) (7/Emperor), [Orpheus](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Orpheus) (1/Fool)";
                var result3 = "6,859¥ | [Forneus](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Forneus) (7/Emperor), [Pixie](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Pixie) (2/Lovers)";
                var result4 = "6,958¥ | [Alp](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Alp) (6/Lovers), [Angel](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Angel) (4/Justice)";
                var result5 = "7,120¥ | [Omoikane](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Omoikane) (7/Hierophant), [Apsaras](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Apsaras) (3/Priestess";
                break;
            case "chimera":
                var name = "Chimera ";
                var url = "https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Chimera";
                var note = "";
                var result1 = "8,227¥ | [Forneus](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Forneus) (7/Emperor), [Alp](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Alp) (6/Lovers)";
                var result2 = "8,614¥ | [Archangel](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Archangel) (10/Justice), [Pixie](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Pixie) (2/Lovers)";
                var result3 = "8,704¥ | [Forneus](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Forneus) (7/Emperor), [Omoikane](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Omoikane) (7/Hierophant)";
                var result4 = "8,920¥ | [Yomotsu Shikome](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Yomotsu%20Shikome) (9/Hermit), [Nekomata](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Nekomata) (5/Magician)";
                var result5 = "9,159¥ | [Omoikane](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Omoikane) (7/Emperor), [Pixie](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Pixie) (2/Lovers), [Orpheus](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Orpheus) (1/Fool)";
                break;
            case "zouchouten":
                var name = "Zouchouten";
                var url = "https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Zouchouten";
                var note = "";
                var result1 = "10,734¥ | [Omikane](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Omoikane) (7/Hierophant), [Ara Mitama](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Ara%20Mitama) (6/Chariot), [Pixie](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Pixie) (2/Lovers)	";
                var result2 = "10,887¥ | [Forneus](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Forneus) (7/Emperor), [Nekomata](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Nekomata) (5/Magician), [Angel](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Angel) (4/Justice)";
                var result3 = "11,058¥ | [Chimera](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Chimera) (9/Chariot), [Angel](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Angel) (4/Justice), [Pixie](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Pixie) (2/Lovers)";
                var result4 = "11,152¥ | [Unicorn](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Unicorn) (11/Priestess), [Omoikane](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Omoikane) (7/Hierophant";
                var result5 = "11,220¥ | [Yomotsu Shikome](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Yomotsu%20Shikome) (9/Hermit), [Nekomata](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Nekomata) (5/Magician), [Orpheus](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Orpheus) (1/Fool)";
                break;
            case "ares":
                var name = "Ares";
                var url = "https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Ares";
                var note = "";
                var result1 = "18,375¥ | [Valkyrie](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Valkyrie) (11/Strength), [Archangel](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Archangel) (10/Justice), [Yomotsu Shikome](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Yomotsu%20Shikome) (9/Hermit)";
                var result2 = "18,460¥ | [Oberon](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Oberon) (15/Emperor), [Berith](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Berith) (13/Hierophant)";
                var result3 = "18,699¥ | [Slime](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Slime) (12/Fool), [Unicorn](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Unicorn) (11/Priestess), [Forneus](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Forneus) (7/Emperor)";
                var result4 = "18,807¥ | [Berith](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Berith) (13/Hierophant), [Inugami](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Inugami) (10/Hanged Man), [Forneus](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Forneus) (7/Emperor)";
                var result5 = "19,014¥ | [Valkyrie](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Valkyrie) (11/Strength), [Archangel](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Archangel) (10/Justice), [Inugami](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Inugami) (10/Hanged Man)";
                break;
            case "oumitsunu":
                var name = "Oumitsunu";
                var url = "https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Oumitsunu";
                var note = "";
                var result1 = "27,366¥ | [Ares](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Ares) (19/Chariot), [Zouchouten](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Zouchouten) (14/Chariot), [Ara Mitama](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Ara%20Mitama) (6/Chariot)";
                var result2 = "28,959¥ | [Ares](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Ares) (19/Chariot), [Zouchouten](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Zouchouten) (14/Chariot), [Chimera](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Chimera) (9/Chariot)";
                var result3 = "29,440¥ | [Empusa](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Empusa) (23/Fortune), [Gurr](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Gurr) (15/Moon)";
                var result4 = "30,390¥ | [Rakshasa](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Rakshasa) (16/Strength), [Gurr](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Gurr) (15/Moon), [Pyro Jack](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Pyro%20Jack) (14/Magician)";
                var result5 = "30,390¥ | [Principality](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Principality) (16/Justice), [Gurr](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Gurr) (15/Moon), [Zouchouten](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Zouchouten) (14/Chariot)";
                break;
            case "nata_taishi":
                var name = "Nata Taishi";
                var url = "https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Nata%20Taishi";
                var note = "Requires an item from one of Elizabeth's Requests!";
                var result1 = "43,305¥ | [Oumitsunu](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Oumitsunu) (30/Chariot), [Zouchouten](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Zouchouten) (14/Chariot), [Ara Mitama](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Ara%20Mitama) (6/Chariot)";
                var result2 = "44,898¥ | [Oumitsunu](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Oumitsunu) (30/Chariot), [Zouchouten](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Zouchouten) (14/Chariot), [Chimera](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Chimera) (9/Chariot)";
                var result3 = "48,390¥ | [Oumitsunu](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Oumitsunu) (30/Chariot), [Ares](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Ares) (19/Chariot), [Ara Mitama](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Ara%20Mitama) (6/Chariot)";
                var result4 = "49,983¥ | [Oumitsunu](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Oumitsunu) (30/Chariot), [Ares](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Ares) (19/Chariot), [Chimera](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Chimera) (9/Chariot)";
                var result5 = "53,718¥ | [Oumitsunu](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Oumitsunu) (30/Chariot), [Ares](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Ares) (19/Chariot), [Zouchouten](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Zouchouten) (14/Chariot)";
                break;
            case "koumokuten":
                var name = "Koumokuten";
                var url = "https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Koumokuten";
                var note = "";
                var result1 = "77,874¥ | [Nata Taishi](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Nata%20Taishi) (37/Chariot), [Oumitsunu](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Oumitsunu) (30/Chariot), [Ara Mitama](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Ara%20Mitama) (6/Chariot)";
                var result2 = "79,467¥ | [Nata Taishi](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Nata%20Taishi) (37/Chariot), [Oumitsunu](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Oumitsunu) (30/Chariot), [Chimera](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Chimera) (9/Chariot)";
                var result3 = "83,202¥ | [Nata Taishi](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Nata%20Taishi) (37/Chariot), [Oumitsunu](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Oumitsunu) (30/Chariot), [Zouchouten](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Zouchouten) (14/Chariot)";
                var result4 = "88,287¥ | [Nata Taishi](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Nata%20Taishi) (37/Chariot), [Oumitsunu](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Oumitsunu) (30/Chariot), [Ares](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Ares) (19/Chariot)";
                var result5 = "89,803¥ | [Saki Mitama](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Saki%20Mitama) (39/Lovers), [Raja Naga](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Raja%20Naga) (36/Emperor)";
                break;
            case "thor":
                var name = "Thor";
                var url = "https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Thor";
                var note = "Requires the Chariot social link to be maxed!";
                var result1 = "105,135¥ | [Koumokuten](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Koumokuten) (43/Chariot), [Nata Taishi](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Nata%20Taishi) (37/Chariot), [Ara Mitama](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Ara%20Mitama) (6/Chariot)";
                var result2 = "106,728¥ | [Koumokuten](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Koumokuten) (43/Chariot), [Nata Taishi](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Nata%20Taishi) (37/Chariot), [Chimera](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Chimera) (9/Chariot)";
                var result3 = "106,728¥ | [Koumokuten](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Koumokuten) (43/Chariot), [Nata Taishi](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Nata%20Taishi) (37/Chariot), [Zouchouten](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Zouchouten) (14/Chariot)";
                var result4 = "115,548¥ | [Koumokuten](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Koumokuten) (43/Chariot), [Nata Taishi](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Nata%20Taishi) (37/Chariot), [Ares](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Ares) (19/Chariot";
                var result5 = "116,326¥ | [Dionysus](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Dionysus) (48/Moon), [Clotho](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Clotho) (38/Fortune)";
                break;

            // End of Chariot / Start of Justice
            case "angel":
                var name = "Angel";
                var url = "https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Angel";
                var note = "";
                var result1 = "5,068¥ | [Apsaras](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Apsaras) (3/Priestess), [Orpheus](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Orpheus) (1/Fool)";
                var result2 = "17,182¥ | [Principality](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Principality) (16/Justice), [Archangel](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Archangel) (10/Justice)";
                var result3 = "No Fusion Found!";
                var result4 = "No Fusion Found!";
                var result5 = "No Fusion Found!";
                break;
            case "archangel":
                var name = "Archangel";
                var url = "https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Archangel";
                var note = "";
                var result1 = "7,120 ¥ | [Forneus](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Forneus) (7/Emperor), [Apsaras](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Apsaras) (3/Priestess)";
                var result2 = "7,975 ¥ | [Yomotsu Shikome](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Yomotsu%20Shikome) (9/Hermit), [Pixie](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Pixie) (2/Lovers)";
                var result3 = "8,151 ¥ | [Angel](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Angel) (4/Justice), [Apsaras](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Apsaras) (3/Priestess), [Orpheus](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Orpheus) (1/Fool)";
                var result4 = "8,227 ¥ | [Omoikane](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Omoikane) (7/Hierophant), [Ara Mitama](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Ara%20Mitama) (6/Chariot)";
                var result5 = "9,100 ¥ | [Unicorn](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Unicorn) (11/Hierophant), [Orpheus](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Orpheus) (1/Fool)";
                break;
            case "principality":
                var name = "Principality";
                var url = "https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Principality";
                var note = "";
                var result1 = "11,787 ¥	| [Forneus](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Forneus) (7/Emperor), [Omoikane](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Omoikane) (7/Hierophant), [Angel](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Angel) (4/Justice)";
                var result2 = "12,268 ¥	| [Valkyrie](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Valkyrie) (11/Strength), [Chimera](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Chimera) (9/Chariot)";
                var result3 = "12,795 ¥	| [Chimera](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Chimera) (9/Chariot), [Alp](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Alp) (6/Lovers), [Nekomata](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Nekomata) (5/Magician)";
                var result4 = "12,858 ¥	| [Chimera](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Chimera) (9/Chariot), [Jack Frost](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Jack%20Frost) (8/Magician), [Pixie](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Pixie) (2/Lovers)";
                var result5 = "12,858 ¥	| [Chimera](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Chimera) (9/Chariot), [Lilim](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Lilim) (8/Lovers), [Pixie](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Pixie) (2/Lovers)";
                break;
            case "power":
                var name = "Power";
                var url = "https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Power";
                var note = "";
                var result1 = "22,636 ¥	| [Ares](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Ares) (19/Chariot), [Berith](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Berith) (13/Hierophant)";
                var result2 = "23,343 ¥	| [Principality](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Principality) (16/Justice), [Valkyrie](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Valkyrie) (11/Strength), [Chimera](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Chimera) (9/Chariot)";
                var result3 = "23,775 ¥	| [Rakshasa](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Rakshasa) (16/Strength), [Berith](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Berith) (13/Hierophant), [Forneus](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Forneus) (7/Emperor)";
                var result4 = "23,928 ¥	| [Oberon](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Oberon) (15/Emperor), [Berith](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Berith) (13/Hierophant), [Yomotsu Shikome](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Yomotsu%20Shikome) (9/Hermit)";
                var result5 = "24,153 ¥	| [Rakshasa](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Rakshasa) (16/Strength), [Zouchouten](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Zouchouten) (14/Chariot), [Ara Mitama](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Ara%20Mitama) (6/Chariot)";
                break;
            case "virtue":
                var name = "Virtue";
                var url = "https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Virtue";
                var note = "";
                var result1 = "36,330 ¥ | [Power](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Power) (25/Justice), [Principality](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Principality) (16/Justice), [Angel](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Principality) (4/Justice)";
                var result2 = "39,354 ¥ | [Power](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Power) (25/Justice), [Principality](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Principality) (16/Justice), [Archangel](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Archangel) (10/Justice)";
                var result3 = "45,955 ¥ | [Sarasvati](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Sarasvati) (27/Empress), [Take-Mikazuchi](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Take-mikazuchi) (24/Emperor)";
                var result4 = "45,955 ¥ | [Kusi Mitama](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Kusi%20Mitama) (29/Fortune), [Legion](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Legion) (22/Fool)";
                var result5 = "46,927 ¥ | [King Frost](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/King%20Frost) (30/Emperor), [High Pixie](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/High%20Pixie) (21/Priestess)";
                break;
            case "dominion":
                var name = "Dominion";
                var url = "https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Dominion";
                var note = "";
                var result1 = "59,082¥ | [Virtue](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Virtue) (32/Justice), [Power](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Power) (25/Justice), [Angel](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Angel) (4/Justice)";
                var result2 = "62,106¥ | [Virtue](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Virtue) (32/Justice), [Power](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Power) (25/Justice), [Archangel](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Archangel) (10/Justice)";
                var result3 = "67,074¥ | [Virtue](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Virtue) (32/Justice), [Power](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Power) (25/Justice), [Principality](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Principality) (16/Justice)";
                var result4 = "69,859¥ | [Ganga](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Ganga) (35/Priestess), [King Frost](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/King%20Frost) (30/Emperor)";
                var result5 = "70,300¥ | [Saki Mitama](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Saki%20Mitama) (39/Lovers), [Lamia](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Lamia) (25/Hermit)";
                break;
            case "throne":
                var name = "Throne";
                var url = "https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Throne";
                var note = "";
                var result1 = "91,977 ¥ | [Dominion](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Dominion) (42/Justice), [Virtue](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Virtue) (32/Justice), [Angel](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Angel) (4/Justice)";
                var result2 = "95,001 ¥ | [Dominion](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Dominion) (42/Justice), [Virtue](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Virtue) (32/Justice), [Archangel](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Archangel) (10/Justice)";
                var result3 = "99,969 ¥ | [Dominion](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Dominion) (42/Justice), [Virtue](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Virtue) (32/Justice), [Principality](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Principality) (16/Justice)";
                var result4 = "110,188 ¥ | [Koumokuten](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Koumokuten) (43/Chariot), [Thoth](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Thoth) (41/Hierophant)";
                var result5 = "111,066 ¥ | [Dominion](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Dominion) (42/Justice), [Virtue](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Virtue) (32/Justice), [Power](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Power) (25/Justice)";
                break;
            case "melchizedek":
                var name = "Melchizedek";
                var url = "https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Melchizedek";
                var note = "Requires the Justice social link to be maxed!";
                var result1 = "136,950¥ | [Throne](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Throne) (51/Justice), [Dominion](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Dominion) (42/Justice), [Angel](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Angel) (4/Justice)";
                var result2 = "139,974¥ | [Throne](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Throne) (51/Justice), [Dominion](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Dominion) (42/Justice), [Archangel](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Archangel) (10/Justice)";
                var result3 = "144,942¥ | [Throne](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Throne) (51/Justice), [Dominion](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Dominion) (42/Justice), [Principality](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Principality) (16/Justice)";
                var result4 = "156,039¥ | [Throne](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Throne) (51/Justice), [Dominion](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Dominion) (42/Justice), [Power](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Power) (25/Justice)";
                var result5 = "157,816¥ | [Kikuri-Hime](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Kikuri-hime) (53/Priestess), [Kaiwan](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Kaiwan) (49/Star)";
                break;

            //End of Justice / Start of Hermit
            case "yomotsu_shikome":
                var name = "Yomotsu Shikome";
                var url = "https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Yomotsu%20Shikome";
                var note = "";
                var result1 = "6,652¥ | [Omoikane](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Omoikane) (7/Hierophant), [Orpheus](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Orpheus) (1/Fool)";
                var result2 = "7,183¥ | [Lilim](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Lilim) (8/Devil), [Orpheus](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Orpheus) (1/Fool)";
                var result3 = "7,804¥ | [Omoikane](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Omoikane) (7/Hierophant), [Nekomata](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Nekomata) (5/Magician)";
                var result4 = "8,227¥ | [Forneus](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Forneus) (7/Emperor), [Ara Mitama](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Ara%20Mitama) (6/Chariot)";
                var result5 = "8,614¥ | [Inugami](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Inugami) (10/Hanged Man), [Pixie](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Pixie) (2/Lovers)";
                break;
            case "naga":
                var name = "Naga";
                var url = "https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Naga";
                var note = "";
                var result1 = "10,995¥ | [Omoikane](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Omoikane) (7/Hierophant), [Alp](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Alp) (6/Lovers), [Apsaras](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Apsaras) (3/Priestess)";
                var result2 = "10,995¥ | [Omoikane](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Omoikane) (7/Hierophant), [Ara Mitama](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Ara%20Mitama) (6/Chariot), [Apsaras](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Apsaras) (3/Priestess)";
                var result3 = "11,310¥ | [Omoikane](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Omoikane) (7/Hierophant), [Ara Mitama](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Ara%20Mitama) (6/Chariot), [Angel](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Angel) (4/Justice)";
                var result4 = "11,418¥ | [Jack Frost](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Jack%20Frost) (8/Magician), [Nekomata](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Nekomata) (5/Magician), [Angel](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Angel) (4/Justice)";
                var result5 = "11,490¥ | [Inugami](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Inugami) (10/Hanged Man), [Angel](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Angel) (4/Justice), [Orpheus](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Orpheus) (1/Fool)";
                break;
            case "lamia":
                var name = "Lamia";
                var url = "https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Lamia";
                var note = "";
                var result1 = "24,400¥ | [Ares](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Ares) (19/Chariot), [Oberon](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Oberon) (15/Emperor)";
                var result2 = "25,692¥ | [Naga](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Naga) (17/Hermit), [Unicorn](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Unicorn) (11/Priestess), [Valkyrie](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Valkyrie) (11/Strength)";
                var result3 = "25,908¥ | [Fortuna](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Fortuna) (17/Fortune), [Berith](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Berith) (13/Hierophant), [Yomotsu Shikome](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Yomotsu%20Shikome) (9/Hermit)";
                var result4 = "26,128¥ | [Titan](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Titan) (23/Strength), [Unicorn](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Unicorn) (11/Priestess)";
                var result5 = "26,178¥ | [Fortuna](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Fortuna) (17/Fortune), [Zouchouten](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Zouchouten) (14/Chariot), [Jack Frost](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Jack%20Frost) (8/Magician)";
                break;
            case "mothman":
                var name = "Mothman";
                var url = "https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Mothman";
                var note = "";
                var result1 = "44,560¥ | [Sarasvati](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Sarasvati) (27/Priestess), [Titan](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Titan) (23/Strength)";
                var result2 = "45,208¥ | [Jikokuten](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Jikokuten) (29/Strength), [High Pixie](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/High%20Pixie) (21/Priestess)";
                var result3 = "45,208¥ | [Jikokuten](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Jikokuten) (29/Strength), [Take-minakata](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Take-minakata) (21/Hanged Man)";
                var result4 = "46,171¥ | [Orthrus](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Orthrus) (28/Hanged Man), [Titan](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Titan) (23/Strength)";
                var result5 = "46,927¥ | [King Frost](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/King%20Frost) (30/Emperor), [Take-minakata](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Take-minakata) (21/Hanged Man)";
                break;
            case "taraka":
                var name = "Taraka";
                var url = "https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Taraka";
                var note = "";
                var result1 = "61,467¥ | [Mothman](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Mothman) (32/Hermit), [Lamia](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Lamia) (25/Hermit), [Yomotsu Shikome](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Yomotsu%20Shikome) (9/Hermit)";
                var result2 = "68,091¥ | [Mothman](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Mothman) (32/Hermit), [Lamia](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Lamia) (25/Hermit), [Naga](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Naga) (17/Hermit)";
                var result3 = "68,140¥ | [Ganga](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Ganga) (25/Priestess), [Jikokuten](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Jikokuten) (29/Strength)";
                var result4 = "68,518¥ | [Raja Naga](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Raja%20Naga) (36/Emperor), [Orthrus](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Orthrus) (28/Hanged Man)";
                var result5 = "69,004¥ | [Hanuman](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Hanuman) (37/Strength), [Sarasvati](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Sarasvati) (27/Priestess)";
                break;
            case "kurama_tengu":
                var name = "Kurama Tengu";
                var url = "https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Kurama%20Tengu";
                var note = "";
                var result1 = "85,218¥ | [Taraka](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Taraka) (38/Hermit), [Mothman](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Mothman) (32/Hermit), [Yomotsu Shikome](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Yomotsu%20Shikome) (9/Hermit)";
                var result2 = "91,842¥ | [Taraka](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Taraka) (38/Hermit), [Mothman](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Mothman) (32/Hermit), [Naga](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Naga) (17/Hermit)";
                var result3 = "94,051¥ | [Saki Mitama](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Saki%20Mitama) (39/Lovers), [Vasuki](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Vasuki) (38/Hanged Man)";
                var result4 = "95,131¥ | [Succubus](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Succubus) (43/Devil), [Black Frost](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Black%20Frost) (34/Fool)";
                var result5 = "95,302¥ | [Kingu](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Kingu) (46/Emperor), [Oumitsunu](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Oumitsunu) (30/Chariot)";
                break;
            case "nebiros":
                var name = "Nebiros";
                var url = "https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Nebiros";
                var note = "Requires an item from one of Elizabeth's requests!";
                var result1 = "111,354¥ | [Kurama Tengu](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Kurama%20Tengu) (44/Hermit), [Taraka](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Taraka) (38/Hermit), [Yomotsu Shikome](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Yomotsu%20Shikome) (9/Hermit)";
                var result2 = "117,978¥ | [Kurama Tengu](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Kurama%20Tengu) (44/Hermit), [Taraka](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Taraka) (38/Hermit), [Naga](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Naga) (17/Hermit)";
                var result3 = "122,563¥ | [Kingu](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Kingu) (46/Emperor), [Koumokuten](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Koumokuten) (43/Chariot)";
                var result4 = "125,479¥ | [Barong](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Barong) (52/Emperor), [Nata Taishi](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Nata%20Taishi) (37/Chariot)";
                var result5 = "126,343¥ | [Thor](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Thor) (53/Chariot), [Raja Naga](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Raja%20Naga) (36/Emperor)";
                break;
            case "kumbhanda":
                var name = "Kumbhanda";
                var url = "https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Kumbhanda";
                var note = "";
                var result1 = "141,378¥ | [Nebiros](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Nebiros) (50/Hermit), [Kurama Tengu](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Kurama%20Tengu) (44/Hermit), [Yomotsu Shikome](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Yomotsu%20Shikome) ()";
                var result2 = "148,002¥ | [Nebiros](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Nebiros) (50/Hermit), [Kurama Tengu](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Kurama%20Tengu) (44/Hermit), [Naga](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Naga) (17/Hermit)";
                var result3 = "152,110¥ | [Barong](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Barong) (52/Emperor), [Ubelluris](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Ubelluris) (48/Hanged Man)";
                var result4 = "152,758¥ | [Hecatoncheires](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Hecatoncheires) (54/Hanged Man), [Kingu](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Kingu) (46/Emperor)";
                var result5 = "152,758¥ | [Hecatoncheires](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Hecatoncheires) (54/Hnaged Man), [Narasimha](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Narasimha) (46/Strength)";
                break;
            case "arahabaki":
                var name = "Arahabaki";
                var url = "https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Arahabaki";
                var note = "";
                var result1 = "165,683¥ | [Kikuri-hime](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Kikuri-hime) (53/Priestess), [Okuninushi](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Okuninushi) (44/Temperance), [Take-minakata](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Take-minakata) (21/Hanged Man), [Omoikane](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Omoikane) (7/Hierophant)";
                var result2 = "No Fusion Found!";
                var result3 = "No Fusion Found!";
                var result4 = "No Fusion Found!";
                var result5 = "No Fusion Found!";
                break;

            // End of Hermit / Start of Fortune
            case "fortuna":
                var name = "Fortuna";
                var url = "https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Fortuna";
                var note = "";
                var result1 = "9,982¥ | [Inugami](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Inugami) (10/Hanged Man), [Ara Mitama](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Ara%20Mitama) (6/Chariot)";
                var result2 = "11,575¥ | [Inugami](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Inugami) (10/Hanged Man), [Chimera](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Chimera) (9/Chariot)";
                var result3 = "11,575¥ | [Inugami](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Inugami) (10/Hanged Man), [Yomotsu Shikome](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Yomotsu%20Shikome) (9/Hermit)";
                var result4 = "11,683¥ | [Valkyrie](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Valkyrie) (11/Strength), [Lilim](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Lilim) (8/Devil)";
                var result5 = "11,697¥ | [Inugami](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Inugami) (10/Hanged Man), [Angel](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Angel) (4/Justice), [Pixie](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Pixie) (2/Lovers)";
                break;
            case "empusa":
                var name = "Empusa";
                var url = "https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Empusa";
                var note = "Requires an item from one of Elizabeth's requests!";
                var result1 = "24,400¥ | [Ares](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Ares) (19/Chariot), [Gurr](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Gurr) (15/Moon)";
                var result2 = "25,260¥ | [Gurr](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Gurr) (15/Moon), [Berith](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Berith) (13/Hierophant), [Unicorn](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Unicorn) (11/Priestess)";
                var result3 = "25,422¥ | [Gurr](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Gurr) (15/Moon), [Zouchouten](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Zouchouten) (14/Chariot), [Archangel](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Archangel) (10/Justice)";
                var result4 = "25,422¥ | [Rakshasa](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Rakshasa) (16/Strength), [Slime](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Slime) (12/Fool), [Valkyrie](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Valkyrie) (11/Strength)";
                var result5 = "25,903¥ | [Take-minakata](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Take-minakata) (21/Hanged Man), [Zouchouten](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Zouchouten) (14/Chariot)";
                break;
            case "kusi_mitama":
                var name = "Kusi Mitama";
                var url = "https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Kusi%20Mitama";
                var note = "";
                var result1 = "38,872¥ | [Lamia](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Lamia) (25/Hermit), [Take-minakata](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Take-minakata) (21/Hanged Man)";
                var result2 = "40,051¥ | [Vetala](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Vetala) (24/Devil), [Titan](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Titan) (23/Strength)";
                var result3 = "40,600¥ | [Jikokuten](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Jikokuten) (29/Strength), [Naga](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Naga) (17/Hermit)";
                var result4 = "41,131¥ | [Orthrus](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Orthrus) (28/Hanged Man), [Ares](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Ares) (19/Chariot)";
                var result5 = "41,500¥ | [Lamia](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Lamia) (25/Hermit), [Titan](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Titan) (23/Strength)";
                break;
            case "clotho":
                var name = "Clotho";
                var url = "https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Clotho";
                var note = "";
                var result1 = "57,070¥ | [Oumitsunu](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Oumitsunu) (30/Chariot), [Orthrus](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Orthrus) (28/Hanged Man)";
                var result2 = "60,472¥ | [Nata Taishi](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Nata%20Taishi) (37/Chariot), [Take-minakata](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Take-minakata) (21/Hanged Man)";
                var result3 = "60,670¥ | [Mothman](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Mothman) (32/Hermit), [Orthrus](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Orthrus) (28/Hanged Man)";
                var result4 = "60,940¥ | [Leanan Sidhe](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Leanan%20Sidhe) (33/Empress), [Queen Mab](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Queen%20Mab) (27/Lovers)";
                var result5 = "61,318¥ | [Black Frost](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Black%20Frost) (34/Fool), [Yamatano-orochi](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Yamatano-orochi) (26/Moon)";
                break;
            case "lachesis":
                var name = "Lachesis";
                var url = "https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Lachesis";
                var note = "";
                var result1 = "86,523¥ | [Clotho](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Clotho) (38/Fortune), [Kusi Mitama](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Kusi%20Mitama) (29/Fortune), [Fortuna](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Fortuna) (17/Fortune)";
                var result2 = "91,846¥ | [Taraka](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Taraka) (38/Hermit), [Vasuki](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Vasuki) (38/Hanged Man)";
                var result3 = "92,710¥ | [Girimehkala](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Girimehkala) (42/Moon), [Black Frost](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Black%20Frost) (34/Fool)";
                var result4 = "93,759¥ | [Clotho](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Clotho) (38/Fortune), [Kusi Mitama](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Kusi%20Mitama) (29/Fortune), [Empusa](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Empusa) (23/Fortune)";
                var result5 = "95,671¥ | [Ose](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Ose) (44/Fool), [Leanan Sidhe](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Leanan%20Sidhe) (33/Empress)";
                break;
            case "atropos":
                var name = "Atropos";
                var url = "https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Atropos";
                var note = "";
                var result1 = "120,507¥ | [Lachesis](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Lachesis) (45/Fortune), [Clotho](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Clotho) (38/Fortune), [Fortuna](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Fortuna) (17/Fortune)";
                var result2 = "125,038¥ | [Narasimha](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Narasimha) (46/Strength), [Kurama Tengu](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Kurama%20Tengu) (44/Hermit)";
                var result3 = "127,743¥ | [Lachesis](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Lachesis) (45/Fortune), [Clotho](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Clotho) (38/Fortune), [Empusa](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Empusa) (23/Fortune)";
                var result4 = "127,891¥ | [Ubelluris](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Ubelluris) (48/Hanged Man), [Koumokuten](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Koumokuten) (43/Chariot)";
                var result5 = "127,891¥ | [Dionysus](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Dionysus) (48/Moon), [Koumokuten](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Koumokuten) (43/Chariot)";
                break;
            case "norn":
                var name = "Norn";
                var url = "https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Norn";
                var note = "";
                var result1 = "196,098¥ | [Atropos](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Atropos) (54/Fortune), [Lachesis](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Lachesis) (45/Fortune), [Clotho](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Clotho) (38/Fortune)";
                var result2 = "No Fusion Found.";
                var result3 = "No Fusion Found.";
                var result4 = "No Fusion Found.";
                var result5 = "No Fusion Found.";
                break;

            // End of Fortune / Start of Strength
            // case "":
            //     var name = "";
            //     var url = "";
            //     var note = "";
            //     var result1 = " | []() (), []() (), []() ()";
            //     var result2 = " | []() (), []() (), []() ()";
            //     var result3 = " | []() (), []() (), []() ()";
            //     var result4 = " | []() (), []() (), []() ()";
            //     var result5 = " | []() (), []() (), []() ()";
            //     break;
        }

        //checks if the user entered a valid persona name by checking if the "name" variable was defined
        if (!name) return message.reply(`You have entered an invalid Persona name! Check \`${config.prefix}p3fesfusion list\` for a full list of Persona's`);

        //creates the embed using all of the defined variables above and sends it to the current channel
        let embed = new MessageEmbed()
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