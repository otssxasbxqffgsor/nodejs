var SharedStrategy = require('./ShareStrategy');

class TextStrategy extends SharedStrategy{

    constructor(){
        super('Text Strategy');
    }
    share(){
        console.log(`${this.description} sharing ...`);
    }
    edit(){
        console.log(`${this.description} editting ...`);
    }
}
module.exports = TextStrategy;