// Instances of the readline.Interface class are constructed using the readline.createInterface() method. Every instance is associated with a single input Readable stream and a single output Writable stream. The output stream is used to print prompts for user input that arrives on, and is read from, the input stream.
var readline = require ('readline');
var rl = readline.createInterface(process.stdin, process.stdout);

var realPerson = {
name: '',
sayings: []
};

rl.question('what is the name of the person?', function(answer){
    realPerson.name = answer;
    rl.setPrompt(`What would ${realPerson.name} say?`);
    rl.prompt();
});

rl.on('line',function(saying){
    realPerson.sayings.push(saying.trim());
    
    if (saying.toLocaleLowerCase().trim() === 'exit'){
        rl.close();
    }else{
        rl.setPrompt(`What else would ${realPerson.name} say? (exit to leave)`);
        rl.prompt();
    }
});
rl.on('close', function(){
    console.log('%s is a real person that says %j', realPerson.name, realPerson.sayings);
    process.exit();
});