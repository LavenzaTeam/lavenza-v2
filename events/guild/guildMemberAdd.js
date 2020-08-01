const { GuildMember } = require("discord.js")

module.exports = async (client, messgae) => {
    if(member.guild.id === "640749553313906713"){
        let role = member.guild.roles.find(x => x.name === "Members")
        member.addRole(role);
        return;
    } else return;
}