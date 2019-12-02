const { RichEmbed, Attachment } = require("discord.js");

module.exports = {
    config: {
        name: "p3personas",
        aliases: ["persona3personas", "p3p"],
        description: "Views Persona data on a specified Persona",
        usage: "<persona> (/a)",
        category: "persona"
    },
    run: async (client, message, args) => {
        let personaName = args.join("_").toLowerCase();
        if(!personaName) return message.reply("Please specify a Persona to search!")

        //fool arcana
        if(personaName === "orpheus"){
            var name = personaName.charAt(0).toUpperCase() + personaName.slice(1);
            var quote = "\"Thou art I... And I am thou... From the sea of thy soul I cometh... I am Orpheus, master of strings...\""
            var fileName = personaName;
            var url = `https://megamitensei.fandom.com/wiki/${name}`;
            var img = new Attachment(`./personadata/p3/${fileName}.png`, "persona.png");
        }
        if(personaName === "orpheus_/a"){
            var name = "Orpheus (The Answer)"
            var quote = "\"Thou art I... And I am thou... From the sea of thy soul I cometh... I am Orpheus, master of strings...\""
            var parseName = "Orpheus";
            var fileName = "orpheusAnswer";
            var url = `https://megamitensei.fandom.com/wiki/${parseName}#The%20Answer`;
            var img = new Attachment(`./personadata/p3/${fileName}.png`, "persona.png");
        }
        if(personaName === "slime"){
            var name = personaName.charAt(0).toUpperCase() + personaName.slice(1);
            var fileName = personaName;
            var url = `https://megamitensei.fandom.com/wiki/${name}`;
            var img = new Attachment(`./personadata/p3/${fileName}.png`, "persona.png");
        }
        if(personaName === "slime /a"){
            var name = "Slime (The Answer)";
            var fileName = "slimeAnswer";
            var url = `https://megamitensei.fandom.com/wiki/Slime`;
            var img = new Attachment(`./personadata/p3/${fileName}.png`, "persona.png");
        }
        if(personaName === "legion"){
            var name = personaName.charAt(0).toUpperCase() + personaName.slice(1);
            var fileName = personaName;
            var url = `https://megamitensei.fandom.com/wiki/${name}`;
            var img = new Attachment(`./personadata/p3/${fileName}.png`, "persona.png");
        }
        if(personaName === "black_frost"){
            var name = "Black Frost";
            var quote = "\"I've become hee ho evil! I'm Black Frost, heeeeee hoooooo!\""
            var fileName = personaName;
            var url = `https://megamitensei.fandom.com/wiki/Black_Frost`;
            var img = new Attachment(`./personadata/p3/${fileName}.png`, "persona.png");
        }
        if(personaName === "ose"){
            var name = personaName.charAt(0).toUpperCase() + personaName.slice(1);
            var fileName = personaName;
            var url = `https://megamitensei.fandom.com/wiki/${name}`;
            var img = new Attachment(`./personadata/p3/${fileName}.png`, "persona.png");
        }
        if(personaName === "decarabia"){
            var name = personaName.charAt(0).toUpperCase() + personaName.slice(1);
            var fileName = personaName;
            var url = `https://megamitensei.fandom.com/wiki/${name}`;
            var img = new Attachment(`./personadata/p3/${fileName}.png`, "persona.png");
        }
        if(personaName === "loki"){
            var name = personaName.charAt(0).toUpperCase() + personaName.slice(1);
            var fileName = personaName;
            var url = `https://megamitensei.fandom.com/wiki/${name}`;
            var img = new Attachment(`./personadata/p3/${fileName}.png`, "persona.png");
        }
        if(personaName === "susano-o"){
            var name = personaName.charAt(0).toUpperCase() + personaName.slice(1);
            var fileName = personaName;
            var url = `https://megamitensei.fandom.com/wiki/${name}`;
            var img = new Attachment(`./personadata/p3/${fileName}.png`, "persona.png");
        }
        if(personaName === "orpheus_telos"){
            var name = "Orpheus Telos";
            var quote = "\"By bonding with many people, Orpheus was once again born from the sea of the soul. He has awakened to the power of Cipher, which holds endless possibilities.\""
            var fileName = personaName;
            var url = `https://megamitensei.fandom.com/wiki/Orpheus_Telos`;
            var img = new Attachment(`./personadata/p3/${fileName}.png`, "persona.png");
        }

        //magician arcana
        if(personaName === "hermes"){
            var name = personaName.charAt(0).toUpperCase() + personaName.slice(1);
            var quote = "\"I am Hermes... Giver of fortune and fame, and herald of souls... To my alter ego: Love thy neighbor with a selflessness like the wind's...\"";
            var fileName = personaName;
            var url = `https://megamitensei.fandom.com/wiki/${name}`;
            var img = new Attachment(`./personadata/p3/${fileName}.png`, "persona.png");
        }
        if(personaName === "trismegistus"){
            var name = personaName.charAt(0).toUpperCase() + personaName.slice(1);
            var fileName = personaName;
            var url = `https://megamitensei.fandom.com/wiki/${name}`;
            var img = new Attachment(`./personadata/p3/${fileName}.png`, "persona.png");
        }
        if(personaName === "trismegistus_/a"){
            var name = "Trismegistus (The Answer)";
            var fileName = "trismegistusAnswer";
            var url = `https://megamitensei.fandom.com/wiki/Trismegistus`;
            var img = new Attachment(`./personadata/p3/${fileName}.png`, "persona.png");
        }
        if(personaName === "nekomata"){
            var name = personaName.charAt(0).toUpperCase() + personaName.slice(1);
            var fileName = personaName;
            var url = `https://megamitensei.fandom.com/wiki/${name}`;
            var img = new Attachment(`./personadata/p3/${fileName}.png`, "persona.png");
        }
        if(personaName === "jack_frost"){
            var name = "Jack Frost";
            var quote = "\"I'm going to kill you. Why? ...Eh, no reason! Life, hee... Life, ho... Hee ho is not fair!\""
            var fileName = personaName;
            var url = `https://megamitensei.fandom.com/wiki/Jack_Frost`;
            var img = new Attachment(`./personadata/p3/${fileName}.png`, "persona.png");
        }
        if(personaName === "pyro_jack"){
            var name = "Pyro Jack";
            var fileName = personaName;
            var url = `https://megamitensei.fandom.com/wiki/Pyro_Jack`;
            var img = new Attachment(`./personadata/p3/${fileName}.png`, "persona.png");
        }
        if(personaName === "pyro_jack_/a"){
            var name = "Pyro Jack (The Answer)";
            var fileName = "pyro_jackAnswer";
            var url = `https://megamitensei.fandom.com/wiki/Pyro_Jack`;
            var img = new Attachment(`./personadata/p3/${fileName}.png`, "persona.png");
        }
        if(personaName === "hua_po"){
            var name = "Hua Po";
            var fileName = personaName;
            var url = `https://megamitensei.fandom.com/wiki/Hua_Po`;
            var img = new Attachment(`./personadata/p3/${fileName}.png`, "persona.png");
        }
        if(personaName === "hua_po_/a"){
            var name = "Hua Po (The Answer)";
            var fileName = "hua_poAnswer";
            var url = `https://megamitensei.fandom.com/wiki/Pyro_Jack`;
            var img = new Attachment(`./personadata/p3/${fileName}.png`, "persona.png");
        }
        if(personaName === "sati"){
            var name = personaName.charAt(0).toUpperCase() + personaName.slice(1);
            var fileName = personaName;
            var url = `https://megamitensei.fandom.com/wiki/${name}`;
            var img = new Attachment(`./personadata/p3/${fileName}.png`, "persona.png");
        }
        if(personaName === "orobas"){
            var name = personaName.charAt(0).toUpperCase() + personaName.slice(1);
            var fileName = personaName;
            var url = `https://megamitensei.fandom.com/wiki/${name}`;
            var img = new Attachment(`./personadata/p3/${fileName}.png`, "persona.png");
        }
        if(personaName === "rangda"){
            var name = personaName.charAt(0).toUpperCase() + personaName.slice(1);
            var fileName = personaName;
            var url = `https://megamitensei.fandom.com/wiki/${name}`;
            var img = new Attachment(`./personadata/p3/${fileName}.png`, "persona.png");
        }
        if(personaName === "surt"){
            var name = personaName.charAt(0).toUpperCase() + personaName.slice(1);
            var fileName = personaName;
            var url = `https://megamitensei.fandom.com/wiki/${name}`;
            var img = new Attachment(`./personadata/p3/${fileName}.png`, "persona.png");
        }
        if(personaName === "surt_/a"){
            var name = "Surt (The Answer)";
            var fileName = "surtAnswer";
            var url = `https://megamitensei.fandom.com/wiki/Surt`;
            var img = new Attachment(`./personadata/p3/${fileName}.png`, "persona.png");
        }

        //priestess arcana
        if(personaName === "lucia"){
            var name = personaName.charAt(0).toUpperCase() + personaName.slice(1);
            var fileName = personaName;
            var url = `https://megamitensei.fandom.com/wiki/${name}`;
            var img = new Attachment(`./personadata/p3/${fileName}.png`, "persona.png");
        }
        if(personaName === "juno"){
            var name = personaName.charAt(0).toUpperCase() + personaName.slice(1);
            var fileName = personaName;
            var url = `https://megamitensei.fandom.com/wiki/${name}`;
            var img = new Attachment(`./personadata/p3/${fileName}.png`, "persona.png");
        }
        if(personaName === "juno_/a"){
            var name = "Juno (The Answer)";
            var fileName = "junoAnswer";
            var url = `https://megamitensei.fandom.com/wiki/Juno`;
            var img = new Attachment(`./personadata/p3/${fileName}.png`, "persona.png");
        }
        if(personaName === "apsaras"){
            var name = personaName.charAt(0).toUpperCase() + personaName.slice(1);
            var fileName = personaName;
            var url = `https://megamitensei.fandom.com/wiki/${name}`;
            var img = new Attachment(`./personadata/p3/${fileName}.png`, "persona.png");
        }
        if(personaName === "unicorn"){
            var name = personaName.charAt(0).toUpperCase() + personaName.slice(1);
            var fileName = personaName;
            var url = `https://megamitensei.fandom.com/wiki/${name}`;
            var img = new Attachment(`./personadata/p3/${fileName}.png`, "persona.png");
        }
        if(personaName === "high_pixie"){
            var name = "High Pixie";
            var fileName = personaName;
            var url = `https://megamitensei.fandom.com/wiki/High_Pixie`;
            var img = new Attachment(`./personadata/p3/${fileName}.png`, "persona.png");
        }
        if(personaName === "sarasvati"){
            var name = personaName.charAt(0).toUpperCase() + personaName.slice(1);
            var fileName = personaName;
            var url = `https://megamitensei.fandom.com/wiki/${name}`;
            var img = new Attachment(`./personadata/p3/${fileName}.png`, "persona.png");
        }
        if(personaName === "ganga"){
            var name = personaName.charAt(0).toUpperCase() + personaName.slice(1);
            var fileName = personaName;
            var url = `https://megamitensei.fandom.com/wiki/${name}`;
            var img = new Attachment(`./personadata/p3/${fileName}.png`, "persona.png");
        }
        if(personaName === "parvati"){
            var name = personaName.charAt(0).toUpperCase() + personaName.slice(1);
            var fileName = personaName;
            var url = `https://megamitensei.fandom.com/wiki/${name}`;
            var img = new Attachment(`./personadata/p3/${fileName}.png`, "persona.png");
        }
        if(personaName === "parvati_/a"){
            var name = "Parvati"
            var fileName = "parvatiAnswer";
            var url = `https://megamitensei.fandom.com/wiki/Parvati`;
            var img = new Attachment(`./personadata/p3/${fileName}.png`, "persona.png");
        }
        if(personaName === "kikuri-hime"){
            var name = personaName.charAt(0).toUpperCase() + personaName.slice(1);
            var fileName = "kikurihime";
            var url = `https://megamitensei.fandom.com/wiki/${name}`;
            var img = new Attachment(`./personadata/p3/${fileName}.png`, "persona.png");
        }
        if(personaName === "scathach"){
            var name = personaName.charAt(0).toUpperCase() + personaName.slice(1);
            var fileName = personaName;
            var url = `https://megamitensei.fandom.com/wiki/${name}`;
            var img = new Attachment(`./personadata/p3/${fileName}.png`, "persona.png");
        }

        //empress arcana
        if(personaName === "penthesilea"){
            var name = personaName.charAt(0).toUpperCase() + personaName.slice(1);
            var fileName = personaName;
            var url = `https://megamitensei.fandom.com/wiki/${name}`;
            var img = new Attachment(`./personadata/p3/${fileName}.png`, "persona.png");
        }
        if(personaName === "artemisia"){
            var name = personaName.charAt(0).toUpperCase() + personaName.slice(1);
            var fileName = personaName;
            var url = `https://megamitensei.fandom.com/wiki/${name}`;
            var img = new Attachment(`./personadata/p3/${fileName}.png`, "persona.png");
        }
        if(personaName === "artemisia_/a"){
            var name = "Artemisia (The Answer)";
            var fileName = "artemisiaAnswer";
            var url = `https://megamitensei.fandom.com/wiki/Artemisia`;
            var img = new Attachment(`./personadata/p3/${fileName}.png`, "persona.png");
        }
        if(personaName === "leanan_sidhe"){
            var name = "Leanan Sidhe";
            var fileName = personaName;
            var url = `https://megamitensei.fandom.com/wiki/Leanan_Sidhe`;
            var img = new Attachment(`./personadata/p3/${fileName}.png`, "persona.png");
        }
        if(personaName === "yaksini"){
            var name = personaName.charAt(0).toUpperCase() + personaName.slice(1);
            var fileName = personaName;
            var url = `https://megamitensei.fandom.com/wiki/${name}`;
            var img = new Attachment(`./personadata/p3/${fileName}.png`, "persona.png");
        }
        if(personaName === "lakshmi"){
            var name = personaName.charAt(0).toUpperCase() + personaName.slice(1);
            var fileName = personaName;
            var url = `https://megamitensei.fandom.com/wiki/${name}`;
            var img = new Attachment(`./personadata/p3/${fileName}.png`, "persona.png");
        }
        if(personaName === "hariti"){
            var name = personaName.charAt(0).toUpperCase() + personaName.slice(1);
            var fileName = personaName;
            var url = `https://megamitensei.fandom.com/wiki/${name}`;
            var img = new Attachment(`./personadata/p3/${fileName}.png`, "persona.png");
        }
        if(personaName === "gabriel"){
            var name = personaName.charAt(0).toUpperCase() + personaName.slice(1);
            var fileName = personaName;
            var url = `https://megamitensei.fandom.com/wiki/${name}`;
            var img = new Attachment(`./personadata/p3/${fileName}.png`, "persona.png");
        }
        if(personaName === "mother_harlot"){
            var name = "Mother Harlot";
            var fileName = personaName;
            var url = `https://megamitensei.fandom.com/wiki/Mother_Harlot`;
            var img = new Attachment(`./personadata/p3/${fileName}.png`, "persona.png");
        }
        if(personaName === "skadi"){
            var name = personaName.charAt(0).toUpperCase() + personaName.slice(1);
            var fileName = personaName;
            var url = `https://megamitensei.fandom.com/wiki/${name}`;
            var img = new Attachment(`./personadata/p3/${fileName}.png`, "persona.png");
        }
        if(personaName === "alilat"){
            var name = personaName.charAt(0).toUpperCase() + personaName.slice(1);
            var fileName = personaName;
            var url = `https://megamitensei.fandom.com/wiki/${name}`;
            var img = new Attachment(`./personadata/p3/${fileName}.png`, "persona.png");
        }

        //emporer arcana
        if(personaName === "polydeuces"){
            var name = personaName.charAt(0).toUpperCase() + personaName.slice(1);
            var fileName = personaName;
            var url = `https://megamitensei.fandom.com/wiki/${name}`;
            var img = new Attachment(`./personadata/p3/${fileName}.png`, "persona.png");
        }
        if(personaName === "ceasar"){
            var name = personaName.charAt(0).toUpperCase() + personaName.slice(1);
            var fileName = personaName;
            var url = `https://megamitensei.fandom.com/wiki/${name}`;
            var img = new Attachment(`./personadata/p3/${fileName}.png`, "persona.png");
        }
        if(personaName === "ceasar_/a"){
            var name = "Ceasar (The Answer)";
            var fileName = "ceasarAnswer";
            var url = `https://megamitensei.fandom.com/wiki/Ceasar`;
            var img = new Attachment(`./personadata/p3/${fileName}.png`, "persona.png");
        }
        if(personaName === "forneus"){
            var name = personaName.charAt(0).toUpperCase() + personaName.slice(1);
            var fileName = personaName;
            var url = `https://megamitensei.fandom.com/wiki/${name}`;
            var img = new Attachment(`./personadata/p3/${fileName}.png`, "persona.png");
        }
        if(personaName === "oberon"){
            var name = personaName.charAt(0).toUpperCase() + personaName.slice(1);
            var fileName = personaName;
            var url = `https://megamitensei.fandom.com/wiki/${name}`;
            var img = new Attachment(`./personadata/p3/${fileName}.png`, "persona.png");
        }
        if(personaName === "take-mikazuchi"){
            var name = personaName.charAt(0).toUpperCase() + personaName.slice(1);
            var fileName = personaName;
            var url = `https://megamitensei.fandom.com/wiki/${name}`;
            var img = new Attachment(`./personadata/p3/${fileName}.png`, "persona.png");
        }
        if(personaName === "king_frost"){
            var name = "King Frost";
            var quote = "\"I'm King of the Frosts! Bow to me! Hee-know your places!\"";
            var fileName = personaName;
            var url = `https://megamitensei.fandom.com/wiki/King_Frost`;
            var img = new Attachment(`./personadata/p3/${fileName}.png`, "persona.png");
        }
        if(personaName === "raja_naga"){
            var name = "Raja Naga";
            var fileName = personaName;
            var url = `https://megamitensei.fandom.com/wiki/Raja_Naga`;
            var img = new Attachment(`./personadata/p3/${fileName}.png`, "persona.png");
        }
        if(personaName === "kingu"){
            var name = personaName.charAt(0).toUpperCase() + personaName.slice(1);
            var fileName = personaName;
            var url = `https://megamitensei.fandom.com/wiki/${name}`;
            var img = new Attachment(`./personadata/p3/${fileName}.png`, "persona.png");
        }
        if(personaName === "barong"){
            var name = personaName.charAt(0).toUpperCase() + personaName.slice(1);
            var fileName = personaName;
            var url = `https://megamitensei.fandom.com/wiki/${name}`;
            var img = new Attachment(`./personadata/p3/${fileName}.png`, "persona.png");
        }
        if(personaName === "odin"){
            var name = personaName.charAt(0).toUpperCase() + personaName.slice(1);
            var fileName = personaName;
            var url = `https://megamitensei.fandom.com/wiki/${name}`;
            var img = new Attachment(`./personadata/p3/${fileName}.png`, "persona.png");
        }
        if(personaName === "odin_/a"){
            var name = "Odin (The Answer)";
            var fileName = "odinAnswer";
            var url = `https://megamitensei.fandom.com/wiki/Odin`;
            var img = new Attachment(`./personadata/p3/${fileName}.png`, "persona.png");
        }




        //final checks and sending of the embed
        if(!name){
            if(personaName.endsWith("/a")){
                return message.reply("This Persona either doesn't have a variant for \"The Answer\", or you entered an invalid Persona name!");
            } else {
                return message.reply("You entered an invalid Persona name!");
            }
        }
        let embed = new RichEmbed()
            .setTitle(name)
            .setURL(url)
            .setColor("#00a2ff")
            .attachFile(img)
            .setImage("attachment://persona.png")
            .setFooter("Info gathered from the Megami Tensei Wiki", client.user.displayAvatarURL)
            if(quote) embed.setDescription(quote)

        message.channel.send(embed);
    }
}