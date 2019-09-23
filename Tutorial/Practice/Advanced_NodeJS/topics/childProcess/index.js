const { execFile, exec } = require('child_process');

exec('cat ~/git/nodejs/Tutorial/Practice/Advanced_NodeJS/topics/childProcess/run.sh',(error, stdout, stderr)=>{
    if (error) {
       console.log(error);
      }
    console.log(stdout);
    console.log(stderr);
})
