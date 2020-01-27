const { RichEmbed, Attachment } = require("discord.js");
const config = require("discord.js");

module.exports = {
    config: {
        name: "avatar",
        aliases: ["pfp", "profilepic"],
        description: "Sends an image of your profile picture!",
        usage: "(@user)",
        category: "general"
    },
    run: async (client, message, args) => {
        //stores the user that you pinged in a variable
        let aUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));

        //checks if you pinged somebody, if you did, it displays their avatar, otherwise, it displays you avatar
        if (aUser) {
            var userURL = aUser.user.avatarURL;
            var image = new Attachment(userURL, "image.png");
        } else {
            aUser = message.member;
            var yourURL = message.author.avatarURL;
            var image = new Attachment(yourURL, "image.png");
        }

        let embed = new RichEmbed()
            .setTitle(aUser.user.username)
            .setDescription(`${aUser.user.username}'s Discord Avatar`)
            .attachFile(image)
            .setImage("attachment://image.png")
            .setFooter(`Data requested by ${message.author.username}`, message.author.displayAvatarURL);

        //stops the code in its tracks
        return message.channel.send(embed);
    }
}