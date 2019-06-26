var bodyParser = require("body-parser");
var WebSocketServer = require('ws').Server;
var wss = new WebSocketServer({ port: 3000});

// while connected to server instance
wss.on('connection', function(ws){

    ws.on('message', function(message){

        if (message === 'exit'){
            ws.close();
        }
        // broadcast message
        wss.clients.forEach(function(client){
            client.send(message);
        });
    });

    // Initial event
    ws.send('Welcome to chat app');
});