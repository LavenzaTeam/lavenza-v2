const { prefix } = require("../../config.json");

module.exports = async (client) => {
    console.log(`${client.user.username} is online!`);
}