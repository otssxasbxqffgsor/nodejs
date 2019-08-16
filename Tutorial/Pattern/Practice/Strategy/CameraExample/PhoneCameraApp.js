var IPhoneCameraApp = require('./IPhoneCameraApp');

class PhoneCameraApp extends IPhoneCameraApp{
    constructor(description){
        super();
        this.description = description || 'Phone Camera App';
        this.sharingStrategy = null;    
    }
    // abstract driven class can overwrite these
    setSharedStrategy(sharingStrategy){
        this.sharingStrategy = sharingStrategy || null;
        console.log(`Setting strategy:${this.sharingStrategy.description}`);
    }
    share(){
        console.log(`${this.description} sharing photo...`);
        this.sharingStrategy.share();
    }
    take(){
        console.log(`${this.description} taking photo...`);
      //  this.sharingStrategy.take();
    }
    save(){
        console.log(`${this.description} is saving photo...`);
      //  this.sharingStrategy.save();
    }
    // Abstract Method to be implemented by drivern methods
    edit(){}
}
module.exports = PhoneCameraApp;