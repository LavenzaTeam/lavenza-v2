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

        //p3personas command file
        if(query === "orpheus") p3pcommand.run(client, message, args, query);

        //p3shadows command file
        if(query === "maya") p3scommand.run(client, message, args, query);

        //p3fesfusion command file
        if(query === "orpheus_/f") p3ffcommand.run(client, message, args, query);

        //p3pfusion command file
        if(query === "orpheus_/p") p3pfcommand.run(client, message, args, query);
    }
}