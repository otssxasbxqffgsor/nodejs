var { writeFile } = require('fs');
var path = require('path');

class ExitCommand {
    get name(){
        return 'exit ... ';
    }
    execute(){
        process.exit(0);
    }
}
class CreateCommand{
    constructor(fileName, text){
        this.fileName = fileName;
        this.text = text;
        this.fullPath = path.join(__dirname, fileName);
    }
    get name(){
        return `creating ${this.fileName}`;
    }
    execute(){
        writeFile(this.fullPath, this.text, f=>f);
    }
}
module.exports = {ExitCommand, CreateCommand};