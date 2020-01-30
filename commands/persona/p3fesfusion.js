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
            return message.reply("The list of Persona's is currently unavaliable! Check back soon™️!");
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
        }       

        //checks if the user entered a valid persona name by checking if the "name" variable was defined
        if (!name) return message.reply(`You have entered an invalid Persona name! Check \`${config.prefix}p3fesfusion list\` for a full list of Persona's`);

        //creates the embed using all of the defined variables above and sends it to the current channel
        let embed = new RichEmbed()
            .setTitle(name)
            .setURL(url)
            .setColor(config.colors.darkblue)
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