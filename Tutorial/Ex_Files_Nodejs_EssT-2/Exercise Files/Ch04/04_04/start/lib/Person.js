var util = require('util');
var EventEmitter = require('events').EventEmitter;

function Person(name){
    this.name = name;
};

util.inherits(Person, EventEmitter);

module.exports = Person;