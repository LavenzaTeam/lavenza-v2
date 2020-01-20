const ytdl = require("ytdl-core");
var musicURLs = [];

module.exports = {
    config: {
        name: "play",
        aliases: ["p"],
        description: "A test command for the music functionality coming soon to Lavenza!",
        usage: "",
        category: "testing"
    },
    run: async (client, message, args, active) => {
        //generic checks and definitions
        if (message.channel.type !== "text") return message.reply("Error, non valid text channel!");
        const { voiceChannel } = message.member;

        //argument checking
        if(!voiceChannel) return message.reply("You must be in a Voice Channel to use this command!");
        let url = "https://www.youtube.com/watch?v=Kbw6hF7tHns";
        if(!url) return message.reply("No URL provided!");

        //validation checking
        let validate = await ytdl.validateURL(url);
        if(!validate) return message.reply("Please input a valid YouTube URL!");

        //get info
        let info = await ytdl.getInfo(url);

        //push data to the array
        musicURLs.push(url);

        //checks if the bot is currently in a voice channel and plays music
        if(message.guild.me.voiceChannel) {
            message.channel.send(`Song added to queue! **${info.title}**`);
        } else {
            try {
                const voiceConnection = await voiceChannel.join();
                await playSong(message.channel, voiceConnection, voiceChannel);
            } catch (e) {
                console.log(e.stack);
            }
        }

        //the function that plays the music
        async function playSong(messageChannel, voiceConnection, voiceChannel) {
            const stream = ytdl(musicURLs[0], { filter: "audioonly" });
            const dispatcher = voiceConnection.playStream(stream)
        }
    }
}