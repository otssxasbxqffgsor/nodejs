var express = require('express');

// instance of express app
var app =  express();

// middle ware
app.use(function(req, res, next){
    console.log(`${req.method} requested url ${req.url}` );
    // send response back
    next();
});

// Define static folder 
app.use(express.static('./public'));

// define serving port 
app.listen(3000);
console.log('app is running on 3000');

// make it exportable to be consumed on other files
module.exports = app;
