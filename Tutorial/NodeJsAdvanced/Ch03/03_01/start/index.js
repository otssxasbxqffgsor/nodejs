const { createServer } = require('http');
const { stat, createReadStream } = require('fs');
const { promisify } = require('util');
const fileName = '../../powder-day.mp4';
const statInfo = promisify(stat);


createServer(async (req, res) => {
    const { size } = await statInfo(fileName);
  res.writeHead(200, {
    'Content-Length': size,
    'Content-Type': 'video/mp4'
  });
  createReadStream(fileName).pipe(res);
}).listen(3000, () => console.log('server running - 3000'));


process.stdout.on('data',(data)=>{
    if (data.toString().trim() === "exit"){
        process.exit(1);
    }
    console.log (data.toString().trim());
});