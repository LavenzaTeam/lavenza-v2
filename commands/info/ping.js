module.exports = {
    config: {
        name: "ping",
        aliases: ["pong", "test", "latency"],
        description: "A command to test latency as well as a test command",
        usage: "",
        category: "info"
    },
    run: async (client, message, args) => {
        //sends a message to the current channel and stores the data for it in the variable "m"
        const m = await message.channel.send("Ping?");

        //edits the message and displays latency from the client to discord, and the client to the API
        m.edit(`🏓 \n Latency is ${m.createdTimestamp - message.createdTimestamp}ms \n API Latency is ${Math.round(client.ping)}ms`);
    }
}