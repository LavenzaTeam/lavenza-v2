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
    run: async (client, message, args, persona) => {
        message.reply("Fusion is a lengthy process that will not be perfected for a while! Bear that in mind while using the fusion commands!");

        //general data parsing and error checking
        let personaName = args.join("_").toLowerCase();
        if (persona) personaName = persona;
        if (personaName.endsWith("/f")) personaName = personaName.slice(0, -3);
        console.log(personaName);
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
                var url =  "https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Black%20Frost"
                var result1 = "69,545 ¥ | [King Frost](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/King%20Frost) (30/Emperor), [Queen Mab](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Queen%20Mab) (27/Lovers), and [Pyro Jack](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Pyro%20Jack) (14/Magician), [Jack Frost](https://arantius.com/misc/persona-3-fes-fusion-calculator/#/persona/Jack%20Frost) (8/Magician)";
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