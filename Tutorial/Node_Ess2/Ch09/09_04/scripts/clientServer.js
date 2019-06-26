var ws = new WebSocket("ws://localhost:3000");

var logData = [];

ws.onopen = function() {
	setTitle("Connected to Cyber Chat");
};

ws.onclose = function() {
	setTitle("DISCONNECTED");
};

ws.onmessage = function(payload) {
    printMessage(payload.data);
    
};

document.forms[0].onsubmit = function () {
    var input = document.getElementById('message');
    ws.send(input.value);
    logData.push(input.value);
    printLog(logData);
    input.value = '';
};

function setTitle(title) {
    document.querySelector('h1').innerHTML = title;
}

function printMessage(message) {
    var p = document.createElement('p');
    p.innerText = message;
    document.querySelector('div.messages').appendChild(p);
}

function printLog(logData){
    var p = document.createElement('li');

    logData.forEach(element => {
        p.innerHTML+= `${'<div>'+  element +'</div>' }`;
    });

    // p.innerText= logData.toLocaleString();
    document.querySelector('.log').appendChild(p);
    console.log(`${logData.toLocaleString() }`);
}