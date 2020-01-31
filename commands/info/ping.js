module.exports = {
    config: {
        name: "ping",
        aliases: ["pong", "test", "latency"],
        description: "A command to test latency as well as a test command",
        usage: "",
        category: "general"
    },
    run: async (client, message, args) => {
        message.reply("Pong!");
        return;
    }
}