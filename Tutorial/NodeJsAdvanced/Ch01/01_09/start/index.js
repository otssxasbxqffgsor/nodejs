// var logUpdate = require('log-update');
// var toX = () => 'X';

var delay = (seconds) => new Promise((resolves) => {
    setTimeout(resolves, seconds*1000);
});

var tasks = [
  delay(4),
  delay(6),
  delay(4),
  delay(3),
  delay(5),
  delay(7),
  delay(9),
  delay(10),
  delay(3),
  delay(5),
];

class PromiseQueue{
  constructor(promises = [], currentTasksCount = 1){
    this.currentTasks = currentTasksCount;
    this.total = promises.length;
    this.todoList = promises;
    this.runningList = [];
    this.completeList = [];
  }
  get runAnother (){
    return (this.runningList < this.currentTasks && this.todoList.length);
  }
  graphTaks(){
    var {todoList, runningList, completeList } = this;
    console.log(
      `
      toDoList: [${todoList.length}]
      runningList: [${runningList.length}]
      completeList: [${completeList.length}]
      `
    );
  }
  run(){
    while (this.runAnother){
      var promise = this.todoList.shift();
      promise.then(()=>{ 
        this.completeList.push(this.runningList.shift());
        this.graphTaks();
        this.run();
      });
      this.runningList.push(promise);
      this.graphTaks();
    }
  }
}

var delayQueue = new PromiseQueue(tasks, 2);
delayQueue.run();