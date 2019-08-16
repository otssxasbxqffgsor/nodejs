var IPhoneCameraApp = require('./IPhoneCameraApp');
class PlusCameraApp extends IPhoneCameraApp{
    constructor(description){
        super();
        this.description = description || 'Phone Plus Camera App';
        this.sharingStrategy = null;
    }
    setSharedStrategy(sharingStrategy){
        this.sharingStrategy = sharingStrategy || null;
        console.log(`Setting Strategy: ${this.sharingStrategy.description}`);
    }
    share(){
        console.log(`${this.description} sharring photo ...`);
        this.sharingStrategy.share();
    }
    take(){
        console.log(`${this.description} taking photo ...`);
    }
    save(){
        console.log(`${this.description} is saving photo ...`);
    }
    // abstract method to be implemented by drivern methods
    edit(){};
}
module.exports = PlusCameraApp;