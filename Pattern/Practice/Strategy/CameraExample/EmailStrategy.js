var ShareStrategy = require('./ShareStrategy');
class EmailStrategy extends ShareStrategy{
    constructor(){
        super('Email Strategy');
    }
    share(){
        console.log(`${this.description} sharring ...`);
    }
    edit(){
        console.log(`${this.description} editing ... `);
    }
}
module.exports = EmailStrategy;