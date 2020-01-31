const package = require("../../package.json");

module.exports = {
    config: {
        name: "version",
        aliases: [],
        description: "View all of the versioning information about the bot",
        usage: "",
        category: "info"
    },
    run: async (client, message, args) => {
        await message.channel.send(`${client.user.username} is currently on version ${package.version}`);
        await message.channel.send(`Below is a list of all of the dependencies that ${client.user.username} uses:`);
        await message.channel.send(JSON.stringify(package.dependencies));
        return;
    }
}