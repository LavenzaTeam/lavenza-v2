const { prefix } = require("../../config.json");

module.exports = async (client) => {
    let presences = [
        "Fusion Calculator Soon!",
        `${prefix}ping`,
        `${prefix}invite`,
        `${prefix}support`,
        `${prefix}p3personas`,
        `${prefix}p3shadows`,
        `${prefix}p3summary`,
        `${prefix}p3download`
    ]

    setInterval(() => {
        const presence = Math.floor(Math.random() * (presences.length - 1) + 1);
        client.user.setPresence({ game: { name: `${prefix}help | ${presences[presence]}`}, status: "dnd" });
    }, 60000)
    console.log(`${client.user.username} is online!`);
}