var fs = require('fs');

fs.readdirSync('./logs').forEach(function(fileName){
    fs.unlinkSync('./logs'+fileName);
});

fs.rmdirSync('./log', function(err){
    if (err){
        throw err;
    } else {
        console.log('Logs directory removed');
    }
});