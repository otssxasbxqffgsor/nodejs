var Pizza = require('./Pizza');
class ThikPizza extends Pizza{
    constructor(){
        super()
        this.description = "Thik Pizza";
    }
    cost(){
        return 13;
    }
}

module.exports = ThikPizza;