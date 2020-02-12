const { RichEmbed } = require("discord.js");

module.exports = {
    config: {
        name: "osu",
        aliases: [],
        description: "A command the retrives osu stats!",
        usage: "<username> (mode)",
        category: "fun"
    },
    run: async (client, message, args) => {
        var mod = {
            "": "0",
            basic: "0",
            taiko: "1",
            CTB: "2",
            mania: "3"
        };

        let embed = new RichEmbed()
            .setImage(`http://lemmmy.pw/osusig/sig.php?colour=hexffcc22&uname=${args.split(" ")[0]}&mode=${mod[args.split(" ")[1]]}&pp=0&flagshadow&flagstroke&darkheader&avatarrounding=4&onlineindicator=2&xpbar`)

        return message.channel.send(embed);
    }
}