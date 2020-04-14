const { MessageEmbed } = require("discord.js");
const config = require("../../config.json");

module.exports = {
    config: {
        name: "p4",
        aliases: ["persona4"],
        description: "",
        usage: "<persona> (/f) (/g)",
        category: "persona"
    },
    run: async (client, message, args) => {
        //general data parsing and variable setting
        let p4pcommand = client.commands.get("p4personas");
        let p4scommand = client.commands.get("p4shadows");
        let p4fcommand = client.commands.get("p4fusion");
        let p4gfcommand = client.commands.get("p4gfusion");
        let query = args.join("_").toLowerCase();

        //checks if the user specified the "list" variable
        if (query === "list") {
            return message.reply("The list of Persona 4 and Persona 4 The Golden Persona's and Shadows is currently unavaliable! Check back soon!");
        }

        //checks if the user specified 2 switches and if they did, move the 2 variables around so that they can be used effectivley
        if (query.includes("/f")) {
            if (query.includes("/g")) {
                query = query.slice(0, -6);
                query = `${query}_/f_/g`
            }
        }

        //p4pcommand file
        switch (query) {
            case "izanagi":
                p4pcommand.run(client, message, args, query);
                break;
        }

        //p4scommand file
        switch (query) {
            case "selfish_basalt":
                p4scommand.run(client, message, args, query);
                break;
        }

        //p4fcommand file
        switch (query) {
            case "izanagi_/f":
                p4fcommand.run(client, message, args, query);
                break;
        }

        //p4gfcommand
        switch (query) {
            case "izanagi_/f_/g":
                p4gfcommand.run(client, message, args, query);
                break;
        }
    }
}