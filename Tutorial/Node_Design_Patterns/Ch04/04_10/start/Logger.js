class Logger{

    constructor(){
        this.logs[];
    }
    get counts(){
        return this.logs.length;
    }
    log (message) {
        const timestamp = new Date().toISOString();
        this.logs.push({message, timestamp});
        console.log(`${timestamp} - ${message}`);
    }
}
module.exports = new Logger();