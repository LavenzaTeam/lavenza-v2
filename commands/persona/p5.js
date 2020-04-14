const { MessageEmbed } = require("discord.js");
const config = require("../../config.json");

module.exports = {
    config: {
        name: "p5",
        aliases: ["persona5"],
        description: "Allows you to view the Persona's, Shadows, and the Fusions of Persona 5. To view Persona's, just type the name after the command. To view Shadows, type the name of the Shadow (Persona or Alias) (Note, if you type the Persona name, you must put `/s` afterwards). And to view Fusion for each Persona, type the name of the Persona with `/f` afterwards.",
        usage: "<persona/shadow> (/s) (/f)",
        category: "persona"
    },
    run: async (client, message, args) => {
        //general data parsing and variable setting
        let p5pcommand = client.commands.get("p5personas");
        let p5scommand = client.commands.get("p5shadows");
        let p5fcommand = client.commands.get("p5fusion");
        let query = args.join("_").toLowerCase();

        //checks for the list variable
        if (query === "list") {
            return message.reply("The List of Persona's/Shadows is currently unavaliable!");
        }

        //p5personas command file
        switch (query) {
            case "arsene":
                p5pcommand.run(client, message, args, query);
                break;
        }

        //p5shadows command file
        switch (query) {
            case "crypt-dwelling_pyromaniac":
                p5scommand.run(client, message, args, query);
                break;
        }

        //p5fusion command file
        switch (query) {
            case "arsene_/f":
                p5fcommand.run(client, message, args, query);
                break;
        }
    }
}