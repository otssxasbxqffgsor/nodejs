class Logger {

    constructor() {
        this.logs = [];
    }

    get count() {
        return this.logs.length;
    }

    log(message) {
        const timestamp = new Date().toISOString();
        this.logs.push({ message, timestamp });
        console.log(`${timestamp} - ${message}`);
    }

}

class SignleTone{
    constructor(){
        if(!SignleTone.instace){
            SignleTone.instace = new Logger;
        }
    }
    getInstance(){
        return SignleTone.instace
    }
}
module.exports = SignleTone;
