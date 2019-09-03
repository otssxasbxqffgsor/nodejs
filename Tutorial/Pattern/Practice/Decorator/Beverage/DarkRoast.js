const Beverage = require('./Beverage');
class DarkRoast extends Beverage{
    constroctor(){

    }
    description(){
        return 'Darkroast Coffee';
    }
    cost(){
        return .99;
    }
}
module.exports = DarkRoast;