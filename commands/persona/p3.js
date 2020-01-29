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
        let query = args.join("_").toLowerCase();

        //checks for the "list" argument
        if (query === "list") {
            return message.reply("The list for the `P3` command is currently a Work in Progress! Check back soon!");
        }

        //p3personas command file
        switch (query) {
            //fool arcana
            case "orpheus":
                p3pcommand.run(client, message, args, query);
                break;
        }

        //p3shadows command file
        switch (query) {
            //maya shadows
            case "maya":
                p3scommand.run(client, message, args, query);
                break;
        }

        //p3fesfusion command file
        switch (query) {
            //fool arcana
            case "orpheus_/f":
                p3ffcommand.run(client, message, args, query);
                break;
        }

        //p3pfusion command file
        switch (query) {
            //fool arcana
            case "orpheus_/p":
                p3pfcommand.run(client, message, args, query);
                break;
        }
    }
}