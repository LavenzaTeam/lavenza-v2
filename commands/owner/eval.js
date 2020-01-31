const config = require("../../config.json");
const { inspect } = require("util");

module.exports = {
    config: {
        name: "eval",
        aliases: [],
        description: "Evaluates code and performs it directly from discord",
        usage: "<code>",
        category: "owner"
    },
    run: async (client, message, args) => {
        //checks if the authors id is equal to arkanes id
        if(message.author.id !== "208779984276291585") return message.reply("This command is locked to the bot owner only!");
        //joins the arguments together
        let toEval = args.join(" ");
        //executes the code and stores the result in a variable
        let evaluated = inspect(eval(toEval, { depth: 0 }))

        //basic try catch loop, if anything fails under try, it executes catch passing the error through
        try {
            //checks if there is any arguments
            if(toEval){
                //defines the start time
                let hrStart = process.hrtime()
                //declares the difference without setting anything to it
                let hrDiff;
                //sets the variable we just declared to the difference between the start and end time of the message
                hrDiff = process.hrtime(hrStart)
                //sends the output of the code in a code block
                return message.channel.send(`*Executed in ${hrDiff[0] > 0 ? `${hrDiff[0]}s` : ''}${hrDiff[1] / 1000000}ms.*\`\`\`javascript\n${evaluated}\n\`\`\``, { maxLength: 1900 })
            } else {
                //sends a message if there are no arguments provided
                message.reply("Evaluation error: empty args");
            }
        } catch (e) {
            //catches an error and sends the error message to the current channel
            message.reply(`Evaluation error: \`${e.message}\``)
        }
        //stops the code
        return;
    }
}