const { Client, Intents } = require('discord.js');
const {DISCORD_TOKEN} = require('./config.js');
const gpt3 = require('./gpt3.js');
const logger = require('./logger.js');

const isBot = (author, bot) => (author.username === bot.user.username);

// Create discord bot
const bot = new Client({
    intents: [Intents.FLAGS.GUILDS] 
});

// Bot login event
let bot_name;
bot.on('ready', async () => {
    logger.login(bot.user.tag);
    bot_name = bot.user.username;
});

// Bot message event
bot.on('message', async (msg)=>{
    if (isBot(msg.author, bot)) return;

    const gptResponse = await gpt3(msg.author.username, msg.content);
    if (gptResponse.length == 0) gptResponse = '...';

    logger.message(msg.author.username, msg.content);
    logger.message(bot_name, gptResponse);        

    msg.channel.send(gptResponse);
})

bot.login(DISCORD_TOKEN);