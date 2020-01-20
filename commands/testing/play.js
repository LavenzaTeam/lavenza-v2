const ytdl = require("ytdl-core");

module.exports = {
    config: {
        name: "play",
        aliases: ["p"],
        description: "A test command for the music functionality coming soon to Lavenza!",
        usage: "",
        category: "testing"
    },
    run: async (client, message, args) => {
        if (message.channel.type !== "text") return message.reply("Error, non valid text channel!");
        const { voiceChannel } = message.member;

        if(!voiceChannel) return message.reply("You must be in a Voice Channel to use this command!");
        message.reply("Joining your Voice Channel!");
        voiceChannel.join().then(connection => {
            const stream = ytdl('https://www.youtube.com/watch?v=Kbw6hF7tHns', { filter: 'audioonly' });
			const dispatcher = connection.playStream(stream);

			dispatcher.on('end', () => voiceChannel.leave());
        })
    }
}