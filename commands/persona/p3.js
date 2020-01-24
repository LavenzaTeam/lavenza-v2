module.exports = {
    config: {
        name: "p3",
        aliases: [],
        description: "A command that tries to condense all of the other Persona 3 commands into one command.",
        usage: "<persona/shadow> (/a) (/f) (/p)",
        category: "persona"
    },
    run: async (client, message, args) => {
        let variable = args.join("_").toLowerCase();

        if (variable === "orpheus") {
            var persona = variable;
            module.exports = { persona: persona };
        }
    }
}