const Strategy = require('./Strategy')
class Social extends Strategy {

    constructor(strategy){
        super();
        this.strategy = strategy;
    }
    share(){
        console.log('Socializing...');
    }
}
module.exports = Social;