const readline = require ('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question('How do you line node?', function(answer){
    console.log(`your answer is ${answer}`);
});