const { Utils } = require("erela.js");
const { RichEmbed } = require("discord.js");

module.exports = {
    config: {
        name: "play",
        aliases: ["p"],
        description: "Plays a specified song",
        usage: "<song/link>",
        category: "music"
    },
    run: async (client, message, args) => {
        const { voiceChannel } = message.member;
        if(!voiceChannel) return message.reply("You must join a voice channel before you can begin playing music!");

        const permissions = voiceChannel.permissionsFor(client.user);
        if(!permissions.has("CONNECT")) return message.reply("I am not allowed to connect to that Voice Channel! Please check the permissions on the current channel!");
        if(!permissions.has("SPEAK")) return message.reply("I don't have permission to speak in your current voice channel! In order to save resources, I have decided not to connect until I am given permission to speak!");

        if(!args[0]) return message.reply("Please specify a search query/link to a song!");

        const player = client.music.players.spawn({
            guild: message.guild,
            textChannel: message.channel,
            voiceChannel
        });

        client.music.search(args.join(" "), message.author).then(async res => {
            switch (res.loadType) {
                case "TRACK_LOADED":
                    player.queue.add(res.tracks[0]);
                    message.channel.send(`Queuing \`${res.tracks[0].title}\` \`${Utils.formatTime(res.tracks[0].duration, true)}\``);
                    if(!player.playing) player.play();
                    break;

                case "SEARCH_RESULT":
                    let index = 1;
                    const tracks = res.tracks.slice(0, 5);
                    const embed = new RichEmbed()
                        .setAuthor("Song Selection.", message.author.displayAvatarURL)
                        .setDescription(tracks.map(video => `**${index++} -** ${video.title}`))
                        .setFooter("This will automatically cancel in 30 seconds. Please hurry and make your choice, or type 'cancel' to cancel the selection.");

                    await message.channel.send(embed);

                    const collector = message.channel.createMessageCollector(m => {
                        return m.author.id === message.author.id && new RegExp(`^([1-5|cancel])$`, "i").test(m.content)
                    }, { time: 30000, max: 1 });

                    collector.on("collect", m => {
                        if(/cancel/i.test(m.content)) return collector.stop("cancelled")

                        const track = tracks[Number(m.content) - 1];
                        player.queue.add(track)
                        message.reply(`Enqueuing \`${track.title}\` \`${Utils.formatTime(track.duration, true)}\``);
                        if(!player.playing) player.play();
                    });

                    collector.on("end", (_, reason) => {
                        if(["time", "cancelled"].includes(reason)) return message.reply("Cancelled music selection!")
                    });

                    break;

                case "PLAYLIST_LOADED":
                    res.playlist.tracks.forEach(track => player.queue.add(track));
                    const duration = Utils.formatTime(res.playlist.tracks.reduce((acc, cur) => ({duration: acc.duration + cur.duration})).duration, true);
                    message.reply(`Enqueued \`${res.playlist.tracks.length}\` \`${duration}\` tracks in playlist \`${res.playlist.info.name}\``);
                    if(!player.playing) player.play();
                    break;
            }
        }).catch(err => message.reply(err.message))
    }
}