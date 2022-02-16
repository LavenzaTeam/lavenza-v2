import Discord, { Intents, Client } from "discord.js";
import dotenv from "dotenv";
import WOKComannds from "wokcommands";
import path from "path";
import "dotenv/config";

const client = new Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES,
        Intents.FLAGS.GUILD_MEMBERS,
        Intents.FLAGS.DIRECT_MESSAGE_REACTIONS
    ]
});

client.on("ready", () => {
    console.log(`${client.user!.username} is online!`);

    new WOKComannds(client, {
        commandsDir: path.join(__dirname, "commands"),
        featuresDir: path.join(__dirname, "features"),
        typeScript: true,
        testServers: ["823425620519944232", "640749553313906713"],
        botOwners: ["208779984276291585"],
        mongoUri: process.env.mongo_uri,
        dbOptions: {
            keepAlive: true
        },
        disabledDefaultCommands: [
            "language",
            "requiredrole",
            "help"
        ]
    }).setDefaultPrefix(";");

    client.user!.setPresence({ activities: [{ name: `lavenza.tk` }], status: "dnd" })

});

client.login(process.env.token);