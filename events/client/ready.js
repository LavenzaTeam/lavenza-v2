const { prefix } = require("../../config.json");
const package = require("../../package.json");

module.exports = async (client) => {
    let presences = [
        "...You are held captive. A prisoner of fate to a future that has been sealed in advance.",
        "This is truly an unjust game... Your chances of winning are almost none.",
        "But if my voice is reaching you, there may yet be a possibility open to you...",
        "...I beg you. Please overcome this game... and save the world...",
        "The key to victory lies within the memories of your bonds—the truth that you and your friends grasped.",
        "It all began that day... when the game was started half a year ago...",
        "For the sake of your world's future... as well as your own... you must remember...",
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
    console.log(`${client.user.username} is currently in ${client.guilds.size} servers!`);
    console.log(`${client.user.username} is currently in version ${package.version}`);
    console.log(`${client.user.username} uses the following packages: ${package.dependencies}`);
}