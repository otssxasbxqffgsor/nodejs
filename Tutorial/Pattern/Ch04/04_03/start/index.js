var conductor = require('./condoctor');
var { ExitCommand, CreateCommand } = require('./commands');

var { createInterface} = require('readline');
var rl = createInterface({
    input: process.stdin,
    output:process.stdout
});

console.log(`create <file> <text> | exit`);
rl.prompt();
rl.on('line', input =>{
    // a logic to extract string from prompt 
    var [commandText, ...remaining] = input.split(' ');
    var [ fileName, ...fileText] = remaining;
    var text = fileText.join(' ');

    switch(commandText){
        case 'exit':
            conductor.run(new ExitCommand());
            break;
        case 'create':
            conductor.run(new CreateCommand());
            break;
        default:
            console.log(`${commandText} command not found!`);
    }
    rl.prompt();
})