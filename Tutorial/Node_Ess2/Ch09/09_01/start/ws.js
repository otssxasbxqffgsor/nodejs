var webSocketServer = require('ws').Server;
var wss = new webSocketServer({port:3000});
wss.on('connection', function(ws){
    ws.send('Welcome to chat');
});
