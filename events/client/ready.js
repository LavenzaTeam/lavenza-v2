const { prefix } = require("../../config.json");
const package = require("../../package.json");

module.exports = async (client) => {
    client.user.setPresence({ activity: { name: `${prefix}help | Early Preview, what you see right now does not reflect the final product.`}, status: "dnd" });
    console.log(`${client.user.username} is online!`);
    console.log(`${client.user.username} is currently in ${client.guilds.cache.size} servers!`);
    console.log(`${client.user.username} is currently in version ${package.version}`);
    console.log(`${client.user.username} uses the following packages:`);
    console.log(package.dependencies);
}