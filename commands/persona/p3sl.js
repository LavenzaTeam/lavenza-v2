const config = require("../../config.json");
const { MessageEmbed } = require("discord.js");

module.exports = {
    config: {
        name: "p3sl",
        aliases: [],
        description: "A command that lets you view the best choices for each rank in every Persona 3 Social Link.",
        usgae: "<social_link>",
        category: "persona"
    },
    run: async (client, message, args, query) => {
        let slname = args.join("_").toLowerCase();
        if (query) slname = query;
        if (slname.endsWith("/sl")) slname = slname.slice(0, -4);
        if(!slname) message.reply("Please enter the name of a Social Link!");

        if(slname === "list"){
            return message.reply("The list of Social Links is currently unavaliable, check back later!")
        }

        switch(slname) {
            case "kenji_tomochika":
                let kenjiMale = new MessageEmbed()
                    .setTitle("Kenji Tomochika Male Route")
                    .setColor(config.colors)
                break;
        }
    }
}