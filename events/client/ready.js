const { prefix } = require("../../config.json");

module.exports = async (client) => {
    let presences = [
        `Fusion Calculator Soon!`,
        `${prefix}p3`
    ]

    setInterval(() => {
        const presence = Math.floor(Math.random() * (presences.length - 1) + 1);
        client.user.setPresence({ game: { name: `${prefix}help | ${presences[presence]}`}, status: "dnd" });
    }, 60000)
    console.log(`${client.user.username} is online!`);
}