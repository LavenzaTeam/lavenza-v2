const ytdl = require("ytdl-core-discord");

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
        message.reply("Joining your Voice Channel! Playing Keep your Faith!");
        voiceChannel.join().then(connection => {
            const url = "https://www.youtube.com/watch?v=xTH2g1JQxXc&list=PL1Ujbrns4Hh55A7xfDrrk_AXC3I_Bbkyx&index=24";
            connection.playOpusStream(await ytdl(url));
        })
    }
}