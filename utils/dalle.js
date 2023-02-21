const { OPENAI_TOKEN } = require('../config.js');

module.exports = async function(prompt) {
    const bodyParams = {
        prompt,
        n: 1,
        size: "1024x1024",
        response_format: "url"
    }
    const response = await fetch("https://api.openai.com/v1/images/generations", {
        method: "POST",
        headers: {
           'Accept': 'application/json',
           'Content-type': 'application/json',
           'Authorization': `Bearer ${OPENAI_TOKEN}`
        },
        body: JSON.stringify(bodyParams)
     }).then(function(result) {
        if (result.ok) {
            return result.json();
        }
    });;

    return response.data[0].url;
}