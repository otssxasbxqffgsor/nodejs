var path = require('path');
var { appendFile } = require('fs');
var morse = require('morse');

class LogStrategy{
    toMorseCode(time, message){
        console.log(morse.encode(message));
    }
    noDate(time, message){
        console.log(message)
    }
    toFile(time, message){
        var file = path.join(__dirname, 'log.txt');
        appendFile(file, `${time} - ${message} \n`, error =>{
            if(error){
                console.log('Error writing a file');
                console.error(error);
            }
        });
    }
    toConsole(time, message){
        console.log(`${timestamp} - ${message}`);
    }
    static non(){

    }
}

module.exports = new LogStrategy();