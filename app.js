const { Client, Collection } = require("discord.js");
const client = new Client();

["commands", "aliases"].forEach(x => client[x] = new Collection());
["command", "event"].forEach(x => require(`./handlers/${x}`)(client));

//twitter integration
//twitter configuration
const Twitter = require("twit");
const twitterConf = {
    consumer_key: process.env.TWITTER_CONSUMER_KEY,
    consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
    access_token: process.env.TWITTER_ACCESS_TOKEN_KEY,
    access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET,
}
const twitterClient = new Twitter(twitterConf);
const destinationChannelID = "705674906058096691"
//end twitter configuration

const stream = twitterClient.stream("statuses/filter", {
    follow: '1233204739162169345',
});

stream.on("tweet", tweet => {
    const twitterMessage = `https://twitter.com/${tweet.user.screen_name}/status/${tweet.id_str}`
    client.channels.cache.get(destinationChannelID).send(twitterMessage);
})
//end twitter integration

client.login(process.env.DISCORD_TOKEN);