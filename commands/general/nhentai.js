module.exports = {
    config: {
        name: "nhentai",
        aliases: [],
        description: "A command the generates a random nhentai link and sends it in chat",
        usage: "",
        category: "general"
    },
    run: async (client, message, args) => {
        let baseurl = "https://nhentai.net/g/";
        let sauce = Math.floor(Math.random() * 300000) + 1;
        message.channel.send("Generating link...").then(msg => {
            msg.edit(`URL Generated! \n${baseurl}${sauce}`);
        });
        return;
    }
}