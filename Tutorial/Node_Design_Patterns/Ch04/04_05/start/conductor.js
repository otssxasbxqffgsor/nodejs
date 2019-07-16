class Conductor {

    constructor() {
        this.history = [];
        this.undone = [];
    }

    run(command) {
        console.log(`Executing command: ${command.name}`);
        command.execute();
        this.history.push(command);
    }
    printHistory(){
        history.forEach(element => {
            console.log(element.name);
        });
    }
    undo(){
        var command = this.history.pop();
        console.log(`undo ${command}`);
        command.undo();
        this.undone.push(command);
    }
    redo(){
        var command = this.undone.pop();
        console.log(`redo ${command.name} `);
        command.execute();
        this.history.push(command);
    }

}

module.exports = new Conductor();
