var BasicCameraApp = require('./BasicCameraApp');
var TextStrategy = require('./TextStrategy');
var EmailStrategy = require('./EmailStrategy');
let basicCamerApp = new BasicCameraApp();
let textStrategy = new TextStrategy();
let emailStrategy = new EmailStrategy();
basicCamerApp.setSharedStrategy(textStrategy);
basicCamerApp.take();
basicCamerApp.share();

basicCamerApp.setSharedStrategy(emailStrategy);
basicCamerApp.take();
basicCamerApp.share();