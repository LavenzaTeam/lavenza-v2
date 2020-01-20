module.exports = {
    config: {
        name: "leave",
        aliases: ["l", "d", "disconnect"],
        description: "A command that will cause Lavenza to leave the current Voice Channel",
        usage: "",
        category: "testing"
    },
    run: async (client, message, args) => {
        //general checking
        if(!message.member.voiceChannel) return message.reply("Sorry, You are not currently connected to the same Voice Channel as me!");
        if(!message.guild.me.voiceChannel) return message.reply("Sorry, I am not connected to a Voice Channel in this server!");
        if(message.guild.me.voiceChannelID !== message.member.voiceChannelID) return message.reply("Sorry, You are not currently connected to the same Voice Channel as me!")

        //leaving the voice channel
        message.guild.me.voiceChannel.leave();
        message.reply("I have left your current Voice Channel!");
    }
}