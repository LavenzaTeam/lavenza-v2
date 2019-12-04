const { RichEmbed } = require("discord.js");
const config = require("../../config.json");

module.exports = {
    config: {
        name: "p3download",
        aliases: ["p3dl", "p3emulation", "p3emulate"],
        description: "Sends a message with links for Emulators and ROMs for all the Persona 3 games",
        usage: "",
        category: "persona"
    },
    run: async (client, message, args) => {
        let ps2emu = "https://pcsx2.net/";
        let pspemu = "https://ppsspp.org/";
        let ps3emu = "https://rpcs3.net";
        let p3fes = "https://coolrom.com/roms/ps2/41813/Shin_Megami_Tensei_-_Persona_3_FES.php";
        let p3p = "https://www.freeroms.com/roms/psp/shin_megami_tensei_-_persona_3_portable.htm";
        let p3ps3 = "Nothing here at the moment. ¯\\_(ツ)_/¯";

        let p3embed = new RichEmbed()
        .setTitle("Persona 3")
        .setDescription(`Below is a list of all the emulators and ROMs to play the Persona 3 games! \n[Report broken links!](${config.servers.discordinvite})`)
        .setColor(config.colors.blue)
        .addBlankField(true)
        .addField("PlayStation 2 Emulator", ps2emu)
        .addField("PlayStation Portable Emulator", pspemu)
        .addField("PlayStation 3 Emulator", ps3emu)
        .addBlankField(true)
        .addField("Persona 3 FES (PS2)", p3fes)
        .addField("Persona 3 Portable (PSP)", p3p)
        .addField("Persona 3 FES (PS2 Classic on PS3)", p3ps3)
        .setTimestamp()
        .setFooter("Created by Arkane", client.users.get(config.ids.arkane).displayAvatarURL)

        
        message.channel.send(p3embed);
    }
}