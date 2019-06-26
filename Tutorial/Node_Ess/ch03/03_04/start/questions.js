const questions = [
    'what is your name?',
    'what would you rather be going?',
    'what is your preferred programming language?'
];

const ask = (i=0)=>{
process.stdout.write(`\n\n\n\n ${questions[i]}`);
};

ask();