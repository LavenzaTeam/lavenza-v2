const { prefix } = require("../../config.json");
const package = require("../../package.json");

module.exports = async (client) => {
    let presences = [
        `${prefix}p3`,
        `Version ${package.version}`,
        `Currently serving ${client.guilds.size} servers!`,
        `${client.users.size} people reading the compendium!`,
        `${prefix}invite`,
        `${prefix}support`
    ]

    setInterval(() => {
        const presence = Math.floor(Math.random() * (presences.length - 1) + 1);
        client.user.setPresence({ game: { name: `${prefix}help | ${presences[presence]}`}, status: "dnd" });
    }, 60000)
    console.log(`${client.user.username} is online!`);
    console.log(`${client.user.username} is currently in ${client.guilds.size} servers!`);
    console.log(`${client.user.username} is currently in version ${package.version}`);
    console.log(`${client.user.username} uses the following packages:`);
    console.log(package.dependencies);
}