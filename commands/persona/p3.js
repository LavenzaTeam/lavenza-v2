module.exports = {
    config: {
        name: "p3",
        aliases: [],
        description: "A command that tries to condense all of the other Persona 3 commands into one command.",
        usage: "<persona/shadow> (/a) (/f) (/p)",
        category: "persona"
    },
    run: async (client, message, args) => {
        let p3pcommand = client.commands.get("p3personas");
        let p3scommand = client.commands.get("p3shadows");
        let p3ffcommand = client.commands.get("p3fesfusion");
        let p3pfcommand = client.commands.get("p3pfusion");
        let variable = args.join("_").toLowerCase();

        //p3personas command file
        //fool arcana
        if (variable === "orpheus") {
            var persona = variable;
            p3pcommand.run(client, message, args, persona);
            return;
        }

        //p3shadows command file
        //maya shadows
        if (variable === "") {
            var shadow = variable;
            p3scommand.run(client, message, args, shadow);
            return;
        }


        //p3fesfusion command file
        //fool arcana
        if (variable === "orpheus_/f") {
            var persona = variable;
            p3ffcommand.run(client, message, args, persona);
            return;
        }


        //p3pfusion command file
        //fool arcana
        if (variable === "") {
            var persona = variable;
            p3pfcommand.run(client, message, args, persona);
            return;
        }
    }
}