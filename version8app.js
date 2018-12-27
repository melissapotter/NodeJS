var events = require('events');
var util = require('util');

var Person = function(name){
    this.name =name;
};

util.inherits(Person, events.EventEmitter);

var james = new Person('james');
var mary = new Person('mary');
var joe= new Person('joe');
var people =[james, mary, joe];

people.forEach(function(person){
   person.on('speak', function(mssg){
       console.log(person.name + ' said: ' + mssg);
   });
});

james.emit('speak', 'hello everyone');
joe.emit('speak', 'I want pizza');

// var myEmitter = new events.EventEmitter();

// myEmitter.on('someEvent', function(mssg){
//   console.log(mssg);  
// });

// myEmitter.emit('someEvent', 'the event was emitted');
