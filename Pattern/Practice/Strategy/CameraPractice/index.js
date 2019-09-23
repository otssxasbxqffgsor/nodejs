const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


const Text = require('./Text');
const Email = require('./Email');
const Social = require('./Social');
const Camera = require('./Camera');


console.log(`== Type t, e, s, or exit ==`);
rl.on('line',(answer) => {
    let camera = new Camera();
    switch(answer){
        case('t'):
        camera.setStrategy(new Text());
        break;
        case('e'):
        camera.setStrategy(new Email());
        break;
        case('s'):
        camera.setStrategy(new Social());
        break;
        case('exit'):
        console.log(`exiting the app..`);
        rl.close();
        return;
        default:
            camera.setStrategy(new Text());
        }
        camera.take();
        camera.edit();
        camera.save();
        camera.share();
        console.log(`== Type again ...  ==`);
});