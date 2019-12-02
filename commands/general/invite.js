const config = require("../../config.json");

module.exports = {
    config: {
        name: "invite",
        aliases: ["addme", "join"],
        description: "Sends a link to invite the bot to your server!",
        usage: "",
        category: "general"
    },
    run: async (client, message, args) => {
        let inviteurl = `https://discordapp.com/api/oauth2/authorize?client_id=${config.inviteurl.clientid}&permissions=${config.inviteurl.permissionsinteger}&scope=bot`;
        return message.reply(`Here is a link to invite me to your server! \n${inviteurl}`);
    }
}