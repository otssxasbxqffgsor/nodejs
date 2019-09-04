const Strategy = require('./Strategy')
class Text extends Strategy {

    constructor(strategy){
        super();
        this.strategy = strategy;
    }
    share(){
        console.log('Texting...');
    }
}
module.exports = Text;