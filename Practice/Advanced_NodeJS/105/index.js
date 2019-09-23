const { promisify } = require('util');
var { fs, writeFile, unlink} = require('fs');

const beep = () => process.stdout.write("beep\n");

writeFile = promisify(writeFile);
unlink = promisify(unlink);


const delay = (seconds) => new Promise((resolves, rejects)=> { 
    setTimeout(()=>{ 
        console.log('done'); 
        resolves('completed');
    }, seconds*1000)
});

delay(1)
.then(()=> console.log('then'))
.catch(()=>console.log('CATCH'))
.finally(()=> console.log('finally'));

const doStuffSequentially = () => Promise.resolve()
.then(() => console.log('starting'))
.then(() => delay(1))
.then(() => 'waiting')
.then(console.log)
.then(() => delay(2))
.then(() => writeFile('file.txt', 'Sample File...'))
.then(beep)
.then(() => 'file.txt created')
.then(console.log)
.then(() => delay(3))
.then(() => unlink('file.txt'))
.then(beep)
.then(() => 'file.txt removed')
.then(console.log)
.catch(console.error);

doStuffSequentially()
  .then(()=> {
        console.log(`This process is pid ${process.pid}`);
    })
  .then(() => console.log('again again!!!'))
  .then(() => doStuffSequentially())
  .then(() => console.log('enough already...'))
  .then(() => doStuffSequentially())
  .catch(console.log('Error..'))
  .finally(()=> {
    console.log(`This process is pid ${process.pid}`);
    });


