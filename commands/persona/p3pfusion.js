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
            // case "template":
            //     var name = "";
            //     var url = "";
            //     var note = "";
            //     var result1 = "";
            //     var result2 = "";
            //     var result3 = "";
            //     var result4 = "";
            //     var result5 = "";
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