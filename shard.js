const { ShardingManager } = require("discord.js");
const manager = new ShardingManager("./app.js", { token: process.env.token });

manager.spawn();
manager.on("launch", shard => console.log(`Shard #${shard.id} launched successfully!`));
manager.on("message", (shard, message) => console.log(`Message sent from ${shard.id} successfully recieved! \nThe message was: ${message}`));