var { writeFile } = require('fs');
var path = require('path');
var command = require('./command');
class ExitCommand extends command {
    constructor(){
        super();
    }
    get name(){
        return 'exit command byte!!';
    }
    execute(){
        process.exit(0);
    }
}
class CreateCommand extends command{
    constructor( fileName, text){
        super();
        this.fileName = fileName;
        this.body = text;
        this.fullPath = path.join(__dirname, fileName);
        console.log(text + this.body);
    }
    get name(){
        return `create ${this.fileName}`;
    }
    execute(){
        writeFile(this.fullPath, this.body, f=>f);
    }

}

module.exports = { ExitCommand, CreateCommand };