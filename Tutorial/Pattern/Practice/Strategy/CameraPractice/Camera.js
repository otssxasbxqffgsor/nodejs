const ICamera = require('./ICamera');
class Camera extends ICamera{
    constructor(camera){
        super();
        this.camera = camera || null;
        this.strategy = null;
    }
    setStrategy(strategy){
        this.strategy = strategy;
    }
    take(){
        console.log('Taking ... ');
    };
    edit(){
        console.log('Editing ... ');
    };
    save(){
        console.log('Saving ... ');
    };
    share(){
        this.strategy.share();
    };
}
module.exports = Camera;