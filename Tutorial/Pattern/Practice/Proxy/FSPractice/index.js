const path = require('path');
const FSProxy = require('./FSProxy');
const fsProxy = new FSProxy();
let mdPath = [];
mdPath.push(path.join(__dirname, 'rf.md'));
mdPath.push(path.join(__dirname, 'Readme.txt'));
mdPath.push(path.join(__dirname, 'Readme.md'));

let callBack = (error, contents) => {
    if(error){
        console.log(error);
        // process.exit(0);
    }
    else {
        console.log('==== Reading file =====');
        console.log(contents);
        console.log('==== END OF Reading ===== \n');
    }
}
mdPath.forEach(mdpath => {
    console.log(`=== Executing: ${mdPath} === \n \n`);
    fsProxy.readFile(mdpath, 'UTF-8', callBack);   
    console.log(`=== END of Loop ======= \n \n`); 
});
