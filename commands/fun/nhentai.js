module.exports = {
    config: {
        name: "nhentai",
        aliases: [],
        description: "A command the generates a random nhentai link and sends it in chat",
        usage: "",
        category: "fun"
    },
    run: async (client, message, args) => {
        let baseurl = "https://nhentai.net/";
        let sauce = Math.floor(Math.random() * 300000) + 100000;
        message.channel.send("Generating link...").then(msg => {
            msg.edit(`URL Generated! \n${baseurl}${sauce}`);
        });
        return;
    }
}