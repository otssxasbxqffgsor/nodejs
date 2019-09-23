IFSProxy = require('./IFSProxy.js');
const FS = require('fs');
class FSProxy extends IFSProxy{
    constructor(){
        super();
        this.fs = FS;

    }
    readFile(path, format, callback){
        if (!path.match(/.md$|.MD$/)) {
            return callback(new Error(`Can only read makrdown files.: ${path}`))
        }
        else if(!this.fs.existsSync(path)){
            return callback(new Error(`File path does not exits: ${path}`));
        }
        else {
            this.fs.readFile(path,format, (error, contents)=>{
                if(error){
                    console.error(error);
                    return callback(error);
                }
                else {
                    return callback(null, contents);
                }
            })
        }
    }
    writeFile(){

    }
    log(text){
        console.log(`FSProxy Logs: ${text}`);
    }
}

module.exports = FSProxy;