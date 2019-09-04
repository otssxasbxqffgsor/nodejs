const Strategy = require('./Strategy')
class Email extends Strategy {

    constructor(strategy){
        super();
        this.strategy = strategy;
    }
    share(){
        console.log('Emailing...');
    }
}
module.exports = Email;