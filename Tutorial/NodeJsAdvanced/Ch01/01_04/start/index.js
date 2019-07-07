var fs = require ('fs');
var { promisify } = require('util');
var writeFile = promisify(fs.writeFile);
writeFile('sample.txt', 'this is a sample file')
    .then( ()=>{ console.log('file successfully created!'); })
    .catch( (error)=>{ console.log('error creating file'); });
/*
var delay = (seconds, callback) => {
    if (seconds > 3) {
        callback(new Error(`${seconds} seconds it too long!`));
    } else {
        setTimeout(() =>
            callback(null, `the ${seconds} second delay is over.`),
            seconds
        );
    }
}

delay(2, (error, message) => {
    if (error) {
        console.log(error.message);
    } else {
        console.log(message);
    }
});
*/