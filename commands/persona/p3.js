const { RichEmbed } = require("discord.js");
const persona = require("../../persona-stats/p3personas.json");

module.exports = {
    config: {
        name: "p3",
        aliases: ["persona3"],
        description: "Anything related to Persona 3 can most likely be done in this command!",
        usage: "<persona_name>",
        category: "persona"
    },
    run: async (client, message, args) => {
        let personaName = args.join(" ").toLowerCase();
        if(!personaName) return message.reply("Please specify a Persona to search!");

        if(personaName === "orpheus") var query = persona.orpheus;
        if(personaName === "slime") var query = persona.slime;
        if(personaName === "legion") var query = persona.legion;
        if(personaName === "black frost") var query = persona.blackFrost;
        if(personaName === "ose") var query = persona.ose;
        if(personaName === "decarabia") var query = persona.decarabia;
        if(personaName === "loki") var query = persona.loki;
        if(personaName === "susano-o") var query = persona.susanoO;
        if(personaName === "orpheus telos") var query = persona.orpheusTelos;
        if(personaName === "hermes") var query = persona.hermes;
        if(personaName === "trismegistus") var query = persona.trismegistus;
        if(personaName === "nekomata") var query = persona.neokmata;
        if(personaName === "jack frost") var query = persona.jackFrost;
        if(personaName === "pyro jack") var query = persona.pyroJack;
        if(personaName === "hua po") var query = persona.huaPo;
        if(personaName === "sati") var query = persona.sati;
        if(personaName === "orobas") var query = persona.orobas;
        if(personaName === "rangda") var query = persona.rangda;
        if(personaName === "surt") var query = persona.surt;

        if(!query) return message.reply("You have entered an invalid Persona to search!");

        let name = query.name;
        let url = query.url;
        let iconurl = query.iconurl;
        let arcana = query.arcana;
        let skillcard = query.skillcard;
        let level = query.level;
        let inherit = query.weaknesses.inherit;
        let reflects = query.weaknesses.reflects;
        let absorbs = query.weaknesses.absorbs;
        let blocks = query.weaknesses.blocks;
        let resists = query.weaknesses.resists;
        let weak = query.weaknesses.weak;
        let strength = query.baseStats.strength;
        let magic = query.baseStats.magic;
        let endurance = query.baseStats.endurance;
        let agility = query.baseStats.agility;
        let luck = query.baseStats.luck;

        if(query.fusionSpells.fusionSkill) var fusionSkill = query.fusionSpells.fusionSkill;
        if(query.skills.skill1) var skill1 = query.skills.skill1;
        if(query.skills.skill2) var skill2 = query.skills.skill2;
        if(query.skills.skill3) var skill3 = query.skills.skill3;
        if(query.skills.skill4) var skill4 = query.skills.skill4;
        if(query.skills.skill5) var skill5 = query.skills.skill5;
        if(query.skills.skill6) var skill6 = query.skills.skill6;
        if(query.skills.skill7) var skill7 = query.skills.skill7;
        if(query.skills.skill8) var skill8 = query.skills.skill8;
        if(query.skills.skill9) var skill9 = query.skills.skill9;
        if(query.skills.skill10) var skill10 = query.skills.skill10;
        if(query.skills.skill11) var skill11 = query.skills.skill11;
        if(query.skills.skill12) var skill12 = query.skills.skill12;
        if(query.skills.skill13) var skill13 = query.skills.skill13;
        if(query.skills.skill14) var skill14 = query.skills.skill14;
        if(query.skills.skill15) var skill15 = query.skills.skill15;
        if(query.skills.skill16) var skill16 = query.skills.skill16;
        if(query.skills.skill17) var skill17 = query.skills.skill17;
        if(query.skills.skill18) var skill18 = query.skills.skill18;
        if(query.skills.skill19) var skill19 = query.skills.skill19;
        if(query.skills.skill20) var skill20 = query.skills.skill20;

        let personaEmbed = new RichEmbed()
        .setTitle(name)
        .setURL(url)
        .setThumbnail(iconurl)
        .setColor("#009acd")
        .addField("Arcana", arcana, true)
        .addField("Skill Card", skillcard, true)
        .addField("Level", level, true)
        .addBlankField(true)
        .addField("Inherits", inherit)
        .addField("Reflects", reflects)
        .addField("Absorbs", absorbs)
        .addField("Blocks", blocks)
        .addField("Resists", resists)
        .addField("Weak", weak)
        .addBlankField(true)
        .addField("Strength", strength)
        .addField("Magic", magic)
        .addField("Endurance", endurance)
        .addField("Agility", agility)
        .addField("Luck", luck)
        .addBlankField(true)
        if(fusionSkill) {
            personaEmbed.addField("Spell Name", fusionSkill.name)
            personaEmbed.addField("Spell Cost", fusionSkill.cost, true)
            personaEmbed.addField("Spell Effect", fusionSkill.effect, true)
            personaEmbed.addField("Spell Prerequisites", fusionSkill.preRequisite, true)
        } else {
            personaEmbed.addField("Not Found", "This Persona doesn't appear to have a Fusion Spell!")
        }

        if(!skill1){
            await message.channel.send(personaEmbed);
            return;
        }



        let personaSkillEmbed1to5 = new RichEmbed()
        .setTitle("List of skills")
        .setColor("#009acd")
        .setDescription("A list of skills that this Persona will get without inheritance!")
        if(skill1){
            personaSkillEmbed1to5.addField("Skill Name", skill1.name)
            personaSkillEmbed1to5.addField("Skill Cost", skill1.cost, true)
            personaSkillEmbed1to5.addField("Skill Effect", skill1.effect, true)
            personaSkillEmbed1to5.addField("Skill Level", skill1.level, true)
        }
        if(skill2){
            personaSkillEmbed1to5.addBlankField(true)
            personaSkillEmbed1to5.addField("Skill Name", skill2.name)
            personaSkillEmbed1to5.addField("Skill Cost", skill2.cost, true)
            personaSkillEmbed1to5.addField("Skill Effect", skill2.effect, true)
            personaSkillEmbed1to5.addField("Skill Level", skill2.level, true)
        }
        if(skill3){
            personaSkillEmbed1to5.addBlankField(true)
            personaSkillEmbed1to5.addField("Skill Name", skill3.name)
            personaSkillEmbed1to5.addField("Skill Cost", skill3.cost, true)
            personaSkillEmbed1to5.addField("Skill Effect", skill3.effect, true)
            personaSkillEmbed1to5.addField("Skill Level", skill3.level, true)
        }
        if(skill4){
            personaSkillEmbed1to5.addBlankField(true)
            personaSkillEmbed1to5.addField("Skill Name", skill4.name)
            personaSkillEmbed1to5.addField("Skill Cost", skill4.cost, true)
            personaSkillEmbed1to5.addField("Skill Effect", skill4.effect, true)
            personaSkillEmbed1to5.addField("Skill Level", skill4.level, true)
        }
        if(skill5){
            personaSkillEmbed1to5.addBlankField(true)
            personaSkillEmbed1to5.addField("Skill Name", skill5.name)
            personaSkillEmbed1to5.addField("Skill Cost", skill5.cost, true)
            personaSkillEmbed1to5.addField("Skill Effect", skill5.effect, true)
            personaSkillEmbed1to5.addField("Skill Level", skill5.level, true)
        }
        if(!skill6){
            personaSkillEmbed1to5.setFooter("Information Gathered from the Megami Tensei Wiki")
            personaSkillEmbed1to5.setTimestamp()
            await message.channel.send(personaEmbed);
            await message.channel.send(personaSkillEmbed1to5);
            return;
        }



        let personaSkillEmbed6to10 = new RichEmbed()
        .setColor("#009acd")
        if(skill6){
            personaSkillEmbed6to10.addField("Skill Name", skill6.name)
            personaSkillEmbed6to10.addField("Skill Cost", skill6.cost, true)
            personaSkillEmbed6to10.addField("Skill Effect", skill6.effect, true)
            personaSkillEmbed6to10.addField("Skill Level", skill6.level, true)
        }
        if(skill7){
            personaSkillEmbed6to10.addBlankField(true)
            personaSkillEmbed6to10.addField("Skill Name", skill7.name)
            personaSkillEmbed6to10.addField("Skill Cost", skill7.cost, true)
            personaSkillEmbed6to10.addField("Skill Effect", skill7.effect, true)
            personaSkillEmbed6to10.addField("Skill Level", skill7.level, true)
        }
        if(skill8){
            personaSkillEmbed6to10.addBlankField(true)
            personaSkillEmbed6to10.addField("Skill Name", skill8.name)
            personaSkillEmbed6to10.addField("Skill Cost", skill8.cost, true)
            personaSkillEmbed6to10.addField("Skill Effect", skill8.effect, true)
            personaSkillEmbed6to10.addField("Skill Level", skill8.level, true)
        }
        if(skill9){
            personaSkillEmbed6to10.addBlankField(true)
            personaSkillEmbed6to10.addField("Skill Name", skill9.name)
            personaSkillEmbed6to10.addField("Skill Cost", skill9.cost, true)
            personaSkillEmbed6to10.addField("Skill Effect", skill9.effect, true)
            personaSkillEmbed6to10.addField("Skill Level", skill9.level, true)
        }
        if(skill10){
            personaSkillEmbed6to10.addBlankField(true)
            personaSkillEmbed6to10.addField("Skill Name", skill10.name)
            personaSkillEmbed6to10.addField("Skill Cost", skill10.cost, true)
            personaSkillEmbed6to10.addField("Skill Effect", skill10.effect, true)
            personaSkillEmbed6to10.addField("Skill Level", skill10.level, true)
        }

        if(!skill11){
            personaSkillEmbed6to10.setFooter("Information Gathered from the Megami Tensei Wiki")
            personaSkillEmbed6to10.setTimestamp()
            await message.channel.send(personaEmbed);
            await message.channel.send(personaSkillEmbed1to5);
            await message.channel.send(personaSkillEmbed6to10);
            return;
        }



        let personaSkillEmbed11to15 = new RichEmbed()
        if(skill11){
            personaSkillEmbed11to15.addField("Skill Name", skill11.name)
            personaSkillEmbed11to15.addField("Skill Cost", skill11.cost, true)
            personaSkillEmbed11to15.addField("Skill Effect", skill11.effect, true)
            personaSkillEmbed11to15.addField("Skill Level", skill11.level, true)
        }
        if(skill12){
            personaSkillEmbed11to15.addBlankField(true)
            personaSkillEmbed11to15.addField("Skill Name", skill12.name)
            personaSkillEmbed11to15.addField("Skill Cost", skill12.cost, true)
            personaSkillEmbed11to15.addField("Skill Effect", skill12.effect, true)
            personaSkillEmbed11to15.addField("Skill Level", skill12.level, true)
        }
        if(skill13){
            personaSkillEmbed11to15.addBlankField(true)
            personaSkillEmbed11to15.addField("Skill Name", skill13.name)
            personaSkillEmbed11to15.addField("Skill Cost", skill13.cost, true)
            personaSkillEmbed11to15.addField("Skill Effect", skill13.effect, true)
            personaSkillEmbed11to15.addField("Skill Level", skill13.level, true)
        }
        if(skill14){
            personaSkillEmbed11to15.addBlankField(true)
            personaSkillEmbed11to15.addField("Skill Name", skill14.name)
            personaSkillEmbed11to15.addField("Skill Cost", skill14.cost, true)
            personaSkillEmbed11to15.addField("Skill Effect", skill14.effect, true)
            personaSkillEmbed11to15.addField("Skill Level", skill14.level, true)
        }
        if(skill15){
            personaSkillEmbed11to15.addBlankField(true)
            personaSkillEmbed11to15.addField("Skill Name", skill15.name)
            personaSkillEmbed11to15.addField("Skill Cost", skill15.cost, true)
            personaSkillEmbed11to15.addField("Skill Effect", skill15.effect, true)
            personaSkillEmbed11to15.addField("Skill Level", skill15.level, true)
        }

        if(!skill16){
            personaSkillEmbed11to15.setFooter("Information Gathered from the Megami Tensei Wiki")
            personaSkillEmbed11to15.setTimestamp()
            await message.channel.send(personaEmbed);
            await message.channel.send(personaSkillEmbed1to5);
            await message.channel.send(personaSkillEmbed6to10);
            await message.channel.send(personaSkillEmbed11to15);
            return;
        }



        let personaSkillEmbed16to20 = new RichEmbed()
        if(skill16){
            personaSkillEmbed16to20.addField("Skill Name", skill16.name)
            personaSkillEmbed16to20.addField("Skill Cost", skill16.cost, true)
            personaSkillEmbed16to20.addField("Skill Effect", skill16.effect, true)
            personaSkillEmbed16to20.addField("Skill Level", skill16.level, true)
        }
        if(skill17){
            personaSkillEmbed16to20.addBlankField(true)
            personaSkillEmbed16to20.addField("Skill Name", skill17.name)
            personaSkillEmbed16to20.addField("Skill Cost", skill17.cost, true)
            personaSkillEmbed16to20.addField("Skill Effect", skill17.effect, true)
            personaSkillEmbed16to20.addField("Skill Level", skill17.level, true)
        }
        if(skill18){
            personaSkillEmbed16to20.addBlankField(true)
            personaSkillEmbed16to20.addField("Skill Name", skill18.name)
            personaSkillEmbed16to20.addField("Skill Cost", skill18.cost, true)
            personaSkillEmbed16to20.addField("Skill Effect", skill18.effect, true)
            personaSkillEmbed16to20.addField("Skill Level", skill18.level, true)
        }
        if(skill19){
            personaSkillEmbed16to20.addBlankField(true)
            personaSkillEmbed16to20.addField("Skill Name", skill19.name)
            personaSkillEmbed16to20.addField("Skill Cost", skill19.cost, true)
            personaSkillEmbed16to20.addField("Skill Effect", skill19.effect, true)
            personaSkillEmbed16to20.addField("Skill Level", skill19.level, true)
        }
        if(skill20){
            personaSkillEmbed16to20.addBlankField(true)
            personaSkillEmbed16to20.addField("Skill Name", skill20.name)
            personaSkillEmbed16to20.addField("Skill Cost", skill20.cost, true)
            personaSkillEmbed16to20.addField("Skill Effect", skill20.effect, true)
            personaSkillEmbed16to20.addField("Skill Level", skill20.level, true)
        }
        personaSkillEmbed16to20.setFooter("Information Gathered from the Megami Tensei Wiki")
        personaSkillEmbed16to20.setTimestamp()

        await message.channel.send(personaEmbed);
        await message.channel.send(personaSkillEmbed1to5);
        await message.channel.send(personaSkillEmbed6to10);
        await message.channel.send(personaSkillEmbed11to15);
        await message.channel.send(personaSkillEmbed16to20);
        return;
    }
}