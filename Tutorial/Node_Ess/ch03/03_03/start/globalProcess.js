const grab = function flag(){
    let indexAfterFlag = process.argv.indexOf(flag) + 1;
    return process.argv[indexAfterFlag];
};

const greeting = grab('--greeting');
const user = grab ('--user');

console.log(`${greeting} ${user}`);