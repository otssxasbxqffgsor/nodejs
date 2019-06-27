const fs = require ('fs');

const writeStream = fs.createWriteStream("./assets/myFile.txt", "UTF-8");
const readStream = fs.createReadStream("./assets/lorum-ipsum.md", "UTF-8");

process.stdin.on('data', data => {
    writeStream.write(data);
});

// pipe readStream to writeStream
readStream.pipe(writeStream);