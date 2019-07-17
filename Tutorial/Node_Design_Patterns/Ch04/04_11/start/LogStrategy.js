var path = require('path');
var {appendFile} = require('fs');
var morse = require('morse');

class LogStrategy{
    static toMorseCode(timestamep, message){
        var morseCode = morse.encode(message);
        console.log(morseCode);
    }
    static noDate(timestamep, message){
        console.log(message);
    }
    static toFile (timestamep, message){
        var fileName = path.join(__dirname, 'logs.txt');
        appendFile(fileName, `${timestamep} - ${message} \n`, error =>{
            if(error){
                console.log('Error writing to file');
                console.error(error);
            }
        });

    }
    static toConsole(timestamep, message){
        console.log(`${timestamep} - ${message}`);
    }
}
module.exports = LogStrategy;