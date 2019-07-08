var fs = require('fs');
var http = require('http');
var mediaObject = '../start/powder-day.mp4';

http.createServer((req, res) => {
    fs.readFile(
        mediaObject, (error, media) =>{
            if (error){
                console.log(` error reading file ${error.message}`);
            }
            res.writeHead(200, {'Content-Type':'video/mp4'});
            res.end(media);
        }
    );
}).listen(3000, ()=>{
    console.log('buffer = http://localhost:3000');
});
