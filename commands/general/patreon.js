module.exports = {
    config: {
        name: "patreon",
        aliases: [],
        description: "Sends a link to the Patreon page",
        usage: "",
        category: "general"
    },
    run: async (client, message, args) => {
        return await message.channel.send("https://lavenza.tk/patreon");
    }
}