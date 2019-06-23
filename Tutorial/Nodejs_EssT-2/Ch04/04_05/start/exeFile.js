var execFile = require ('child_process').execFile;

execFile('git',['--version'], function (err, stdout){
if (err){
    throw err;
}
console.log('Git Version Executed.');
console.log(stdout);
});