const config = require("../../config.json");

module.exports = {
    config: {
        name: "ban",
        aliases: [],
        description: "Bans a user on the spot",
        usage: "<@user> <reason>",
        category: "moderation"
    },
    run: async (client, message, args) => {
        //deletes the message
        await message.delete();
        //defines a variable for a promise that resolves itself after a certain time
        const delay = (msec) => new Promise((resolve) => setTimeout(resolve, msec));
        //stores the person being banned into a variable
        let banned = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
        //checks if they included the person to ban
        if(!banned) return message.reply(`Tell me who to ban! \`${config.prefix}ban @user reason\``);
        //checks if they are trying to ban themselves
        if(banned.id === message.author.id) return message.reply("Can't ban yourself, sorry");
        //checks if the person banning the person has permission to ban people
        if(!message.member.hasPermission("BAN_MEMBERS")) return message.reply("I need the Ban Members permission in order to do that!");
        //slices the id of the person to ban off of the rest of the arguments and joins the rest of the arguments together
        let banreason = args.join(" ").slice(22);
        //checks if the person specified a reason for banning said person
        if(!banreason) return message.reply(`Tell me why I am banning this person! \`${config.prefix}ban @user reason\``);
        //checks if the person being banned has the admin permission, if they do it cancels this out
        if(banned.hasPermission("ADMINISTRATOR")) return message.reply("This person is too important to ban!");
        //checks if the bot can ban the person, if they can't, it stops the code
        if(banned.bannable === false) return message.reply("Can't ban 'em, and I don't know why?");
    
        //sends a message with an image to the person who just got banned
        banned.send(`You have been banned from **${message.channel.guild.name}** for the reason: **${banreason}**`);
        //waits 500ms so that rate limits dont occur
        await delay(500);
        //lets us know that the user has been successfully banned
        message.reply(`${banned.name} banned!`);
        //bans the user and logs the reason to the audit logs
        message.guild.member(banned).ban(banreason);
        return;
    }
}