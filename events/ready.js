const { Events } = require("discord.js");
const logger = require('../utils/logger.js');

module.exports = {
    name: Events.ClientReady,
    once: true,
    execute(client) {
        logger.login(client.user.tag);
    },
};