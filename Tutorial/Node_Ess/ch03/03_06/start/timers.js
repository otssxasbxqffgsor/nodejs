const waiteTime = 3000;
console.log(`setting a ${waiteTime / 1000} second delay`);
const timerFinished = () => console.log('done');
setTimeout(timerFinished, waiteTime);