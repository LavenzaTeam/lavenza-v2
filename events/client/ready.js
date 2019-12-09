const { prefix, nodes } = require("../../config.json");
const { ErelaClient, Utils } = require("erela.js");

module.exports = async (client) => {

    client.music = new ErelaClient(client, nodes)
        .on("nodeError", console.log)
        .on("nodeConnect", () => console.log("Successfully created a new node."))
        .on("queueEnd", player => {
            player.textChannel.send("Queue has ended.")
            return client.music.players.destroy(player.guild.id)
        })
        .on("trackStart", ({textChannel}, {title, duration}) => textChannel.send(`Now Playing: **${title}** \`${Utils.formatTime(duration, true)}\``))

    client.levels = new Map()
        .set("none", 0.0)
        .set("low", 0.10)
        .set("medium", 0.15)
        .set("high", 0.25)


    let presences = [
        "Fusion Calculator Soon!",
        `${prefix}ping`,
        `${prefix}invite`,
        `${prefix}support`,
        `${prefix}p3personas`,
        `${prefix}p3shadows`,
        `${prefix}p3summary`,
        `${prefix}p3fesfusion`,
        `${prefix}p3pfusion`
    ]

    setInterval(() => {
        const presence = Math.floor(Math.random() * (presences.length - 1) + 1);
        client.user.setPresence({ game: { name: `${prefix}help | ${presences[presence]}`}, status: "dnd" });
    }, 60000)
    console.log(`${client.user.username} is online!`);
}