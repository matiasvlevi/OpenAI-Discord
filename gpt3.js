const OpenAI = require('openai-api');
const {
    OPENAI_TOKEN,
    AI_NAME,
    CONTEXT,
    GPT_ENGINE,
    GPT_MAX_TOKENS,
    GPT_TEMPERATURE,
    GPT_TOP_P,
    GPT_PRESENCE_PENALITY,
    GPT_FREQUENCY_PENALITY,
} = require('./config.js');

const openai = new OpenAI(OPENAI_TOKEN);

const toConvo = (username, message) => `${CONTEXT}\n${username}:${message}\n${AI_NAME}:`;
const fromConvo = (username, text) => text.split(`\n${username}:`)[0];

module.exports = async function(username, message, parse=toConvo) {
    const gptResponse = await openai.complete({
        engine: GPT_ENGINE,
        prompt: parse(username, message),
        maxTokens: parseInt(GPT_MAX_TOKENS),
        temperature: parseFloat(GPT_TEMPERATURE),
        topP: parseFloat(GPT_TOP_P),
        presencePenalty: parseFloat(GPT_PRESENCE_PENALITY),
        frequencyPenalty: parseFloat(GPT_FREQUENCY_PENALITY),
        bestOf: 1,
        n: 1,
        stream: false,
        stop: [`${AI_NAME}:`,`${username}:`]
    });
    console.log(gptResponse.data.choices[0].text);
    return fromConvo(username,gptResponse.data.choices[0].text);
};