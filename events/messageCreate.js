const { Events } = require("discord.js");
const { REPLY_TO_ALL } = require('../config.js');
const gpt3 = require("../utils/gpt3");
const logger = require('../utils/logger.js');

module.exports = {
    name: Events.MessageCreate,
    async execute(message) {
        if (!REPLY_TO_ALL) return;
        if (message.author.bot) return;

        const prompt = message.content;
        const userUsername = message.author.username;
        const botUsername = message.client.user.username;

        const gptResponse = await gpt3(userUsername, prompt);
        logger.message(userUsername, prompt);
        logger.message(botUsername, gptResponse);

        if (gptResponse.length == 0) {
            await message.channel.send("I don't know what to say :(");
        } else {
            await message.channel.send(gptResponse);
        }
    },
};