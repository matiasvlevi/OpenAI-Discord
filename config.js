const config = require('dotenv').config().parsed;

if (config.CONTEXT === undefined) config.CONTEXT = "";
else config.CONTEXT += ':';

if (config.AI_NAME === undefined) config.AI_NAME = "AI";

if (config.REPLY_TO_ALL !== undefined) config.REPLY_TO_ALL = config.REPLY_TO_ALL.toLowerCase() === 'true';

module.exports = config;