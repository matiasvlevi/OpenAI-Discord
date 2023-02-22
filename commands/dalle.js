const { SlashCommandBuilder } = require("discord.js");
const dalle = require("../utils/dalle");
const logger = require('../utils/logger.js');
const { EmbedBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName("dalle")
        .setDescription("Generate an image from text")
        .addStringOption((option) =>
            option
                .setName("prompt")
                .setDescription("The prompt to generate image from")
                .setRequired(true)
        ),
    async execute(interaction) {
        const prompt = interaction.options.getString("prompt");
        const userUsername = interaction.user.username;
        const botUsername = interaction.client.user.username;
        
        await interaction.deferReply();

        const dalleResponse = await dalle(prompt);

        // logs the image url to logs folder
        logger.message(userUsername, prompt);
        logger.message(botUsername, dalleResponse);

        const embed = new EmbedBuilder().setImage(dalleResponse);

        await interaction.editReply({
            content: `> ${prompt}`,
            embeds: [embed],
        }
        );
    },
};