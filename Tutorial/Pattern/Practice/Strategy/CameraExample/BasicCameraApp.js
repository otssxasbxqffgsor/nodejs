var PhoneCameraApp = require('./PhoneCameraApp');
class BasicCameraApp extends PhoneCameraApp{
    constructor(){
        super('Basic Camera App');
    }
    edit(){
        console.log(`${this.description} is editing...`);
    }
}
module.exports = BasicCameraApp;