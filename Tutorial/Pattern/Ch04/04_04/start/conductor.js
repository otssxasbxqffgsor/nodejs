class Conductor{
 
    run(command){
        console.log(`Executing command : ${command.name}`);
    }
}
module.exports = new Conductor();