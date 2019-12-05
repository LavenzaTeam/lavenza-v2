const { RichEmbed, Attachment } = require("discord.js");
const config = require("../../config.json");

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

        //hierophant arcana
        if(personaName === "castor"){
            var name = personaName.charAt(0).toUpperCase() + personaName.slice(1);
            var fileName = personaName;
            var url = `https://megamitensei.fandom.com/wiki/${name}`;
            var img = new Attachment(`./personadata/p3/${fileName}.png`, "persona.png");
        }
        if(personaName === "omoikane"){
            var name = personaName.charAt(0).toUpperCase() + personaName.slice(1);
            var quote = "\"Thinking about it, much time has passed since I governed over knowledge. Those who repay their debt to this country with knowledge shall gain form, becoming a ghost of national defense. If you are still a fool even after gaining knowledge, then you will learn the meaning of death.\"";
            var fileName = personaName;
            var url = `https://megamitensei.fandom.com/wiki/${name}`;
            var img = new Attachment(`./personadata/p3/${fileName}.png`, "persona.png");
        }
        if(personaName === "berith"){
            var name = personaName.charAt(0).toUpperCase() + personaName.slice(1);
            var fileName = personaName;
            var url = `https://megamitensei.fandom.com/wiki/${name}`;
            var img = new Attachment(`./personadata/p3/${fileName}.png`, "persona.png");
        }
        if(personaName === "shiisaa"){
            var name = personaName.charAt(0).toUpperCase() + personaName.slice(1);
            var fileName = personaName;
            var url = `https://megamitensei.fandom.com/wiki/${name}`;
            var img = new Attachment(`./personadata/p3/${fileName}.png`, "persona.png");
        }
        if(personaName === "flauros"){
            var name = personaName.charAt(0).toUpperCase() + personaName.slice(1);
            var fileName = personaName;
            var url = `https://megamitensei.fandom.com/wiki/${name}`;
            var img = new Attachment(`./personadata/p3/${fileName}.png`, "persona.png");
        }
        if(personaName === "thoth"){
            var name = personaName.charAt(0).toUpperCase() + personaName.slice(1);
            var fileName = personaName;
            var url = `https://megamitensei.fandom.com/wiki/${name}`;
            var img = new Attachment(`./personadata/p3/${fileName}.png`, "persona.png");
        }
        if(personaName === "hokuto_seikun"){
            var name = "Hokuto Seikun";
            var fileName = personaName;
            var url = `https://megamitensei.fandom.com/wiki/Hokuto_Seikun`;
            var img = new Attachment(`./personadata/p3/${fileName}.png`, "persona.png");
        }
        if(personaName === "daisoujou"){
            var name = personaName.charAt(0).toUpperCase() + personaName.slice(1);
            var quote = "\"It is my duty to save those who have gone astray... Let me be your guide. Receive my salvation... Accept your death!\"";
            var fileName = personaName;
            var url = `https://megamitensei.fandom.com/wiki/${name}`;
            var img = new Attachment(`./personadata/p3/${fileName}.png`, "persona.png");
        }
        if(personaName === "kohryu"){
            var name = personaName.charAt(0).toUpperCase() + personaName.slice(1);
            var quote = "\"You are a rare breed... you deserve praise for your efforts already. But you haven't come to be praised, have you? And I haven't left my post at the Confinement Chamber merely to praise you. Shall we begin?\""
            var fileName = personaName;
            var url = `https://megamitensei.fandom.com/wiki/${name}`;
            var img = new Attachment(`./personadata/p3/${fileName}.png`, "persona.png");
        }
        if(personaName === "kohryu_/a"){
            var name = "Kohryu (The Answer)";
            var quote = "\"You are a rare breed... you deserve praise for your efforts already. But you haven't come to be praised, have you? And I haven't left my post at the Confinement Chamber merely to praise you. Shall we begin?\""
            var fileName = "kohryuAnswer";
            var url = `https://megamitensei.fandom.com/wiki/Kohryu`;
            var img = new Attachment(`./personadata/p3/${fileName}.png`, "persona.png");
        }

        //lovers arcana
        if(personaName === "io"){
            var name = personaName.charAt(0).toUpperCase() + personaName.slice(1);
            var quote = "\"Help me!!\" -Yukari"
            var fileName = personaName;
            var url = `https://megamitensei.fandom.com/wiki/${name}`;
            var img = new Attachment(`./personadata/p3/${fileName}.png`, "persona.png");
        }
        if(personaName === "isis"){
            var name = personaName.charAt(0).toUpperCase() + personaName.slice(1);
            var fileName = personaName;
            var url = `https://megamitensei.fandom.com/wiki/${name}`;
            var img = new Attachment(`./personadata/p3/${fileName}.png`, "persona.png");
        }
        if(personaName === "isis_/a"){
            var name = "Isis (The Answer)";
            var fileName = "isisAnswer";
            var url = `https://megamitensei.fandom.com/wiki/Isis`;
            var img = new Attachment(`./personadata/p3/${fileName}.png`, "persona.png");
        }
        if(personaName === "pixie"){
            var name = personaName.charAt(0).toUpperCase() + personaName.slice(1);
            var fileName = personaName;
            var url = `https://megamitensei.fandom.com/wiki/${name}`;
            var img = new Attachment(`./personadata/p3/${fileName}.png`, "persona.png");
        }
        if(personaName === "alp"){
            var name = personaName.charAt(0).toUpperCase() + personaName.slice(1);
            var fileName = personaName;
            var url = `https://megamitensei.fandom.com/wiki/${name}`;
            var img = new Attachment(`./personadata/p3/${fileName}.png`, "persona.png");
        }
        if(personaName === "tam_lin"){
            var name = "Tam Lin";
            var fileName = personaName;
            var url = `https://megamitensei.fandom.com/wiki/Tam_Lin`;
            var img = new Attachment(`./personadata/p3/${fileName}.png`, "persona.png");
        }
        if(personaName === "narcissus"){
            var name = personaName.charAt(0).toUpperCase() + personaName.slice(1);
            var fileName = personaName;
            var url = `https://megamitensei.fandom.com/wiki/${name}`;
            var img = new Attachment(`./personadata/p3/${fileName}.png`, "persona.png");
        }
        if(personaName === "queen_mab"){
            var name = "Queen Mab";
            var fileName = personaName;
            var url = `https://megamitensei.fandom.com/wiki/Queen_Mab`;
            var img = new Attachment(`./personadata/p3/${fileName}.png`, "persona.png");
        }
        if(personaName === "saki_mitama"){
            var name = "Saki Mitama";
            var fileName = personaName;
            var url = `https://megamitensei.fandom.com/wiki/Saki_Mitama`;
            var img = new Attachment(`./personadata/p3/${fileName}.png`, "persona.png");
        }
        if(personaName === "titania"){
            var name = personaName.charAt(0).toUpperCase() + personaName.slice(1);
            var quote = "\"Are you ready?\"";
            var fileName = personaName;
            var url = `https://megamitensei.fandom.com/wiki/${name}`;
            var img = new Attachment(`./personadata/p3/${fileName}.png`, "persona.png");
        }
        if(personaName === "raphael"){
            var name = personaName.charAt(0).toUpperCase() + personaName.slice(1);
            var quote = "\"I'm a human... Five years ago, on that day... No... I'm Raphael... My duty is to build the Millennial Kingdom by God's authority! Witness the fury of the heavens!\"";
            var fileName = personaName;
            var url = `https://megamitensei.fandom.com/wiki/${name}`;
            var img = new Attachment(`./personadata/p3/${fileName}.png`, "persona.png");
        }
        if(personaName === "cybele"){
            var name = personaName.charAt(0).toUpperCase() + personaName.slice(1);
            var fileName = personaName;
            var url = `https://megamitensei.fandom.com/wiki/${name}`;
            var img = new Attachment(`./personadata/p3/${fileName}.png`, "persona.png");
        }
        if(personaName === "cybele_/a"){
            var name = "Cybele (The Answer)";
            var fileName = "cybeleAnswer";
            var url = `https://megamitensei.fandom.com/wiki/Cybele`;
            var img = new Attachment(`./personadata/p3/${fileName}.png`, "persona.png");
        }
        

        //chariot arcana
        if(personaName === "palladion"){
            var name = personaName.charAt(0).toUpperCase() + personaName.slice(1);
            var fileName = personaName;
            var url = `https://megamitensei.fandom.com/wiki/${name}`;
            var img = new Attachment(`./personadata/p3/${fileName}.png`, "persona.png");
        }
        if(personaName === "pallas_athena"){
            var name = "Pallas Athena";
            var fileName = personaName;
            var url = `https://megamitensei.fandom.com/wiki/Pallas_Athena`;
            var img = new Attachment(`./personadata/p3/${fileName}.png`, "persona.png");
        }
        if(personaName === "ara_mitama"){
            var name = "Ara Mitama";
            var fileName = personaName;
            var url = `https://megamitensei.fandom.com/wiki/Ara_Mitama`;
            var img = new Attachment(`./personadata/p3/${fileName}.png`, "persona.png");
        }
        if(personaName === "zouchouten"){
            var name = personaName.charAt(0).toUpperCase() + personaName.slice(1);
            var fileName = personaName;
            var url = `https://megamitensei.fandom.com/wiki/${name}`;
            var img = new Attachment(`./personadata/p3/${fileName}.png`, "persona.png");
        }
        if(personaName === "ares"){
            var name = personaName.charAt(0).toUpperCase() + personaName.slice(1);
            var fileName = personaName;
            var url = `https://megamitensei.fandom.com/wiki/${name}`;
            var img = new Attachment(`./personadata/p3/${fileName}.png`, "persona.png");
        }
        if(personaName === "oumitsunu"){
            var name = personaName.charAt(0).toUpperCase() + personaName.slice(1);
            var fileName = personaName;
            var url = `https://megamitensei.fandom.com/wiki/${name}`;
            var img = new Attachment(`./personadata/p3/${fileName}.png`, "persona.png");
        }
        if(personaName === "nata_taishi"){
            var name = "Nata Taishi";
            var fileName = personaName;
            var url = `https://megamitensei.fandom.com/wiki/Nezha`;
            var img = new Attachment(`./personadata/p3/${fileName}.png`, "persona.png");
        }
        if(personaName === "koumokuten"){
            var name = personaName.charAt(0).toUpperCase() + personaName.slice(1);
            var fileName = personaName;
            var url = `https://megamitensei.fandom.com/wiki/${name}`;
            var img = new Attachment(`./personadata/p3/${fileName}.png`, "persona.png");
        }
        if(personaName === "thor"){
            var name = personaName.charAt(0).toUpperCase() + personaName.slice(1);
            var fileName = personaName;
            var url = `https://megamitensei.fandom.com/wiki/${name}`;
            var img = new Attachment(`./personadata/p3/${fileName}.png`, "persona.png");
        }
        if(personaName === "thor_/a"){
            var name = "Thor (The Answer)";
            var fileName = "thorAnswer";
            var url = `https://megamitensei.fandom.com/wiki/Thor`;
            var img = new Attachment(`./personadata/p3/${fileName}.png`, "persona.png");
        }


        //justice arcana
        if(personaName === "nemesis"){
            var name = personaName.charAt(0).toUpperCase() + personaName.slice(1);
            var fileName = personaName;
            var url = `https://megamitensei.fandom.com/wiki/${name}`;
            var img = new Attachment(`./personadata/p3/${fileName}.png`, "persona.png");
        }
        if(personaName === "kala_nemi"){
            var name = "Kala Nemi";
            var fileName = personaName;
            var url = `https://megamitensei.fandom.com/wiki/Kala_Nemi`;
            var img = new Attachment(`./personadata/p3/${fileName}.png`, "persona.png");
        }
        if(personaName === "kala_nemi_/a"){
            var name = "Kala Nemi (The Answer)";
            var fileName = kala_nemiAnswer;
            var url = `https://megamitensei.fandom.com/wiki/Kala_Nemi`;
            var img = new Attachment(`./personadata/p3/${fileName}.png`, "persona.png");
        }
        if(personaName === "angel"){
            var name = personaName.charAt(0).toUpperCase() + personaName.slice(1);
            var quote = "\"The comfort of death will come for men and demons alike... by the guidance of the Great Will.\"";
            var fileName = personaName;
            var url = `https://megamitensei.fandom.com/wiki/${name}`;
            var img = new Attachment(`./personadata/p3/${fileName}.png`, "persona.png");
        }
        if(personaName === "archangel"){
            var name = personaName.charAt(0).toUpperCase() + personaName.slice(1);
            var fileName = personaName;
            var url = `https://megamitensei.fandom.com/wiki/${name}`;
            var img = new Attachment(`./personadata/p3/${fileName}.png`, "persona.png");
        }
        if(personaName === "principality"){
            var name = personaName.charAt(0).toUpperCase() + personaName.slice(1);
            var fileName = personaName;
            var url = `https://megamitensei.fandom.com/wiki/${name}`;
            var img = new Attachment(`./personadata/p3/${fileName}.png`, "persona.png");
        }
        if(personaName === "power"){
            var name = personaName.charAt(0).toUpperCase() + personaName.slice(1);
            var quote = "\"I am Power. Let us together tread down the path of strife...\""
            var fileName = personaName;
            var url = `https://megamitensei.fandom.com/wiki/${name}`;
            var img = new Attachment(`./personadata/p3/${fileName}.png`, "persona.png");
        }
        if(personaName === "virtue"){
            var name = personaName.charAt(0).toUpperCase() + personaName.slice(1);
            var fileName = personaName;
            var url = `https://megamitensei.fandom.com/wiki/${name}`;
            var img = new Attachment(`./personadata/p3/${fileName}.png`, "persona.png");
        }
        if(personaName === "dominion"){
            var name = personaName.charAt(0).toUpperCase() + personaName.slice(1);
            var fileName = personaName;
            var url = `https://megamitensei.fandom.com/wiki/${name}`;
            var img = new Attachment(`./personadata/p3/${fileName}.png`, "persona.png");
        }
        if(personaName === "throne"){
            var name = personaName.charAt(0).toUpperCase() + personaName.slice(1);
            var fileName = personaName;
            var url = `https://megamitensei.fandom.com/wiki/${name}`;
            var img = new Attachment(`./personadata/p3/${fileName}.png`, "persona.png");
        }
        if(personaName === "melchizedek"){
            var name = personaName.charAt(0).toUpperCase() + personaName.slice(1);
            var fileName = personaName;
            var url = `https://megamitensei.fandom.com/wiki/${name}`;
            var img = new Attachment(`./personadata/p3/${fileName}.png`, "persona.png");
        }
        if(personaName === "melchizedek_/a"){
            var name = "Melchizedek (The Answer)";
            var fileName = "melchizedekAnswer";
            var url = `https://megamitensei.fandom.com/wiki/Melchizedek`;
            var img = new Attachment(`./personadata/p3/${fileName}.png`, "persona.png");
        }


        //hermit arcana
        if(personaName === "yomotsu_shikome"){
            var name = "Yomotsu Shikome";
            var fileName = personaName;
            var url = `https://megamitensei.fandom.com/wiki/Yomotsu_Shikome`;
            var img = new Attachment(`./personadata/p3/${fileName}.png`, "persona.png");
        }
        if(personaName === "naga"){
            var name = personaName.charAt(0).toUpperCase() + personaName.slice(1);
            var fileName = personaName;
            var url = `https://megamitensei.fandom.com/wiki/${name}`;
            var img = new Attachment(`./personadata/p3/${fileName}.png`, "persona.png");
        }
        if(personaName === "lamia"){
            var name = personaName.charAt(0).toUpperCase() + personaName.slice(1);
            var fileName = personaName;
            var url = `https://megamitensei.fandom.com/wiki/${name}`;
            var img = new Attachment(`./personadata/p3/${fileName}.png`, "persona.png");
        }
        if(personaName === "mothman"){
            var name = "Yomotsu Shikome";
            var fileName = personaName;
            var url = `https://megamitensei.fandom.com/wiki/${name}`;
            var img = new Attachment(`./personadata/p3/${fileName}.png`, "persona.png");
        }
        if(personaName === "taraka"){
            var name = personaName.charAt(0).toUpperCase() + personaName.slice(1);
            var fileName = personaName;
            var url = `https://megamitensei.fandom.com/wiki/${name}`;
            var img = new Attachment(`./personadata/p3/${fileName}.png`, "persona.png");
        }
        if(personaName === "kurama_tengu"){
            var name = "Kurama Tengu";
            var fileName = personaName;
            var url = `https://megamitensei.fandom.com/wiki/Kurama_Tengu`;
            var img = new Attachment(`./personadata/p3/${fileName}.png`, "persona.png");
        }
        if(personaName === "nebiros"){
            var name = personaName.charAt(0).toUpperCase() + personaName.slice(1);
            var fileName = personaName;
            var url = `https://megamitensei.fandom.com/wiki/${name}`;
            var img = new Attachment(`./personadata/p3/${fileName}.png`, "persona.png");
        }
        if(personaName === "kumbhanda"){
            var name = personaName.charAt(0).toUpperCase() + personaName.slice(1);
            var fileName = personaName;
            var url = `https://megamitensei.fandom.com/wiki/${name}`;
            var img = new Attachment(`./personadata/p3/${fileName}.png`, "persona.png");
        }
        if(personaName === "arahabaki"){
            var name = personaName.charAt(0).toUpperCase() + personaName.slice(1);
            var fileName = personaName;
            var url = `https://megamitensei.fandom.com/wiki/${name}`;
            var img = new Attachment(`./personadata/p3/${fileName}.png`, "persona.png");
        }


        //fortune arcana
        if(personaName === "fortuna"){
            var name = personaName.charAt(0).toUpperCase() + personaName.slice(1);
            var fileName = personaName;
            var url = `https://megamitensei.fandom.com/wiki/${name}`;
            var img = new Attachment(`./personadata/p3/${fileName}.png`, "persona.png");
        }
        if(personaName === "empusa"){
            var name = personaName.charAt(0).toUpperCase() + personaName.slice(1);
            var fileName = personaName;
            var url = `https://megamitensei.fandom.com/wiki/${name}`;
            var img = new Attachment(`./personadata/p3/${fileName}.png`, "persona.png");
        }
        if(personaName === "kusi_mitama"){
            var name = "Kusi Mitama";
            var fileName = personaName;
            var url = `https://megamitensei.fandom.com/wiki/Kusi_Mitama`;
            var img = new Attachment(`./personadata/p3/${fileName}.png`, "persona.png");
        }
        if(personaName === "clotho"){
            var name = personaName.charAt(0).toUpperCase() + personaName.slice(1);
            var fileName = personaName;
            var url = `https://megamitensei.fandom.com/wiki/${name}`;
            var img = new Attachment(`./personadata/p3/${fileName}.png`, "persona.png");
        }
        if(personaName === "lachesis"){
            var name = personaName.charAt(0).toUpperCase() + personaName.slice(1);
            var fileName = personaName;
            var url = `https://megamitensei.fandom.com/wiki/${name}`;
            var img = new Attachment(`./personadata/p3/${fileName}.png`, "persona.png");
        }
        if(personaName === "atropos"){
            var name = personaName.charAt(0).toUpperCase() + personaName.slice(1);
            var fileName = personaName;
            var url = `https://megamitensei.fandom.com/wiki/${name}`;
            var img = new Attachment(`./personadata/p3/${fileName}.png`, "persona.png");
        }
        if(personaName === "norn"){
            var name = personaName.charAt(0).toUpperCase() + personaName.slice(1);
            var quote = "\"I am Norn. The Keeper of Fate... Destiny's guide...\"";
            var fileName = personaName;
            var url = `https://megamitensei.fandom.com/wiki/${name}`;
            var img = new Attachment(`./personadata/p3/${fileName}.png`, "persona.png");
        }


        //strength arcana
        if(personaName === "cerberus"){
            var name = personaName.charAt(0).toUpperCase() + personaName.slice(1);
            var fileName = personaName;
            var url = `https://megamitensei.fandom.com/wiki/${name}`;
            var img = new Attachment(`./personadata/p3/${fileName}.png`, "persona.png");
        }
        if(personaName === "cerberus_/a"){
            var name = "Cerberus (The Answer)";
            var fileName = "cerberusAnswer";
            var url = `https://megamitensei.fandom.com/wiki/Cerberus`;
            var img = new Attachment(`./personadata/p3/${fileName}.png`, "persona.png");
        }
        if(personaName === "valkyrie"){
            var name = personaName.charAt(0).toUpperCase() + personaName.slice(1);
            var fileName = personaName;
            var url = `https://megamitensei.fandom.com/wiki/${name}`;
            var img = new Attachment(`./personadata/p3/${fileName}.png`, "persona.png");
        }
        if(personaName === "rakshasa"){
            var name = personaName.charAt(0).toUpperCase() + personaName.slice(1);
            var fileName = personaName;
            var url = `https://megamitensei.fandom.com/wiki/${name}`;
            var img = new Attachment(`./personadata/p3/${fileName}.png`, "persona.png");
        }
        if(personaName === "titan"){
            var name = personaName.charAt(0).toUpperCase() + personaName.slice(1);
            var fileName = personaName;
            var url = `https://megamitensei.fandom.com/wiki/${name}`;
            var img = new Attachment(`./personadata/p3/${fileName}.png`, "persona.png");
        }
        if(personaName === "jikokuten"){
            var name = personaName.charAt(0).toUpperCase() + personaName.slice(1);
            var fileName = personaName;
            var url = `https://megamitensei.fandom.com/wiki/${name}`;
            var img = new Attachment(`./personadata/p3/${fileName}.png`, "persona.png");
        }
        if(personaName === "hanuman"){
            var name = personaName.charAt(0).toUpperCase() + personaName.slice(1);
            var fileName = personaName;
            var url = `https://megamitensei.fandom.com/wiki/${name}`;
            var img = new Attachment(`./personadata/p3/${fileName}.png`, "persona.png");
        }
        if(personaName === "narasimha"){
            var name = personaName.charAt(0).toUpperCase() + personaName.slice(1);
            var fileName = personaName;
            var url = `https://megamitensei.fandom.com/wiki/${name}`;
            var img = new Attachment(`./personadata/p3/${fileName}.png`, "persona.png");
        }
        if(personaName === "kali"){
            var name = personaName.charAt(0).toUpperCase() + personaName.slice(1);
            var fileName = personaName;
            var url = `https://megamitensei.fandom.com/wiki/${name}`;
            var img = new Attachment(`./personadata/p3/${fileName}.png`, "persona.png");
        }
        if(personaName === "siegfried"){
            var name = personaName.charAt(0).toUpperCase() + personaName.slice(1);
            var fileName = personaName;
            var url = `https://megamitensei.fandom.com/wiki/${name}`;
            var img = new Attachment(`./personadata/p3/${fileName}.png`, "persona.png");
        }
        if(personaName === "siegfried_/a"){
            var name = "Siegfried (The Answer)";
            var fileName = "siegfriedAnswer";
            var url = `https://megamitensei.fandom.com/wiki/Siegfried`;
            var img = new Attachment(`./personadata/p3/${fileName}.png`, "persona.png");
        }


        //hanged man arcana
        if(personaName === "inugami"){
            var name = personaName.charAt(0).toUpperCase() + personaName.slice(1);
            var fileName = personaName;
            var url = `https://megamitensei.fandom.com/wiki/${name}`;
            var img = new Attachment(`./personadata/p3/${fileName}.png`, "persona.png");
        }
        if(personaName === "take-minakata"){
            var name = personaName.charAt(0).toUpperCase() + personaName.slice(1);
            var quote = "\"Man, what're you going on about? I've been making my own way on muscle alone since I was born. Talk is cheap. So c'mon, man, let's get to comparin' our strength! Both of my arms might be gone, but I ain't sunk so low that I'd let a human get the best of me!\"";
            var fileName = personaName;
            var url = `https://megamitensei.fandom.com/wiki/${name}`;
            var img = new Attachment(`./personadata/p3/${fileName}.png`, "persona.png");
        }
        if(personaName === "orthus"){
            var name = personaName.charAt(0).toUpperCase() + personaName.slice(1);
            var fileName = personaName;
            var url = `https://megamitensei.fandom.com/wiki/${name}`;
            var img = new Attachment(`./personadata/p3/${fileName}.png`, "persona.png");
        }
        if(personaName === "vasuki"){
            var name = personaName.charAt(0).toUpperCase() + personaName.slice(1);
            var fileName = personaName;
            var url = `https://megamitensei.fandom.com/wiki/${name}`;
            var img = new Attachment(`./personadata/p3/${fileName}.png`, "persona.png");
        }
        if(personaName === "ubelluris"){
            var name = personaName.charAt(0).toUpperCase() + personaName.slice(1);
            var fileName = personaName;
            var url = `https://megamitensei.fandom.com/wiki/${name}`;
            var img = new Attachment(`./personadata/p3/${fileName}.png`, "persona.png");
        }
        if(personaName === "hecatoncheires"){
            var name = personaName.charAt(0).toUpperCase() + personaName.slice(1);
            var fileName = personaName;
            var url = `https://megamitensei.fandom.com/wiki/${name}`;
            var img = new Attachment(`./personadata/p3/${fileName}.png`, "persona.png");
        }
        if(personaName === "hell_biker"){
            var name = "Hell Biker";
            var quote = "\"It's Hell Biker... Don't get cocky. We're going from one side of Hell to the other, you know...\"";
            var fileName = personaName;
            var url = `https://megamitensei.fandom.com/wiki/Hell_Biker`;
            var img = new Attachment(`./personadata/p3/${fileName}.png`, "persona.png");
        }
        if(personaName === "attis"){
            var name = personaName.charAt(0).toUpperCase() + personaName.slice(1);
            var quote = "\"I am Attis... Our bodies may be different, but I am you... I put myself in your care.\"";
            var fileName = personaName;
            var url = `https://megamitensei.fandom.com/wiki/${name}`;
            var img = new Attachment(`./personadata/p3/${fileName}.png`, "persona.png");
        }
        if(personaName === "attis_/a"){
            var name = "Attis (The Answer)";
            var quote = "\"I am Attis... Our bodies may be different, but I am you... I put myself in your care.\"";
            var fileName = "attisAnswer";
            var url = `https://megamitensei.fandom.com/wiki/Attis`;
            var img = new Attachment(`./personadata/p3/${fileName}.png`, "persona.png");
        }


        //death arcana
        if(personaName === "ghoul"){
            var name = personaName.charAt(0).toUpperCase() + personaName.slice(1);
            var fileName = personaName;
            var url = `https://megamitensei.fandom.com/wiki/${name}`;
            var img = new Attachment(`./personadata/p3/${fileName}.png`, "persona.png");
        }
        if(personaName === "pale_rider"){
            var name = "Pale Rider";
            var quote = "\"A world heading towards death, and a world steeped in death. How canst thy life shine so brilliantly amidst it? Show me... thou blue knight filled to th'brim with death...!\"";
            var fileName = personaName;
            var url = `https://megamitensei.fandom.com/wiki/Pale_Rider`;
            var img = new Attachment(`./personadata/p3/${fileName}.png`, "persona.png");
        }
        if(personaName === "loa"){
            var name = personaName.charAt(0).toUpperCase() + personaName.slice(1);
            var fileName = personaName;
            var url = `https://megamitensei.fandom.com/wiki/${name}`;
            var img = new Attachment(`./personadata/p3/${fileName}.png`, "persona.png");
        }
        if(personaName === "samael"){
            var name = personaName.charAt(0).toUpperCase() + personaName.slice(1);
            var quote = "\"I am the fearsome king, the evil conscience of God, the serpent of a red Eden... I have many names, many theories bandied about me, and no doubt much awe attached to my name... Thou still darest challenge me...?\"";
            var fileName = personaName;
            var url = `https://megamitensei.fandom.com/wiki/${name}`;
            var img = new Attachment(`./personadata/p3/${fileName}.png`, "persona.png");
        }
        if(personaName === "mot"){
            var name = personaName.charAt(0).toUpperCase() + personaName.slice(1);
            var quote = "\"What wilt thou gain by fighting me god of death and meaninglessness? Doth more meaninglessness await a meaningless battle, or will it be answered by creation? Regardless, I shall destroy thee. On this stage where Death playeth its music, I shall scatter the embers of thy life.\"";
            var fileName = personaName;
            var url = `https://megamitensei.fandom.com/wiki/${name}`;
            var img = new Attachment(`./personadata/p3/${fileName}.png`, "persona.png");
        }
        if(personaName === "alice"){
            var name = personaName.charAt(0).toUpperCase() + personaName.slice(1);
            var quote = "\"I want you to do just one more thing for me... Would you die for me please...?\"";
            var fileName = personaName;
            var url = `https://megamitensei.fandom.com/wiki/${name}`;
            var img = new Attachment(`./personadata/p3/${fileName}.png`, "persona.png");
        }
        if(personaName === "thanatos"){
            var name = personaName.charAt(0).toUpperCase() + personaName.slice(1);
            var fileName = personaName;
            var url = `https://megamitensei.fandom.com/wiki/${name}`;
            var img = new Attachment(`./personadata/p3/${fileName}.png`, "persona.png");
        }
        if(personaName === "thanatos_/a"){
            var name = "Thanatos (The Answer)";
            var fileName = "thanatosAnswer";
            var url = `https://megamitensei.fandom.com/wiki/Thanatos`;
            var img = new Attachment(`./personadata/p3/${fileName}.png`, "persona.png");
        }


        //temperance arcana
        if(personaName === "nigi_mitama"){
            var name = "Nigi Mitama";
            var fileName = personaName;
            var url = `https://megamitensei.fandom.com/wiki/Nigi_Mitama`;
            var img = new Attachment(`./personadata/p3/${fileName}.png`, "persona.png");
        }
        if(personaName === "mithra"){
            var name = personaName.charAt(0).toUpperCase() + personaName.slice(1);
            var quote = "\"The sin of man is forgetting the gods and losing harmony with the land and rivers! Humans are not fit to receive the blessing of the gods!\"";
            var fileName = personaName;
            var url = `https://megamitensei.fandom.com/wiki/${name}`;
            var img = new Attachment(`./personadata/p3/${fileName}.png`, "persona.png");
        }
        if(personaName === "genbu"){
            var name = personaName.charAt(0).toUpperCase() + personaName.slice(1);
            var fileName = personaName;
            var url = `https://megamitensei.fandom.com/wiki/${name}`;
            var img = new Attachment(`./personadata/p3/${fileName}.png`, "persona.png");
        }
        if(personaName === "seiryu"){
            var name = personaName.charAt(0).toUpperCase() + personaName.slice(1);
            var fileName = personaName;
            var url = `https://megamitensei.fandom.com/wiki/${name}`;
            var img = new Attachment(`./personadata/p3/${fileName}.png`, "persona.png");
        }
        if(personaName === "okuninushi"){
            var name = personaName.charAt(0).toUpperCase() + personaName.slice(1);
            var fileName = personaName;
            var url = `https://megamitensei.fandom.com/wiki/${name}`;
            var img = new Attachment(`./personadata/p3/${fileName}.png`, "persona.png");
        }
        if(personaName === "suzaku"){
            var name = personaName.charAt(0).toUpperCase() + personaName.slice(1);
            var fileName = personaName;
            var url = `https://megamitensei.fandom.com/wiki/${name}`;
            var img = new Attachment(`./personadata/p3/${fileName}.png`, "persona.png");
        }
        if(personaName === "byakko"){
            var name = personaName.charAt(0).toUpperCase() + personaName.slice(1);
            var fileName = personaName;
            var url = `https://megamitensei.fandom.com/wiki/${name}`;
            var img = new Attachment(`./personadata/p3/${fileName}.png`, "persona.png");
        }
        if(personaName === "yurlungur"){
            var name = personaName.charAt(0).toUpperCase() + personaName.slice(1);
            var fileName = personaName;
            var url = `https://megamitensei.fandom.com/wiki/${name}`;
            var img = new Attachment(`./personadata/p3/${fileName}.png`, "persona.png");
        }


        //devil arcana
        if(personaName === "lilim"){
            var name = personaName.charAt(0).toUpperCase() + personaName.slice(1);
            var fileName = personaName;
            var url = `https://megamitensei.fandom.com/wiki/${name}`;
            var img = new Attachment(`./personadata/p3/${fileName}.png`, "persona.png");
        }
        if(personaName === "mokoi"){
            var name = personaName.charAt(0).toUpperCase() + personaName.slice(1);
            var fileName = personaName;
            var url = `https://megamitensei.fandom.com/wiki/${name}`;
            var img = new Attachment(`./personadata/p3/${fileName}.png`, "persona.png");
        }
        if(personaName === "vetala"){
            var name = personaName.charAt(0).toUpperCase() + personaName.slice(1);
            var fileName = personaName;
            var url = `https://megamitensei.fandom.com/wiki/${name}`;
            var img = new Attachment(`./personadata/p3/${fileName}.png`, "persona.png");
        }
        if(personaName === "incubus"){
            var name = personaName.charAt(0).toUpperCase() + personaName.slice(1);
            var fileName = personaName;
            var url = `https://megamitensei.fandom.com/wiki/${name}`;
            var img = new Attachment(`./personadata/p3/${fileName}.png`, "persona.png");
        }
        if(personaName === "pazuzu"){
            var name = personaName.charAt(0).toUpperCase() + personaName.slice(1);
            var fileName = personaName;
            var url = `https://megamitensei.fandom.com/wiki/${name}`;
            var img = new Attachment(`./personadata/p3/${fileName}.png`, "persona.png");
        }
        if(personaName === "lilith"){
            var name = personaName.charAt(0).toUpperCase() + personaName.slice(1);
            var fileName = personaName;
            var url = `https://megamitensei.fandom.com/wiki/${name}`;
            var img = new Attachment(`./personadata/p3/${fileName}.png`, "persona.png");
        }
        if(personaName === "abaddon"){
            var name = personaName.charAt(0).toUpperCase() + personaName.slice(1);
            var fileName = personaName;
            var url = `https://megamitensei.fandom.com/wiki/${name}`;
            var img = new Attachment(`./personadata/p3/${fileName}.png`, "persona.png");
        }
        if(personaName === "beelzebub"){
            var name = personaName.charAt(0).toUpperCase() + personaName.slice(1);
            var quote = "\"The army of chaos will rise at Lord Lucifer's command. To bring about that glorious event, I would gladly assist you. But, you must first demonstrate that you are worthy of my help.\"";
            var fileName = personaName;
            var url = `https://megamitensei.fandom.com/wiki/${name}`;
            var img = new Attachment(`./personadata/p3/${fileName}.png`, "persona.png");
        }


        //tower arcana
        if(personaName === "eligor"){
            var name = personaName.charAt(0).toUpperCase() + personaName.slice(1);
            var fileName = personaName;
            var url = `https://megamitensei.fandom.com/wiki/${name}`;
            var img = new Attachment(`./personadata/p3/${fileName}.png`, "persona.png");
        }
        if(personaName === "cu_chulainn"){
            var name = "Cu Chulainn";
            var fileName = personaName;
            var url = `https://megamitensei.fandom.com/wiki/Cu_Chulainn`;
            var img = new Attachment(`./personadata/p3/${fileName}.png`, "persona.png");
        }
        if(personaName === "bishamonten"){
            var name = personaName.charAt(0).toUpperCase() + personaName.slice(1);
            var fileName = personaName;
            var url = `https://megamitensei.fandom.com/wiki/${name}`;
            var img = new Attachment(`./personadata/p3/${fileName}.png`, "persona.png");
        }
        if(personaName === "seiten_taisei"){
            var name = "Seiten Taisei";
            var fileName = personaName;
            var url = `https://megamitensei.fandom.com/wiki/Seiten_Taisei`;
            var img = new Attachment(`./personadata/p3/${fileName}.png`, "persona.png");
        }
        if(personaName === "masakado"){
            var name = personaName.charAt(0).toUpperCase() + personaName.slice(1);
            var fileName = personaName;
            var url = `https://megamitensei.fandom.com/wiki/${name}`;
            var img = new Attachment(`./personadata/p3/${fileName}.png`, "persona.png");
        }
        if(personaName === "mara"){
            var name = personaName.charAt(0).toUpperCase() + personaName.slice(1);
            var quote = "\"Mwahahahaha! Welcome to Mara's den! You may think you can defeat me, but I'm clearly the bigger man. Gwahahahaha! Now, then... Why don't we get this party started, hm? Ahahahahahaha!\"";
            var fileName = personaName;
            var url = `https://megamitensei.fandom.com/wiki/${name}`;
            var img = new Attachment(`./personadata/p3/${fileName}.png`, "persona.png");
        }
        if(personaName === "shiva"){
            var name = personaName.charAt(0).toUpperCase() + personaName.slice(1);
            var quote = "\"I am Nataraja, the destroyer of all. I shall ascertain if you are worthy to face Brahman. If you cannot defeat me, then your world does not deserve to exist.\"";
            var fileName = personaName;
            var url = `https://megamitensei.fandom.com/wiki/${name}`;
            var img = new Attachment(`./personadata/p3/${fileName}.png`, "persona.png");
        }
        if(personaName === "chi_you"){
            var name = "Chi You";
            var fileName = personaName;
            var url = `https://megamitensei.fandom.com/wiki/Chi_You`;
            var img = new Attachment(`./personadata/p3/${fileName}.png`, "persona.png");
        }


        //star arcana
        if(personaName === "neko_shogun"){
            var name = "Neko Shogun";
            var quote = "\"A prophetic Taoist god, originally known as Mao Shogun. Due to a linguistic error involving the Chinese word for cat, his name was changed to Neko Shogun.\"";
            var fileName = personaName;
            var url = `https://megamitensei.fandom.com/wiki/Neko_Shogun`;
            var img = new Attachment(`./personadata/p3/${fileName}.png`, "persona.png");
        }
        if(personaName === "setanta"){
            var name = personaName.charAt(0).toUpperCase() + personaName.slice(1);
            var fileName = personaName;
            var url = `https://megamitensei.fandom.com/wiki/${name}`;
            var img = new Attachment(`./personadata/p3/${fileName}.png`, "persona.png");
        }
        if(personaName === "nandi"){
            var name = personaName.charAt(0).toUpperCase() + personaName.slice(1);
            var fileName = personaName;
            var url = `https://megamitensei.fandom.com/wiki/${name}`;
            var img = new Attachment(`./personadata/p3/${fileName}.png`, "persona.png");
        }
        if(personaName === "kaiwan"){
            var name = personaName.charAt(0).toUpperCase() + personaName.slice(1);
            var fileName = personaName;
            var url = `https://megamitensei.fandom.com/wiki/${name}`;
            var img = new Attachment(`./personadata/p3/${fileName}.png`, "persona.png");
        }
        if(personaName === "ganesha"){
            var name = personaName.charAt(0).toUpperCase() + personaName.slice(1);
            var fileName = personaName;
            var url = `https://megamitensei.fandom.com/wiki/${name}`;
            var img = new Attachment(`./personadata/p3/${fileName}.png`, "persona.png");
        }
        if(personaName === "garuda"){
            var name = personaName.charAt(0).toUpperCase() + personaName.slice(1);
            var quote = "\"I am the wings of the Lord... the highest in the bright sky, whose heights no human could attain. Shallow, foolish humans, who crawl across the face of the Earth and consume all they touch... How have you come to think that I might deign to speak with you? Grovel at my feet instead, as is only natural.\"";
            var fileName = personaName;
            var url = `https://megamitensei.fandom.com/wiki/${name}`;
            var img = new Attachment(`./personadata/p3/${fileName}.png`, "persona.png");
        }
        if(personaName === "kartikeya"){
            var name = personaName.charAt(0).toUpperCase() + personaName.slice(1);
            var quote = "\"So mother sent you here... I thought she might have. Still, I don't want to go back! Never! Why...? ...Because I'm scared. Yeah, that's right. I'm scared of my mother. Well, Mother's very kind, but... It's just that... She's just way too out there! Like she doesn't belong in this Universe! I used to be six kids! But Mother hugged us all together, and we got merged into one person. Who has that kind of power!? That's just not right! Look... Once, she accidently cut off somebody's head, and then she just replaced it with an elephant's head. My entire family is messed up! \"";
            var fileName = personaName;
            var url = `https://megamitensei.fandom.com/wiki/${name}`;
            var img = new Attachment(`./personadata/p3/${fileName}.png`, "persona.png");
        }
        if(personaName === "saturnus"){
            var name = personaName.charAt(0).toUpperCase() + personaName.slice(1);
            var fileName = personaName;
            var url = `https://megamitensei.fandom.com/wiki/${name}`;
            var img = new Attachment(`./personadata/p3/${fileName}.png`, "persona.png");
        }
        if(personaName === "helel"){
            var name = personaName.charAt(0).toUpperCase() + personaName.slice(1);
            var quote = "\"Can't you see that death lies in wait on your path, ready to consume all hope...?\"";
            var fileName = personaName;
            var url = `https://megamitensei.fandom.com/wiki/${name}`;
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
            if(quote){
                embed.setDescription(`${quote} \n[Report a data error!](${config.servers.discordinvite})`)
            } else {
                embed.setDescription(`[Report a data error!](${config.servers.discordinvite})`)
            }

        message.channel.send(embed);
    }
}