module.exports = {
    config: {
        name: "clear",
        aliases: [],
        description: "Lets people with the manage messages permission delete messages in bulk!",
        usage: "<number>",
        category: "moderation"
    },
    run: async (client, message, args) => {
        await message.delete();
        if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("I can not allow you to do that. That command is too high level for you!");
        if (client.guild.me.hasPermission("MANAGE_MESSAGES")) return message.reply("I have not been granted the power to manage messages in this server. Please consider ranking up the confidant rank with the server owner so that I may gain permissions!");
        if (!args[0]) return message.reply("You don't have enough money to summon that command! Please use a number after the command.")
        if (args[0] >= 101) return message.reply("Are you sure you need this!? Please specify a number lower than 100.");

        let number = args[0];
        await message.channel.bulkDelete(number, true)
        return message.reply(`Successfully cleared ${number} messages!`).then(msg => msg.delete(5000));
    }
}