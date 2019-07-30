class Logger{
 constructor()   {
     this.logs = [];
 }
 get count(){
     return this.logs.length;
 }
 log(message){
     const timeStamp = new Date().toISOString();
     this.logs.push({message, timeStamp});
     console.log(`${timeStamp} - ${message}`);
 }
}
module.exports = Logger;