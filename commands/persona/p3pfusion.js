const config = require("../../config.json");
const { RichEmbed } = require("discord.js");

module.exports = {
    config: {
        name: "p3pfusion",
        aliases: ["p3pf", "persona3portablefusion", "p3portablefusion"],
        description: "Sends the recipe for fusing a specified Persona in Persona 3 Portable",
        usage: "<persona>",
        category: "persona"
    },
    run: async (client, message, args, query) => {
        message.reply("Fusion is a lengthy process that will not be perfected for a while! Bear that in mind while using the fusion commands!");

        //data parsing
        let personaName = args.join("_").toLowerCase();
        if (query) personaName = query;
        if (personaName.endsWith("/p")) personaName = personaName.slice(0, -3);
        if (!personaName) return message.reply(`You must specify a Persona to search. To view a list of Persona's, type \`${config.prefix}p3pfusion list\`!`)

        //checks if the user provided the "list" argument
        if (personaName === "list") {
            message.reply("Although the list below is complete, the rest of the command is not, and therefor, most of these Personas will not work. Check back later for more updates!");
            let list = new RichEmbed()
                .setTitle("Persona 3 Portable Personas")
                .seuURL("https://megamitensei.fandom.com/wiki/List_of_Persona_3_Portable_Personas")
                .setColor(config.colors.p3blue)
                .setDescription(`Below is a list of all FUSABLE Personas in Persona 3 Portable. To view the recipes for a specified Persona, use one of the following commands: \`${config.prefix}p3 <personaName> /p\` or \`${config.prefix}p3pfusion <personaName>\``)
                .addField("Fool Arcana", "`Orpheus`, `Slime`, `Legion`, `Black Frost`, `Ose`, `Decarabia`, `Loki`, `Susano-o`, `Orpheus Telos`")
                .addField("Magician Arcana", "`Nekomata`, `Jack Frost`, `Pyro Jack`, `Hua Po`, `Sati`, `Orobas`, `Rangda`, `Surt`")
                .addField("Priestess Arcana", "`Apsaras`, `Unicorn`, `High Pixie`, `Sarasvati`, `Ganga`, `Parvati`, `Kikuri-hime`, `Scathach`")
                .addField("Empress Arcana", "`Leanan Sidhe`, `Yaksini`, `Lakshmi`, `Hariti`, `Gabriel`, `Mother Harlot`, `Skadi`, `Alilat`")
                .addField("Emperor Arcana", "`Forneus`, `Oberon`, `Take-Mikazuchi`, `King Frost`, `Raja Naga`, `Kingu`, `Barong`, `Odin`")
                .addField("Hierophant Arcana", "`Omoikane`, `Berith`, `Shiisaa`, `Flauros`, `Thoth`, `Hokuto Seikun`, `Daisoujou`, `Kohryu`")
                .addField("Lovers Arcana", "`Pixie`, `Alp`, `Tam Lin`, `Narcissus`, `Queen Mab`, `Saki Mitama`, `Titania`, `Raphael`, `Cybele`")
                .addField("Chariot Arcana", "`Ara Mitama`, `Chimera`, `Zouchouten`, `Ares`, `Oumitsunu`, `Nata Taishi`, `Koumokuten`, `Thor`")
                .addField("Justice Arcana", "`Angel`, `Archangel`, `Principality`, `Power`, `Virtue`, `Dominion`, `Throne`, `Melchizedek`")
                .addField("Hermit Arcana", "`Yomotsu Shikome`, `Naga`, `Lamia`, `Mothman`, `Taraka`, `Kurama Tengu`, `Nebiros`, `Kumbhanda`, `Arahabaki`")
                .addField("Fortune Arcana", "`Fortuna`, `Empusa`, `Kusi Mitama`, `Clotho`, `Lachesis`, `Atropos`, `Norn`")
                .addField("Strength Arcana", "`Valkyrie`, `Rakshasa`, `Titan`, `Jikokuten`, `Hanuman`, `Narasimha`, `Kali`, `Siegfried`")
                .addField("Hanged Man Arcana", "`Inugami`, `Take-Minakata`, `Orthus`, `Vasuki`, `Ubelluris`, `Hecatoncheires`, `Hell Biker`, `Attis`")
                .addField("Death Arcana", "`Ghoul`, `Pale Rider`, `Loa`, `Samael`, `Mot`, `Alice`, `Thanatos`")
                .addField("Temperance Arcana", "`Nigi Mitama`, `Mithra`, `Genbu`, `Seiryuu`, `Okuninushi`, `Suzaku`, `Byakko`, `Yurlunger`")
                .addField("Devil Arcana", "`Lilim`, `Mokoi`, `Vetala`, `Incubus`, `Succubus`, `Pazuzu`, `Lilith`, `Abaddon`, `Beelzebub`")
                .addField("Tower Arcana", "`Eligor`, `Cu Chulainn`, `Bishamonten`, `Seiten Taisei`, `Masakado`, `Mara`, `Shiva`, `Chi You`")
                .addField("Star Arcana", "`Neko Shogun`, `Setanta`, `Nandi`, `Kaiwan`, `Ganesha`, `Garuda`, `Kartikeya`, `Saturnus`, `Helel`")
                .addField("Moon Arcana", "`Gurr`, `Yamatano-Orochi`, `Girimehkala`, `Dionysus`, `Chernobog`, `Seth`, `Baal Zebul`, `Sandalphon`")
                .addField("Sun Arcana", "`Yatagarasu`, `Quetzalcoatl`, `Jatayu`, `Horus`, `Suparna`, `Vishnu`, `Asura`")
                .addField("Judgement Arcana", "`Anubis`, `Trumpeter`, `Michael`, `Satan`, `Lucifer`, `Messiah`")
                .addField("Aeon Arcana", "`Uriel`, `Nidhoggr`, `Ananta`, `Atavaka`, `Metatron`")
                .setFooter("Information gathered from the Megami Tensei Wiki", client.user.displayAvatarURL)
                .setTimestamp();

            return message.channel.send(list);
        }

        switch (personaName) {
            //fool arcana
            case "orpheus":
                var name = "Orpheus";
                var url = "https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Orpheus"
                var note = "Orpheus has 2 versions in P3P, both of which count as normal Orpheus";
                var result1 = "25,534¥ | [Legion](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Legion) (22/Fool) and [Slime](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Slime) (12/Fool)";
                var result2 = "No result.";
                var result3 = "No result.";
                var result4 = "No result.";
                var result5 = "No result.";
                break;
            case "slime":
                var name = "Slime";
                var url = "https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Slime";
                var note = "";
                var result1 = "8,358¥ | [Angel](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Angel) (4/Justice), [Apsaras](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Apsaras) (3/Priestess), and [Pixie](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Pixie) (2/Lovers)";
                var result2 = "8,520¥ | [Nekomata](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Nekomata) (5/Magician), [Apsaras](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Apsaras) (3/Priestess), and [Orpheus](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Orpheus) (1/Fool)";
                var result3 = "9,951¥ | [Jack Frost](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Jack%20Frost) (8/Magician), [Apsaras](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Apsaras) (3/Priestess), and [Orpheus](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Orpheus) (1/Fool)";
                var result4 = "10,275¥ | [Yomotsu Shikome](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Yomotsu%20Shikome) (9/Hermit), [Pixie](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Pixie) (2/Lovers), and [Orpheus](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Orpheus) (1/Fool)";
                var result5 = "10,635¥ | [Lilim](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Lilim) (8/Devil), [Nekomata](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Nekomata) (5/Magician), and [Orpheus](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Orpheus) (1/Fool)";
                break;
            case "legion":
                var name = "Legion";
                var url = "https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Legion";
                var note = "";
                var result1 = "15,027¥ | [Unicorn](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Unicorn) (11/Priestess), [Forneus](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Forneus) (7/Emperor), [Ara Mitama](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Ara%20Mitama) (6/Chariot)";
                var result2 = "15,675¥ | [Berith](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Berith) (13/Hierophant), [Ara Mitama](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Ara%20Mitama) (6/Chariot), [Nekomata](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Nekomata) (5/Magician)";
                var result3 = "15,783¥ | [Berith](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Berith) (13/Hierophant), [Forneus](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Forneus) (7/Emperor), [Angel](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Angel) (4/Justice)";
                var result4 = "15,819¥ | [Chimera](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Chimera) (9/Chariot), [Yomotsu Shikome](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Yomotsu%20Shikome) (9/Hermit), [Lilim](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Lilim) (8/Devil)";
                var result5 = "16,035¥ | [Unicorn](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Unicorn) (11/Priestess), [Jack Frost](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Jack%20Frost) (8/Magician), [Omoikane](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Omoikane) (7/Hierophant)";
                break;
            case "black_frost":
                var name = "Black Frost";
                var url = "https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Black%20Frost";
                var note = "";
                var result1 = "69,545¥ | [King Frost](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/King%20Frost) (30/Emperor), [Queen Mab](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Queen%20Mab) (27/Lovers), [Pyro Jack](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Pyro%20Jack) (14/Magician), [Jack Frost](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Jack%20Frost) (8/Magician)";
                var result2 = "No Result.";
                var result3 = "No Result.";
                var result4 = "No Result.";
                var result5 = "No Result.";
                break;
            case "ose":
                var name = "Ose";
                var url = "https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Ose";
                var note = "";
                var result1 = "39,543¥ | [Ares](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Ares) (19/Chariot), [Mokoi](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Mokoi) (18/Devil), [Naga](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Naga) (17/Hermit)";
                var result2 = "39,705¥ | [Narcissus](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Narcissus) (20/Lovers), [Mokoi](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Mokoi) (18/Devil), [Rakshasa](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Rakshasa) (16/Strength)";
                var result3 = "39,867¥ | [Hua Po](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Hua%20Po) (20/Magician), [Neko Shogun](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Neko%20Shogun) (19/Star), [Oberon](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Oberon) (15/Emperor)";
                var result4 = "39,867¥ | [Narcissus](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Narcissus) (20/Lovers), [Ares](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Ares) (19/Chariot), [Gurr](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Gurr) (15/Moon)";
                var result5 = "40,515¥ | [High Pixie](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/High%20Pixie) (21/Priestess), [Hua Po](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Hua%20Po) (20/Magician), [Berith](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Berith) (13/Hierophant)";
                break;
            case "decarabia":
                var name = "Decarabia";
                var url = "https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Decarabia";
                var note = "";
                var result1 = "85,497¥ | [Ose](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Ose) (44/Fool), [Legion](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Legion) (22/Fool), [Slime](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Slime) (12/Fool)";
                var result2 = "99,906¥ | [Ose](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Ose) (44/Fool), [Black Frost](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Black%20Frost) (34/Fool), [Orpheus](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Orpheus) (1/Fool)";
                var result3 = "105,153¥ | [Ose](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Ose) (44/Fool), [Black Frost](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Black%20Frost) (34/Fool), [Slime](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Slime) (12/Fool)";
                var result4 = "115,593¥ | [Ose](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Ose) (44/Fool), [Black Frost](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Black%20Frost) (34/Fool), [Legion](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Legion) (22/Fool)";
                var result5 = "151,863¥ | [Kurama Tengu](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Kurama%20Tengu) (44/Hermit), [Nandi](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Nandi) (39/Star), [Hanuman](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Hanuman) (37/Strength)";
                break;
            case "loki":
                var name = "Loki";
                var url = "https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Loki";
                var note = "";
                var result1 = "138,210¥ | [Decarabia](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Decarabia) (50/Fool), [Ose](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Ose) (44/Fool), [Orpheus](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Orpheus) (1/Fool)";
                var result2 = "143,457¥ | [Decarabia](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Decarabia) (50/Fool), [Ose](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Ose) (44/Fool), [Slime](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Slime) (12/Fool)";
                var result3 = "153,897¥ | [Decarabia](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Decarabia) (50/Fool), [Ose](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Ose) (44/Fool), [Legion](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Legion) (22/Fool)";
                var result4 = "173,553¥ | [Decarabia](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Decarabia) (50/Fool), [Ose](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Ose) (44/Fool), [Black Frost](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Black%20Frost) (34/Fool)";
                var result5 = "195,387¥ | [Parvati](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Parvati) (47/Priestess), [Hokuto Seikun](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Hokuto%20Seikun) (47/Hierophant), [Ose](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Ose) (44/Fool)";
                break;
            case "susano-o":
                var name = "Susano-o";
                var url = "https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Susano-o";
                var note = "You must have the Fool social link maxed out!";
                var result1 = "294,123¥ | [Loki](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Loki) (58/Fool), [Decarabia](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Decarabia) (50/Fool), [Ose](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Ose) (44/Fool), [Black Frost](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Black%20Frost) (34/Fool), [Legion](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Legion) (22/Fool), [Orpheus](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Orpheus) (1/Fool)";
                var result2 = "No Result.";
                var result3 = "No Result.";
                var result4 = "No Result.";
                var result5 = "No Result.";
                break;
            case "orpheus_telos":
                var name = "";
                var url = "";
                var note = "";
                var result1 = "1,213,392¥ | [Messiah](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Messiah) (90/Judgement), [Helel](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Helel) (88/Star), [Metatron](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Metatron) (87/Aeon), [Chi You](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Chi%20You) (86/Tower), [Asura](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Asura) (85/Sun), [Thanatos](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Thanatos) (64/Death)";
                var result2 = "No Result.";
                var result3 = "No Result.";
                var result4 = "No Result.";
                var result5 = "No Result.";
                break;

            //magician arcana
            case "nekomata":
                var name = "Nekomata";
                var url = "https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Nekomata";
                var note = "";
                var result1 = "5,275¥ | [Apsaras](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Apsaras) (3/Priestess), [Pixie](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Pixie) (2/Lovers)";
                var result2 = "6,643¥ | [Alp](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Alp) (6/Lovers), [Apsaras](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Apsaras) (3/Priestess)";
                var result3 = "6,643¥ | [Ara Mitama](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Ara%20Mitama) (6/Chariot), [Apsaras](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Apsaras) (3/Priestess)";
                var result4 = "6,859¥ | [Omoikane](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Omoikane) (7/Hierophant), [Pixie](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Pixie) (2/Lovers)";
                var result5 = "14,086¥ | [Pyro Jack](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Pyro%20Jack) (14/Magician), [Jack Frost](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Jack%20Frost) (8/Magician)";
                break;
            case "jack_frost":
                var name = "Jack Frost";
                var url = "https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Jack%20Frost";
                var note = "";
                var result1 = "6,958¥ | [Ara Mitama](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Ara%20Mitama) (6/Chariot), [Angel](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Angel) (4/Justice)";
                var result2 = "8,227¥ | [Omoikane](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Omoikane) (7/Hierophant), [Alp](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Alp) (6/Lovers)";
                var result3 = "8,236¥ | [Chimera](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Chimera) (9/Chariot), [Apsaras](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Apsaras) (3/Priestess)";
                var result4 = "8,407¥ | [Inugami](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Inugami) (10/Hanged Man), [Orpheus](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Orpheus) (1/Fool)";
                var result5 = "8,551¥ | [Chimera](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Chimera) (9/Chariot), [Angel](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Angel) (4/Justice)";
                break;
            case "pyro_jack":
                var name = "Pyro Jack";
                var url = "https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Pyro%20Jack";
                var note = "";
                var result1 = "9,982¥ | [Archangel](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Archangel) (10/Justice), [Ara Mitama](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Ara%20Mitama) (6/Chariot)";
                var result2 = "10,158¥ | [Jack Frost](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Jack%20Frost) (8/Magician), [Apsaras](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Apsaras) (3/Priestess), [Pixie](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Pixie) (2/Lovers)";
                var result3 = "10,536¥ | [Chimera](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Chimera) (9/Chariot), [Apsaras](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Apsaras) (3/Priestess), [Orpheus](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Orpheus) (1/Fool)";
                var result4 = "10,675¥ | [Unicorn](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Unicorn) (11/Priestess), [Alp](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Alp) (6/Lovers)";
                var result5 = "10,675¥ | [Unicorn](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Unicorn) (11/Priestess), [Ara Mitama](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Ara%20Mitama) (6/Chariot)";
                break;
            case "hua_po":
                var name = "Hua Po";
                var url = "https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Hua%20Po";
                var note = "Requires an item from an Elizabeth request.";
                var result1 = "18,375¥ | [Unicorn](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Unicorn) (11/Priestess), [Inugami](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Inugami) (10/Hanged Man), [Chimera](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Chimera) (9/Chariot)";
                var result2 = "18,375¥ | [Unicorn](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Unicorn) (11/Priestess), [Inugami](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Inugami) (10/Hanged Man), [Yomotsu Shikome](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Yomotsu%20Shikome) (9/Hermit)";
                var result3 = "18,483¥ | [Unicorn](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Unicorn) (11/Priestess), [Valkyrie](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Valkyrie) (11/Strength), [Lilim](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Lilim) (8/Devil)";
                var result4 = "18,699¥ | [Slime](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Slime) (12/Fool), [Valkyrie](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Valkyrie) (11/Strength), [Omoikane](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Omoikane) (7/Hierophant)";
                var result5 = "18,699¥ | [Slime](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Slime) (12/Fool), [Valkyrie](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Valkyrie) (11/Strength), [Forneus](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Forneus) (7/Emperor)";
                break;
            case "sati":
                var name = "Sati";
                var url = "https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Sati";
                var note = "";
                var result1 = "28,122¥ | [Hua Po](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Hua%20Po) (20/Magician), [Pyro Jack](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Pyro%20Jack) (14/Magician), [Nekomata](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Nekomata) (5/Magician)";
                var result2 = "29,553¥ | [Hua Po](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Hua%20Po) (20/Magician), [Pyro Jack](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Pyro%20Jack) (14/Magician), [Jack Frost](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Jack%20Frost) (8/Magician)";
                var result3 = "30,988¥ | [High Pixie](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/High%20Pixie) (21/Priestess), [Ares](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Ares) (19/Chariot)";
                var result4 = "32,167¥ | [High Pixie](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/High%20Pixie) (21/Priestess), [Narcissus](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Narcissus) (20/Lovers)";
                var result5 = "32,284¥ | [Lamia](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Lamia) (25/Hermit), [Gurr](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Gurr) (15/Moon)";
                break;
            case "orobas":
                var name = "Orobas";
                var url = "https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Orobas";
                var note = "";
                var result1 = "40,929¥ | [Sati](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Sati) (28/Magician), [Pyro Jack](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Pyro%20Jack) (14/Magician), [Jack Frost](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Jack%20Frost) (8/Magician)";
                var result2 = "45,762¥ | [Sati](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Sati) (28/Magician), [Hua Po](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Hua%20Po) (20/Magician), [Nekomata](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Nekomata) (5/Magician)";
                var result3 = "47,193¥ | [Sati](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Sati) (28/Magician), [Hua Po](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Hua%20Po) (20/Magician), [Jack Frost](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Jack%20Frost) (8/Magician)";
                var result4 = "51,513¥ | [Sati](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Sati) (28/Magician), [Hua Po](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Hua%20Po) (20/Magician), [Pyro Jack](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Pyro%20Jack) (14/Magician)";
                var result5 = "53,740¥ | [Kusi Mitama](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Kusi%20Mitama) (29/Fortune), [Sarasvati](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Sarasvati) (27/Priestess)";
                break;
            case "rangda":
                var name = "Rangda";
                var url = "";
                var note = "";
                var result1 = "67,938¥ | [Orobas](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Orobas) (34/Magician), [Sati](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Sati) (28/Magician), [Nekomata](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Nekomata) (5/Magician)";
                var result2 = "69,369¥ | [Orobas](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Orobas) (34/Magician), [Sati](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Sati) (28/Magician), [Jack Frost](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Jack%20Frost) (8/Magician)";
                var result3 = "73,689¥ | [Orobas](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Orobas) (34/Magician), [Sati](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Sati) (28/Magician), [Pyro Jack](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Pyro%20Jack) (14/Magician)";
                var result4 = "76,636¥ | [Saki Mitama](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Saki%20Mitama) (39/Lovers), [Kusi Mitama](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Kusi%20Mitama) (29/Fortune)";
                var result5 = "77,599¥ | [Nata Taishi](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Nata%20Taishi) (37/Chariot), [Virtue](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Virtue) (32/Justice)";
                break;
            case "surt":
                var name = "Surt";
                var url = "https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Surt";
                var note = "Must have the Magician Social Link maxed out!";
                var result1 = "91,482¥ | [Rangda](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Rangda) (40/Magician), [Orobas](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Orobas) (34/Magician), [Nekomata](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Nekomata) (5/Magician)";
                var result2 = "92,913¥ | [Rangda](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Rangda) (40/Magician), [Orobas](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Orobas) (34/Magician), [Jack Frost](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Jack%20Frost) (8/Magician)";
                var result3 = "97,233¥ | [Rangda](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Rangda) (40/Magician), [Orobas](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Orobas) (34/MAgician), [Pyro Jack](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Pyro%20Jack) (14/Magician)";
                var result4 = "100,828¥ | [Thoth](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Thoth) (41/Hierophant), [Saki Mitama](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Saki%20Mitama) (39/Lovers)";
                var result5 = "100,990¥ | [Girimehkala](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Girimehkala) (42/Moon), [Taraka](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Taraka) (38/Hermit)";
                break;
            // case "template":
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

        //checks if the "name" variable was declared and assigned to a value, if it was then it skips this, if it wasnt, it stops the code and displays this message
        if (!name) return message.reply(`You have entered an invalid Persona name! Type \`${config.prefix}p3pfusion list\` for a list of all valid Persona names!`);

        //creates and sends the embed using the data from above
        let embed = new RichEmbed()
            .setTitle(name)
            .setURL(url)
            .setColor(config.colors.p3blue)
            .addField("Combination #1", result1)
            .addField("Combination #2", result2)
            .addField("Combination #3", result3)
            .addField("Combination #4", result4)
            .addField("Combination #5", result5)
            .setFooter("Information gathered from Arantius's Persona 3 Portable Fusion Calculator", client.user.displayAvatarURL);

        //checks to see if the "note" variable is defined, if it is, display it, if not, display another thing
        if (note) {
            embed.setDescription(`${note} \n[Report a data error!](${config.servers.discordinvite})`);
        } else {
            embed.setDescription(`[Report a data error!](${config.servers.discordinvite})`);
        }

        //sends the embed to the current channel
        return message.channel.send(embed);
    }
}