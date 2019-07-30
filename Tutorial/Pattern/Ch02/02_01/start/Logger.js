class Logger{
    constructor(){
        this.logs = [];
    }
    get count(){
        return this.logs.length;
    }
    log(message){
        const timestamp = new Date().toISOString();
        this.logs.push({message, timestamp});
        console.log(`${timestamp} - ${message} - Count[${this.logs.length}]`);
    }
}
module.exports = Logger;