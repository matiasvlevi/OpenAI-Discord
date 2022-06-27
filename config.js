const config = require('dotenv').config().parsed;

if (config.CONTEXT === undefined) config.CONTEXT = "";
else config.CONTEXT += ':';

if (config.AI_NAME === undefined) config.AI_NAME = "AI";
if (config.HUMAN_NAME === undefined) config.HUMAN_NAME = "Human";

module.exports = config;