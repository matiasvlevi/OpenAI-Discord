# GPT-3 Discord bot

Talk to gpt-3 through discord!

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

finally, make sure to enable the message content intent in your Discord bot's settings on the Discord developer portal

<br/>

### Run

```
npm run start
```
