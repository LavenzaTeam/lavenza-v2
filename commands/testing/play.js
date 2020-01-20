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
        //generic checks and definitions
        if (message.channel.type !== "text") return message.reply("Error, non valid text channel!");
        const { voiceChannel } = message.member;

        //argument checking
        if(!voiceChannel) return message.reply("You must be in a Voice Channel to use this command!");
        if(message.guild.me.voiceChannel) return message.reply("Sorry, I am already in another Voice Channel in this server!");
        let url = "https://www.youtube.com/watch?v=Kbw6hF7tHns";
        if(!url) return message.reply("No URL provided!");

        //validation checking
        let validate = await ytdl.validateURL(url);
        if(!validate) return message.reply("Please input a valid YouTube URL!");

        //grab video info
        let info = await ytdl.getInfo(url);

        //establish the connection to the voice channel
        voiceChannel.join().then(connection => {
            const stream = ytdl(url, { filter: 'audioonly' });
			const dispatcher = connection.playStream(stream);
            message.channel.send(`Now playing: **${info.title}**`);
			dispatcher.on('end', () => voiceChannel.leave());
        })
    }
}