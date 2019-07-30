class fsProxy {
    constructor(fs){
        this.fs = fs;
    }
    readFile(path, format, callBack){
        if(!path.match(/.md$|.MD$/)){
            return callBack(new Error('Can only read Markdown files.'));
        } else{
            this.fs.readFile(path, format, (error, contents)=>{
                if(error){
                    console.error(error);
                    return callBack(error);
                }
                return callBack(null, contents);
            })
        }
    }
}
module.exports = fsProxy;