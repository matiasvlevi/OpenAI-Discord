const { SlashCommandBuilder } = require("discord.js");
const gpt3 = require("../utils/gpt3");
const logger = require('../utils/logger.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName("gpt-3")
        .setDescription("Talk to the bot")
        .addStringOption((option) =>
            option
                .setName("prompt")
                .setDescription("The prompt to talk to the bot")
                .setRequired(true)
        ),
    async execute(interaction) {
        const prompt = interaction.options.getString("prompt");
        const userUsername = interaction.user.username;
        const userId = interaction.user.id;
        const botUsername = interaction.client.user.username;
        
        await interaction.deferReply();

        const gptResponse = await gpt3(userUsername, prompt);

        // logs the conversation to logs folder
        logger.message(userUsername, prompt);
        logger.message(botUsername, gptResponse);

        if (gptResponse.length == 0) {
            await interaction.editReply("...");
        } else {
            await interaction.editReply(
                `> <@${userId}>: ${prompt}\n\n${gptResponse}`
            );
        }
    },
};