const writeFile =  require('fs').writeFile;
const { promisify } = require('util');

let writeFilePromisified = promisify(writeFile);

writeFilePromisified('sample.txt', 'this is a promisified sample')
.then(()=> {console.log(`successfull ${back}`)})
.then(42)
.catch((error) => { error ? console.log(`catch ${error}`) : console.log('catch')})
.finally(console.log('END'));


