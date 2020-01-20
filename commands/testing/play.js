const ytdl = require("ytdl-core");

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

        //creates and stores some variables for later usage
        let data = active.get(message.guild.id) || {};
        if(!data.connection) data.connection = await message.member.voiceChannel.join();
        if(!data.queue) data.queue = [];
        data.guildID = message.guild.id;

        //basic info for the map
        data.queue.push({
            songTitle: info.title,
            requester: message.author.tag,
            url: url,
            announceChannel: message.channel.id
        });
        
        //creates a data dispactcher and plays the audio 
        if(!data.dispatcher) play(client, message, args, data, active);
        else {
            message.channel.send(`Added to queue: **${info.title}** | Requested by: **${message.author.id}**`);
        }

        //update the map
        active.set(message.guild.id, data);

        async function play(client, message, args, data, active){
            client.channels.get(data.queue[0].announceChannel).send(`Now Playing: **${data.queue[0].songTitle}** | Requested by: **${data.queue[0].requester}**`);

            data.dispatcher = await data.connection.playStream(ytdl(data.queue[0].url, { filter: "audioonly" }));
            data.dispatcher.guildID = data.guildID;

            data.dispatcher.once("end", function() {
                finish(client, message, args, data)
            });
        }

        function finish(client, message, args, dispactcher) {
            let fetched = active.get(dispactcher.guildID);
            fetched.queue.shift();
            if(fetched.queue.length > 0) {
                active.set(dispactcher.guildID, fetched)
                play(client, message, args, fetched)
            } else {
                active.delete(dispactcher.guildID);
                let vc = client.guilds.get(dispactcher.guildID).me.voiceChannel;
                if(vc) vc.leave();
            }
        }
    }
}