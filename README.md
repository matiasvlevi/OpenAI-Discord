# GPT-3 Discord bot

Talk to gpt-3 through discord! This bot uses the [OpenAI API](https://openai.com/) to generate text from a prompt.

<br/>

### Setup

Install dependencies

```
npm install
```

create a `.env` file with the following information:

```
LOG_PATH=path/to/logs

OPENAI_TOKEN=YOUR_API_KEY
DISCORD_TOKEN=YOUR_DISCORD_APP_KEY
DISCORD_CLIENT_ID=YOUR_DISCORD_CLIENT_ID

AI_NAME=AI

GPT_ENGINE=text-davinci-003
GPT_MAX_TOKENS=256
GPT_TEMPERATURE=0.3
GPT_TOP_P=0.9
GPT_PRESENCE_PENALITY=0.3
GPT_FREQUENCY_PENALITY=0.6
```

you can add a context to the conversation by adding

```
CONTEXT="AI is sarcastic"
```

then, run `npm run deploy` to deploy the discord bot commands

finally, run `npm run start` to start the bot

<br/>

### NPM Scripts

```
npm run deploy # to deploy discord commands
npm run start # to start the bot
```

<br/>

### Usage

```
/gpt-3 <prompt>
```