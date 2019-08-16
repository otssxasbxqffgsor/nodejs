var BasicCameraApp = require('./BasicCameraApp');
var TextStrategy = require('./TextStrategy');
var EmailStrategy = require('./EmailStrategy');
var PlusCameraApp = require('./PlusCameraApp');
let basicCamerApp = new BasicCameraApp();
let textStrategy = new TextStrategy();
let emailStrategy = new EmailStrategy();
basicCamerApp.setSharedStrategy(textStrategy);
basicCamerApp.take();
basicCamerApp.share();

basicCamerApp.setSharedStrategy(emailStrategy);
basicCamerApp.take();
basicCamerApp.share();

let plusCameraApp = new PlusCameraApp();
plusCameraApp.setSharedStrategy(textStrategy);
plusCameraApp.take();
plusCameraApp.share();

plusCameraApp.setSharedStrategy(emailStrategy);
plusCameraApp.take();
plusCameraApp.share();