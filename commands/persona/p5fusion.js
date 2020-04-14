const config = require("../../config.json");
const { MessageEmbed } = require("discord.js");

module.exports = {
    config: {
        name: "p5fusion",
        aliases: ["p5f", "persona5fusion"],
        description: "Displays data for all Persona 5 Persona Fusions",
        usage: "<persona>",
        category: "persona"
    },
    run: async (client, message, args, query) => {
        //general data parsing
        let personaName = args.join("_").toLowerCase();
        if (query) personaName = query;
        if (personaName.endsWith("/f")) personaName = personaName.slice(0, -3);
        if (!personaName) return message.reply(`You have entered an invalid Persona name! To view a loist of all Persona's, type \`${config.prefix}p5fusion list\`!`);

        //checks if the user specified the list variable
        if (personaName === "list") {
            return message.reply("The list of Persona 5 Persona's is currently unavaliable! Check back soon!:tm:");
        }

        //the list of all fusions
        switch (personaName) {
            case "arsene":
                var name = "Arsene";
                var url = "https://chinhodado.github.io/persona5_calculator/index.html#/persona/Arsene";
                var result1 = "¥10,990 | [Regent](https://chinhodado.github.io/persona5_calculator/index.html#/persona/Regent) (10/Emperor), [Obariyon](https://chinhodado.github.io/persona5_calculator/index.html#/persona/Obariyon) (8/Fool)";
                var result2 = "¥15,958 | [High Pixie](https://chinhodado.github.io/persona5_calculator/index.html#/persona/High%20Pixie) (16/Fool), [Obariyon](https://chinhodado.github.io/persona5_calculator/index.html#/persona/Obariyon) (8/Fool)";
                var result3 = "¥20,350 | [Stone of Scone](https://chinhodado.github.io/persona5_calculator/index.html#/persona/Stone%20of%20Scone) (20/Fortune), [Obariyon](https://chinhodado.github.io/persona5_calculator/index.html#/persona/Obariyon) (8/Fool)";
                var result4 = "¥35,110 | [Orlov](https://chinhodado.github.io/persona5_calculator/index.html#/persona/Orlov) (30/Strength), [Obariyon](https://chinhodado.github.io/persona5_calculator/index.html#/persona/Obariyon) (8/Fool)";
                var result5 = "¥44,515 | [Emperor's Amulet](https://chinhodado.github.io/persona5_calculator/index.html#/persona/Emperor's%20Amulet) (35/Hanged Man), [Obariyon](https://chinhodado.github.io/persona5_calculator/index.html#/persona/Obariyon) (8/Fool)";
                var dlcresult1 = "¥10,990 | [Regent](https://chinhodado.github.io/persona5_calculator/index.html#/persona/Regent) (10/Emperor), [Obariyon](https://chinhodado.github.io/persona5_calculator/index.html#/persona/Obariyon) (8/Fool)";
                var dlcresult2 = "¥15,958 | [High Pixie](https://chinhodado.github.io/persona5_calculator/index.html#/persona/High%20Pixie) (16/Fool), [Obariyon](https://chinhodado.github.io/persona5_calculator/index.html#/persona/Obariyon) (8/Fool)";
                var dlcresult3 = "¥20,350 | [Izanagi](https://chinhodado.github.io/persona5_calculator/index.html#/persona/Izanagi) (20/Fool), [Obariyon](https://chinhodado.github.io/persona5_calculator/index.html#/persona/Obariyon) (8/Fool)";
                var dlcresult4 = "¥20,350 | [Stone of Scone](https://chinhodado.github.io/persona5_calculator/index.html#/persona/Stone%20of%20Scone) (20/Fortune), [Obariyon](https://chinhodado.github.io/persona5_calculator/index.html#/persona/Obariyon) (8/Fool)";
                var dlcresult5 = "¥35,110 | [Orlov](https://chinhodado.github.io/persona5_calculator/index.html#/persona/Orlov) (30/Strength), [Obariyon](https://chinhodado.github.io/persona5_calculator/index.html#/persona/Obariyon) (8/Fool)";
                break;
        }

        //checks if the name variable was defined
        if (!name) return message.reply(`You have entered an invalid Persona name! To view a list of Persona's, type \`${config.prefix}p5fusion list\`!`);
        var note = "";

        //creates the embed and sends it
        let embed = new MessageEmbed()
            .setTitle(name)
            .setURL(url)
            .setColor(config.colors.p5red)
            .addField("Combination #1", result1)
            .addField("Combination #2", result2)
            .addField("Combination #3", result3)
            .addField("Combination #4", result4)
            .addField("Combination #5", result5)
            .addBlankField(true)
            .addField("DLC Combination #1", dlcresult1)
            .addField("DLC Combination #2", dlcresult2)
            .addField("DLC Combination #3", dlcresult3)
            .addField("DLC Combination #4", dlcresult4)
            .addField("DLC Combination #5", dlcresult5)
            .setFooter("Information gathered from Chinhodado's Persona 5 Fusion Calculator", client.user.displayAvatarURL)

        if (!note) {
            embed.setDescription(`The top set of values is assuming you don't have any DLC, The bottom set assumes you have ALL DLC! \n${note} \n[Report a data error!](${config.servers.discordinvite})`)
        } else {
            embed.setDescription(`The top set of values is assuming you don't have any DLC, The bottom set assumes you have ALL DLC! \n[Report a data error!](${config.servers.discordinvite})`)
        }

        return message.channel.send(embed);
    }
}