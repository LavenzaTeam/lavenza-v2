const ytdl = require("ytdl-core");
var musicURLs = [];

module.exports = {
    config: {
        name: "music",
        aliases: ["m"],
        description: "A test command for the music functionality coming soon to Lavenza!",
        usage: "<play>, <skip>, <leave>, <queue>",
        category: "testing"
    },
    run: async (client, message, args) => {
        if (args[0] === "play") {
            //generic checks and definitions
            if (message.channel.type !== "text") return message.reply("Error, non valid text channel!");
            var { voiceChannel } = message.member;
            const messageChannel = message.channel;

            //argument checking
            if (!voiceChannel) return message.reply("You must be in a Voice Channel to use this command!");
            let url = "https://www.youtube.com/watch?v=_rlHOwZmCm4";
            if (!url) return message.reply("No URL provided!");

            //validation checking
            let validate = await ytdl.validateURL(url);
            if (!validate) return message.reply("Please input a valid YouTube URL!");

            //get info
            var info = await ytdl.getInfo(url);

            //push data to the array
            musicURLs.push(url);

            //checks if the bot is currently in a voice channel and plays music
            if (message.guild.me.voiceChannel) {
                message.channel.send(`Song added to queue! **${info.title}**`);
            } else {
                try {
                    var voiceConnection = await voiceChannel.join();
                    await playSong(message.channel, voiceConnection, voiceChannel, info);
                } catch (e) {
                    console.log(e.stack);
                }
            }
        }

        if (args[0] === "leave") {
            //general checking
            if (!message.member.voiceChannel) return message.reply("Sorry, You are not currently connected to the same Voice Channel as me!");
            if (!message.guild.me.voiceChannel) return message.reply("Sorry, I am not connected to a Voice Channel in this server!");
            if (message.guild.me.voiceChannelID !== message.member.voiceChannelID) return message.reply("Sorry, You are not currently connected to the same Voice Channel as me!")

            //leaving the voice channel
            message.guild.me.voiceChannel.leave();
            return message.reply("I have left your current Voice Channel!");
        }

        if (args[0] === "skip") {
            message.reply("Skipping is a WIP feature!");
            musicURLs.shift();
            playSong(voiceConnection, voiceChannel, info);
        }

        if (args[0] === "queue") {
            message.reply("Viewing the Queue is not currently a functionality that I have!");
        }

        //the function that plays the music
        async function playSong(messageChannel, voiceConnection, voiceChannel, info) {
            const stream = ytdl(musicURLs[0], { filter: "audioonly" });
            const dispatcher = voiceConnection.playStream(stream);
            message.channel.send(`Now playing: **${info.title}**`);

            dispatcher.on("end", () => {
                musicURLs.shift();

                if (musicURLs.length == 0) {
                    voiceChannel.leave();
                } else {
                    setTimeout(() => {
                        playSong(messageChannel, voiceConnection, voiceChannel, info);
                    }, 5000);
                }
            });
        }
    }
}