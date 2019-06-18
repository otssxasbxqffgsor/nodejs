var https = require ('https');
var fs = require('fs');
var options = {
    hostname: 'en.wikipedia.org',
    port : 443,
    path : '/wiki/George_Washington',
    method: 'GET'
};

var req = https.request(options, function (res){ 
var responseBody = ' ';

// Print status code and header
console.log(`server status: ${res.statusCode}`);
console.log(`Response Header: %j`, res.headers);

// Set encoding to UTF-8
res.setEncoding('UTF-8');

// Call back functions 
res.once('data', function (chunk){
    console.log(chunk);
});

res.on('data',function(chunk){
    console.log(`---chunk---  ${ chunk.length}`);
    responseBody += chunk;
});

// end of call
res.on("end", function() {
    fs.writeFile("george-washington.html", responseBody, function(err) {
        if (err) {
            throw err;
        }
        console.log("File Downloaded");
    });
});

});

req.on("error", function(err) {
console.log(`problem with request: ${err.message}`);
});

req.end();

