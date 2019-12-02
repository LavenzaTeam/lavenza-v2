const { Client, Collection } = require("discord.js");
const client = new Client();

["commands", "aliases"].forEach(x => client[x] = new Collection());
["command", "event"].forEach(x => require(`./handlers/${x}`)(client));

client.login("NjM5OTg4MTk0MjI5ODc4ODEw.XdtqWA.Wwhl3iGEpxsL_QGfUZi3SebdO_c");