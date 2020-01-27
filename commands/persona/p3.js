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
        switch (variable) {
            //fool arcana
            case "orpheus":
                var persona = variable;
                p3pcommand.run(client, message, args, persona);
                break;
                return;

        }

        //p3shadows command file
        switch (variable) {
            //maya shadows
            case "":
                var shadow = variable;
                p3scommand.run(client, message, args, shadow);
                break;
                return;

        }

        //p3fesfusion command file
        switch (variable) {
            //fool arcana
            case "orpheus_/f":
                var persona = variable;
                p3ffcommand.run(client, message, args, persona);
                break;
                return;
            case "slime_/f":
                var persona = variable;
                p3ffcommand.run(client, message, args, persona);
                break;
                return;

        }

        //p3pfusion command file
        switch (variable) {
            //fool arcana
            case "":
                var persona = variable;
                p3pfcommand.run(client, message, args, persona);
                break;
                return;

        }
    }
}