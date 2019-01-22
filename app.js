var http = require ('http');
var fs = require('fs');
var express = require('express');

var app = express();


app.get('/', function(req, res){
  res.send('this is the homepage')
});

app.get('/contact', function(req, res){
  res.send('this is the contact page')
});

app.listen(3000);




// var server = http.createServer(function(req, res){
//     console.log('request was made: '+ req.url);
//     if(req.url === '/home' || req.url === '/'){
//         res.writeHead(200, {'Content-Type': 'text/html'});
//         fs.createReadStream(__dirname + '/index.html').pipe(res);
//     } else if(req.url === '/contact'){
//         res.writeHead(200, {'Content-Type': 'text/html'});
//         fs.createReadStream(__dirname + '/contact.html').pipe(res);
//     }
//     else if(req.url === '/api/coders'){
//         var coders = [{name: 'mel', age: 25}, {name: 'mario', age: 42}];
//         res.writeHead(200, {'Content-Type': 'application/json'});
//         res.end(JSON.stringify(coders));
//     } 
//     else{
//         res.writeHead(404, {'Content-Type': 'text/html'});
//         fs.createReadStream(__dirname + '/404.html').pipe(res);
//     }
// });

// server.listen(3000, '127.0.0.1');
// console.log('now listening to port 3000');