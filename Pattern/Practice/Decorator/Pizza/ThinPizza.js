var Pizza = require('./Pizza')

class ThinPizza extends Pizza{
    constructor(){
        super();
        this.description = "Think Pizza"
    }
    getDescription(){
        return this.description;
    }

    cost(){
        return .29
    }
}
module.exports  = ThinPizza;