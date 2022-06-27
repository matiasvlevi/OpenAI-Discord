const {appendFileSync} = require('fs');
const {LOG_PATH} = require('./config.js');

class Logger {
    constructor() {}   
    static time() {
        let time = new Date();
        return `${time.getHours()}:${time.getMinutes()}`
    }
    static date() {
        let date = new Date();
        return `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`;
    }
    log(content) {
        appendFileSync(
            `${LOG_PATH}/log-${Logger.date()}.log`,
            `${content}\n`
        );
        console.log(content);
    }
    message(username, content) {
        this.log(`[\x1b[32m${username}\x1b[0m]: ${content}`);
    }
    login(username) {
        this.log(`Logged in as [\x1b[32m${username}\x1b[0m]`);
    }
}

module.exports = new Logger();