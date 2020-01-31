const config = require("../../config.json");

module.exports = {
    config: {
        name: "kick",
        aliases: [],
        description: "Kicks a user from the server on the spot",
        usage: "<@user> <reason>",
        category: "moderation"
    },
    run: async (client, message, args) => {
        //waits for the message to be deleted before continuing
        await message.delete();
        //creates a delay function that we can call later
        const delay = (msec) => new Promise((resolve) => setTimeout(resolve, msec));
        //stores the person being kicked into a variable
        let kicked = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
        //checks if the user specified someone to kick
        if (!kicked) return message.reply(`Tell me who to kick! \`${config.prefix}kick <@user> <reason>\``);
        //checks if the user specified themselves as the one to be kicked
        if (kicked.id === message.author.id) return message.reply("Can't kick yourself, sorry bud! Leaving the server is always an option!");
        //checks if the user has the permissions to kick someone
        if (!message.member.hasPermission("KICK_MEMBERS")) return message.reply("No.");
        //stores the reason in a variable and slices the user variable off of the begining
        let kickreason = args.join(" ").slice(22);
        //checks to see if the user specified a reason for kicking that user
        if (!kickreason) return message.reply(`Give me a reason why they are being kicked! \`${config.prefix}kick @user reason\``);
        //checks if the person being kicked has the admin permission
        if (kicked.hasPermission("ADMINISTRATOR")) return message.reply("Can't kick 'em, they just seem too important!");
        //checks if the user can be kicked by the bot
        if (kicked.kickable() === false) return message.reply("For some reason, this user isn't kickable?");

        //kicks the member and throws the reason in the audit log
        message.guild.member(kicked).kick(kickreason);
        //sends a message to the person who got kicked telling them that they have been kicked
        kicked.send(`You have been kicked from **${message.channel.guild.name}** for the reason: **${kickreason}**`)
        //calls the delay function we created earlier to stop the command for a second
        await delay(500);
        //tells the user that the member has been kicked
        message.reply(`${kicked.name} kicked!`);
        //stops the code
        return;
    }
}