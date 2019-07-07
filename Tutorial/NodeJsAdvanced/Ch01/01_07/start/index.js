var fs = require('fs');
var { promisify } = require('util');
var writeFile = promisify(fs.writeFile);
var unlink = promisify(fs.unlink);
var readdir = promisify(fs.readdir);
var beep = () => process.stdout.write("\x07");
var delay = (seconds) => new Promise((resolves) => {
    console.log(`delay for ${seconds*1000} `);
    setTimeout(resolves, seconds*1000);
});

Promise.race([
    delay(5).then(()=>console.log('end 5')),
    delay(2).then(()=>console.log('end 2')),
    delay(3).then(()=>console.log('end 3')),
    delay(4).then(()=>console.log('end 4'))
  ]).then(() => readdir(__dirname))
    .then(console.log);
  