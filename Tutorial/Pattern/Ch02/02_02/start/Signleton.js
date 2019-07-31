var logger = require('./Logger');

class Signleton{

    constructor(){
        if(!Signleton.instance){
            Signleton.instace = new logger();
        }
    }
    getInstance(){
        return Signleton.instace;
    }
}
module.exports = new Signleton;